import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Storentia',
  description: 'Understand the terms and guidelines for using the Storentia platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm font-roboto flex items-center gap-2 mb-10">
          ← Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold font-hanken tracking-tight text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-zinc-500 text-sm font-roboto mb-12">
          Last updated: May 28, 2026
        </p>

        <div className="prose prose-invert max-w-none font-roboto space-y-8 leading-relaxed text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using Storentia, a platform provided by <strong>TechSolace</strong>, you agree to be bound 
              by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">2. Use License & Account Responsibility</h2>
            <p>
              When you create an account to configure storefronts, you represent that the registration info is accurate 
              and complete. You are entirely responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintaining the confidentiality of your store passwords and API tokens.</li>
              <li>All activities, product sales, content uploads, and legal compliances that occur under your store.</li>
              <li>Ensuring you do not upload malicious code, illegal inventory, or infringing materials.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">3. Payments & Billing</h2>
            <p>
              Storentia facilitates payment collection through integrations with providers like Stripe and PayPal. 
              TechSolace is not a bank or payment processor and holds no liability for transaction failures, chargebacks, 
              or disputes between you and your customers. Any platform fee billing is automated, and failures in payment 
              may lead to subscription termination or store suspension.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">4. Platform Availability and SLA</h2>
            <p>
              While we aim to provide continuous, high-performance storefront availability, the platform is provided 
              &quot;as is&quot; and &quot;as available&quot;. TechSolace does not guarantee that the services will be 
              uninterrupted, error-free, or fully secure. We reserve the right to temporarily suspend services for scheduled 
              maintenance or platform updates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">5. Limitation of Liability</h2>
            <p>
              In no event shall TechSolace, its directors, employees, or partners be liable for any direct, indirect, 
              incidental, special, or consequential damages resulting from your use or inability to use Storentia. 
              This includes, but is not limited to, loss of profits, inventory disruption, or business interruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">6. Governing Law & Modification</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the jurisdiction of TechSolace&apos;s registration. 
              We reserve the right to modify these terms at any time. We will notify you of major changes by updating the last 
              revised date. Continued use of the platform after changes indicates your acceptance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold font-hanken text-white">7. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
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
