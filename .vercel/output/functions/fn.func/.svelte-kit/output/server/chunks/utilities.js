import { w as writable } from "./index2.js";
import { g as get_store_value } from "./index3.js";
function getID() {
  return Math.random().toString(16).slice(2);
}
const messages = writable([]);
function showError(e) {
  if (e instanceof Error) {
    return showMessage(e.message, "error");
  } else if (typeof e == "string") {
    return showMessage(e, "error");
  } else if (typeof e === "object" && e && "message" in e && typeof e.message === "string") {
    return showMessage(e.message, "error");
  } else {
    return null;
  }
}
function setMessageTimeout(id) {
  const timeoutID = setTimeout(() => {
    removeMessage(id);
  }, 5e3);
  return timeoutID;
}
function showMessage(message, type) {
  const currentMessages = get_store_value(messages);
  const id = getID();
  messages.set([...currentMessages, { message, type, id, timeoutID: setMessageTimeout(id) }]);
  return id;
}
function resetMessages() {
  messages.set([]);
}
function removeMessage(id) {
  const currentMessages = get_store_value(messages);
  messages.set([...currentMessages.filter((message) => message.id !== id)]);
}
export {
  messages as m,
  resetMessages as r,
  showError as s
};
