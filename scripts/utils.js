import {
  getElement,
} from "./domUtils.js";

export function showMessage(messageAreaId, text) {
  const messageArea = getElement(messageAreaId);

  messageArea.textContent = text;
  setTimeout(() => {
    messageArea.textContent = '';
  }, 2000);
}

export function capitalize(string) {
  if (!string) return '';

  return string.charAt(0).toUpperCase() + string.slice(1);
}