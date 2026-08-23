import { data } from "./data-gerai.js";

const tableBody = document.querySelector("#geraiData");

data.forEach((item) => {
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${item.gerai}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
    `;

  tableBody.appendChild(row);
});
