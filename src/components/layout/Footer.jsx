import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import siteData from "../../data/posts.json";

export default function Footer() {
   const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }
  return (
    <>
         <footer className="relative overflow-hidden border-t border-white/10 mt-10 bg-[#0b0b0d]">
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[130px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="flex items-center gap-3 text-white font-bold text-lg mb-5">
            ابق على اطلاع
            <span className="w-10 h-[2px] bg-orange-500"></span>
          </h4>
          <p className="text-gray-500 text-sm mb-5 leading-6">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          {subscribed ? (
            <p className="text-orange-400 text-sm font-bold">تم الاشتراك بنجاح! شكراً لك.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button type="submit" className="w-full brand-gradient text-white font-bold py-3 rounded-full hover:opacity-90 transition">
                اشترك
              </button>
            </form>
          )}
        </div>

        <div>
          <h4 className="flex items-center gap-3 text-white font-bold text-lg mb-5">
            التصنيفات
            <span className="w-10 h-[2px] bg-orange-500"></span>
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            {siteData.categories.map((cat) => (
              <li key={cat.name}><Link to="/blog" className="hover:text-orange-400 transition">{cat.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-3 text-white font-bold text-lg mb-5">
            استكشف
            <span className="w-10 h-[2px] bg-orange-500"></span>
          </h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-orange-400 transition">الرئيسية</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400 transition">المدونة</Link></li>
            <li><Link to="/writers" className="hover:text-orange-400 transition">من نحن</Link></li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg brand-gradient flex items-center justify-center text-white font-black">ع</div>
            <p className="text-white font-extrabold text-lg">{siteData.siteInfo.name}</p>
          </div>
          <p className="text-gray-500 text-sm leading-6">{siteData.siteInfo.description}</p>
          <div className="flex gap-2 mt-5">
            <a href={siteData.siteInfo.social.twitter} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-orange-600 hover:text-white transition">
               <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href={siteData.siteInfo.social.github} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-orange-600 hover:text-white transition">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href={siteData.siteInfo.social.linkedin} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-orange-600 hover:text-white transition">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={siteData.siteInfo.social.youtube} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-orange-600 hover:text-white transition">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © 2026 {siteData.siteInfo.name}. صنع بكل <span className="text-orange-500">❤️</span> جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-orange-400 transition">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-orange-400 transition">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
