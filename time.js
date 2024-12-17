const button = document.getElementById("button");
const message = document.getElementById("message");

button.textContent = "Click me to start the timer";
let seconds = 0;

button.addEventListener("click", function () {
  message.textContent = "Yay! Check the console!";
  console.log("Its alive!");

  const oneSecondInterval = setInterval(function () {
    seconds++;
    message.textContent = `Time: ${seconds} seconds`;
  }, 1000);

  setTimeout(function () {
    clearInterval(oneSecondInterval);
    console.log("The interval has been stopped after 5 seconds.");
  }, 5000);

  setTimeout(function () {
    console.log("Not anymore");
  }, 5000);
});
