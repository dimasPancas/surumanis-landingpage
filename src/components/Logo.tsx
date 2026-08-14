export default function Logo({ isSolid = true }: { isSolid?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      {/* Ikon Logo SVG */}
      <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full transition-colors duration-300 ${
            isSolid ? 'text-slate-900' : 'text-white'
          }`}
        >
          {/* Matahari (Selalu warna Amber/Emas) */}
          <circle cx="18" cy="14" r="5" className="fill-amber-500" />
          
          {/* Tenda Minimalis */}
          <path 
            d="M18 10 L27 24 H9 L18 10Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="round" 
            fill="none" 
          />
          
          {/* Garis Ombak Laut / Tanah */}
          <path 
            d="M5 28 Q 12 24 18 28 T 31 28" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Teks Logo */}
      <span
        className={`text-xl md:text-2xl font-bold font-serif tracking-wide transition-colors duration-300 ${
          isSolid ? 'text-slate-900' : 'text-white'
        }`}
      >
        Surumanis<span className="text-amber-500">.</span>
      </span>
    </div>
  )
}