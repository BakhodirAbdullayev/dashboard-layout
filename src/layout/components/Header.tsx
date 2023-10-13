import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { Dispatch, FC, SetStateAction } from "react";
import { IconSearch } from "@tabler/icons-react";
import { User, Logo, SwitchToggle } from "./";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(70),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderSearch: FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const { classes } = useStyles();

  return (
    <Header height={70} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={isOpen}
            onClick={() => setIsOpen((p) => !p)}
            size="sm"
          />
          <Logo />
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          <User />

          <SwitchToggle />
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
