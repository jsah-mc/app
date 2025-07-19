const { ipcRenderer } = require("electron");
const ipc=ipcRenderer; // just for shortened name
const $ = require("jquery")

$("#minimize").bind("click", () => {
  ipc.send("manualMinimize");
});
$("#maximize").bind("click", () => {
  ipc.send("manualMaximize");
});
$("#close").bind("click", () => {
  ipc.send("manualClose");
});
