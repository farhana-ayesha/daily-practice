let count = 0;

const countValue = document.getElementById("count");

document.getElementById("increase").onclick = function () {
  count++;
  countValue.innerText = count;
};

document.getElementById("decrease").onclick = function () {
  count--;
  countValue.innerText = count;
};

document.getElementById("reset").onclick = function () {
  count = 0;
  countValue.innerText = count;
};
