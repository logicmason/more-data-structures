// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var storage = [];
  var max = 1000;
  for (var i = 0; i < max; i++) {
    storage[i] = [];
  };

  var insert = function (key, value) {
    if(typeof(key) === "undefined") {
      throw("Cannot insert with undefined key!")
    }
    var hashIndex = getIndexBelowMaxForKey(key, max);
    storage[hashIndex].push([key, value]);
    return [key, value];
  };

  var retrieve = function(key) {
    var result; 
    var hashIndex = getIndexBelowMaxForKey(key, max);
    var bucket = storage[hashIndex];
    for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) result = bucket[i][1];
    }
    return result;
  }

  var hashTable = {
    insert: insert,
    retrieve: retrieve
  };
  return hashTable;
};


// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % max);
};
