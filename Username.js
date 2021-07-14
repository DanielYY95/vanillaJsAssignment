const NameInput = document.body.querySelector("#name");
const NAMEFORM = document.body.querySelector("#nameform");
const Greeting = document.body.querySelector("#greet");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(event);
  NAMEFORM.classList.add(HIDDEN_CLASSNAME);
  const Username = NameInput.value;
  localStorage.setItem("USERNAME_KEY", Username);
  Greeting.innerText = `What's up? Is your coin okay? Mr.${Username}`;
}

NAMEFORM.addEventListener("submit", onLoginSubmit);
