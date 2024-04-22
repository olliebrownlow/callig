import { useState, useEffect } from "react";

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getCurrentTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkTheme(getCurrentTheme());

      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }
  }, []);

  return isDarkTheme;
};

export default useThemeDetector;
