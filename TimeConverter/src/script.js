// Time Converting script
function createTimeOptions() {
    const selectElement = document.getElementById("time-select");
    const startHour = 7;
    const endHour = 12;
    const interval = 10;
    // Loop through the hours and minutes and create the options
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = formatTime(hour, minute);
        const option = document.createElement("option");
        option.value = time;
        option.text = formatTime(hour % 12, minute) + (hour < 12 ? " AM" : " PM");
        selectElement.appendChild(option);
      }
    }
  }
  // Format the time to hh:mm
  function formatTime(hour, minute) {
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  }
  // Handle the time select change event
  function handleTimeSelect(event) {
    const selectedValue = event.target.value;
    console.log(`Selected time: ${selectedValue}`);
  }

  // Get the select element
  const timeSelect = document.getElementById("time-select");
  timeSelect.addEventListener("change", handleTimeSelect);

  // Call the function to generate the options
  createTimeOptions();