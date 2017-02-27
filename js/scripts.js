//Business logic
function Place(locale, landmark, season) {
  this.locale = locale;
  this.landmark = landmark;
  this.season = season;
}
Place.prototype.previewPlace = function() {
  return this.locale;
}
//User interface logic
$(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocale = $("input#new-locale").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedSeason = $("input#new-season").val();

    var newPlace = new Place(inputtedLocale, inputtedLandmark, inputtedSeason);

    $("ul#places").append("<li><span class='place'>" + newPlace.previewPlace() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locale);
      $(".location").text(newPlace.locale);
      $(".landmark").text(newPlace.landmark);
      $(".season").text(newPlace.season);
    });

  });
});
