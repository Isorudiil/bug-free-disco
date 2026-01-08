import {
  getAllBills
} from "./billsTable.js";

import {
  billAmountInput,
  billAutoPayInput,
  billCategoryInput,
  billDueDateInput,
  billNameInput,
  removeItemBtn,
  tableBody,
  themeSelect,
  usernameInput,
} from "./constants.js";

import {
  showMessage
} from "./utils.js";

import {
  getElement
} from "./domUtils.js";

export function getAllStorage() {
  Object.entries(localStorage).forEach(([key, value]) => {
    console.log(`[${key}]: ${value}`);
  });
}

export function saveSettings() {
  const username = usernameInput.value;
  const theme = themeSelect.value;

  const settings = {
    username: username,
    theme: theme,
  }

  localStorage.setItem('settings', JSON.stringify(settings));
  showMessage("settings-message", 'Settings saved successfully!');

}

export function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('settings'));

  const { username, theme } = settings ?? {};

  if (username) usernameInput.value = username;
  if (theme) themeSelect.value = theme;
}

export function saveBills() {
  const billName = billNameInput.value;
  const billCategory = billCategoryInput.value;
  const billAutoPay = billAutoPayInput.value;
  const billDueDate = billDueDateInput.value;
  const billAmount = billAmountInput.value;

  const bill = {
    billCategory,
    billAutoPay,
    billDueDate,
    billAmount,
  }

  localStorage.setItem(billName, JSON.stringify(bill));

  showMessage("bill-table-message", "Bill saved successfully.");

  console.log(`${billName}: ${localStorage.getItem(billName)}`);
}

removeItemBtn.onclick = function() {
  // let k = prompt("What would you like to remove from storage? (Enter bill name)");
  // localStorage.removeItem(k);
  // getAllStorage();

  const activeRow = tableBody.querySelector(".selected");
  console.log(activeRow);
  if (activeRow) {
    localStorage.removeItem(activeRow.id);

    getAllBills();

    showMessage("bill-table-message",`Bill "${keyToRemove}" deleted.`);
  } else {
    showMessage("bill-table-message","Please select a bill to remove first!", "error");
  }
}