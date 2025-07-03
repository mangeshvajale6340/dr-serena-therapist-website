// app/layout.tsx
export const metadata = {
  title: 'Dr. Serena Blake | Therapist Website',
  description: 'Therapist website built with Next.js 14 and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
