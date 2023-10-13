import { FC, Fragment, useState, JSX } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  rem,
} from "@mantine/core";
import { sideBarLinks } from "../config";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    paddingTop: "1rem",
  },

  main: {
    flex: 1,
    paddingTop: "1rem",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[8],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },
    svg: {
      minWidth: 23,
    },
  },
  bigMainLink: {
    width: rem(200),
    height: rem(44),
    margin: "0 0.5rem",
    padding: "0 0.625rem",
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    gap: 10,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[8],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },
    svg: {
      minWidth: 23,
    },
    "&>p": {
      fontSize: rem(14),
      fontWeight: 500,
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const Sidebar: FC<{ isOpen: boolean }> = ({ isOpen }): JSX.Element => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<string>("Home");

  const mainLinks = sideBarLinks.map((sidebarItem, i) => (
    <Fragment key={i}>
      <Tooltip
        label={sidebarItem.label}
        position="right"
        withArrow
        transitionProps={{ transition: "rotate-right", duration: 200 }}
        key={sidebarItem.key}
      >
        <UnstyledButton
          onClick={() => setActive(sidebarItem.label)}
          className={cx(isOpen ? classes.bigMainLink : classes.mainLink, {
            [classes.mainLinkActive]: active === sidebarItem.label,
          })}
        >
          <sidebarItem.icon size="1.4rem" stroke={1.5} />
          {isOpen ? <p>{sidebarItem.label}</p> : null}
        </UnstyledButton>
      </Tooltip>
    </Fragment>
  ));

  return (
    <Navbar width={{ sm: "max-content" }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>{mainLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
