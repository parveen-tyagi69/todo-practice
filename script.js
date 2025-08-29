

const addBtn = document.getElementById("add");
const inputPlace = document.getElementById("input");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  let input = inputPlace.value.trim();

  if (input === "") return; 

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input;

  const dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";

  li.classList.add("taskItems");
  dltBtn.classList.add("dltButton");

  li.appendChild(span);
  li.appendChild(dltBtn);
  list.appendChild(li);

  inputPlace.value = "";

  dltBtn.addEventListener("click", () => {
    li.remove();
  });
});
