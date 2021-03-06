
// Ignore this function
//
if(!Array.prototype.equals) {

  // attach the .equals method to Array's prototype to call it on any array
  //
  Array.prototype.equals = function (array) {

    // if the other array is a falsy value, return
    //
    if (!array) {
      return false;
    }

    // compare lengths - can save a lot of time
    //
    if (this.length != array.length) {
      return false;
    }

    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays
      //
      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays
        //
        if (!this[i].equals(array[i])) {
          return false;
        }
      }
      else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        //
        return false;
      }
    }
    return true;
  };

  // Hide method from for-in loops
  //
  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}
//
// Ignore that function


/*
  A vector is a dynamic array that adjusts size when a certain threshold is met when adding or removing
   items.  It is essentially a _collection_ that behaves somewhat like an array.  There are some
   some differences.  Arrays always allocate enough memory to hold enough elements to fill the full
   capacity.  Then allow random access anywhere within that range at any time.

  Collections are different.  They are not technically an array though they may or may not use one as a
   storage mechanism behind the scenes.  They allow you to append new items to the end, insert new items
   anywhere near items that have already been inserted, and allow random access anywhere within that
   range.

  Collections are dynamic arrays and go by different names and may have slightly different nuanced
   behaviors between them but they are essentially the same idea.

    Dynamic Array    // A self-adjusting array
    Vector           // Not to be confused with a 2D/3D graphics vector
    List             // Not to be confused with a LinkedList
    Set
    Multiset
    Collection
    ArrayList

  The code in this file is a partially implemented vector.  Your objective is to implement the resize
   functionality.  When the vector length has reached capacity, it must double in size.  Complete the
   following tasks:

   1. [ ] .resize() function that expands the storage space
      [ ] .add() function to expand when needed

   2. [ ] .insert() function to expand when needed


   Always:

    [ ] .add(), .insert(), .remove() must maintain the .length field appropriately


  NOTE: Don't worry about edge-cases, error checking, or bounds checking
  NOTE: Some built-in functions are already used.  Do not use any in the code you add
  NOTE: Satisfy all the tests.  Do not modify or comment of them out.

*/

var Vector = function(initialCapacity, maxCapacity) {
  this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
  this.length = 0;

  this.storage = [];
};


Vector.prototype.insert = function(index, value) {
  this.storage.splice(index, 0, value);
};


Vector.prototype.add = function(value) {
  this.storage[this.length++] = value;
};


Vector.prototype.remove = function(index) {
  if (index === undefined || index === null) {
    delete this.storage[this.length];
  }
  else {
    this.storage.splice(index, 1);
  }
};


// x = Vector.get(5) is the same as x = array[5];
//
Vector.prototype.get = function(index) {
  return this.storage[index];
};


// Vector.set(5, value) is the same as array[5] = value;
//
Vector.prototype.set = function(index, value) {
  this.storage[index] = value;
};


Vector.prototype.resize = function() {
  // ...
};


Vector.prototype.toArray = function() {
  var result = [];

  for (var i=0; i<this.length; i++) {
    result[i] = this.storage[i];
  }

  return result;
};


