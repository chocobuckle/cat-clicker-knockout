var viewModel = function() {
  this.name = ko.observable('Tabby');
  this.level = ko.observable();
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('./img/22252709_010df3379e_z.jpg');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.increaseLevel = ko.computed(function() {
    if (this.clickCount() < 5) {
      return this.level('Newborn');
    } else if(this.clickCount() >= 5 && this.clickCount() < 10) {
      return this.level('Infant');
    } else if (this.clickCount() >= 10 && this.clickCount() < 15) {
      return this.level('Teen');
    } else if (this.clickCount() >= 15 && this.clickCount() < 20) {
      return this.level('Adult');
    } else if (this.clickCount() >= 20) {
      return this.level('Wise Elder');
    }
  }, this);
};