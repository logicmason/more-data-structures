describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  describe("addChild", function() {

    it("should have a method named 'addChild'", function() {
      expect(tree.addChild).toEqual(jasmine.any(Function));
    });

    it("should not barf when adding a child to an empty children array (tree)", function() {
      tree.addChild("childNode");
      expect(tree.children[0].data).toEqual("childNode");
    });

    it("should have three children after adding three children", function() {
      tree.addChild("childNode");
      tree.addChild("childNode");
      tree.addChild("childNode");
      expect(tree.children.length).toEqual(3);
    });

  });

  describe("contains", function() {
    it("should have a method named 'contains'", function() {
      expect(tree.contains).toEqual(jasmine.any(Function));
    });

    xit("should return false on an empty tree", function () {
      expect(tree.contains("something")).toEqual(false);
    });

    xit("should return false on a tree with one element other than the requested one", function() {
      tree.addChild("the wrong thing");
      expect(tree.contains("something")).toEqual(false);
    });

    it("should return true on a tree containing the queried element as a direct child", function() {
      tree.addChild("foo");
      var b = tree.addChild("bar");
      tree.addChild("baz");
      expect(tree.contains(b)).toEqual(true);
    });

    it("should return true on a tree containing the queried element as a  grandchild", function() {
      var a = tree.addChild("foo");
      var b = tree.addChild("bar");
      var c = tree.addChild("baz");
      var aa = a.addChild("lol");
      var ab = a.addChild("dawg");
      var ac = a.addChild("bear");
      var ba = b.addChild("cat");
      var bb = b.addChild("yo");
      var bc = b.addChild("struggle");
      var ca = c.addChild("consipiracy");
      expect(tree.contains(bb)).toEqual(true);
    });

  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});