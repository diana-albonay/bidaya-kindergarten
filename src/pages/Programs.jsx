import { useState, useEffect } from 'react'

const tabs = [
  { id: 'nursery', label: 'حضانة (0-2 سنة)', title: 'قسم الحضانة: اللمسة الأولى', desc: 'نركز في مرحلة الحضانة على التطوير الحسي والحركي. من خلال اللعب بالألوان والملمس والموسيقى، نساعد الرضع على اكتشاف عالمهم في بيئة آمنة ومليئة بالحب والرعاية الفائقة.', tag: 'النمو المبكر', tagColor: 'bg-secondary-container text-on-secondary-container', headingColor: 'text-secondary', iconColor: 'text-secondary', img: '/assets/imgs/porgram/professional_high_quality_photography_of_happy_diverse_toddlers_playing_with/screen.png', features: ['أنشطة حسية متكاملة لتحفيز الإدراك', 'رعاية فردية مخصصة لكل طفل حسب احتياجه', 'تنمية مهارات التواصل الاجتماعي المبكر'] },
  { id: 'discovery', label: 'تمهيدي (3-4 سنوات)', title: 'قسم التمهيدي: عالم الاستكشاف', desc: 'هنا تبدأ رحلة التعلم المنظم. نشجع الأطفال على طرح الأسئلة والتفاعل الاجتماعي وبناء الصداقات من خلال مشاريع جماعية ممتعة وتجارب علمية بسيطة تفتح آفاق تفكيرهم.', tag: 'الاستكشاف', tagColor: 'bg-tertiary-container text-on-tertiary-container', headingColor: 'text-tertiary', iconColor: 'text-tertiary', img: '/assets/imgs/porgram/professional_high_quality_photography_of_preschool_children_ages_3_5_engaged_in/screen.png', features: ['تجارب "المكتشف الصغير" التفاعلية', 'بناء المهارات الاجتماعية والعمل الجماعي', 'التعبير الفني والإبداعي بلا حدود'] },
  { id: 'readiness', label: 'روضة (5-6 سنوات)', title: 'قسم الروضة: الاستعداد للمستقبل', desc: 'نعد أطفالنا للمرحلة الابتدائية من خلال منهج قوي يركز على مهارات القراءة والكتابة، الرياضيات المتقدمة، والترميز الأساسي، مع الحفاظ على روح التعلم بالمرح.', tag: 'التجهيز المدرسي', tagColor: 'bg-primary-container text-on-primary-container', headingColor: 'text-primary', iconColor: 'text-primary', img: '/assets/imgs/porgram/high_quality_professional_photography_of_happy_preschool_children_playing/screen.png', features: ['منهج الرياضيات المطور للتفكير المنطقي', 'التمكين اللغوي باللغتين العربية والإنجليزية', 'أساسيات التفكير البرمجي ومهارات القرن 21'] },
]

const summerActivities = [
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_playful_3d_illustration_or_icon_of_a_classic/screen.png', title: 'الشطرنج', desc: 'تنمية التفكير الاستراتيجي والذكاء التحليلي لدى الصغار.', color: 'text-secondary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_friendly_3d_illustration_of_a_cute_small_robot/screen.png', title: 'البرمجة', desc: 'مقدمة ممتعة في لغة العصر من خلال ألعاب تفاعلية برمجية.', color: 'text-primary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_artistic_3d_illustration_of_musical_notes_and_a/screen.png', title: 'الموسيقى', desc: 'استكشاف الإيقاعات والآلات الموسيقية لتعزيز الحس الفني.', color: 'text-error' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_creative_3d_illustration_of_an_artist_s_palette/screen.png', title: 'الرسم', desc: 'حرية التعبير بالألوان والفرشاة في مرسمنا المتكامل والمجهز.', color: 'text-tertiary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_educational_3d_illustration_of_a_world_globe/screen.png', title: 'اللغات', desc: 'تعلم الإنجليزية والفرنسية من خلال المحادثة واللعب الموجه.', color: 'text-secondary' },
]

const trips = [
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_playful_3d_illustration_of_a_school_bus_parked/screen.png', title: 'رحلات ميدانية', desc: 'زيارات استكشافية للمتاحف والمزارع لتعزيز التعلم الواقعي.', color: 'text-primary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_friendly_3d_illustration_of_a_magnifying_glass/screen.png', title: 'التعلم في الطبيعة', desc: 'حصص تعليمية مفتوحة في الهواء الطلق لاكتشاف جمال الطبيعة.', color: 'text-tertiary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_playful_3d_illustration_of_a_friendly_giraffe/screen.png', title: 'رحلات حديقة الحيوان', desc: 'مغامرات ممتعة للتعرف على عالم الحيوان عن قرب.', color: 'text-secondary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_modern_3d_illustration_of_a_library_book_or_a/screen.png', title: 'زيارات تعليمية', desc: 'رحلات مخصصة للمكتبات والمراكز العلمية لتوسيع الآفاق.', color: 'text-primary' },
]

