import { atom } from "recoil";

export const CardItem = atom({
  key: "CardItem",
  default:JSON.parse(localStorage.getItem("data"))|| [],
});

export const taskDetails = atom({
  key: "taskDetails",
  default: {},
});
