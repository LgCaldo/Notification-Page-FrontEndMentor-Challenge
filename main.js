const markAll = document.getElementById("mark-all");
const numberElement = document.getElementById("number");
const posts = document.querySelectorAll(".post");

const updateNotifications = () => {
  const notReadElementsActual = document.querySelectorAll(".not-read");
  numberElement.innerText = notReadElementsActual.length;
};

updateNotifications();

posts.forEach((post) => {
  post.addEventListener("click", () => {
    post.querySelector(".not-read").classList.remove("not-read");
    updateNotifications();
  });
});

markAll.addEventListener("click", () => {
  const notReadElements = document.querySelectorAll(".not-read");

  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove("not-read");
  });
  updateNotifications();
});
