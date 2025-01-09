import TopProgressBar from "./_components/TopProgressBar";

export const metadata = {
  title: "Joel Peter Sony",
  description: "Experimental",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar/>
        {children}
      </body>
    </html>
  );
}
