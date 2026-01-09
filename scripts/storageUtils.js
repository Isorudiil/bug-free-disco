import {
  getAllBills
} from "./billsTable.js";

import {
  billAmountInput,
  billAutoPayInput,
  billCategoryInput,
  billDueDateInput,
  billEntryForm,
  billNameInput,
  tableBody,
  themeSelect,
  usernameInput,
} from "./constants.js";

import {
  showMessage
} from "./utils.js";


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

  getAllBills();
  billEntryForm.reset();
  showMessage(
    "bill-table-message",
    "Bill saved successfully.",
    "add");
}


export function removeBill() {
  const activeRow = tableBody.querySelector(".selected");

  if (activeRow) {
    const keyToRemove = activeRow.id;
    localStorage.removeItem(activeRow.id);

    getAllBills();

    showMessage(
      "bill-table-message",
      `${keyToRemove} bill deleted.`,
      "error");
  } else {
    showMessage(
      "bill-table-message",
      "Please select a bill to remove first!",
      "error");
  }
}


export function editBill() {
  const activeRow = tableBody.querySelector(".selected");

  if (activeRow) {
    const keyToEdit = activeRow.id;

  }
}