import "./styles/globals.css";

export default function RootLayout({ children }: any) {
    return (
        <html lang="ar" dir="rtl">
            <body className="bg-[#0B192C] text-white">
                {children}
            </body>
        </html>
    );
}
