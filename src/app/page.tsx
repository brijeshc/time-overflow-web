"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-sky-200 to-orange-300">
      <meta
        name="google-site-verification"
        content="QG0PbCZQvOpE1fud0nOSMDAXugzGIfRwkvclopP4zyk"
      />
      <main className="relative z-10 flex flex-col gap-12 row-start-2 items-center text-center max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-2xl p-6 bg-white/90 shadow-lg">
            <Image
              src="/icon.png"
              alt="Time Overflow Logo"
              width={120}
              height={120}
              priority
              className="rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-black">
              Time Overflow
            </h1>
            <p className="text-xl sm:text-2xl text-black">Mindful Minutes</p>
          </div>
        </div>

        <p className="text-lg sm:text-xl max-w-2xl text-black bg-white/80 p-4 rounded-lg">
          Transform your relationship with time. Experience a mindful approach
          to daily living with Time Overflow - where every moment flows with
          purpose and presence. The app is currently in closed alpha testing and
          will be available soon.
          The app is completely free to use and will remain free forever. Did I mention that it is also ad-free?
        </p>

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-3 hover:bg-[#f8f8f8] text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/playstore.png"
              alt="Google Play Store"
              width={24}
              height={24}
            />
            Get it on Google Play
          </a>

          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 text-black"
            href="/blog"
          >
            Read our Blog
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#FFDD00] text-black gap-3 hover:bg-[#FFE333] text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
            href="https://buymeacoffee.com/brijeshc2049"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support the developer"
          >
            <Image
              src="/bmc.png"
              alt="Buy Me a Coffee"
              width={24}
              height={24}
            />
            Support the developer
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="font-semibold text-lg text-black">
              Daily time logging
            </h3>
            <p className="text-black">
              Log your daily time spent on various activities
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-lg text-black">
              Target Productivity
            </h3>
            <p className="text-black">
              Work towards daily targets to boost productivity and control
              wastefulness
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="font-semibold text-lg text-black">
              Powerful Analytics
            </h3>
            <p className="text-black">Gain wisdom from your practice</p>
          </div>
        </div>
      </main>
      <footer className="relative z-10 row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-black bg-white/80 px-4 py-2 rounded-full">
        <a href="/privacy" className="hover:text-gray-900">
          Privacy Policy
        </a>
        <span>|</span>
        <a
          href="mailto:fromzerotoinfinity13@gmail.com"
          className="hover:text-gray-900"
        >
          Contact
        </a>
      </footer>
    </div>
  );
}
