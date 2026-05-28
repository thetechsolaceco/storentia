import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Storentia',
  description: 'Learn how we protect your personal and business data at Storentia.',
};

export default function PrivacyPage() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-black text-zinc-300 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm font-roboto flex items-center gap-2 mb-10">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-hanken tracking-tight text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm font-roboto mb-12">
          Last updated: May 28, 2026
        </p>

        <div className="prose prose-invert max-w-none font-roboto space-y-8 leading-relaxed text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">1. Introduction</h2>
            <p>
              Welcome to Storentia. We are committed to protecting your personal data and your privacy. 
              This Privacy Policy explains how Storentia (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
              a platform owned and operated by <strong>TechSolace</strong>, collects, uses, and shares your personal 
              information when you visit or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">2. Information We Collect</h2>
            <p>
              We collect information to provide a seamless commerce experience. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, password, and preferences when you register a store.</li>
              <li><strong>Store & Business Data:</strong> Product listings, order information, inventory, and payment integration metadata.</li>
              <li><strong>Usage Data:</strong> Technical logs, IP address, browser type, pages visited, and performance analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">3. How We Use Your Information</h2>
            <p>
              We process your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To set up, host, and maintain your storefronts.</li>
              <li>To handle transaction processing and route payments safely through integrated providers.</li>
              <li>To analyze platform usage, optimize performance, and troubleshoot server issues.</li>
              <li>To communicate with you regarding updates, security alerts, and platform announcements.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">4. Data Sharing and Processing</h2>
            <p>
              We do not sell your personal data. We only share information with trusted third-party service providers 
              to execute operations, such as payment gateways (e.g. Stripe, PayPal) and hosting infrastructure (e.g. Vercel). 
              All transfers are bound by confidentiality and security terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">5. Security of Your Data</h2>
            <p>
              We implement robust security measures including end-to-end encryption (SSL/TLS) for checkout and APIs 
              to keep your transactions safe. However, please remember that no method of transmission over the Internet 
              is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">6. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our practices, please contact TechSolace at:
            </p>
            <p className="text-white font-medium">
              Email: <a href="mailto:info@techsolace.in" className="underline hover:text-zinc-300">info@techsolace.in</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
