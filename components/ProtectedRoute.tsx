"use client";

import { useEffect } from "react";
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar"; // 👈 استدعاء الـ Sidebar هنا ليظهر للمسجلين فقط

export default function ProtectedRoute({ children }: any) {
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push("/login");
        }
    }, []);

    // حماية إضافية لمنع وميض العناصر قبل التحقق من التوكن
    if (typeof window !== "undefined" && !getToken()) {
        return null;
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar /> {/* 👈 الـ Sidebar مدمج هنا الآن ويحيط بالصفحات الداخلية فقط */}
            <div className="flex-1 p-8">{children}</div>
        </div>
    );
}
