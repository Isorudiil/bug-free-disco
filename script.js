import { UIController } from './scripts/UIController.js';
import {billsModal, tableBody} from "./scripts/constants.js";

UIController.init();

tableBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;

  const billKey = row.dataset.id;
  const rawData = localStorage.getItem(billKey);

  if (rawData) {
    const data = JSON.parse(rawData);

    // Populate your modal inputs
    document.getElementById("billNameInput").value = billKey; // The key is the name
    document.getElementById("billCategoryInput").value = data.billCategory;
    document.getElementById("billAutoPayInput").value = data.billAutoPay;
    document.getElementById("billDueDateInput").value = data.billDueDate;
    document.getElementById("billAmountInput").value = data.billAmount;

    // Show the modal
    billsModal.showModal();
  }
});