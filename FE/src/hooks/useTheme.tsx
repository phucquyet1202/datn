import { create } from "zustand";

interface ThemeStore {
  theme: string;
  handleChangeTheme: (theme: string) => void;
}

const useTheme = create<ThemeStore>((set) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleDarkModeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light";
    handleChangeTheme(newTheme);
  };

  const onWindowTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && darkQuery.matches)) {
      handleChangeTheme("dark");
    } else {
      handleChangeTheme("light");
    }
  };

  const handleChangeTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }

    set({ theme });
  };

  darkQuery.addEventListener("change", handleDarkModeChange);

  onWindowTheme();

  return {
    theme: localStorage.getItem("theme") || "system",
    handleChangeTheme,
  };
});

export default useTheme;
