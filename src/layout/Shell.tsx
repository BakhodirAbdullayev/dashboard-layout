import { AppShell } from "@mantine/core";
import { Header, Sidebar } from "./components";
import { ReactNode, useState } from "react";
import { NavbarNested } from "./components/NavbarNew";

export const Shell = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppShell
      padding="lg"
      fixed={false}
      // navbar={<Sidebar isOpen={isOpen} />} // simple route navbar
      navbar={<NavbarNested isOpen={isOpen} setIsOpen={setIsOpen} />} // nested navbar
      header={<Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
