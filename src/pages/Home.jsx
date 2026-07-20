import { useEffect, useRef } from 'react'

const features = [
  {
    img: '/assets/imgs/home/a_modern_3d_icon_or_illustration_for_a_mobile_app_showing_a_parent_looking_at/screen.png',
    title: 'كن حاضراً في كل لحظة من يوم طفلك',
    desc: 'منصة رقمية متكاملة تتيح لك متابعة طفلك لحظة بلحظة من هاتفك.',
    bg: 'bg-[#E3F2FD]',
    color: 'text-primary',
  },
  {
    img: '/assets/imgs/home/an_illustration_of_a_world_globe_surrounded_by_arabic_calligraphy_and/screen.png',
    title: 'نجمع بين المناهج العالمية وقيمنا',
    desc: 'نعتمد أحدث المناهج العالمية \'مونتيسوري\' مع تكييفها لتناسب ثقافتنا.',
    bg: 'bg-[#F1F8E9]',
    color: 'text-tertiary',
  },
  {
    img: '/assets/imgs/home/a_professional_architectural_view_of_a_safe_modern_indoor_playground_with_soft/screen.png',
    title: 'مساحة آمنة',
    desc: 'مرافق مصممة بعناية لتوفير بيئة آمنة تحفز الإبداع والاستكشاف.',
    bg: 'bg-[#FFFDE7]',
    color: 'text-secondary',
  },
  {
    img: '/assets/imgs/home/a_friendly_female_teacher_smiling_and_helping_a_small_child_with_a_drawing/screen.png',
    title: 'كادر تعليمي مؤهل وشغوف',
    desc: 'فريقنا يضم نخبة من المعلمات المؤهلات أكاديمياً ويخضعن لتدريبات مستمرة.',
    bg: 'bg-[#F3E5F5]',
    color: 'text-purple-700',
  },
  {
    img: '/assets/imgs/home/a_modern_colorful_school_bus_with_a_gps_location_pin_icon_floating_above_it/screen.png',
    title: 'باصات آمنة بتتبع ذكي',
    desc: 'سائقون مدربون ومرافقات مؤهلات ويمكنك تتبع موقع الباص عبر GPS.',
    bg: 'bg-[#FFF3E0]',
    color: 'text-orange-700',
  },
  {
    img: '/assets/imgs/home/a_beautifully_arranged_plate_of_healthy_colorful_food_for_kids_fruits/screen.png',
    title: 'تغذية صحية ومتوازنة',
    desc: 'قائمة طعام يومية متنوعة وصحية يشرف عليها أخصائي تغذية.',
    bg: 'bg-[#E0F2F1]',
    color: 'text-teal-700',
  },
  {
    img: '/assets/imgs/home/a_collage_of_icons_representing_sports_ball_music_note_languages_speech_bubble/screen.png',
    title: 'نكشف مواهب طفلك ونصقلها',
    desc: 'برنامج غني بالأنشطة: رياضة، موسيقى، لغات وبرمجة للأطفال.',
    bg: 'bg-[#E8EAF6]',
    color: 'text-indigo-700',
  },
]

const testimonials = [
  {
    quote: 'كنت قلقة عند إدخال أحمد الروضة لأول مرة لكن من اليوم الأول شعرت بالفرق. المنصة الرقمية غيرت حياتي. أستطيع متابعة كل تفصيل وأشعر أنني معه طوال الوقت',
    name: 'أم أحمد',
    detail: 'عمر الطفل 4 سنوات • منذ سنتين',
    border: 'border-primary',
    iconColor: 'text-primary/10',
  },
  {
    quote: 'ما يميز هذه الروضة هو الاحتراف والشفافية. المنصة تتيح لي متابعة كل واحد منهما بشكل منفصل. أنصح بها كل أهل يبحثون عن روضة تجمع بين التعليم والمتابعة المستمرة',
    name: 'أب لسارة وليان',
    detail: 'ولي أمر منذ 3 سنوات',
    border: 'border-soft-green',
    iconColor: 'text-soft-green/10',
  },
  {
    quote: 'نور كانت خجولة ولا تتفاعل مع الآخرين، بعد 6 أشهر فقط أصبحت طفلة مختلفة، واثقة واجتماعية. شكراً لكم، هذا العمل رائع',
    name: 'أم لنور',
    detail: 'العمر 3 سنوات • منذ سنة',
    border: 'border-sunny-yellow',
    iconColor: 'text-sunny-yellow/10',
  },
]

