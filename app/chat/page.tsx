"use client";

import { useState } from "react";
import { sendMessage } from "../../lib/api";
import { getToken } from "../../lib/auth";
import { getTenant } from "../../lib/tenant";
import ProtectedRoute from "../../components/ProtectedRoute"; // 👈 استدعاء مكون الحماية والـ Sidebar

export default function Chat() {
    const [msg, setMsg] = useState("");
    const [chat, setChat] = useState<any[]>([]);

    async function send() {
        if (!msg.trim()) return; // منع إرسال رسائل فارغة

        try {
            const res = await sendMessage(
                msg,
                getToken() || undefined,
                getTenant()
            );

            setChat((prev) => [
                ...prev,
                { role: "user", text: msg },
                { role: "ai", text: res?.answer || "لا يوجد رد" }
            ]);

            setMsg("");
        } catch (err) {
            setChat((prev) => [
                ...prev,
                { role: "system", text: "حدث خطأ في الاتصال بالسيرفر" }
            ]);
        }
    }

    return (
        <ProtectedRoute> {/* 👈 تغليف الصفحة بالكامل هنا لفرض الـ Sidebar والحماية */}
            <div className="p-2">
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-2">
                    AI Assistant
                </h1>

                <div className="space-y-3 mt-6">
                    {chat.map((c, i) => (
                        <div key={i} className="card">
                            <b className="capitalize">{c.role}</b>: {c.text}
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <input
                        className="w-full p-3 bg-[#0F2A4A] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF]"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="اكتب رسالتك..."
                        onKeyDown={(e) => e.key === "Enter" && send()} // إرسال عند الضغط على Enter للسهولة
                    />

                    <button
                        className="bg-[#00C27C] hover:bg-[#00a86b] text-white px-6 py-2.5 rounded-lg mt-3 font-semibold transition duration-200"
                        onClick={send}
                    >
                        إرسال
                    </button>
                </div>
            </div>
        </ProtectedRoute>
    );
}