var test = testRunner(19);
test(true, function() {
  var v = new Vector();

  test(false, function() {
    console.log("Initialize");
    console.log("  v.length should be 0: " + (v.length === 0));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
    console.log("  v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
  });

  test(false, function() {
    console.log("Add 3");
    v.add(0);
    v.add(1);
    v.add(2);
    console.log("  v.length should be 3: " + (v.length === 3));
    console.log("  v.toArray() should be [0, 1, 2]: " + (v.toArray().equals([0, 1, 2])));
  });

  test(false, function() {
    console.log("Add 2 more");
    v.add(3);
    v.add(4);
    console.log("  v.length should be 5: " + (v.length === 5));
    console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
  });

  test(true, function() {
    console.log("Insert 1 at v[3]");
    v.insert(3, 2.5);
    console.log("  v.length should be 6: " + (v.length === 6));
    console.log("  v.toArray() should be [0, 1, 2, 2.5, 3, 4]: " + (v.toArray().equals([0, 1, 2, 2.5, 3, 4])));
  });

  test(false, function() {
    console.log("Remove v[3]");
    v.remove(3);
    console.log("  v.length should be 5: " + (v.length === 5));
    console.log("  v.toArray() should be [0, 1, 2, 3, 4]: " + (v.toArray().equals([0, 1, 2, 3, 4])));
  });

  test(false, function() {
    console.log("Set v[2] = 15");
    v.set(2, 15);
    console.log("  v.get(2) should be 15: " + (v.get(2) === 15));
  });

  test(false, function() {
    console.log("Add 3 more");
    v.add(5);
    v.add(6);
    v.add(7);
    console.log("  v.length should be 8: " + (v.length === 8));
    console.log("  v.capacity should be 8: " + (v.capacity === 8));
  });

  test(false, function() {
    console.log("Add 1 more to fill capacity");
    v.add(8);
    console.log("  v.length should be 9: " + (v.length === 9));
    console.log("  v.capacity should be 16: " + (v.capacity === 16));
  });

  test(false, function() {
    console.log("Remove from the end");
    v.remove();
    console.log("  v.toArray() should be [0, 1, 15, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 15, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove v[2]");
    v.remove(2);
    console.log("  v.toArray() should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove the first");
    v.remove(0);
    console.log("  v.toArray() should be [1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([1, 3, 4, 5, 6, 7])));
    console.log("  v.length should be 6: " + (v.length === 6));
    console.log("  v.capacity should be 8: " + (v.capacity === 16));
  });

  test(false, function() {
    console.log("Insert one at the beginning");
    v.insert(0, 0);
    console.log("  Insert 0 at v[0] should be [0, 1, 3, 4, 5, 6, 7]: " + (v.toArray().equals([0, 1, 3, 4, 5, 6, 7])));
  });

  test(false, function() {
    console.log("Remove from beginning");
    v.remove(0);
    console.log("  v.remove(0) should be [1, 3, 4, 5, 6, 7]: " + v.toArray().equals([1, 3, 4, 5, 6, 7]));
  });

  v = new Vector();

  test(false, function() {
    console.log("Test inserting <capacity> items leaves the storage size at <capacity>");
    console.log("  Re-Initialize");
    console.log("    v.length should be 0: " + (v.length === 0));
    console.log("    v.capacity should be 8: " + (v.capacity === 8));
    console.log("    v.storage should be [undefined, ... x8]: " + (v.storage.length === v.capacity));
  });

  test(false, function() {
    console.log("  Add 6");
    v.add(0);
    v.add(1);
    v.add(2);
    v.add(3);
    v.add(4);
    v.add(5);
    console.log("    v.length should be 6: " + (v.length === 6));
    console.log("    v.toArray() should be [0, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1");
    v.insert(1, 6);
    console.log("    v.toArray() should be [0, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 6, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1 More");
    v.insert(1, 7);
    console.log("    v.length should be 8: " + (v.length === 8));
    console.log("    v.storage.length should be 8: " + (v.storage.length === 8));
    console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 4, 5])));
  });

  test(false, function() {
    console.log("  Insert 1 Beyond Initial Capactity of 8");
    v.insert(6, 8);
    console.log("    v.length should be 9: " + (v.length === 9));
    console.log("    v.storage.length should be 16: " + (v.storage.length === 16));
    console.log("    v.toArray() should be [0, 7, 6, 1, 2, 3, 8, 4, 5]: " + (v.toArray().equals([0, 7, 6, 1, 2, 3, 8, 4, 5])));
  });
});



test(true, null);


function testRunner(totalTests) {
  totalTests -= 1; // remove one for the main test runner
  var count = -1;

  return function (go, test) {
    if (!go) {
      return;
    }

    if (test != null) {
      count += 1;
      test();
    }
    else {
      console.log("");
      console.log("");

      if (count === totalTests) {
        console.log("All tests were executed.");
      }
      else {
        console.log((totalTests - count) + " of " + totalTests + " tests were not executed.");
      }
    }
  }
}


