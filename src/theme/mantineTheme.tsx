import { createTheme, DEFAULT_THEME, rem } from "@mantine/core";
import "./SpaceGrotesk.scss";
import "./Inter.scss";

const theme = createTheme({
  /** Put your mantine theme override here */

  colors: {
    // base: ["#ffffff", "#F9FAFB", "#FCFCFD"],
    // Add your color
    primary: [
      "#f0f2fd",
      "#e4e7fb",
      "#ced2f7",
      "#b0b6f1",
      "#9191e8",
      "#695FDE", //
      "#5C47D0",
      "#4F3BB7",
      "#403194",
      "#362d76",
      "#211A45",
    ],
    neutral: [
      "#f6f6f9",
      "#eeedf1",
      "#d7d7e0",
      "#b4b5c5",
      "#8b8ca5",
      "#5b5d86",
      "#4b4b72",
      "#3d3d5d",
      "#35354f",
      "#2f2f44",
      "#21202d",
    ],
    warning: [
      "#fffbea",
      "#fff4c5",
      "#ffe986",
      "#ffd747",
      "#ffc31d",
      "#fda50d",
      "#e07900",
      "#ba5303",
      "#96400a",
      "#7c350b",
      "#471901",
    ],
    success: [
      "#edfcf3",
      "#d3f8e0",
      "#aaf0c7",
      "#73e2a7",
      "#3bcc84",
      "#0eb266",
      "#069053",
      "#037345",
      "#075b38",
      "#064b30",
      "#042a1c",
    ],
    danger: [
      "#fef3f2",
      "#fee4e2",
      "#ffcdc9",
      "#fdaaa4",
      "#f97970",
      "#f0382b",
      "#de3024",
      "#bb1a0f",
      "#9a1b12",
      "#801e17",
      "#460a06",
    ],
  },

  // shadows: {
  //   md: "1px 1px 3px rgba(0, 0, 0, .25)",
  //   xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  // },
  fontFamily: "Space Grotesk, Inter, sans-serif",

  headings: {
    fontFamily: `Space Grotesk, Inter, ${DEFAULT_THEME.fontFamily}`,
    sizes: {
      h1: { fontSize: rem(28) },
      h2: { fontSize: rem(24) },
      h3: { fontSize: rem(20) },
      h4: { fontSize: rem(18) },
      h5: { fontSize: rem(16) },
      h6: { fontSize: rem(14) },
    },
  },

  fontSizes: {
    xs: rem(16),
    sm: rem(18),
    md: rem(20),
    lg: rem(24),
    xl: rem(28),
    bl: rem(16),
    bm: rem(14),
    bs: rem(12),
    cp: rem(10),
  },

  cursorType: "pointer",
  other: {
    // fontSizes: {
    //   bl: rem(16),
    //   bm: rem(14),
    //   bs: rem(12),
    //   cp: rem(10),
    // },
    colors: {
      base1: "#ffffff",
      base2: "#F9FAFB",
      base3: "#FCFCFD",
    },
  },
});

export default theme;
