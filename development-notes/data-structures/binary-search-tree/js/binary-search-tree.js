
(function () {

	var exports = module.exports = {};

	// node template
	var leaf = {
		data:  undefined,
		left:  undefined,
		right: undefined
	};

	var root = undefined;

	/**
	 * private -recursion
	 */
	var insert = function (leaf, node)
	{
		if (node.data < leaf.data) {

			if (typeof leaf.left !== "undefined") {
				return insert(lead.left, node);
			}

			leaf.left = node;
		} else if (node.data > leaf.data) {
			if (typeof leaf.right !== "undefined") {
				return insert(leaf.right, node);
			}

			leaf.right = node;
		} 
		
		return;
	}

	// O(logn)
	exports.push = function(data)
	{
		var node  = Object.create(leaf);
		node.data = data;

		// see if tree has started
		if (typeof this.root === "undefined") {
			this.root = node;
			return;
		}

		// recursion
		insert(this.root, node);
	}

	// 
	exports.remove = function(data)
	{
		// @todo Allow for removal
	}

	// O(1) 
	exports.tree = function ()
	{
		return this.root;
	}

})();

