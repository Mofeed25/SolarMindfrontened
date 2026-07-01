"use client";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function SettingsPage() {
    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-[#00D4FF] text-2xl font-bold mb-4">Settings</h1>
                <p className="text-gray-400">إعدادات الحساب والنظام تظهر هنا...</p>
            </div>
        </ProtectedRoute>
    );
}
