function WebBrowser() {

}

WebBrowser.prototype.open = function (url) {
  return `Browsing to ${url}`;
};

var newUrl = new WebBrowser();

console.log(newUrl.open('https://www.facebook.com'));