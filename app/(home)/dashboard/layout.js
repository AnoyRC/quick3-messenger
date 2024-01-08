export const metadata = {
  title: "Quick3 | Dashboard",
  description: "Quick3 Messenger",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center">{children}</div>
  );
}
