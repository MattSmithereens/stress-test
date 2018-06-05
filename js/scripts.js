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
  resultsShowAndHide();
  if (score <= MIN_CAP) {
    $("#scoreResults").text("You are doing great! Keep it up!");
    $(".results-image").append(imageUrl("happy.gif"));
    $("body").addClass("background-good-score");
  } else if (score > MIN_CAP && score <= MID_CAP) {
    $("#scoreResults").text("You are doing okay, but here are some helpful tips...");
    $(".results-image").append(imageUrl("meh.gif"));
    $("body").addClass("background-mid-score");
  } else if (score > MID_CAP) {
    $("#scoreResults").text("You should seek help immediately. Please see resources below.");
    $(".results-image").append(imageUrl("send-help.gif"));
    $("body").addClass("background-bad-score");
  } else {
    alert("Stop trying to break things...");
  }
}

function resultsShowAndHide() {
  $("#surveyResults").fadeToggle(800);
  $("#stressTest").hide();
}

function imageUrl(imgName) {
  return "<img src='img/" + imgName + "' alt='An image of your results'>";
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    getData();
  });
});
