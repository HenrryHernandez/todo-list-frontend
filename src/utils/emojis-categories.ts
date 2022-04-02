import { v4 as uuidv4 } from "uuid";

export const emojiPicker = [
  {
    id: uuidv4(),
    icon: "fa-solid fa-face-smile",
    emojis: ["😀"],
    selected: true,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-leaf",
    emojis: ["😅"],
    selected: false,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-utensils",
    emojis: ["😱"],
    selected: false,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-futbol",
    emojis: ["💥"],
    selected: false,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-solid fa-earth-americas",
    emojis: ["💝"],
    selected: false,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-solid fa-lightbulb",
    emojis: ["❤️"],
    selected: false,
  },
  {
    id: uuidv4(),
    icon: "fa-solid fa-flag",
    emojis: ["🤡"],
    selected: false,
  },
];
