import { useState, useEffect } from 'react'

export default function ControlPanel() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const busMarker = document.getElementById('bus-marker')
    let pos = 0
    let interval
    if (busMarker) {
      interval = setInterval(() => {
        pos = (pos + 0.04) % (Math.PI * 2)
        const x = Math.sin(pos) * 12
        const y = Math.cos(pos) * 4
        busMarker.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
      }, 60)
    }
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const circles = document.querySelectorAll('circle[stroke-dashoffset]')
    circles.forEach((circle) => {
      const finalOffset = circle.getAttribute('stroke-dashoffset')
      circle.style.strokeDashoffset = '263.8'
      setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1.5s ease-out'
        circle.style.strokeDashoffset = finalOffset
      }, 300)
    })
  }, [])

  return (
    <div className="bg-[#fbf9f8] text-on-surface overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-md">
          <div className="h-16 transition-transform hover:scale-105">
            <img alt="Bidayah Logo" className="h-full object-contain" src="/assets/imgs/bidayah_kindergarten_logo/screen.png" />
          </div>
          <nav className="hidden lg:flex items-center gap-lg mx-md">
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="/">الرئيسية</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">من نحن</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="/programs">برامجنا</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="/contact">تواصل معنا</a>
            <a className="text-sm text-primary font-bold relative after:content-[''] after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-[3px] after:bg-primary" href="/control">لوحة التحكم</a>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <button className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
          </button>
          <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 w-72 border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full px-2 placeholder:text-on-surface-variant/60" placeholder="بحث عن تقارير، فواتير..." type="text" />
          </div>
          <div className="flex gap-base">
            <button className="p-2.5 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full ring-2 ring-white" />
            </button>
          </div>
          <div className="flex items-center gap-sm pr-md border-r border-outline-variant">
            <div className="text-left hidden md:block">
              <p className="text-sm font-bold text-on-surface">أ. محمد الأحمد</p>
              <p className="text-[12px] text-on-surface-variant">ولي أمر فهد</p>
            </div>
            <img className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkVNw4wOKSn7dZQ9J9t7HNNJhcSYLJlIpgZ03w9gaFC2w72O-j6iFq79jsvVzVI48Fw6I8X-_XSzcyrs8KjqFYY2M4viVoFpaPRv4_Ma15T5CYCLEd3fCZLiKTb8juyjcWUrmJF2-sC4n9ysNmsp-t8e0VXDGySCAEjROccEx4qz-yUpZ9gPjt8HfneCawY0O0U69AsFAnyJvZP-J6su_3DQ4aezA0aXzJF3YlFvtfV-RFN3JH9WlnzhKkmhGPPV1h2DIDssSt4NE" alt="User" />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40">
          <div className="flex flex-col px-margin-mobile py-4 gap-4 font-headline font-semibold bg-white border-b border-gray-100 shadow-lg">
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors pr-2" href="/">الرئيسية</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors pr-2" href="/about">من نحن</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors pr-2" href="/programs">برامجنا</a>
            <a className="text-sm text-on-surface-variant hover:text-primary transition-colors pr-2" href="/contact">تواصل معنا</a>
            <a className="text-sm text-primary font-bold pr-2" href="/control">لوحة التحكم</a>
            <hr className="border-outline-variant my-1" />
            {['التقارير اليومية', 'الحضور والغياب', 'تتبع الحافلة', 'مستوى التقدم', 'الفواتير'].map((item, i) => (
              <a key={i} className="flex items-center gap-sm text-on-surface-variant p-2 hover:text-primary transition-colors pr-2" href="#">
                <span className="material-symbols-outlined text-[20px]">{['assignment_turned_in', 'calendar_today', 'directions_bus', 'auto_stories', 'payments'][i]}</span>
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold w-full mt-2">سجل الآن</button>
          </div>
        </div>
      )}

      <aside className="h-screen w-64 fixed right-0 top-0 hidden lg:flex flex-col bg-white border-l border-outline-variant p-md gap-base z-40 pt-24">
        <div className="mb-lg px-base">
          <div className="flex items-center gap-sm p-3 bg-primary-fixed/30 rounded-xl border border-primary/10">
            <img className="w-11 h-11 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBfv0RnDjP34wbahK65JvCZNAebN-48RXAnlrEvEIo2WRLMXzEi3xpi8iQGjjQMIjGoHwBU-qE8xmvQnjrQZn5a9BnH5aa53YL4oX3kcxNuWq1YlfvqPoz1fgn8HwG6Sn9l5aDT4KpOl_H-hObx0sUQk47INNKlBYofmHhqXvkfBE1Zn0AI-vlYMeMFEvlR6uYehfiCZ-HUi6JK03Q58x9kCZ9ROfIbLjWFVWGcgPr5YMKaJb5Jf3XZf8l77rFjY9b1PFO7fQi3E" alt="Child" />
            <div>
              <h3 className="text-[13px] font-bold text-on-surface">فهد محمد</h3>
              <p className="text-[11px] text-on-surface-variant">المستوى التمهيدي</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-1.5">
          {[
            { icon: 'dashboard', label: 'الرئيسية', active: true },
            { icon: 'assignment_turned_in', label: 'التقارير اليومية' },
            { icon: 'calendar_today', label: 'الحضور والغياب' },
            { icon: 'directions_bus', label: 'تتبع الحافلة' },
            { icon: 'auto_stories', label: 'مستوى التقدم' },
            { icon: 'payments', label: 'الفواتير' },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-sm p-3 rounded-lg font-medium transition-all text-sm ${
                item.active
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 font-bold active:scale-[0.98]'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined ${item.active ? 'fill-icon' : ''}`}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-md border-t border-outline-variant">
          <div className="p-4 bg-secondary-container/20 rounded-xl text-center border border-secondary/10">
            <p className="text-[11px] font-bold text-secondary mb-2">تسجيل 2026 متاح الآن</p>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-[11px] font-bold w-full hover:brightness-110 transition-all">سجل الآن</button>
          </div>
        </div>
      </aside>

      <main className="lg:mr-64 pt-24 pb-24 lg:pb-md px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <section className="mb-lg">
            <div
              className="relative overflow-hidden rounded-2xl min-h-[260px] flex items-center p-xl text-white shadow-lg"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEddT5V7QsBOgJQkia3T8SnTZgk8AhJHd9LBJVWmgcNs3SqteFZNObUt7YBMhSa3i3Bgz07KwvkcwFqw5xSv2gzv8-G0mMN_vq9EfEG6X6ud1NfdBvoRgNx792TW5s0Ow3MtVPtaPL3ugulic5GHgipbMx1gzCuUkZ2oljKXP9sbIGD0MZzpJiOfZaVBalxps-6TmD6H-eBvQAFTx_jJMOPTJcFsQKJpjJfchQI2-PN-07iyWGw2Ig_19gjYrfxeWnl9XjuYv6UZA')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 bg-black/10 backdrop-blur-[2px] p-md rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">أهلاً بك في يوم سعيد، يا فهد! ☀️</h1>
                <p className="text-lg opacity-100 max-w-xl font-semibold drop-shadow-md">نتمنى لك ولطفلك يوماً مليئاً بالاكتشاف والنمو في روضة بداية.</p>
                <div className="mt-6">
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined">photo_library</span>
                    عرض صور اليوم
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 bg-white rounded-xl p-md shadow-lg border border-outline-variant/40">
              <div className="flex justify-between items-center mb-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">directions_bus</span>
                  </div>
                  <h2 className="text-xl font-bold text-on-surface">تتبع الحافلة</h2>
                </div>
                <span className="px-4 py-1.5 bg-tertiary-container/30 text-tertiary rounded-full text-[12px] font-bold animate-pulse flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-tertiary rounded-full" />
                  مباشر: في الطريق
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="md:col-span-2 relative h-[300px] rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low">
                  <div className="absolute inset-0 bg-gray-200 opacity-80 flex items-center justify-center">
                    <span className="text-on-surface-variant">خريطة تتبع الحافلة</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" id="bus-marker">
                    <div className="bg-primary text-white p-3 rounded-full shadow-xl border-4 border-white">
                      <span className="material-symbols-outlined">directions_bus</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur px-3 py-1 rounded-lg shadow-sm mt-2 text-[11px] font-bold border border-primary/20">حافلة رقم ١٢</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-surface-container-low rounded-xl border-r-4 border-primary">
                    <p className="text-[11px] text-on-surface-variant font-bold mb-1 uppercase tracking-wider">الوجهة القادمة</p>
                    <p className="font-bold text-lg text-on-surface">منزل فهد</p>
                    <p className="text-[12px] text-primary mt-1 font-bold">الوصول المتوقع: ٠٢:٤٥ م</p>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-xl flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPmo5RFUQJXeFXS5yBevBTobiC5Q_l_DODDEel4kUwHS2t7WAS3otiKMsZw0L24wBQfiHOzHsUSxHUuP2RsbVbCfjbG_IZImkXoZ_2-ea8QYMDaxK-ULjpzKTjc-t9PNfkz4cEYjmDcj75fYoKgXBdRaa5a5GMqO9K_wbczSBqRtYrleisjBDJHR7g1nPP6VRM4Nt8YD_0pKI16hRzWzPqjxPMRpsM76uPyKSYClGr7z0c-0R82ka8xvpUzXsD85_CBSSQGg5wfY" alt="Driver" />
                    <div>
                      <p className="text-[11px] text-on-surface-variant font-medium">السائق</p>
                      <p className="font-bold text-on-surface">أبو خالد</p>
                    </div>
                  </div>
                  <button className="mt-auto w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                    اتصال بالسائق
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-white rounded-xl p-md shadow-lg border border-outline-variant/40 flex flex-col">
              <div className="flex items-center gap-3 mb-md">
                <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-error">campaign</span>
                </div>
                <h2 className="text-xl font-bold text-on-surface">تنبيهات هامة</h2>
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="p-4 bg-secondary-container/10 border border-secondary/10 rounded-xl flex gap-3 group hover:bg-secondary-container/20 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-secondary mt-0.5">payments</span>
                  <div>
                    <p className="font-bold text-on-surface text-sm">قسط شهر يناير ٢٠٢٦</p>
                    <p className="text-[12px] text-on-surface-variant">تاريخ الاستحقاق: غداً</p>
                    <button className="mt-2 text-[12px] font-extrabold text-secondary hover:underline flex items-center gap-1">سدد الآن <span className="material-symbols-outlined text-[14px]">arrow_back</span></button>
                  </div>
                </div>
                <div className="p-4 bg-tertiary-container/10 border border-tertiary/10 rounded-xl flex gap-3 group hover:bg-tertiary-container/20 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-tertiary mt-0.5">event</span>
                  <div>
                    <p className="font-bold text-on-surface text-sm">يوم المهن العالمي</p>
                    <p className="text-[12px] text-on-surface-variant">الخميس القادم - يرجى تجهيز الزي</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 py-2 border border-primary/20 text-primary font-bold text-sm rounded-lg flex items-center justify-center gap-2 group hover:bg-primary-fixed/20 transition-colors">
                عرض جميع التنبيهات
                <span className="material-symbols-outlined text-[18px] rotate-180 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-white rounded-xl p-md shadow-lg border border-outline-variant/40">
              <div className="flex justify-between items-center mb-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">description</span>
                  </div>
                  <h2 className="text-xl font-bold text-on-surface">تقرير اليوم</h2>
                </div>
                <span className="text-[12px] text-on-surface-variant font-medium bg-surface-container-low px-3 py-1 rounded-full">١٢ يناير، ٢٠٢٦</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: 'restaurant', color: 'text-secondary', label: 'الوجبات', value: 'أنهى وجبته بالكامل 🥗' },
                  { icon: 'bedtime', color: 'text-primary', label: 'القيلولة', value: '٤٥ دقيقة - نوم هادئ' },
                  { icon: 'brush', color: 'text-tertiary', label: 'النشاط المفضل', value: 'الرسم المائي' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${r.color} text-[22px]`}>{r.icon}</span>
                      <span className="font-bold text-sm text-on-surface">{r.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-on-surface-variant">{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl italic text-on-surface-variant text-sm border-r-4 border-primary/40 relative">
                <span className="material-symbols-outlined absolute -top-3 -right-2 text-primary/20 text-3xl opacity-50">format_quote</span>
                "فهد كان متفاعلاً جداً اليوم ومبدعاً في حصة الرسم!" - المعلمة سارة
              </div>
              <button className="mt-4 w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-lg" style={{ backgroundColor: '#e91e63', color: 'white' }}>
                <span className="material-symbols-outlined">forum</span>
                مراسلة المعلمة
              </button>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-7 bg-white rounded-xl p-md shadow-lg border border-outline-variant/40">
              <div className="flex justify-between items-center mb-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                  </div>
                  <h2 className="text-xl font-bold text-on-surface">التعلم والتطور</h2>
                </div>
                <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                  تقرير مفصل
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'اللغوية', pct: 80, color: 'text-primary', stroke: '#005da7', offset: 52.7, badge: 'ممتاز' },
                  { label: 'الحركية', pct: 65, color: 'text-secondary', stroke: '#705d00', offset: 92.3, badge: 'جيد جداً' },
                  { label: 'الاجتماعية', pct: 90, color: 'text-tertiary', stroke: '#006b28', offset: 26.3, badge: 'متفوق' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-2">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-outline-variant/20" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="8" />
                        <circle cx="48" cy="48" fill="transparent" r="42" stroke={item.stroke} strokeDasharray="263.8" strokeDashoffset={item.offset} strokeLinecap="round" strokeWidth="8" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-bold text-xl text-on-surface">{item.pct}%</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm text-on-surface">{item.label}</p>
                      <span className={`text-[11px] px-2.5 py-0.5 bg-opacity-10 rounded-full font-bold ${item.color}`}>{item.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-surface-container-low p-5 rounded-xl border border-outline-variant/20">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm font-bold text-on-surface">مستوى النمو (Sprout Level 4)</p>
                    <p className="text-[11px] text-on-surface-variant font-medium">تم إكمال ٤ من ٥ مراحل هذا الفصل</p>
                  </div>
                  <span className="text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">75%</span>
                </div>
                <div className="w-full bg-outline-variant/30 h-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-3/4 rounded-full shadow-sm shadow-primary/30 transition-all duration-1500 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-white/95 backdrop-blur-md border-t border-outline-variant z-50 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {[
          { icon: 'home', label: 'الرئيسية', active: true },
          { icon: 'description', label: 'التقارير' },
          { icon: 'trending_up', label: 'التقدم' },
          { icon: 'payments', label: 'الفواتير' },
        ].map((item, i) => (
          <a key={i} className={`flex flex-col items-center justify-center ${item.active ? 'text-primary' : 'text-on-surface-variant'}`} href="#">
            <span className={`material-symbols-outlined ${item.active ? 'fill-icon' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
