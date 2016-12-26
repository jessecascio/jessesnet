// treat like a node module w/ the export command

exports.slowQueries = function() {

	var influx = require('influx');

	var client = influx({
	  // or single-host configuration
	  host : '127.0.0.1', // 127.0.0.1 104.131.188.234
	  port : 8086, // optional, default 8086
	  protocol : 'http', // optional, default 'http'
	  username : 'root', // use root in case custom user was created
	  password : 'root',
	  database : 'querypro'
	});

	// top 10 slowest queries per hour
	var q = "SELECT top(duration,10) from wordpress group by time(1h) limit 240";
	var m = new Array();

	client.query(q, function (err, results) {
		if (typeof results == "undefined") {
			console.log(err);
			return;
		}
		if (m.length == 0) {
			for (var i in results[0]['columns']) {
				m[results[0]['columns'][i]] = i;	
			}
		}

		var hrs = new Array();

		for (var i in results[0]['points']) {
			
			var time = results[0]['points'][i][0];

			if (typeof hrs[time] == "undefined") {
				hrs[time] = new Array();
			}

			//console.log(time);
			//console.log(results[0]['points'][i][1]);

			hrs[time].push(results[0]['points'][i][1]);
		}

		//var first = true;
		var qs = new Array();

		for (var t in hrs) {

			var n = "duration=" + hrs[t].join(" OR duration=");

			/*
			if (first) {
				qs.push("SELECT time, duration, query FROM wordpress WHERE time > "+(t/1000)+"s AND ("+n+")");
				first = false;
			}
			*/

			qs.push("SELECT time, duration, query FROM wordpress WHERE time > "+(t/1000 - 1)+"s AND time < " + (t/1000 + 3600) + "s AND ("+n+")");
			// should be setting precision to s
		}

		var q = qs.shift();

		client.query(q, function (err, results) {
			
			var res = {};

			for (var i in results[0]['points']) {
				var s = String(results[0]['points'][i][0]); // time
				s = s.slice(0,10);

				var t = Number(s);
				t = t - t % 3600;

				if (typeof res[t] == "undefined") {
					res[t] = {};
				}

				res[t][results[0]['points'][i][2]] = results[0]['points'][i][3];
			}

			console.log(res);
			return res;
		});

	});
}

