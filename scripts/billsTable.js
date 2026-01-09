import {
  tableBody
} from "./constants.js";

import {
  capitalize
} from "./utils.js";

export function getAllBills() {
  tableBody.innerHTML = "";

  Object.entries(localStorage).forEach(([key, value]) => {
    if (key !== "settings") {
      const parsed = JSON.parse(value);

      const row = `
      <tr data-id="${key}" class="bill-row">
        <td>${key}</td>
        <td>${capitalize(parsed.billCategory)}</td>
        <td>${capitalize(parsed.billAutoPay)}</td>
        <td>${parsed.billDueDate}</td>
        <td>$${parsed.billAmount}</td>
      </tr>
      `;

      tableBody.insertAdjacentHTML('beforeend', row);
    }
  });
}


export function selectBill() {
    tableBody.addEventListener("click", (event) => {
    const row = event.target.closest("tr");

    if (!row) return;

    const activeRow = tableBody.querySelector(".selected");
    if (activeRow && activeRow !== row) {
      activeRow.classList.remove("selected");
      activeRow.setAttribute("aria-selected", "false");
    }

    const isSelected = row.classList.toggle("selected");
    row.setAttribute("aria-selected",isSelected ? "true" : "false");
  })
}