import { useEffect } from 'react'

const educators = [
  {
    img: '/assets/imgs/about/professional_photography_of_a_young_saudi_female_educator_friendly_and_2/screen.png',
    name: 'أ. منى العتيبي',
    role: 'مديرة الروضة',
    detail: 'الخبرة:+15سنة - التخصص: القيادة التعليمية',
    quote: '"كل طفل يحمل داخله نجمة، مهمتنا أن نساعد هذه النجمة على التألق."',
    border: 'border-soft-green',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_young_saudi_female_educator_friendly_and_1/screen.png',
    name: 'أ. سارة الحربي',
    role: 'خبير منتسوري',
    detail: 'الخبرة +12 سنة',
    quote: '"التعليم ليس حشواً للمعلومات بل إشعالاً للشغف."',
    border: 'border-sunny-yellow',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_kind_saudi_female_preschool_teacher_sitting_on_a/screen.png',
    name: 'نور القحطاني',
    role: 'معلمة حضانة',
    detail: 'الخبرة :+8 سنوات - التخصص: التربية المبكرة',
    quote: '"أطفال الحضانة لا يحتاجون معلمة.. يحتاجون حضناً دافئاً وقلباً يحبهم."',
    border: 'border-soft-pink',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_friendly_female_teacher_modern_business_casual/screen.png',
    name: 'هند الشمري',
    role: 'معلمة الروضة',
    detail: 'الخبرة:+9 سنوات - التخصص:التحضير للمدرسة',
    quote: '"لا نجهز الأطفال للمدرسة فقط.. نجهزهم للحياة."',
    border: 'border-sky-blue',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_saudi_female_school_nutritionist_wearing_a/screen.png',
    name: 'د. عائشة الزهراني',
    role: 'أخصائية تغذية',
    detail: 'الخبرة:+6 سنوات - التخصص: التغذية العلاجية',
    quote: '"الصحة تبدأ من الطبق.. كل قضمة تبني مستقبلاً."',
    border: 'border-tertiary',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_young_friendly_female_educator_modern/screen.png',
    name: 'أ. دانا السبيعي',
    role: 'أخصائية نفسية',
    detail: 'الخبرة: +4 سنوات - التخصص:علم نفس الطفل',
    quote: '"كل سلوك رسالة.. مهمتنا أن نفهم ما يقوله الطفل."',
    border: 'border-secondary',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_saudi_female_activity_coordinator_energetic_and/screen.png',
    name: 'أ. غادة الحارثي',
    role: 'منسقة أنشطة',
    detail: 'الخبرة:+7 سنوات - التخصص: تنمية المهارات',
    quote: '"الأنشطة ليست ترفاً.. هي جوهر التعليم.. الطفل يتعلم بما يفعل."',
    border: 'border-soft-purple',
  },
  {
    img: '/assets/imgs/about/professional_photography_of_a_young_saudi_female_speech_therapist_kind_and/screen.png',
    name: 'أ. رنا الجهني',
    role: 'أخصائية نطق وتخاطب',
    detail: 'الخبرة:+5 سنوات - التخصص: اضطرابات النطق',
    quote: '"كل كلمة يقولها الطفل بعد جهد هي انتصار.. لا نستعجل بل ندعم."',
    border: 'border-primary-container',
  },
]

const galleryItems = [
  { img: '/assets/imgs/about/high_quality_professional_photography_of_a_modern_colorful_and_sunlit_preschool/screen.png', title: 'القاعات التدريسية', overlayBg: 'bg-primary/60', color: '#ec4899' },
  { img: '/assets/imgs/about/high_quality_professional_photography_of_a_cozy_and_modern_kindergarten_library/screen.png', title: 'المكتبة', overlayBg: 'bg-secondary/60', color: 'text-purple-700' },
  { img: '/assets/imgs/about/professional_architectural_photography_of_a_safe_vibrant_and_modern_indoor/screen.png', title: 'الملعب الداخلي', overlayBg: 'bg-tertiary/60', color: 'text-orange-700' },
  { img: '/assets/imgs/about/high_quality_professional_photography_of_a_clean_bright_and_modern_kindergarten/screen.png', title: 'غرفة الطعام', overlayBg: 'bg-error/60', color: 'text-error' },
  { img: '/assets/imgs/about/high_quality_professional_photography_of_a_modern_colorful_and_child_friendly/screen.png', title: 'مختبر البرمجة والحاسوب', overlayBg: 'bg-primary/60', color: 'text-primary' },
  { img: '/assets/imgs/about/high_quality_professional_photography_of_a_vibrant_and_sunlit_multi_purpose/screen.png', title: 'قاعات الأنشطة', overlayBg: 'bg-secondary/60', color: 'text-soft-green' },
]

