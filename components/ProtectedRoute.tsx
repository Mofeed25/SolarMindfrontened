"use client";

import { useEffect } from "react";
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: any) {
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push("/login");
        }
    }, []);

    if (typeof window !== "undefined" && !getToken()) {
        return null;
    }

    // نمرر المحتوى مباشرة دون تكرار حاويات الـ flex أو الـ Sidebar هنا
    return <>{children}</>;
}
