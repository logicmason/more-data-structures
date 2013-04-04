// Note: don't use an array to do this.
var makeLinkedList = function(){
	var head = null;
	var tail = null;

	var Node = function(data) {
		return {
      insert: insert,
      contains: contains,
			next: null,
			data: data
		}
	};

  var insert = function(itemData) {
  	var newNode = new Node(itemData);
  	head = head || newNode;
  	if (tail) tail.next = newNode;
  	tail = newNode;
  };

  var contains = function(item) {
    var result;
  	var current = head;
  	while (current !== null) {
  		if (current.data === item) {result = true};
  		current = current.next;
  	}
  	return result;
  };

  return Node();
}