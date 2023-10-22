import {
  IconHome2,
  IconGauge,
  TablerIconsProps,
  IconSettings,
  IconUsersGroup,
  IconUser,
  IconPremiumRights,
  IconChartPie,
  IconNotes,
  IconCalendarStats,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
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

export const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];
