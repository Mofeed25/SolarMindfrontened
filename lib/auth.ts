export function setToken(token: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
    }
}

export function getToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("token");
    }
    return null; // القيمة الافتراضية أثناء البناء على السيرفر
}

export function logout() {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
    }
}
