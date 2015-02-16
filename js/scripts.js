$(document).ready(function {
  $("form#place-tracker").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#places").val();
    var inputtedTime = $("input#time").val();
    var inputtedNote = $("input#notes").val();
    var newPlace = { location: inputtedPlace, time: inputtedTime, note: inputtedNote

    $("ul#placeList").append("<li><span class='place'>" + newPlace.location + newPlace.time + newPlace.note)
);

    $("input#places").val("");
    $("input#time").val("");
    $("input#notes").val("");
  });
});
