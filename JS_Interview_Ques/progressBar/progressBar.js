const root = document.getElementById("root");

let count = 0;

function add() {
  // console.log(count);
  if (count === 0) {
    create();
  }
  count += 1;
}

function create(n = 1) {
  const ele = document.createElement("div");
  ele.classList.add("progressBar");
  root.appendChild(ele);
  ele.style = `transition: width ${n}s ease;`;

  setTimeout(() => {
    ele.classList.add("fullWidth");
  }, 50);

  ele.addEventListener("transitionend", () => {
    count -= 1;
    if (count) {
      create();
    }
  });

  ele.removeEventListener("transitionend", () => {});
}
