var makeBinarySearchTree = function(){
  
	var addChild = function(data) {
		var location = this.root;
		var node = new Node(data);
		var direction = null;
		while (true) {
			if (location === null) { // put node here, set relationship data and return
				if (this.root === null) {
					this.root = node;
				} else {
					location = node;
				}

				if (node.parent && (data < node.parent.data)) node.parent.children.left = node;
				if (node.parent && (data > node.parent.data)) node.parent.children.right = node;
			} else {  // must continue searching
				if (location !== this.root) node.parent = location;
				if (data < location.data) {
					direction = "left";
				} else {
					direction = "right";
				}

				if (location.children[direction] !== null) {
					location = location.children[direction];
					continue;
				} else {
					location.children[direction] = node;
				}
			}
			return this.root;
		}
	};


  var eachNode = function(helper, loc) {
    if (!(loc)) loc = binarySearchTree.root;
    helper(loc);
    if (loc.children.left) eachNode(helper, loc.children.left);
    if (loc.children.right) eachNode(helper, loc.children.right);
  };

  var isBST = function() {
    var result = true;
    eachNode(function(loc){
      if ((loc.children.left) && (loc.children.left.data > loc.data)) result = false;
      if ((loc.children.right) && (loc.children.right.data < loc.data)) result = false;
    });
    return result;
  }

	// get from its node to its children
	// get to its children's children 

	var contains = function() {

	};

	var search = function(dataToFind) {

	};


  var Node = function(data) {
  	return {
      eachNode: eachNode,
  		parent: null,
  		data: data,
  		children: {
				left: null,
				right: null
			}
  	}
  };

  var binarySearchTree = {
  	root: null,
    addChild: addChild,
    contains: contains,
    eachNode: eachNode,
    isBST: isBST,
    search: search
  };
  return binarySearchTree;
}