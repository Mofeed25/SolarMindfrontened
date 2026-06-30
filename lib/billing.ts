export function getPlan() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("plan") || "free";
    }
    return "free"; // القيمة الافتراضية أثناء البناء على السيرفر
}

export function setPlan(plan: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("plan", plan);
    }
}

export function isPro() {
    return getPlan() === "pro";
}
