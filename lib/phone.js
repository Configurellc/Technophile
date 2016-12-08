function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;

}

Phone.prototype.callPhone = function (phoneNumber) {
  return this.phoneNumber + ' ' + 'calls' + ' ' + phoneNumber;
}

var iphone = new Phone('123-4567')

console.log(iphone.callPhone('124-4567'))

module.exports = Phone;