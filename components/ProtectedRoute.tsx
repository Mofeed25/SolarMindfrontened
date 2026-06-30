"use client";

import { useEffect } from "react";
// التعديل للمسار النسبي (خروج خطوة واحدة للأعلى للدخول لمجلد lib)
import { getToken } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: any) {

    const router = useRouter();

    useEffect(() => {

        if (!getToken()) {
            router.push("/login");
        }

    }, []);

    return children;
}
