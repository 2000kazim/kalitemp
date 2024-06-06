(function () {

  /**
     * Returns random string.
     * @param {*} length - Random string lengh.
     * @param {*} chars - chars set.
     * @return {*} random string.
     * No precondition.
     * No depends.
     */
  exports.randomString = function (length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
  }

  /**
   * Returns new random email
   */
  exports.randomEmail = function () {
    return this.randomString(20, 'zxcvbnmlkjhgfdsaqwertyuiop0987654321') + '@gmail.com';
  }

  /**
   * Get date stamp.
   * @return {date} current date stamp.
   */
  exports.getDateStamp = function () {
    let date = new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  /**
   * Get time stamp.
   * @return {date} current time stamp.
   */
  exports.getTimeStamp = function () {
    let date = new Date();
    return date.getTime();
  };

})();
