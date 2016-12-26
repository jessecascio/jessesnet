
const expect = require("chai").expect;

var Queue = require("./dist/Queue");
var queue = new Queue.default();

describe("queue", function() {
    it ("should accept items", function(){
    	queue.enqueue(1);
    	queue.enqueue(2);
    	queue.enqueue(3);
    });

   	it ("should remove in FIFO", function() {
   		expect(queue.dequeue()).to.equal(1);
   		expect(queue.dequeue()).to.equal(2);
   		expect(queue.dequeue()).to.equal(3);
   	});

    it ("should reset", function () {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.dequeue()).to.equal(1);
      queue.reset();

      expect(queue.dequeue()).to.equal(undefined);
    });

    it ("should track size", function() {
      queue.enqueue(422);
      queue.enqueue(242);
      
      expect(queue.size()).to.equal(2);
      queue.reset();
    });

    it ("should know when empty", function() {
      queue.enqueue(422);
      queue.enqueue(242);
      
      expect(queue.isEmpty()).to.equal(false);

      queue.dequeue();
      expect(queue.isEmpty()).to.equal(false);

      queue.dequeue();
      expect(queue.isEmpty()).to.equal(true);
    });

    it ("should be iteratable", function() {
      queue.enqueue(422); // 0
      queue.enqueue(242); // 1
      queue.enqueue(232); // 2

      var i = 0;

      while (!queue.isEmpty()) {

        switch (i) {
          case 0:
            expect(queue.dequeue()).to.equal(422);
            break;
          case 1:
            expect(queue.dequeue()).to.equal(242);
            break;
          case 2:
            expect(queue.dequeue()).to.equal(232);
            break;
        }

        i++;
      }

    });

    it ("should allow a peek", function () {
      queue.enqueue(232);
      queue.enqueue(328);

      expect(queue.peek()).to.equal(232);
      expect(queue.dequeue()).to.equal(232);

      expect(queue.peek()).to.equal(328);
      expect(queue.dequeue()).to.equal(328);
    });
});