export default function Home() {
  const sliderRef = useRef(null)
  const currentRef = useRef(0)
  const total = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      currentRef.current = (currentRef.current + 1) % total
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${currentRef.current * 100}%)`
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (dir) => {
    if (dir === 'next') currentRef.current = (currentRef.current + 1) % total
    else currentRef.current = (currentRef.current - 1 + total) % total
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentRef.current * 100}%)`
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('entrance-anim')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.entrance-anim').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-32">
      <section className="relative min-h-[85vh] flex items-center px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-sky-blue/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-sunny-yellow/20 rounded-xl animate-float-alt" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-soft-green/30 rotate-45 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-sunny-yellow/30 animate-float-alt" style={{ animationDelay: '2.5s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <div className="absolute top-20 left-1/2 w-10 h-10 bg-soft-green/20 rounded-lg animate-float-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-sky-blue/10 rounded-full animate-float-alt" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-10 w-8 h-8 bg-primary/20 rotate-12 animate-float" style={{ animationDelay: '4s' }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
          <div className="order-2 lg:order-1 entrance-anim">
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-tight mb-6 font-headline">
              نربي <span className="text-primary">الفضول</span>،<br />
              نبني <span className="text-soft-green">المستقبل</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              مرحباً بكم في روضة بداية، حيث كل يوم هو مغامرة جديدة في التعلم. نوفر بيئة آمنة وممتعة لصغاركم للنمو والازدهار.
            </p>
            <div className="flex flex-wrap gap-4 font-headline">
              <button className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-xl transition-all flex items-center gap-2">
                استكشف برامجنا
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="border-2 border-primary text-primary px-10 py-4 rounded-full text-xl font-bold hover:bg-primary/5 transition-all">
                طلب زيارة
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative entrance-anim" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 blob-shape overflow-hidden shadow-2xl border-[12px] border-white max-w-lg mx-auto">
              <img alt="Happy kids at Bidayah" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgeM8OCOtUeEirMfgamUTDH_45MYLaBFG2ET7OkLAmZsJW6RlyHn-qfkwcGXSUvFsv9z0r5vt5v6-mzGDae8yPIHG84zUuj6N7o6I46TfahH4BGF2hN3aDDAM6U3Sdt1mtfogQnGPkZW-_WAl3st5EzBc_38lJnhZpWFqwzO0k86olPAKpcY09Lx5kOh3FQ7E-Zrnqco3GtVyP3QSMlAmYrcS4jKVl7Y5vwESLIZUHIzkduXakZ3CqoOFpsbAce4Zw8j9YmpHcqQ" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-16 entrance-anim">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">لماذا يختار الأهالي "بداية"؟</h2>
            <div className="w-24 h-1.5 bg-sunny-yellow mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`group ${f.bg} p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl entrance-anim`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-6 h-48 flex items-center justify-center">
                  <img alt={f.title} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" src={f.img} />
                </div>
                <h3 className={`text-xl font-bold ${f.color} mb-4 text-center`}>{f.title}</h3>
                <p className="text-on-surface-variant italic text-sm leading-relaxed text-center">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="text-center mb-16 entrance-anim">
            <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">قالوا عن روضة بداية</h2>
            <p className="text-on-surface-variant">قصص نجاح نعتز بها من شركائنا في الرحلة</p>
          </div>
          <div className="relative px-12">
            <div className="overflow-hidden">
              <div className="testimonial-slider" ref={sliderRef} style={{ transform: 'translateX(0%)' }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full px-4">
                    <div className={`bg-white p-12 rounded-3xl shadow-lg text-center border-t-8 ${t.border} relative`}>
                      <span className={`material-symbols-outlined ${t.iconColor} text-8xl absolute top-4 right-4`}>format_quote</span>
                      <p className="text-2xl text-on-surface mb-8 leading-relaxed font-medium">"{t.quote}"</p>
                      <div className="flex flex-col items-center">
                        <p className="font-bold text-xl text-primary font-headline">{t.name}</p>
                        <p className="text-on-surface-variant text-sm">{t.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10"
              onClick={() => goTo('next')}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10"
              onClick={() => goTo('prev')}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
