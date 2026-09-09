// import { Poppins } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-poppins",
// });

// export const metadata = {
//   title: "Jadoo | Travel Agency Landing Page UI",
//   description:
//     "Travel, enjoy and live a new and full life. Book your next trip in 3 easy steps with Jadoo.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-sans antialiased">{children}</body>
//     </html>
//   );
// }
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-volkhov",
});

export const metadata = {
  title: "Jadoo | Travel Agency Landing Page UI",
  description: "Travel, enjoy and live a new and full life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${poppins.variable} ${volkhov.variable}`}>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  );
}
