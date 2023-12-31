var parentDiv = document.createElement("div");
parentDiv.className = "main";

var date_inp = document.createElement("input");
date_inp.setAttribute("type", "date");
date_inp.id = "dob";

var button = document.createElement("button");
button.innerHTML = "click me";
button.className = "btn btn-primary";
button.addEventListener("click", displayDate);

parentDiv.append(date_inp, button);
document.body.append(parentDiv);

var display = document.createElement("div");
display.id = "displayFormat";

function displayDate() {
  var input = document.getElementById("dob").value;
  var time_stamp = Date.parse(input);
  if (time_stamp) {
    var inputDate = new Date(time_stamp);

    var currentDate = new Date();

    var inp_Date = document.createElement("p");
    inp_Date.innerHTML = `Given input Date is ${inputDate}`;

    var year = yearDiff(inputDate, currentDate);
    var displayYear = document.createElement("p");
    displayYear.innerHTML = `Year ${year}`;

    var month = monthDiff(inputDate, currentDate);
    var displayMonth = document.createElement("p");
    displayMonth.innerHTML = `month ${month}`;

    var millisecDiff = parseInt(currentDate.getTime() - inputDate.getTime());
    var displaymillisecs = document.createElement("p");
    displaymillisecs.innerHTML = `milli second ${millisecDiff}`;

    var seconds = wholeNumber(millisecDiff, 1000);
    var displaySecs = document.createElement("p");
    displaySecs.innerHTML = `Second ${seconds}`;

    var mins = wholeNumber(seconds, 60);
    var displayMins = document.createElement("p");
    displayMins.innerHTML = `minute ${mins}`;

    var hour = wholeNumber(mins, 60);
    var displayHour = document.createElement("p");
    displayHour.innerHTML = `hour ${hour}`;

    var day = wholeNumber(hour, 24);
    var displayDay = document.createElement("p");
    displayDay.innerHTML = `day ${day}`;

    display.innerHTML = `
    Given input Date is ${inputDate}<br>
    Year ${year}<br>
    month ${month}<br>
    day ${day}<br>
    hour ${hour}<br>
    minute ${mins}<br>
    Second ${seconds}<br>
    milli second ${millisecDiff}<br>
    `;

    document.body.append(display);

    /*parentDiv.append(
      inp_Date,
      displayYear,
      displayMonth,
      displayDay,
      displayHour,
      displayMins,
      displaySecs,
      displaymillisecs
    );*/
  }
  function wholeNumber(inp1, inp2) {
    var res = Math.floor(inp1 / inp2);
    return res;
  }
  function yearDiff(inp1, inp2) {
    var date1 = new Date(inp1);
    var date2 = new Date(inp2);
    return date2.getFullYear() - date1.getFullYear();
  }

  function monthDiff(inp1, inp2) {
    var year = yearDiff(inp1, inp2);
    var date1 = new Date(inp1);
    return year * 12 + date1.getMonth() + 1;
  }
}
