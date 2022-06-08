var element = document.querySelector(".navbar");
// console.log(element);
element.addEventListener("click", (e) => {
  let id = e.target.id;
  // console.log(id);
  let data = document.querySelector(".active");
  if (data) data.classList = "nav-link";

  document.getElementById(id).classList = "nav-link active";
});

// scroll to top button
var topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// let progressBar = document.querySelector(".progress-bar");
// let valueRange = document.querySelector(".valueRange");
// console.log(progressBar, valueRange);

// let progressValue = 0;
// let progressEnd = 65;
// let speed = 25;

// let progress = setInterval(() => {
//   progressValue++;
//   valueRange.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(#4d5bf9 ${
//     progressValue * 3.6
//   }deg , #cadcff ${progressValue * 3.6}deg)`;
//   // console.log(progressValue);
//   if (progressValue === progressEnd) {
//     clearInterval(progress);
//   }
// }, speed);

// let val = document.getElementById("fname");
// // console.log(val);
// function changeVal() {
//   val.style.border = "3px solid #24CF71";
// }

var inputValue = document.querySelector(".form-inputs");
// console.log(inputValue);
inputValue.addEventListener("click", (e) => {
  let id = e.target.id;
  console.log(id);
  id.classList = ".active1";
  let data = document.querySelector(".active1");
  console.log(data);
  if (data) data.classList = "";

  document.getElementById(id).classList = "active1";
});
