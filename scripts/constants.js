import {getElement} from "./domUtils.js";

// Used in main script.js
export const billAmountInput = getElement('bill-amount');
export const billAutoPayInput = getElement('bill-auto-pay');
export const billCategoryInput = getElement('bill-category');
export const billsCloseBtn = getElement('close-bills-modal-btn');
export const billDueDateInput = getElement('bill-due-date');
export const billsModal = getElement('bill-entry-container');
export const billNameInput = getElement('bill-name');
export const billsOpenBtn = getElement('open-bills-modal-btn');
export const billsSaveButton = getElement('bills-save-btn');
export const removeItemBtn = getElement('remove-from-storage-btn');
export const settingsCloseBtn = getElement('close-settings-modal-btn');
export const settingsModal = getElement('settings-modal-container');
export const settingsOpenBtn = getElement('open-settings-modal-btn');
export const settingsSaveButton = getElement('settings-save-btn');
export const viewAllBtn = getElement('view-all-storage-btn');
export const getBills = getElement('get-all-bills');
export const hideBills = getElement('hide-bills');

// Used in storageUtils.js
export const themeSelect = getElement('theme');
export const usernameInput = getElement('username');

// Used in billsTable.js
export const tableBody = getElement('bills-table-body');
