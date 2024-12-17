const button = document.getElementById("button");
const message = document.getElementById("message");

button.textContent = "Click Me";

button.addEventListener("click", function () {
  message.textContent = "Yay! Check the console!";
  console.log("Its alive!");

  setTimeout(function () {
    console.log("Not anymore");
  }, 5000);
});
