
(function () {

	var exports = module.exports = {};

	// lifo queue with a linked list
	var q = require("../../linked-list/js/doubly-linked-list.js");

	var iterable = false;
	var active   = undefined;
	var next     = undefined;

	// O(n)
	exports.iterate = function (tree) {

		var root = tree.tree();

		// starts at root, goes to left, works right
		if (typeof root === "undefined") {
			return false;
		}

		// see if at begining of iteration
		if (!this.iterable) {
			q.reset();
			this.active   = root;
			this.iterable = true;
		} else {
			this.active = this.next;
		}

		// pre order always goes to the left first
		if (typeof this.active.left !== "undefined") {

			// queue the right side
			if (typeof this.active.right !== "undefined") {
				q.push(this.active.right);
			}

			this.next = this.active.left;

		} else if (typeof this.active.right !== "undefined") {
			// queue the left side
			if (typeof this.active.left !== "undefined") {
				q.push(this.active.left);
			}

			this.next = this.active.right;
		} else if(!q.isEmpty()) { 
			this.next = q.pop();
		} else {
			this.iterable = false;
			return false;
		}
		
		return true;

	}

	// O(1)
	exports.read = function () {
		if (this.active === "undefined") {
			return;
		}

		return this.active.data;
	}

})();

