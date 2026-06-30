import "./globals.css"; // 👈 استدعاء التنسيقات هنا يضمن تفعيل Tailwind CSS في كامل الموقع

export default function RootLayout({ children }: any) {
    return (
        <html lang="ar" dir="rtl">
            <body className="bg-[#0B192C] text-white">
                {/* تم تنظيف الـ Layout من الـ Sidebar ليظهر فقط بالصفحات المحمية */}
                {children}
            </body>
        </html>
    );
}
