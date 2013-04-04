describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  describe("Insert", function() {
    it("should have a method named 'insert'", function() {
      expect(hashTable.insert).toEqual(jasmine.any(Function));
    });

    it("it should not return false upon inserting an element into a new hash", function () {
      var response = hashTable.insert("big", "an important adjective");
      expect(response).toEqual(["big", "an important adjective"]);
    });

    it("it should throw an exception upon inserting an element with no key", function() {
      var noKeyInsertCall = function() {
        return hashTable.insert(undefined, "bar");
      }
      expect(noKeyInsertCall).toThrow();
    });

    it("should return the key and value for a key/value pair just added", function() {
      var response = hashTable.insert("key", "value");
      expect(response).toEqual(["key", "value"]);
    });

    it("should be able to add many key value pairs", function () {
      var returns = [];
      for (var i = 0; i < 100; i++) {
        returns.push(hashTable.insert("k"+i, "value"+(100-i)));   
      };
      expect(returns[99]).toEqual(["k99", "value1"]);
    });

  });

  describe("Retrieve", function () {
    it("should have a method named 'retrieve'", function() {
      expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    });

    it("should return undefined upon trying to retrieve from an empty hash", function() {
      expect(hashTable.retrieve("something for nothing")).not.toBeDefined();
    });

    it("should return undefined upon trying to look up a non-existant key", function() {
      hashTable.insert("durian", "a disgusting fruit");
      expect(hashTable.retrieve("spare eraser")).toEqual(undefined);
    });

    it("should return true upon looking up a key that's in the hash", function() {
      hashTable.insert("a", "letter");
      expect(hashTable.retrieve("a")).toEqual("letter");
    });
  });


  // add more tests here to test the functionality of hashTable
});