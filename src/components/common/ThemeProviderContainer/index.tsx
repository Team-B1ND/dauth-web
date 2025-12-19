import { useEffect, useState } from "react";
import { DodamThemeProvider, DodamGlobalStyles } from "@b1nd/dds-web";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

type Props = { children: React.ReactNode }

const ThemeProviderContainer = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matcher.addEventListener('change', onChange);
    return () => matcher.removeEventListener('change', onChange);
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <DodamThemeProvider theme={isDarkMode ? "DARK" : "LIGHT"}>
        <DodamGlobalStyles />
        {children}
      </DodamThemeProvider>
    </StyleSheetManager>
  );
};

export default ThemeProviderContainer;