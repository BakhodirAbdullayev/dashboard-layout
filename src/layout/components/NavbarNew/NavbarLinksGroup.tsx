import {
  Collapse,
  Text,
  UnstyledButton,
  rem,
  Flex,
  createStyles,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  links?: { label: string; link: string }[];
  isOpen: boolean;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = createStyles((theme) => ({
  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },
    svg: {
      minWidth: 25,
    },
  },
  bigMainLink: {
    width: rem(250),
    height: rem(44),
    margin: "0 0.5rem",
    padding: "0 0.625rem",
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    gap: 10,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
    },
    svg: {
      minWidth: 25,
    },
    p: {
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
  links: {
    width: "100%",
    alignSelf: "flex-start",
    padding: theme.spacing.sm,
    paddingLeft: theme.spacing.lg,
  },
  link: {
    display: "block",
    width: `calc(100% - 0.5rem)`,
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    padding: theme.spacing.xs,
    paddingLeft: theme.spacing.xl,
    marginLeft: theme.spacing.sm,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    cursor: "pointer",
    transition: ".08s linear",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.dark[0]
    }`,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
      borderLeftWidth: rem(4),
    },
  },
  linkActive: {
    "&, &:hover": {
      color: theme.colors.blue[6],
      borderLeftColor: theme.colors.blue[6],
      borderLeftWidth: rem(4),
      backgroundColor: theme.colors.blue[0] + "a1",
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

export function LinksGroup({
  icon: Icon,
  label,
  links,
  isOpen,
  active,
  setActive,
  setIsOpen,
}: LinksGroupProps) {
  const { classes, cx } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [actNested, setActNested] = useState("");
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={cx(classes.link, {
        [classes.linkActive]: actNested === link.label && active === label,
      })}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        setActNested(link.label);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setActive(label);
          toggle();
          if (hasLinks && !isOpen) {
            close();
            setIsOpen(true);
          }
        }}
        className={cx(isOpen ? classes.bigMainLink : classes.mainLink, {
          [classes.mainLinkActive]: active === label,
        })}
      >
        <Flex w={"100%"} align={"center"} justify={"space-between"}>
          <Flex
            w={isOpen ? "max-content" : "100%"}
            align={"center"}
            gap={"sm"}
            justify={"center"}
          >
            <Icon size="1.4rem" stroke={1.5} />
            {isOpen ? <p>{label}</p> : null}
          </Flex>
          {hasLinks && isOpen && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(90deg)" : "none",
              }}
            />
          )}
        </Flex>
      </UnstyledButton>
      {hasLinks && isOpen ? (
        <Collapse
          className={classes.links}
          in={opened}
          transitionTimingFunction="linear"
        >
          {items}
        </Collapse>
      ) : null}
    </>
  );
}
