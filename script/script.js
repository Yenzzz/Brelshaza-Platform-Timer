// Get all the td elements
const tds = document.querySelectorAll("td");

// Add a click event listener to each td
tds.forEach(function (element) {
  element.addEventListener("click", function () {
    () => {
      subtract(element);
    };
  });
});

// Function to subtract the td name by 1
function subtract(element) {
  if (element.style.border !== "0") {
    var value = parseInt(element.innerHTML);
    if (value > 1) {
      element.innerHTML = value - 1;
      if (value == 1) {
        element.style.border = "0";
      }
    } else {
      element.classList.add("hidden");
      element.innerHTML = "Timer: 1:40";
      element.style.pointerEvents = "none";
      var duration = 100000; // 100000 milliseconds = 1 minute and 40 seconds
      element.timer = setInterval(function () {
        duration -= 1000; // 1000 milliseconds = 1 second
        var minutes = Math.floor(duration / 60000);
        var seconds = Math.floor((duration % 60000) / 1000);
        element.innerHTML = "Timer: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        if (duration <= 0) {
          element.classList.remove("hidden");
          element.style.pointerEvents = "auto";
          // Check if the element has the class "center-tile"
          if (element.classList.contains("center-tile")) {
            element.innerHTML = "14";
          } else {
            element.innerHTML = "3";
          }
          element.style.border = "";
          clearInterval(element.timer);
        }
      }, 1000); // 1000 milliseconds = 1 second
    }
  }
}
