var makeTree = function(){

	var Node = function (data) {
		return {
			data: data,
			parent: parent,
			children: [],
      addChild: addChild,
      traverse: traverse
		};	
	};

	var addChild = function(child_data) {
		child = new Node(child_data);
		this.children.push(child);
		child.parent = this;
		return child;
	};

	var contains = function (child) {
		return !!tree.traverse(child);
	};

	var traverse = function (child) {
		for(var i = 0, len = this.children.length; i < len; i+=1) {
			if (this.children[i].data === child.data) return child;
			if (this.children[i].traverse(child)) return child;
		}
		return false;
	};

  var traverseBreadthFirst = function (node, list) {
    list || (list = tree.children)
    if (node.data === null) return false;
    var nextGen = [];
    for (var i = 0, len = list.length; i < len; i++) {
      if (list[i].data === node.data) { return node; }
      nextGen = nextGen.concat(list[i].children);
    }
    return nextGen.length ? traverseBreadthFirst(node, nextGen) : false;
  };

  var tree = {
    children: [],
    addChild: addChild,
    contains: contains,
    traverse: traverseBreadthFirst
  };
  return tree;
}
