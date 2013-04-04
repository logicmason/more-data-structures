describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  describe("Head", function() {
    it("should not have a head", function() {
      expect(Object.keys(linkedList)).not.toContain("head");
    });
  });

  describe("Insert", function() {
    it("should have a method named 'insert'", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    // it("should put a new node at the head of an empty list", function() {
    //   linkedList.insert("newNode");
    //   expect(linkedList.head.data).toEqual("newNode");
    // });

    // it("should make a new node the tail of an existing list", function() {
    //   linkedList.insert("newNode");
    //   linkedList.insert("newNode2");
    //   linkedList.insert("newNo");
    //   expect(linkedList.tail.data).toEqual("newNo");
    // });
  });

  describe("contains", function() {
    it("should have a method named 'contains'", function() {
      expect(linkedList.contains).toEqual(jasmine.any(Function));
    });

    it("should return false without barfing when called on an empty list", function() {
      expect(linkedList.contains("jkjl")).toEqual(undefined);
    });

    it("should return true when querying for an object just inserted", function() {
      linkedList.insert("bacon");
      expect(linkedList.contains("bacon")).toEqual(true);
    });

    it("should return true when querying for an object inserted a while ago", function() {
      linkedList.insert("foo");
      linkedList.insert("bar");
      linkedList.insert("meaningless data");
      expect(linkedList.contains("bar")).toEqual(true);
    });

    it("should return true for queries of each item of an array of inserted items", function() {
      arr = ["lion", "tiger", "moutain lion", "saber tooth tiger", "leopard"];
      for (var i = 0; i < arr.length; i++) {
        linkedList.insert(arr[i]);
      }
      for (var i = 0; i < arr.length; i++) {
        expect(linkedList.contains(arr[i])).toEqual(true);
      }
    });
  });

  // add more tests here to test the functionality of linkedList
});