var places = [
  {name:"Hamburg Flughafen"},
  
];

var viewModel = {
  places: ko.observableArray(places)
};

ko.applyBindings(viewModel);