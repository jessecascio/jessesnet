
export default class Algorithm {

  // more modulare / reusable algorithm location
  static brute(points, start, end) {
    var min = -1;

    for (var i=start; i<end; i++) {
      for (var j=0; j<points.length; j++) {
        if (i === j) {
          continue;
        }

        var x = points[i].x - points[j].x;
        var y = points[i].y - points[j].y;

        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    
        if (min === -1 || dist < min) {
          min = dist;
        }
      }
    }

    return min;
  }

}
