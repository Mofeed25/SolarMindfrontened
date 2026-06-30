export function setTenant(id: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("tenant_id", id);
    }
}

export function getTenant() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("tenant_id") || "default";
    }
    return "default"; // القيمة الافتراضية أثناء البناء على السيرفر
}
