const subscribeForm = document.querySelector("#subscribeForm");
const subscribeBtn = document.querySelector("#subscribeBtn");
const dimissBtn = document.querySelector(".subscribed button");
const subscribed = document.querySelector(".subscribed");
const subscribedText = document.querySelector(".subscribed strong");
const illustration = document.querySelector(".main-illustration");
const mainContent = document.querySelector(".main-content");
const subscribeInput = document.querySelector("#email-input");
const spanError = document.querySelector('.main-content-form-label span');

subscribeForm.addEventListener("submit", event => {
  event.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = subscribeInput.value
  if (!emailRegex.test(email)) {
    subscribeInput.classList.add('error');
    spanError.style.display = 'inline';
    return;
  } 
  subscribedText.innerHTML= email;
  subscribed.style.display = 'flex';
  mainContent.style.display = 'none';
  illustration.style.display = 'none';
});

subscribeInput.addEventListener("keyup", event => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = subscribeInput.value

    if (emailRegex.test(email)) {
      subscribeInput.classList.remove('error');
      spanError.style.display = 'none';
      return;
    }
  });
