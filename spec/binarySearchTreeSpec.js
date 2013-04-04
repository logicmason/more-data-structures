describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  describe("addChild", function() {

    it("should have a root", function() {
      expect(binarySearchTree.root).toEqual(null);
    });

    it("should add data to an empty root", function() {
      binarySearchTree.addChild("child");
      expect(binarySearchTree.root.data).not.toEqual(null);
    });

    it("should create a root plus a child when called twice on an empty tree", function() {
      binarySearchTree.addChild(5);
      binarySearchTree.addChild(1);
      expect(binarySearchTree.root.children.left.data).toEqual(1);
    });

    it("should properly place data in a tree", function() {
      var data = [17, 4, 5, 28, 12, 6, 8, 10 , 11];
      for (var i = 0, len = data.length; i < len; i++) {
        binarySearchTree.addChild(data[i]);
      }
      expect(binarySearchTree.root.children.left.children.right.children.right.children.left.children.right.data).toEqual(8);
    });


  });


  it("should have a method named 'search'", function() {
    expect(binarySearchTree.search).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of binarySearchTree
});