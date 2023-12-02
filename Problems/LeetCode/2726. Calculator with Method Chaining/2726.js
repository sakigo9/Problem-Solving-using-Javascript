class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    return (this.value = value);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.value -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      this.value = "Division by zero is not allowed";
      return this;
    }
    this.value /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value **= value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}
