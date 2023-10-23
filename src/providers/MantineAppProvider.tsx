import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { FC, JSX, ReactNode, useEffect, useState } from "react";

interface MantineProviderProps {
  children: ReactNode;
}

const MantineAppProvider: FC<MantineProviderProps> = ({
  children,
}): JSX.Element => {
  const lclVal: string | null = localStorage.getItem("theme");
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    lclVal === "dark" ? "dark" : "light"
  );
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    const getCurrentTheme = () => {
      if (!lclVal) {
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        setColorScheme(theme);
        localStorage.setItem("theme", theme);
      }
    };

    getCurrentTheme();
    return getCurrentTheme();
  }, []);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MantineAppProvider;
