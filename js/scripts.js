$(document).ready(function {
  $("form#place_tracker").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#places").val();
    var inputtedTime = $("input#time").val();
    var inputtedNote = $("input#notes").val();
    var newPlace = { location: inputtedPlace, time: inputtedTime, note: inputtedNote
      fullLocation: function() {
        return this.location + ", " + this.time + ", " + this.note;
      }
    };
  });
  $("ul#placeList").append("<li><span class='place'>" + )
})
