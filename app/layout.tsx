import "../styles/globals.css"; // استدعاء التنسيقات من جذر المشروع

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <body className="bg-[#0B192C] text-white min-h-screen font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
