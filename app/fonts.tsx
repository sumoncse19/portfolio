import { Poppins, Merienda } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "500"],
});
