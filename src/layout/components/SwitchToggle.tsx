import {
  Box,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { FC, JSX } from "react";

const SwitchToggle: FC = (): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Box style={{ cursor: "pointer" }}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => {
          toggleColorScheme();
          localStorage.setItem(
            "theme",
            colorScheme === "light" ? "dark" : "light"
          );
        }}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[6]}
            size="1.25rem"
            stroke={1.5}
          />
        }
      />
    </Box>
  );
};

export default SwitchToggle;
