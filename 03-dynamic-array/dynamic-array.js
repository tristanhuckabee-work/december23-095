class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++

    if (this.length > this.capacity) this.resize();
  }

  pop() {
    if (this.length === 0) return undefined;
    this.length--

    let res = this.data[this.length];
    this.data[this.length] = undefined;

    return res;
  }

  shift() {
    if (!this.length) return undefined;
    let res = this.data[0];

    for (let i = 0; i < this.length; i++) {
      if (i == this.length - 1) this.data[i] = undefined;
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    
    return res;
  }

  unshift(val) {
    if (this.length + 1 > this.capacity) this.resize()

    for (let i = this.length; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    let newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i]
    }
    
    this.data = newData;
  }

}


module.exports = DynamicArray;
