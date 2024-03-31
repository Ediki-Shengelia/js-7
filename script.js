divUser = document.querySelector(".api-users");

let request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/unknown");

request.addEventListener("load", function () {
  let response = this.responseText;
  let JS = JSON.parse(response);

  let ul = document.createElement("ul");
  JS.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = `${element.name} ${element.year}`;
    ul.appendChild(li);
  });
  divUser.appendChild(ul);
});

request.addEventListener("error", function () {
  let pEl = document.createElement("p");
  pEl.innerText = "server error";
  divUser.appendChild(p);
});

request.send();
