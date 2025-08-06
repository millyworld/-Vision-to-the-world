import './globals.css';

export const metadata = {
  title: 'Vision to the World',
  description: 'Explore the world with our safari experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
