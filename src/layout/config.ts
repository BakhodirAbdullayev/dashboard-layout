import {
  IconHome2,
  IconGauge,
  TablerIconsProps,
  IconSettings,
  IconUsersGroup,
  IconUser,
  IconPremiumRights,
  IconChartPie,
} from "@tabler/icons-react";

type MainLink = {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  key: string;
};

export const sideBarLinks: MainLink[] = [
  {
    icon: IconHome2,
    label: "Home",
    key: "home",
  },
  {
    icon: IconGauge,
    label: "Dashboard",
    key: "dashboard",
  },
  {
    icon: IconSettings,
    label: "Settings",
    key: "settings",
  },
  {
    icon: IconUsersGroup,
    label: "Students",
    key: "students",
  },
  {
    icon: IconPremiumRights,
    label: "Finance",
    key: "finance",
  },

  {
    icon: IconChartPie,
    label: "Reports",
    key: "reports",
  },

  {
    icon: IconUser,
    label: "Teachers",
    key: "teachers",
  },
  {
    icon: IconUser,
    label: "Groups",
    key: "groups",
  },
];
