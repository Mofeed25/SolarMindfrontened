// أضف هذه الدالة إلى ملف lib/api.ts
export async function getDashboardData(token?: string, tenantId?: string) {
    try {
        const res = await fetch(`${BASE_URL}/dashboard`, { // تأكد من أن هذا المسار هو الصحيح في الباك إند
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
