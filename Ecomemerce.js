// Set the end date and time for the deal
const endDate = new Date("August 16, 2023 23:59:59").getTime();

// Update the countdown every second
const timer = setInterval(function () {

  // current date and time
  const now = new Date().getTime();

  const remainingTime = endDate - now;

  // Calculate days, hours, minutes, and seconds 49

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the remaining time in the timer element

  document.getElementById("timer").innerHTML = `${days
    .toString()
    .padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // If the countdown is finished, display a message
  if (remainingTime < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Deal Expired";
  }
}, 1000);

