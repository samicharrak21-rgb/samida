# الديوان الإسلامي v13

تطبيق إسلامي كامل يعمل بدون إنترنت (عدا مواقيت الصلاة).

## المحتوى
- 🌅 أذكار الصباح والمساء (مع عدّاد لكل ذكر)
- 📿 السبحة الإلكترونية (5 أذكار)
- 🤲 الأدعية اليومية
- ✨ أسماء الله الحسنى الـ99
- 🕋 اتجاه القبلة (يحتاج صلاحية موقع)
- 🕌 مواقيت الصلاة (يُخزَّن محلياً ليوم كامل)

## بناء APK
1. ارفع المجلد إلى GitHub repo
2. اذهب إلى **Actions** → **Build Android APK** → **Run workflow**
3. انتظر 5-7 دقائق
4. حمّل `islamic-diwan-v13-apk` من Artifacts
5. ثبّت على Android (فعّل "مصادر مجهولة")

## التطوير المحلي
```bash
npm install
npm run build
npx cap add android
npx cap sync
npx cap open android
```

## ما الذي تغيّر في v13؟
- ✅ بُني من الصفر بدون أي تعقيدات
- ✅ Capacitor 5.7.8 LTS (الأكثر استقراراً)
- ✅ Vite `base: "./"` لمسارات نسبية تعمل في WebView
- ✅ بدون ErrorBoundary، بدون splash plugin، بدون status-bar plugin
- ✅ بدون tailwind/shadcn (CSS خام لتقليل حجم الـ JS bundle)
- ✅ لا توجد محاولات الوصول إلى Capacitor قبل جاهزية الـ bridge
