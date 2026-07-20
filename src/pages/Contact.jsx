import { useState } from 'react'

export default function Contact() {
  const [step, setStep] = useState(0)
  const steps = 3

  const handleNext = () => {
    if (step < steps - 1) setStep(step + 1)
    else alert('شكراً لاهتمامكم! سنتواصل معكم قريباً.')
  }

  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const scrollToForm = () => {
    document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="pt-32">
      <section className="relative px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl text-primary mb-md leading-tight font-headline font-extrabold">يسعدنا انضمامكم لعائلة بداية</h1>
            <p className="text-lg text-on-surface-variant mb-lg">نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في بدء رحلة تعليمية ملهمة لأطفالكم. تواصلوا معنا اليوم للحصول على تجربة فريدة.</p>
            <div className="flex gap-md flex-wrap">
              <button className="bg-[#ff6b6b] text-white px-12 py-4 rounded-xl text-xl hover:scale-105 transition-transform flex items-center gap-2" onClick={scrollToForm}>
                <span className="material-symbols-outlined">edit_note</span>
                سجل الآن
              </button>
              <button className="bg-[#4ecdc4] text-white px-12 py-4 rounded-xl text-xl flex items-center gap-2 hover:scale-105 transition-transform" style={{ borderColor: '#4ecdc4' }}>
                <span className="material-symbols-outlined">event</span>
                احجز جولة مجانية
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-primary-fixed/20 blur-3xl rounded-full scale-75 -z-10" />
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-8 bg-white rounded-3xl p-lg shadow-xl border border-surface-container-highest bg-primary/5" id="registration-section">
          <div className="flex items-center justify-between mb-xl">
            <h2 className="text-2xl font-bold text-on-surface">استمارة التسجيل</h2>
            <div className="flex gap-2 items-center">
              {[0, 1, 2].map((i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= i ? 'step-active' : 'step-inactive'}`}>
                    {i + 1}
                  </span>
                  {i < 2 && <span className="w-8 h-1 bg-outline-variant rounded-full" />}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-md">
            {step === 0 && (
              <div className="fade-enter grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">اسم ولي الأمر</label>
                  <input className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all focus:border-tertiary" placeholder="أدخل الاسم الثلاثي" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">رقم الهاتف</label>
                  <input className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all text-right focus:border-tertiary" dir="ltr" placeholder="05XXXXXXXX" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">البريد الإلكتروني</label>
                  <input className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all focus:border-tertiary" placeholder="example@mail.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">صلة القرابة</label>
                  <select className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all appearance-none focus:border-tertiary">
                    <option>أب</option>
                    <option>أم</option>
                    <option>وصي قانوني</option>
                  </select>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="fade-enter grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">اسم الطفل</label>
                  <input className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all focus:border-tertiary" placeholder="أدخل اسم الطفل" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant block">عمر الطفل</label>
                  <input className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all focus:border-tertiary" placeholder="مثال: 4" type="number" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-bold text-sm text-on-surface-variant block">ملاحظات صحية</label>
                  <textarea className="w-full p-md bg-surface-container-low rounded-xl border-2 border-transparent outline-none transition-all focus:border-tertiary" placeholder="أي حساسيات أو متطلبات خاصة..." rows="3" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="fade-enter grid grid-cols-1 md:grid-cols-3 gap-md">
                {['دوام كامل', 'دوام جزئي', 'احتياجات خاصة'].map((label, i) => (
                  <label key={i} className="relative block group cursor-pointer">
                    <input defaultChecked={i === 0} className="peer sr-only" name="service" type="radio" />
                    <div className="p-md h-full border-2 border-outline-variant rounded-2xl peer-checked:border-primary peer-checked:bg-primary-container/10 transition-all text-center">
                      <span className={`material-symbols-outlined text-4xl mb-2 ${i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : 'text-tertiary'}`}>
                        {i === 0 ? 'schedule' : i === 1 ? 'early_on' : 'volunteer_activism'}
                      </span>
                      <p className="font-bold text-sm">{label}</p>
                    </div>
                  </label>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-xl pt-lg border-t border-surface-container-highest">
              <button
                className={`${step === 0 ? 'invisible' : ''} text-outline-variant hover:text-on-surface flex items-center gap-2 transition-colors`}
                onClick={handlePrev}
                type="button"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
                السابق
              </button>
              <div className="flex-grow" />
              <button
                className="text-white px-xl py-md rounded-xl font-bold hover:shadow-lg transition-all text-xl"
                style={{ backgroundColor: step === steps - 1 ? '#ffd93d' : '#005da7', color: step === steps - 1 ? '#1b1c1c' : '#ffffff', padding: '16px 80px' }}
                onClick={handleNext}
                type="button"
              >
                {step === steps - 1 ? 'إرسال الطلب' : 'التالي'}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-gutter">
          <div className="bg-[#006b28] text-white rounded-3xl p-lg shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-sm">حجز مقابلة</h3>
              <p className="opacity-90 mb-lg">تفضل بزيارتنا للتعرف على فريقنا المتميز ومرافقنا التعليمية المجهزة بأحدث الوسائل.</p>
              <button className="w-full bg-[#4ecdc4] text-white py-md rounded-xl font-bold text-xl hover:bg-[#4ecdc4]/90 transition-colors flex justify-center items-center gap-2" style={{ padding: '16px' }}>
                <span className="material-symbols-outlined">calendar_month</span>
                اختر موعداً مناسباً
              </button>
            </div>
          </div>

          <div className="bg-surface-container rounded-3xl p-lg border border-outline-variant/20">
            <h3 className="font-bold text-sm text-on-surface-variant mb-lg uppercase tracking-wider">معلومات التواصل</h3>
            <div className="space-y-md">
              {[
                { icon: 'call', label: 'اتصل بنا', value: '+971 12 345 6789', bg: 'bg-primary/10 text-primary' },
                { icon: 'location_on', label: 'الموقع', value: 'شارع التعليم، دبي، الإمارات', bg: 'bg-secondary/10 text-secondary' },
                { icon: 'mail', label: 'البريد الإلكتروني', value: 'hello@bidayah.ae', bg: 'bg-tertiary/10 text-tertiary' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-md p-sm hover:bg-surface-bright rounded-2xl transition-colors cursor-pointer">
                  <div className={`${c.bg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-outline">{c.label}</p>
                    <p className="font-bold text-sm text-on-surface">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-lg pt-lg border-t border-outline-variant/30 flex justify-center gap-lg">
              {['instagram', 'twitter', 'whatsapp'].map((social, i) => (
                <a key={i} className="w-12 h-12 rounded-full border-2 border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all hover:-translate-y-1" href="#">
                  <img alt={social} className="w-6 h-6" src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDGOQmln-AmfoIZsiDaxkUnvc_kNKdPm1RJ0K6-Km7znt4QrdAnoz-kiyaLKFVVX-w6XygwzqplmFvHnC6PHeLQ8aUHkIlGqi6Y2yvUpS75tIw7ic2g2fRBnmZM1c2ES_F0H3JrvRYiE7WKI_8Fv1MoEo0Gys6T4Sj0ZIz9Ecz0n851K6HL6BASY4z1SoWgGX-LQTdNqYqtxrgogCyfBvHseTJQrFLMe5BGOgMldQGp0XSt8mobzABOCjiwM_qQaIUu1_jmiEX8I6s`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border-4 border-surface-container-highest shadow-inner group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAxAIbkeYdz-FTpSA3WPMqo_KkK_uYnjnSK3F02U7foRV6p-a0LOVW07D_NlIjQyB4DA27HEYeJTnUwCQ53iUGxoQ8WPNI_Wm7x-sT6a0DPOWPL-j4pXW0oCdTm34pi7jiIlWPETZrujJ-1jpir9GUliI6IZw0Y7Ycw2J-xmuy7e8gjVHhXuR9r7zdVkFJmlQkVxq5YcsNs5YtoQ2ElYGQXajDIDxC7GRWRShKtV0NolCKdx6tq1Mwh9JazoovCOzCP1tvr1Zzy1k" alt="Map" />
          <div className="absolute bottom-6 right-6 z-20 glass-card p-lg rounded-2xl max-w-xs">
            <h4 className="font-bold text-primary mb-2">تفضل بزيارتنا</h4>
            <p className="text-sm text-on-surface-variant">نحن متواجدون من الأحد إلى الخميس، من الساعة 7:30 صباحاً وحتى 3:00 مساءً.</p>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto mb-xl">
        <div className="text-center mb-xl">
          <h2 className="text-4xl font-extrabold text-primary mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-on-surface-variant">كل ما تود معرفته عن رحلة طفلك في روضة بداية</p>
        </div>
        <div className="space-y-md">
          {[
            { q: 'ما هي ساعات العمل؟', a: 'نستقبل أطفالنا بكل حب من الأحد إلى الخميس، من الساعة 7:30 صباحاً وحتى 3:00 مساءً.' },
            { q: 'هل يوجد فترة تجريبية؟', a: 'نعم، نحن نؤمن بأهمية الارتياح النفسي، لذا نقدم يوماً استكشافياً مجانياً للطفل ليتعرف على البيئة والمعلمات قبل التسجيل النهائي.' },
            { q: 'كيف اتابع طفلي؟', a: 'يمكنكم متابعة تقارير طفلك اليومية وصوره وتطوره عبر منصتنا الرقمية الذكية (لوحة تحكم ولي الأمر) المتاحة كتطبيق على هاتفك.' },
            { q: 'ما هي الرسوم؟', a: 'تختلف الرسوم حسب البرنامج المختار والفئة العمرية (حضانة، تمهيدي، روضة). يرجى التواصل معنا أو زيارة المركز للحصول على قائمة الرسوم التفصيلية المحدثة.' },
          ].map((faq, i) => (
            <details key={i} className="group bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden transition-all hover:bg-white hover:shadow-lg">
              <summary className="flex justify-between items-center p-lg cursor-pointer list-none font-bold text-xl text-on-surface">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">expand_more</span>
              </summary>
              <div className="px-lg pb-lg text-lg text-on-surface-variant leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
