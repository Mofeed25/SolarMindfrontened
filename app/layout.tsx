import "../styles/globals.css"; // 👈 الخروج خطوة للأعلى للوصول لمجلد styles الموجود في جذر المشروع

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <body className="bg-[#0B192C] text-white min-h-screen font-sans antialiased">
                
                {/* حاوية مرنة ممتدة بكامل الشاشة لتوزيع الـ Sidebar والمحتوى */}
                <div className="flex min-h-screen w-full">
                    
                    {/* القائمة الجانبية العمودية الثابتة والذكية */}
                    <aside className="w-64 bg-[#0F2A4A] p-6 flex flex-col border-l border-gray-800 shrink-0 min-h-screen">
                        <h1 className="text-[#00D4FF] text-xl font-bold mb-8 tracking-wide">
                            SolarMind AI
                        </h1>
                        
                        <nav className="space-y-2 text-sm flex flex-col">
                            <a href="/dashboard" className="flex items-center gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                                <span>📊</span> Dashboard
                            </a>
                            <a href="/chat" className="flex items-center gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                                <span>🤖</span> AI Chat
                            </a>
                            <a href="/analytics" className="flex items-center gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                                <span>📈</span> Analytics
                            </a>
                            <a href="/billing" className="flex items-center gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                                <span>💳</span> Billing
                            </a>
                            <a href="/settings" className="flex items-center gap-3 py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                                <span>⚙️</span> Settings
                            </a>
                        </nav>
                    </aside>

                    {/* محتوى الصفحات (اللوحة، المحادثة، الفواتير) يظهر هنا بشكل عريض ومنسق */}
                    <main className="flex-1 p-8 overflow-y-auto">
                        {children}
                    </main>

                </div>

            </body>
        </html>
    );
}
