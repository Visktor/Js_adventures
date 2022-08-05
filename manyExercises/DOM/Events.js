const btn = document.querySelector("#btn"); // targets the button with the id of 'btn'.
btn.onclick = () =>
  alert(
    "Hello World"
  ); /* This is a slightly better method, but the problem of only being able to assign
one 'on click' function remains. */

/*
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
}); /* Here we can add as many onclick events as we'd like, making this a more flexible choice. */

// All the options may be used with named functions instead of anonymous ones.

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