const parentActivities = [
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_playful_3d_illustration_of_a_parent_and_child/screen.png', title: 'المسرحيات المدرسية', desc: 'شارك طفلك خشبة المسرح في عروضنا السنوية المميزة.', color: 'text-primary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_friendly_3d_illustration_of_a_parent_and_child/screen.png', title: 'زراعة النباتات', desc: 'اغرس بذور الأمل والمسؤولية مع طفلك في حديقة الروضة.', color: 'text-tertiary' },
  { img: '/assets/imgs/porgram/a_professional_high_quality_and_creative_3d_illustration_of_a_parent_and_child/screen.png', title: 'ورش العمل الإبداعية', desc: 'ورش عمل دورية للأهل لابتكار الوسائل التعليمية والفنية معاً.', color: 'text-secondary' },
]

export default function Programs() {
  const [activeTab, setActiveTab] = useState('nursery')

  useEffect(() => {
    const handleScroll = () => {
      const blob = document.querySelector('.blob-shape')
      if (blob) blob.style.transform = `translateY(${window.pageYOffset * 0.15}px)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const current = tabs.find((t) => t.id === activeTab)

  return (
    <>
      <header className="relative pt-40 pb-24 overflow-hidden bg-surface-container-lowest">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-secondary-container/10 blob-shape -z-10 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary-container/5 blob-shape -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop text-center">
          <h1 className="font-headline text-headline-xl md:text-6xl mb-8 leading-tight" style={{ color: '#f59e0b' }}>برامجنا التعليمية</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed opacity-90">
            نقدم بيئة تعليمية محفزة تجمع بين اللعب الهادف والتعليم الأكاديمي المتميز، لنبني معاً أساساً قوياً لمستقبل أطفالكم في بيئة آمنة ومبدعة.
          </p>
        </div>
      </header>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="flex justify-center mb-16">
            <div className="flex p-1.5 bg-surface-container-high rounded-full shadow-inner border border-outline-variant/30">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-10 py-3.5 rounded-full font-label-md text-label-md transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {current && (
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className={`inline-block px-4 py-1 rounded-full ${current.tagColor} text-label-sm mb-4`}>{current.tag}</div>
                <h2 className={`font-headline text-headline-lg ${current.headingColor} mb-6`}>{current.title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed text-lg">{current.desc}</p>
                <ul className="space-y-4">
                  {current.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                      <span className={`material-symbols-outlined ${current.iconColor} text-3xl`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-label-md text-on-surface">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className={`absolute -top-4 -right-4 w-full h-full ${current.iconColor === 'text-secondary' ? 'bg-secondary/10' : current.iconColor === 'text-tertiary' ? 'bg-tertiary/10' : 'bg-primary/10'} rounded-2xl -z-10`} />
                  <img alt={current.title} className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white" src={current.img} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col justify-center items-center mb-20 gap-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-headline-xl mb-6" style={{ color: '#ec4899' }}>نشاطات صيفية نابضة</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">استكشف برامجنا الصيفية المصممة لتنمية المواهب والذكاء في بيئة ترفيهية متكاملة تساعد الأطفال على استثمار وقتهم بإبداع.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {summerActivities.map((a, i) => (
              <div key={i} className="bento-card group p-8 rounded-[2rem] bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all border border-outline-variant/20 flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 p-2 bg-surface rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <img alt={a.title} className="w-full h-full object-contain" src={a.img} />
                </div>
                <h3 className={`font-headline text-headline-md ${a.color} mb-3`}>{a.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col justify-center items-center mb-20 gap-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-headline-xl mb-6" style={{ color: '#005da7' }}>الرحلات والاستكشاف</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">نؤمن بأن العالم هو أكبر فصل دراسي، لذا ننظم رحلات استكشافية تثري تجربة الطفل التعليمية وتنمي فضوله المعرفي.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {trips.map((t, i) => (
              <div key={i} className="bento-card group p-8 rounded-[2rem] bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all border border-outline-variant/20 flex flex-col items-center text-center">
                <div className="w-full aspect-square mb-6 p-2 bg-surface rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                  <img alt={t.title} className="w-full h-full object-cover" src={t.img} />
                </div>
                <h3 className={`font-headline text-headline-md ${t.color} mb-3`}>{t.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col justify-center items-center mb-20 gap-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-headline text-headline-xl mb-6" style={{ color: '#006b28' }}>مشاركة الأهل</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">شارك أطفالك متعة التعلم والاكتشاف</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {parentActivities.map((p, i) => (
              <div key={i} className="bento-card group p-8 rounded-[2rem] bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all border border-outline-variant/20 flex flex-col items-center text-center">
                <div className="w-full aspect-square mb-6 p-2 bg-surface rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                  <img alt={p.title} className="w-full h-full object-cover" src={p.img} />
                </div>
                <h3 className={`font-headline text-headline-md ${p.color} mb-3`}>{p.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
