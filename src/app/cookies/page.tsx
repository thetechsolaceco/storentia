import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy - Storentia',
  description: 'Understand how Storentia utilizes cookies and local storage to provide storefront services.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm font-roboto flex items-center gap-2 mb-10">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-hanken tracking-tight text-white mb-4">
          Cookie Policy
        </h1>
        <p className="text-zinc-500 text-sm font-roboto mb-12">
          Last updated: May 28, 2026
        </p>

        <div className="prose prose-invert max-w-none font-roboto space-y-8 leading-relaxed text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently, as well as to provide reporting information 
              and customize your experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">2. How Storentia Uses Cookies</h2>
            <p>
              We (and our parent company <strong>TechSolace</strong>) use cookies to operate our commerce platform, 
              authenticate user accounts, and track basic anonymous performance metrics. We divide these cookies 
              into three categories:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for the site to function properly. 
                These include authentication cookies to keep merchant dashboards signed in, CSRF tokens for form security, 
                and shopping cart session identifiers.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> Anonymous telemetry tracking (e.g. page loads, speed indexes) 
                to measure how the platform is performing and find rendering bottlenecks.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Store choices you make (such as dark mode preferences or dashboard layouts) 
                so you do not have to configure them repeatedly.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">3. Third-Party Cookies</h2>
            <p>
              Some features on our site, such as payment integrations (Stripe, PayPal) or live customer support tools, 
              may set their own cookies to ensure secure verification and fraud detection. We do not have access 
              or control over these third-party cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">4. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to block 
              or delete cookies. However, please note that blocking strictly necessary cookies will prevent 
              you from logging in to your dashboard or storing items in checkout carts on Storentia storefronts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use. 
              We encourage you to review this page periodically to stay informed about our use of cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this policy, please contact TechSolace at:
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
