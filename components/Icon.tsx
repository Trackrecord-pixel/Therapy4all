import type { SVGProps } from "react";
type IconName =
  | "home" | "phone" | "mail" | "pin" | "clock" | "check" | "arrow" | "star"
  | "menu" | "close" | "chevron" | "calendar" | "user" | "users" | "heart"
  | "pulse" | "activity" | "joint" | "strength" | "shield" | "recovery" | "doc";
const paths: Record<IconName, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9.5 21v-6h5v6" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  pin: <path d="M12 21s7-5.7 7-11a7 7 0 10-14 0c0 5.3 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />,
  clock: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-14v5l3 2" />,
  check: <path d="M5 12l4.5 4.5L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="M12 3l2.6 5.6L20 9.4l-4 4 1 6-5-2.8L7 19.4l1-6-4-4 5.4-.8L12 3z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  calendar: <path d="M4 6h16v15H4zM4 10h16M8 3v4M16 3v4" />,
  user: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" />,
  users: <path d="M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 21a7 7 0 0114 0M17 11a3 3 0 100-6M16 21a7 7 0 016-3.5" />,
  heart: <path d="M12 20s-7-4.4-9.2-8.4C1.3 8.7 2.6 5.5 5.8 5.1 8 4.8 9.6 6 12 8.3 14.4 6 16 4.8 18.2 5.1c3.2.4 4.5 3.6 3 6.5C19 15.6 12 20 12 20z" />,
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  activity: <path d="M4 12h3l2 6 4-14 2 8h5" />,
  joint: <path d="M7 7a4 4 0 014 4v2a4 4 0 01-4 4M17 7a4 4 0 00-4 4v2a4 4 0 004 4M9 12h6" />,
  strength: <path d="M4 9v6M7 7v10M20 9v6M17 7v10M7 12h10" />,
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />,
  recovery: <path d="M21 12a9 9 0 11-3-6.7M21 4v4h-4" />,
  doc: <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6" />,
};
export type { IconName };
export default function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
