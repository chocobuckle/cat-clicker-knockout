var initialCats = [
  {
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Casper', 'Molly', 'Jules']
  },
  {
    clickCount : 0,
    name : 'Tiger',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
    nicknames: ['Felix']
  },
  {
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
    nicknames: ['Sammy', 'Meg', 'John']
  },
  {
    clickCount : 0,
    name : 'Shadow',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
    nicknames: ['Thomas']
  },
  {
    clickCount : 0,
    name : 'Sleepy',
    imgSrc : 'img/9648464288_2516b35537_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
    nicknames: ['Paula', 'Sarah']
  }
];

var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.level = ko.observable();
  this.nicknames = ko.observableArray(data.nicknames);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);

  this.calculateLevel = ko.computed(function() {
    if (this.clickCount() < 5) {
      this.level('Newborn');
    } else if(this.clickCount() < 10) {
      this.level('Infant');
    } else if (this.clickCount() < 15) {
      this.level('Teen');
    } else if (this.clickCount() < 20) {
      this.level('Adult');
    } else if (this.clickCount() <  25) {
      this.level('Wise Elder');
    }
  }, this);
};

var viewModel = function() {
  var self = this;

  this.catList = ko.observableArray();

  initialCats.forEach(function(catItem) {
    this.catList.push(new Cat(catItem));
  }, this);

  this.currentCat = ko.observable(this.catList()[0]);

  this.selectCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new viewModel());