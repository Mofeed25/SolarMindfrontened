const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://backened-ilnu.onrender.com";

// دالة الشات
export async function sendMessage(message: string, token?: string, tenantId?: string) {
    try {
        const res = await fetch(`${BASE_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { "Authorization": `Bearer ${token}` } : {}),
                ...(tenantId ? { "x-tenant-id": tenantId } : {})
            },
            body: JSON.stringify({ message })
        });
        return await res.json();
    } catch (error) {
        return { status: "error", message: "Network error" };
    }
}

// دالة الداشبورد
export async function getDashboardData(token?: string, tenantId?: string) {
    try {
        const res = await fetch(`${BASE_URL}/dashboard`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { "Authorization": `Bearer ${token}` } : {}),
                ...(tenantId ? { "x-tenant-id": tenantId } : {})
            }
        });
        return await res.json();
    } catch (error) {
        return null;
    }
}
