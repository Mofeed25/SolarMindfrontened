export default function Sidebar() {
    return (
        <div className="w-64 bg-[#0F2A4A] p-6 min-h-screen flex flex-col border-l border-gray-800">
            <h1 className="text-[#00D4FF] text-xl font-bold mb-8">
                SolarMind AI
            </h1>

            <nav className="space-y-2 text-sm flex flex-col">
                <a href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                    📊 Dashboard
                </a>
                <a href="/chat" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                    🤖 AI Chat
                </a>
                <a href="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                    📈 Analytics
                </a>
                <a href="/billing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                    💳 Billing
                </a>
                <a href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-[#1E3E62] text-white">
                    ⚙️ Settings
                </a>
            </nav>
        </div>
    );
}
