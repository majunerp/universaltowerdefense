import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - Universal Tower Defense Hub",
    description: "Terms of Service for the Universal Tower Defense resource hub.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Terms of Service
                </h1>

                 <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-300">
                     <p className="text-lg">
                         Last updated: December 2025
                     </p>

                     <section className="space-y-4">
                         <h2 className="text-xl font-semibold text-white">Overview</h2>
                         <p>
                             These Terms of Service explain the rules for using this Universal Tower Defense resource hub. By accessing or using this site, you agree to these Terms of Service.
                             If you do not agree with these Terms of Service, please do not use the website.
                         </p>
                         <p>
                             This site provides code lists, tools, and informational content. These Terms of Service are intended to keep expectations clear: codes can expire, rewards can
                             change without notice, and you are responsible for how you use any information on the site.
                         </p>
                     </section>

                     <section className="space-y-4">
                         <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
                         <p>
                             By accessing and using this website, you accept and agree to be bound by
                             these Terms of Service. If you do not agree to these Terms of Service, please do not use our website.
                         </p>
                     </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">2. Use of Content</h2>
                        <p>
                            All content on this website, including codes, guides, and strategies, is provided for
                            informational purposes only. We make no guarantees about the accuracy or availability
                            of any codes listed.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">3. Disclaimer</h2>
                        <p>
                            This is a fan-made website and is not affiliated with, endorsed by, or
                            connected to Roblox Corporation or the developers of Universal Tower Defense. All game names,
                            assets, and trademarks are the property of their respective owners.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">4. Limitation of Liability</h2>
                        <p>
                            We are not responsible for any damages or losses resulting from your use of this website
                            or reliance on the information provided. Use the codes and information at your own risk.
                        </p>
                    </section>

                     <section className="space-y-4">
                         <h2 className="text-xl font-semibold text-white">5. Changes to Terms</h2>
                         <p>
                             We reserve the right to modify these Terms of Service at any time. Continued use of the website
                             after changes constitutes acceptance of the updated Terms of Service.
                         </p>
                     </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">6. Contact</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
