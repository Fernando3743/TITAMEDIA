import "./app.js";

const res = await fetch("./sampleData.json");

const data = await res.json();

const { title, description } = data.data[0];

const sampleItem = document.querySelector(".item__sample");

const h1 = document.createElement("h1");
const hr = document.createElement("hr");
const p = document.createElement("p");

h1.innerText = title.toUpperCase();
p.innerText = description;

sampleItem.append(h1, hr, p);
