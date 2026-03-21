import { Space_Mono, Audiowide, Outfit } from "next/font/google";

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

const audio = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
});

export { mono, audio, outfit };
