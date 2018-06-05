const MIN_CAP = 0;
const MID_CAP = 6;

function getData() {
  var warningSignsTotal = calculateChecked("input:checkbox[name=warning]:checked");
  var symptomsTotal = calculateChecked("input:checkbox[name=symptoms]:checked");
  var copingTotal = calculateChecked("input:checkbox[name=coping]:checked");
  parseTotals(warningSignsTotal, symptomsTotal, copingTotal);
}

function calculateChecked(element) {
  var total = 0;
  $(element).each(function(index, item) {
    total++;
  });
  return total;
}

function parseTotals(warningVal, symptomsVal, copingVal) {
  var overallScore = ((warningVal + symptomsVal) - copingVal);
  displayResults(overallScore);
}

function displayResults(score) {
  $("#results").fadeToggle(800);
  $("#stressTest").hide();
  if (score <= MIN_CAP) {
    $("#results").text("You are doing great! Keep it up!");
  } else if (score > MIN_CAP && score <= MID_CAP) {
    $("#results").text("You are doing okay, but here are some helpful tips...");
  } else if (score > MID_CAP) {
    $("#results").text("You should seek help immediately. Please see resources below.");
  } else {
    alert("Stop trying to break things...");
  }
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    getData();
  });
});
