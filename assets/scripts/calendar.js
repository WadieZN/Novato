document.addEventListener("DOMContentLoaded", () => {
  const calendarsCont = document.querySelector(".calendars");

  function updateCalendarStyles() {
    const calendars = calendarsCont.querySelectorAll(".calendar");

    calendars.forEach((calendar) => {
      if (calendars.length >= 4) {
        calendar.style.height = "100%";
      } else if (calendars.length === 3) {
        calendar.style.height = "150px";
      } else if (calendars.length === 2) {
        calendar.style.height = "240px";
      } else if (calendars.length === 1) {
        calendar.style.height = "430px";
      }
    });
  }

  calendarsCont.addEventListener("click", (event) => {
    if (event.target.classList.contains("calendar")) {
      calendarDetails.style.display = "block";
    }
  });

  const observer = new MutationObserver(() => {
    updateCalendarStyles();
  });

  observer.observe(calendarsCont, { childList: true, subtree: false });

  updateCalendarStyles();
});

const calendars = document.querySelectorAll(".calendar");
const calendarTaskDetails = document.querySelector(".calendar-task-details");


calendars.forEach((calendar) => {
  calendar.addEventListener("click", () => {
    calendarTaskDetails.style.display = "block";
  });
});

const filterCdr = document.querySelector(".filter-calendar");

filterCdr.addEventListener("click", () => {
  popupMenu.style.display = "flex";
  darkLayer.style.display = "block";
});
