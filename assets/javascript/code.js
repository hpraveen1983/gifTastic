var athletesArray = ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Steve Waugh", "Brian Lara"];

$(document).ready(function() {
    for (var i = 0; i < athletesArray.length; i++) {
        $("#athlete-buttons").append("<button type='button' onclick='searchGif(\"" + athletesArray[i] + "\")' class='btn btn-primary' value=' " + athletesArray[i] + "'> " + athletesArray[i] + " </button>");
    }
});

