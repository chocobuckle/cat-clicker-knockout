var Cat = function() {
  this.name = ko.observable('Tabby');
  this.level = ko.observable();
  this.nicknames = ko.observableArray([{name: 'Thomas'}, {name:'Conor'}, {name:'Linda'}, {name:'Snufflekins'}, {name:'Paris'}]);
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('./img/22252709_010df3379e_z.jpg');

  this.increaseLevel = ko.computed(function() {
    if (this.clickCount() < 5) {
      return this.level('Newborn');
    } else if(this.clickCount() < 10) {
      return this.level('Infant');
    } else if (this.clickCount() < 15) {
      return this.level('Teen');
    } else if (this.clickCount() < 20) {
      return this.level('Adult');
    } else if (this.clickCount() <  25) {
      return this.level('Wise Elder');

    }
  }, this);
};

var viewModel = function() {

  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};