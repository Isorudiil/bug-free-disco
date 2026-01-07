import { getStorage } from "./scripts/storageUtils.js";

const usernameInput = document.getElementById('username');
const themeSelect = document.getElementById('theme');
const settingsSaveButton = document.getElementById('settings-save-btn');
const messageArea = document.getElementById('message');

const billNameInput = document.getElementById('bill-name');
const billCategoryInput = document.getElementById('bill-category');
const billAutoPayInput = document.getElementById('bill-auto-pay');
const billDueDateInput = document.getElementById('bill-due-date');
const billAmountInput = document.getElementById('bill-amount');
const billsSaveButton = document.getElementById('bills-save-btn');

const billsModal = document.getElementById('bill-entry-container');
const billsOpenBtn = document.getElementById('open-bills-modal-btn');
const billsCloseBtn = document.getElementById('close-bills-modal-btn');

const viewAllBtn = document.getElementById('view-all-storage-btn');
const removeItemBtn = document.getElementById('remove-from-storage-btn');


const settingsModal = document.getElementById('settings-modal-container');
const settingsOpenBtn = document.getElementById('open-settings-modal-btn');
const settingsCloseBtn = document.getElementById('close-settings-modal-btn');

// Open the modal
settingsOpenBtn.onclick = function() {
  loadSettings()
  settingsModal.style.display = 'block';
}

settingsCloseBtn.onclick = function() {
  settingsModal.style.display = 'none';
}

billsOpenBtn.onclick = function() {
  billsModal.style.display = 'block';
}

billsCloseBtn.onclick = function() {
  billsModal.style.display = 'none';
}

viewAllBtn.onclick = function() {
  getStorage();
}

removeItemBtn.onclick = function() {
  let k = prompt("What would you like to remove from storage? (Enter the key)");
  localStorage.removeItem(k);
  getStorage();
}

// Function to display a temporary message
function showMessage(text) {
  messageArea.textContent = text;
  setTimeout(() => {
    messageArea.textContent = '';
  }, 2000);
}

// Function to load settings from localStorage
function loadSettings() {
  const storedUsername = localStorage.getItem('username');
  const storedTheme = localStorage.getItem('theme');

  if (storedUsername) {
    usernameInput.value = storedUsername;
  }

  if (storedTheme) {
    themeSelect.value = storedTheme;
  }
}

// Function to save settings to localStorage
function saveSettings() {
  const username = usernameInput.value;
  const theme = themeSelect.value;

  localStorage.setItem('username', username);
  localStorage.setItem('theme', theme);

  showMessage('Settings saved successfully!');
}

function saveBills() {
  const billName = billNameInput.value;
  const billCategory = billCategoryInput.value;
  const billAutoPay = billAutoPayInput.value;
  const billDueDate = billDueDateInput.value;
  const billAmount = billAmountInput.value;

  const bill = {
    billName: billName,
    billCategory: billCategory,
    billAutoPay: billAutoPay,
    billDueDate: billDueDate,
    billAmount: billAmount,
  }

  localStorage.setItem(billName, JSON.stringify(bill));

  showMessage('Bills saved successfully!');
  console.log(bill);
}

// Event listeners
settingsSaveButton.addEventListener('click', saveSettings);
billsSaveButton.addEventListener('click', saveBills);