import localFont from "next/font/local";

export const metadata = {
  title: "Joel Peter Sony",
  description: "Experimental",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
