import "../styles/globals.css"; // 👈 الخروج خطوة للأعلى للوصول لمجلد styles الموجود في جذر المشروع

export default function RootLayout({ children }: any) {
    return (
        <html lang="ar" dir="rtl">
            <body className="bg-[#0B192C] text-white">
                {children}
            </body>
        </html>
    );
}
