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
            <p>We collect information to provide a seamless commerce experience. This includes:</p>
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold font-hanken text-zinc-200 mb-1">Account Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Password (stored securely in encrypted form)</li>
                  <li>Account preferences and settings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold font-hanken text-zinc-200 mb-1">Store &amp; Business Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Product listings</li>
                  <li>Inventory information</li>
                  <li>Order details</li>
                  <li>Customer-related commerce data</li>
                  <li>Payment integration metadata</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-semibold font-hanken text-zinc-200 mb-1">Usage Data</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Technical logs</li>
                  <li>Pages visited</li>
                  <li>Performance and analytics data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">3. How We Use Your Information</h2>
            <p>We process your personal information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To create, host, and maintain your storefronts.</li>
              <li>To process orders and facilitate commerce-related operations.</li>
              <li>To securely handle payment routing through integrated payment providers.</li>
              <li>To analyze platform usage and improve platform performance.</li>
              <li>To detect, prevent, and investigate fraud, abuse, or security incidents.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To communicate platform updates, maintenance notices, and security alerts.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">4. Data Sharing and Processing</h2>
            <p>We do not sell your personal data.</p>
            <p>
              We may share information only with trusted third-party service providers that help us operate Storentia,
              including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payment processors (such as Stripe, PayPal, Razorpay, or other integrated providers)</li>
              <li>Cloud hosting and infrastructure providers</li>
              <li>Analytics and monitoring services</li>
              <li>Customer support and communication tools</li>
            </ul>
            <p>All service providers are required to maintain appropriate security measures and confidentiality obligations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">5. Data Retention</h2>
            <p>
              We retain your information only for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements.
            </p>
            <p>
              Store and transaction-related records may be retained for regulatory, accounting, or security purposes
              where required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">6. Security of Your Data</h2>
            <p>We implement industry-standard security measures to protect your information, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure authentication systems</li>
              <li>Access controls and monitoring</li>
              <li>Regular security reviews and updates</li>
            </ul>
            <p>
              While we strive to protect your information, no method of electronic transmission or storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">7. Account Deletion</h2>
            <p>
              You may request the permanent deletion of your Storentia account and associated personal data at any time.
            </p>
            <p>
              To request account deletion, please contact our support team using the contact information provided below.
            </p>
            <p>
              Please note that certain information may be retained where required by law, regulatory obligations, fraud
              prevention measures, or legitimate business purposes.
            </p>
            <p>
              Once your deletion request is verified and processed, your account and eligible associated data will be
              permanently removed from our systems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated effective date. Continued use of Storentia after such changes constitutes acceptance of the
              revised Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">9. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, including account
              deletion requests, please contact us:
            </p>
            <p className="text-white font-medium">
              <strong>TechSolace</strong><br />
              Email: <a href="mailto:info@techsolace.in" className="underline hover:text-zinc-300">info@techsolace.in</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
