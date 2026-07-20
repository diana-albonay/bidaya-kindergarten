export default function Footer() {
  return (
    <footer className="bg-on-surface text-white py-20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-2xl p-4 inline-block mb-6 shadow-xl">
              <img alt="Bidayah Logo" className="h-24 md:h-32 w-auto object-contain" src="/assets/imgs/bidayah_kindergarten_logo/screen.png" />
            </div>
            <p className="text-gray-400 leading-relaxed">نحن نؤمن بأن لكل طفل بداية فريدة. مهمتنا هي توفير الأساس المتين لمستقبل مشرق ومبدع.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 font-headline">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a className="hover:text-sunny-yellow transition-colors" href="#">الرئيسية</a></li>
              <li><a className="hover:text-sunny-yellow transition-colors" href="#">عن الروضة</a></li>
              <li><a className="hover:text-sunny-yellow transition-colors" href="#">البرامج التعليمية</a></li>
              <li><a className="hover:text-sunny-yellow transition-colors" href="#">القبول والتسجيل</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 font-headline">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sunny-yellow">location_on</span>
                شارع التعليم، دبي، الإمارات
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sunny-yellow">call</span>
                +971 4 000 0000
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sunny-yellow">mail</span>
                hello@bidayah.ae
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-6 font-headline">النشرة الإخبارية</h4>
            <p className="text-gray-400 mb-6 text-sm">اشترك لتصلك آخر أخبارنا وفعالياتنا</p>
            <div className="flex shadow-sm">
              <input className="bg-white/10 border-none rounded-r-full px-6 py-4 w-full focus:ring-2 focus:ring-sunny-yellow text-white" placeholder="بريدك الإلكتروني" type="email" />
              <button className="bg-sunny-yellow text-on-surface px-8 py-4 rounded-l-full font-bold font-headline transition-transform active:scale-95">اشترك</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 روضة بداية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8 font-headline font-semibold">
            <a className="text-gray-400 hover:text-white transition-colors" href="#">English</a>
            <a className="text-sunny-yellow" href="#">العربية</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