const stats = [
  { icon: 'child_care', label: 'اليوم بعد 10 سنوات', value: 'احتضنا +500 طفل', color: 'text-primary', border: 'border-primary' },
  { icon: 'groups', label: 'فريق شغوف', value: 'من +50 معلمة', color: 'text-secondary', border: 'border-secondary' },
  { icon: 'auto_stories', label: 'منهج متكامل', value: 'يجمع بين العالمية والأصالة', color: 'text-tertiary', border: 'border-tertiary' },
  { icon: 'devices', label: 'منصة رقمية', value: 'تربط الأهل بطفلهم', color: 'text-primary-container', border: 'border-primary-container' },
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.classList.add('entrance-anim')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.entrance-anim').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-32 overflow-hidden">
      <section className="relative px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-lg">
        <div className="absolute -top-10 -right-20 w-80 h-80 bg-sunny-yellow/10 blob-shape -z-10 animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-soft-green/10 blob-shape -z-10 blur-xl" />
        <div className="w-full lg:w-1/2 space-y-md text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-xs px-sm py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            <span>قصتنا وبداياتنا</span>
          </div>
          <h1 className="font-headline text-headline-xl text-primary leading-tight">
            من حلم صغير.. إلى رحلة تعليمية استثنائية
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            في عام 2016 بدأت القصة بحلم بسيط، بدأنا بفكرة واحدة "كل طفل يستحق بداية استثنائية". من غرفة صغيرة و5 أطفال كبرنا معاً. تعلمنا من أطفالنا قبل أن نعلمهم، اكتشفنا أن التعليم الحقيقي لا يكون بالقوة.. بل بالحب.. لا يكون بالحفظ بل بالاستكشاف.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-md">
            {stats.map((s, i) => (
              <div key={i} className={`p-md bg-white rounded-xl hover-lift shadow-sm border-r-4 ${s.border}`}>
                <span className={`material-symbols-outlined ${s.color} mb-2`}>{s.icon}</span>
                <h3 className={`font-bold ${s.color}`}>{s.label}</h3>
                <p className="text-xl font-bold text-on-surface">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-2">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
            <img alt="Diverse family playing" className="w-full h-auto object-cover" src="/assets/imgs/about/a_heartwarming_modern_illustration_of_a_father_and_mother_of_diverse_ethnic/screen.png" />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl text-primary font-bold">عائلة روضة بداية</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              نخبة من الكفاءات التعليمية والتربوية المتخصصة، يجمعهم الشغف وحب الأطفال.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {educators.map((e, i) => (
              <div
                key={i}
                className="entrance-anim bg-white rounded-2xl overflow-hidden shadow-sm hover-lift group"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 1 }}
              >
                <div className={`border-b-4 ${e.border}`}>
                  <div className="aspect-square overflow-hidden relative">
                    <img alt={e.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={e.img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-md">
                      <p className="text-white text-xs italic leading-tight">{e.quote}</p>
                    </div>
                  </div>
                </div>
                <div className="p-md text-center">
                  <h4 className="font-bold text-primary text-xl">{e.name}</h4>
                  <p className="text-on-surface-variant text-sm">{e.role}</p>
                  <p className="text-on-surface-variant text-xs italic mt-2">"{e.detail}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 font-headline">جولة في عالمنا</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">استكشف بيئتنا التعليمية المبتكرة المصممة خصيصاً لتنمية مهارات طفلك وإلهام خياله في كل زاوية من روضتنا.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`gallery-item group relative overflow-hidden rounded-3xl shadow-lg bg-white h-[300px] ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} />
                <div className={`absolute inset-0 ${item.overlayBg} backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <h3 className={`text-2xl font-bold`} style={{ color: item.color }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
