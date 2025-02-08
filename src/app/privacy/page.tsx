import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-sky-200 to-orange-300">
      <main className="max-w-4xl mx-auto bg-white/90 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: January 04, 2025</p>
        
        <div className="prose dark:prose-invert max-w-none text-black">
          <p className="text-lg mb-6">
            Time Overflow is committed to protecting your privacy. Our app operates completely offline and does not collect, store, or transmit any personal data.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection and Storage</h2>
          <p className="mb-6">
            All data and settings in Time Overflow are stored locally on your device. We do not:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Collect any personal information</li>
            <li>Track your usage or behavior</li>
            <li>Use any analytics services</li>
            <li>Display advertisements</li>
            <li>Require internet connectivity</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">App Permissions</h2>
          <p className="mb-6">
            Time Overflow only requires minimal permissions to function as a timer app. Any data created while using the app remains exclusively on your device.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy as needed. Any changes will be reflected in the &quot;Last Updated&quot; date at the top of this policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, you can contact us at:
            <a href="mailto:fromzerotoinfinity13@gmail.com" className="text-blue-600 hover:text-blue-800 ml-2">
              fromzerotoinfinity13@gmail.com
            </a>
          </p>
        </div>
      </main>
      
      <footer className="relative z-10 mt-8 flex gap-6 flex-wrap items-center justify-center text-sm text-black bg-white/80 px-4 py-2 rounded-full max-w-fit mx-auto">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span>|</span>
        <a href="mailto:fromzerotoinfinity13@gmail.com" className="hover:text-gray-900">
          Contact
        </a>
      </footer>
    </div>
  );
}
