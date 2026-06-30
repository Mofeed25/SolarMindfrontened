"use client";

import { useEffect } from "react";
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

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

    return (
        <div className="flex w-full min-h-screen bg-[#0B192C]">
            {/* القائمة الجانبية عمودية وثابتة */}
            <Sidebar /> 
            
            {/* المحتوى يمتد بجانبها بمرونة */}
            <div className="flex-1 p-8 text-white">
                {children}
            </div>
        </div>
    );
}
