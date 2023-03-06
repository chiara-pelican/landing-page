function infoCountry() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  let continent = prompt("Are you from Europe?").toLowerCase().trim();
  let button = document.querySelector("button");
  if (continent === "yes") {
    button.innerHTML =
      "Hi " + name + " check the link above ☝️ and select your country";
  } else {
    alert(
      "Hi " +
        name +
        " I will let you know where you can find more info about your region"
    );
  }
}
let moreInfo = document.querySelector("button");
moreInfo.addEventListener("click", infoCountry);
