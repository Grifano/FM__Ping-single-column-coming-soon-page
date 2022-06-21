// Client-Side Validation
const email = document.getElementById("email");
const form = document.getElementById("subscribtionForm");
const invalidMsg = document.getElementById("invalidMsg");

form.addEventListener("submit", (e) => {
  if (email.value !== "") {
    e.submit();
  } else {
    e.preventDefault();
    invalidMsg.className = "active";
    invalidMsg.innerText = "Whoops! It looks like you forgot to add your email";
  }
});
