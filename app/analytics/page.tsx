"use client";

import ProtectedRoute from "../../components/ProtectedRoute";

export default function AnalyticsPage() {
    return (
        <ProtectedRoute>
            <div className="p-2">
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-6">
                    Analytics
                </h1>
                
                {/* هنا ستضع لاحقاً الرسوم البيانية أو جداول البيانات */}
                <div className="card">
                    <p className="text-gray-400">
                        صفحة التحليلات قيد التطوير... قريباً ستظهر البيانات هنا.
                    </p>
                </div>
            </div>
        </ProtectedRoute>
    );
}
