"use client";

import { useEffect, useState } from "react";
// الخروج بخطوتين للأعلى للوصول إلى المجلدات في الجذر مباشرة وتجنب مشاكل Netlify
import ProtectedRoute from "../../components/ProtectedRoute";
import KPI from "../../components/KPI";
import { sendMessage } from "../../lib/api";
import { getTenant } from "../../lib/tenant";

export default function Dashboard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function load() {
            const res = await sendMessage(
                "تحليل مالي شامل",
                undefined,
                getTenant()
            );
            setData(res);
        }
        load();
    }, []);

    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-6">
                    Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KPI
                        title="الإيرادات"
                        value={data?.answer?.financial?.["إجمالي الإيرادات (المبيعات)"] || 0}
                    />
                    <KPI
                        title="الربح"
                        value={data?.answer?.financial?.["إجمالي صافي الأرباح"] || 0}
                    />
                    <KPI
                        title="الدوران"
                        value={data?.answer?.financial?.["معدل دوران المخزون (Turnover Ratio)"] || 0}
                    />
                </div>
            </div>
        </ProtectedRoute>
    );
}
