// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// // Add Event Listeners
// btn.addEventListener("click", () => {
// 	menu.classList.toggle("hidden");
// });

// const btn = document.querySelector('button.menu-button');
//   const menu = document.querySelector(".mobile-menu");
//   btn.addEventListener("click", () => {
//       menu.classList.toggle("hidden");
// })

document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};