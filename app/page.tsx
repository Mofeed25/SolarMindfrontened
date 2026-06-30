import { redirect } from "next/navigation";

export default function HomePage() {
    // بمجرد دخول المستخدم للرابط الرئيسي، يتم تحويله تلقائياً لصفحة تسجيل الدخول
    redirect("/login");
}
