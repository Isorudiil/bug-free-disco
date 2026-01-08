import {
  getAllBills,
  hideAllBills,
  selectBill,
} from "./scripts/billsTable.js"

import {
  getAllStorage,
  loadSettings,
  saveBills,
  saveSettings,
} from "./scripts/storageUtils.js";

import {
  billsCloseBtn,
  billsModal,
  billsOpenBtn,
  billsSaveButton,
  getBills,
  hideBills,
  removeItemBtn,
  settingsCloseBtn,
  settingsModal,
  settingsOpenBtn,
  settingsSaveButton,
  viewAllBtn,
} from "./scripts/constants.js";

// Open the modal
settingsOpenBtn.onclick = function() {
  loadSettings()
  settingsModal.showModal();
}

settingsCloseBtn.onclick = function() {
  settingsModal.close();
}

billsOpenBtn.onclick = function() {
  billsModal.showModal();
}

billsCloseBtn.onclick = function() {
  billsModal.close();
}

viewAllBtn.onclick = function() {
  getAllStorage();
}

getBills.onclick = function() {
  getAllBills();
  selectBill();
}

hideBills.onclick = function() {
  hideAllBills();
}

// Event listeners
settingsSaveButton.addEventListener('click', saveSettings);
billsSaveButton.addEventListener('click', saveBills);