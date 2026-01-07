export { getStorage }

function getStorage() {
  let keys = Object.keys(localStorage);
  for(let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}