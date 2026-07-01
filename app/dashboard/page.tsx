"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import KPI from "../../components/KPI";
// نقوم باستيراد دالة fetch جديدة أو نستخدم fetch مباشرة
import { getTenant } from "../../lib/tenant";
import { getToken } from "../../lib/auth";

export default function Dashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                // استخدام رابط الباك إند المباشر
                const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://backened-ilnu.onrender.com";
                
                const res = await fetch(`${BASE_URL}/dashboard`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(getToken() ? { "Authorization": `Bearer ${getToken()}` } : {}),
                        "x-tenant-id": getTenant() || ""
                    }
                });

                if (res.ok) {
                    const result = await res.json();
                    setData(result);
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-6">
                    Dashboard
                </h1>
                
                {loading ? (
                    <p className="text-gray-400">جاري تحميل البيانات...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <KPI
                            title="الإيرادات"
                            value={data?.["إجمالي الإيرادات (المبيعات)"] || 0}
                        />
                        <KPI
                            title="الربح"
                            value={data?.["إجمالي صافي الأرباح"] || 0}
                        />
                        <KPI
                            title="الدوران"
                            value={data?.["معدل دوران المخزون (Turnover Ratio)"] || 0}
                        />
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
