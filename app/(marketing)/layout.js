import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-[90%] my-2 mx-auto">{children}</div>
      </body>
    </html>
  );
}
