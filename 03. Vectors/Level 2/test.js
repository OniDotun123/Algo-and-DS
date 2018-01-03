Vector.prototype.resize = function(isRemoving, desiredLength) { //function has 2 params. 1 a boolean, 2 desired length 
  var resizeNeeded = false; //by default, resize needed is set to false, so that its not invoked immediately. 

  if (isRemoving) { //this method is used to check if you are allowed to resize past the initial size of the array which is stored as minCapacity. if the desired length is less than that, then there 
    if (desiredLength < this.minCapacity) { //conditional statement stating that if desired length 
      return false;
    }

    if (desiredLength === Math.floor(this.capacity / 2)) { //this is a conditional that checks if the desired length that is provided in the parameter is half of the size of the array and is a number, it returns a bool and if the bool is true, it switches the default of resize needed to true, thus invoking line 21. this part halves the capacity of the array.  
      this.capacity = Math.floor(this.capacity / 2);
      resizeNeeded = true;
    }
  }
  else {
    if (desiredLength > this.capacity) { //this has a similar idea to line 9, but with this, it handles the case in which the desired length is larger than the capacity, it then doubles the space and then invokes like 21. 
      this.capacity *= 2;
      resizeNeeded = true;
    }
  }

  if (resizeNeeded) {
    var tempStorage = new Array(this.capacity);

    for (var i = 0; i < desiredLength; i++) {
      tempStorage[i] = this.storage[i];
    }

    this.storage = tempStorage;
    return true;
  }

  return false;
};
