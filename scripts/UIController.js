import {
  billsCloseBtn,
  billsModal,
  billsOpenBtn,
  billsSaveButton,
  removeItemBtn,
  settingsCloseBtn,
  settingsModal,
  settingsOpenBtn,
  settingsSaveButton,
} from "./constants.js";

import {
  getAllBills,
  selectBill,
} from "./billsTable.js";

import {
  loadSettings,
  removeBill,
  saveBills,
  saveSettings,
} from "./storageUtils.js";

import {
  onClick,
  closeOnBackdropClick,
} from "./utils.js";

export const UIController = {
  init() {
    this.setupBills();
    this.setupModalListeners();
    this.setupActionListeners();
    this.setupClosingBehavior();
  },

  setupBills() {
    getAllBills();
    selectBill();
  },

  setupModalListeners() {
    onClick(settingsOpenBtn, () => {
      loadSettings();
      settingsModal.showModal();
    });

    onClick(settingsCloseBtn, settingsModal, "close");
    onClick(billsOpenBtn, billsModal, "showModal");
    onClick(billsCloseBtn, billsModal, "close");
  },

  setupActionListeners() {
    onClick(removeItemBtn, removeBill);
    onClick(billsSaveButton, saveBills);
    onClick(settingsSaveButton, saveSettings);
  },

  setupClosingBehavior() {
    [settingsModal, billsModal].forEach(closeOnBackdropClick);
  }
};