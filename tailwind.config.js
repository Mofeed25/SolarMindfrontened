/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // مراقبة الصفحات داخل مجلد app
    "./components/**/*.{js,ts,jsx,tsx}", // مراقبة المكونات داخل components
    "./styles/**/*.css"                  // مراقبة ملفات التنسيق
  ],
  theme: {
    extend: {
      colors: {
        // إضافة الألوان المخصصة لمشروعك للوصول إليها بسهولة
        brandDark: "#0B192C",
        brandBlue: "#0F2A4A",
        brandCyan: "#00D4FF"
      }
    },
  },
  plugins: [],
}
