"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import KPI from "../../components/KPI";
import { getDashboardData } from "../../lib/api"; // الدالة الجديدة
import { getTenant } from "../../lib/tenant";
import { getToken } from "../../lib/auth";

export default function Dashboard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function load() {
            const res = await getDashboardData(getToken() || undefined, getTenant());
            console.log("Dashboard Response:", res); // 👈 هذا السطر سيكشف لنا لماذا تظهر أصفاراً
            setData(res);
        }
        load();
    }, []);

    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KPI title="الإيرادات" value={data?.financial?.revenue || 0} />
                    <KPI title="الربح" value={data?.financial?.profit || 0} />
                    <KPI title="الدوران" value={data?.financial?.turnover || 0} />
                </div>
            </div>
        </ProtectedRoute>
    );
}
