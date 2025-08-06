document.getElementById("rideForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const time = document.getElementById("time").value;

  if (pickup && drop && time) {
    document.getElementById("confirmation").textContent =
      `✅ Your ride from ${pickup} to ${drop} at ${time} is confirmed!`;
    this.reset();
  } else {
    document.getElementById("confirmation").textContent =
      `⚠️ Please fill out all fields.`;
  }
});
