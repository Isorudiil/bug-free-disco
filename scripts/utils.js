import {
  getElement,
} from "./domUtils.js";

export function showMessage(messageAreaId, text, className = "none") {
  const messageArea = getElement(messageAreaId);

  messageArea.classList.add(className);
  messageArea.textContent = text;

  setTimeout(() => {
    messageArea.textContent = '';
    messageArea.classList.remove(className);
  }, 2000);
}

export function capitalize(string) {
  if (!string) return '';

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *
 * @param {HTMLElement} btn Trigger element
 * @param {HTMLElement|Function} target Modal element or callback function
 * @param {string} action Optional parameter, method to call on Modal
 */
export function onClick(
  btn,
  target,
  action = undefined
) {
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (typeof target === "function") {
      target();
    } else if (target && action) {
      target[action]();
    }
  });
}


export const closeOnBackdropClick = (modal) => {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
};