const tds = document.querySelectorAll("td");

// Add a click event listener to each td
tds.forEach((element) => {
  element.addEventListener("click", subtract);
});

// North Meteor
const northMeteorButton = document.querySelector(".n-btn");
northMeteorButton.addEventListener("click", meteorClick(".eleven-oclock, .twelve-oclock, .one-oclock, .center-tile"));

// South Meteor
const southMeteorButton = document.querySelector(".s-btn");
southMeteorButton.addEventListener("click", meteorClick(".seven-oclock, .six-oclock, .five-oclock, .center-tile"));

function subtract() {
  if (this.style.border !== "0") {
    let value = parseInt(this.innerHTML);

    if (value > 1) {
      this.innerHTML = value - 1;
    } else {
      this.innerHTML = "1:40";
      this.classList.add("hidden");

      // Disable onClick
      this.style.pointerEvents = "none";
      let duration = 100000; // 100000 milliseconds = 1 minute and 40 seconds

      // check if there is already an active timer
      if (!this.timer) {
        this.timer = setInterval(() => {
          duration -= 1000; // 1000 milliseconds = 1 second
          let minutes = Math.floor(duration / 60000);
          let seconds = Math.floor((duration % 60000) / 1000);
          this.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

          if (duration <= 0) {
            this.innerHTML = " ";
            this.classList.remove("hidden");

            // re-enable onClick
            this.style.pointerEvents = "auto";

            // Check if the element has the class "center-tile"
            if (this.classList.contains("center-tile")) {
              this.innerHTML = "14";
            } else {
              this.innerHTML = "3";
            }
            this.style.border = "";
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000); // 1000 milliseconds = 1 second
      }
    }
  }
}

function meteorClick(selector) {
  return function () {
    bool = false;
    const tds = document.querySelectorAll(selector);
    tds.forEach((td) => {
      console.log(bool);
      const value = parseInt(td.innerHTML);
      td.innerHTML = value - 3;
      if (td.innerHTML <= 1) {
        subtract.call(td);
      }
    });
  };
}
