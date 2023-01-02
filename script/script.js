// Get all the td elements
const tds = document.querySelectorAll("td");
let bool = false;

// Add a click event listener to each td
tds.forEach(function (element) {
  element.addEventListener("click", function () {
    () => {
      subtract(element);
    };
  });
});

// ================== North Meteor ===============================================

const northMeteorButton = document.querySelector(".north-meteor");
northMeteorButton.addEventListener("click", function () {
  bool = false;
  const tds = document.querySelectorAll(".eleven-oclock, .twelve-oclock, .one-oclock, .center-tile");
  tds.forEach(function (td) {
    console.log(bool);
    const value = parseInt(td.innerHTML);
    td.innerHTML = value - 3;

    if (td.innerHTML <= 1) {
      td.classList.add("hidden");
      td.innerHTML = "Timer: 1:40";

      // Disable onClick
      northMeteorButton.style.pointerEvents = "none";
      let duration = 100000; // 100000 milliseconds = 1 minute and 40 seconds

      td.timer = setInterval(function () {
        duration -= 1000; // 1000 milliseconds = 1 second
        let minutes = Math.floor(duration / 60000);
        let seconds = Math.floor((duration % 60000) / 1000);
        td.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (duration <= 0) {
          td.classList.remove("hidden");

          // re-enable onClick
          northMeteorButton.style.pointerEvents = "auto";

          // Check if the element has the class "center-tile"
          if (td.classList.contains("center-tile")) {
            td.innerHTML = "14";
          } else {
            td.innerHTML = "3";
          }
          td.style.border = "";
          bool = true;
          clearInterval(td.timer);
        }
      }, 1000); // 1000 milliseconds = 1 second
    }
  });
});

// ================== South Meteor ===============================================

const southMeteorButton = document.querySelector(".south-meteor");
southMeteorButton.addEventListener("click", function () {
  const tds = document.querySelectorAll(".seven-oclock, .six-oclock, .five-oclock, .center-tile");
  tds.forEach(function (td) {
    const value = parseInt(td.innerHTML);
    td.innerHTML = value - 3;

    if (td.innerHTML <= 1) {
      td.classList.add("hidden");
      td.innerHTML = "Timer: 1:40";

      // Disable onClick
      southMeteorButton.style.pointerEvents = "none";
      let duration = 100000; // 100000 milliseconds = 1 minute and 40 seconds

      td.timer = setInterval(function () {
        duration -= 1000; // 1000 milliseconds = 1 second
        let minutes = Math.floor(duration / 60000);
        let seconds = Math.floor((duration % 60000) / 1000);
        td.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (duration <= 0) {
          td.classList.remove("hidden");

          // re-enable onClick
          southMeteorButton.style.pointerEvents = "auto";

          // Check if the element has the class "center-tile"
          if (td.classList.contains("center-tile")) {
            td.innerHTML = "14";
          } else {
            td.innerHTML = "3";
          }
          td.style.border = "";
          clearInterval(td.timer);
        }
      }, 1000); // 1000 milliseconds = 1 second
    }
  });
});

// Function to subtract the td name by 1
function subtract(element) {
  if (element.style.border !== "0") {
    let value = parseInt(element.innerHTML);

    if (value > 1) {
      element.innerHTML = value - 1;
      if (value == 1) {
        element.style.border = "0";
      }
    } else {
      element.classList.add("hidden");
      element.innerHTML = "Timer: 1:40";
      element.style.pointerEvents = "none";
      let duration = 100000; // 100000 milliseconds = 1 minute and 40 seconds
      element.timer = setInterval(function () {
        duration -= 1000; // 1000 milliseconds = 1 second
        let minutes = Math.floor(duration / 60000);
        let seconds = Math.floor((duration % 60000) / 1000);
        element.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
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
