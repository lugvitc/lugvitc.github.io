import create from "zustand";

const terminalDotsOnLeftStore = create((set) => ({
  terminalDotsOnLeft:
    window.localStorage.getItem("terminal-dots-on-left") === "true",
  setTerminalDotsOnLeft: (val) => {
    window.localStorage.setItem(
      "terminal-dots-on-left",
      val ? "true" : "false",
    );
    set({ terminalDotsOnLeft: val });
  },
}));

const animationsOnStore = create((set) => ({
  animationsOn: window.localStorage.getItem("animations-on") === "true",
  setAnimationsOn: (val) => {
    window.localStorage.setItem("animations-on", val ? "true" : "false");
    set({ animationsOn: val });
  },
}));

const keyboardShortcutsOnStore = create((set) => ({
  keyboardShortcutsOn:
    window.localStorage.getItem("keyboard-shortcuts-on") === "true",
  setKeyboardShortcutsOn: (val) => {
    window.localStorage.setItem(
      "keyboard-shortcuts-on",
      val ? "true" : "false",
    );
    set({ keyboardShortcutsOn: val });
  },
}));

export default function useSettings() {
  const { animationsOn, setAnimationsOn } = animationsOnStore();
  const { terminalDotsOnLeft, setTerminalDotsOnLeft } =
    terminalDotsOnLeftStore();
  const { keyboardShortcutsOn, setKeyboardShortcutsOn } =
    keyboardShortcutsOnStore();

  const setDefaults = (force = false) => {
    if (!window.localStorage.getItem("animations-on") || force) {
      setAnimationsOn(true);
    }
    if (!window.localStorage.getItem("terminal-dots-on-left") || force) {
      setTerminalDotsOnLeft(true);
    }
    if (!window.localStorage.getItem("keyboard-shortcuts-on") || force) {
      setKeyboardShortcutsOn(true);
    }
  };

  setDefaults();

  return {
    setDefaults,
    animationsOn,
    setAnimationsOn,
    terminalDotsOnLeft,
    setTerminalDotsOnLeft,
    keyboardShortcutsOn,
    setKeyboardShortcutsOn,
  };
}
