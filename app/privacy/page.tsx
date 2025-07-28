import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-bold text-[#201C50]">L.E.A.D.Better 360</span>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#201C50] mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Privacy Policy Content */}
          <Card>
            <CardContent className="prose prose-gray max-w-none pt-6">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    Dr. Kalifa Oliver and the L.E.A.D.Better 360 Executive Behavioral Assessment ("we," "our," or "us")
                    are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our assessment platform and services.
                  </p>
                  <p className="text-gray-600">
                    By using our services, you agree to the collection and use of information in accordance with this
                    policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">2. Information We Collect</h2>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Job title and company information</li>
                    <li>• Assessment responses and ratings</li>
                    <li>• Account credentials and preferences</li>
                  </ul>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Usage Information</h3>
                  <p className="text-gray-600 mb-4">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Log data (IP address, browser type, access times)</li>
                    <li>• Device information and operating system</li>
                    <li>• Usage patterns and feature interactions</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Providing and maintaining our assessment services</li>
                    <li>• Processing and analyzing assessment data</li>
                    <li>• Generating leadership development reports and recommendations</li>
                    <li>• Communicating with you about your assessments</li>
                    <li>• Improving our services and user experience</li>
                    <li>• Ensuring security and preventing fraud</li>
                    <li>• Complying with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">4. Assessment Data Confidentiality</h2>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Individual Response Protection</h3>
                  <p className="text-gray-600 mb-4">
                    Individual rater responses are strictly confidential. We never share individual responses with
                    anyone, including the leader being assessed, their manager, or other raters. Only aggregated,
                    anonymized data is used for reporting purposes.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Minimum Rater Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    Assessment results are only displayed when a minimum of 5 raters have completed the assessment. This
                    ensures statistical validity and protects individual rater confidentiality.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Role-Based Access</h3>
                  <p className="text-gray-600">
                    Different user roles have access to different levels of information, as detailed in our Security &
                    Privacy page. Leaders see their own aggregated results, managers see development recommendations for
                    their team members, and administrators have system-level access for platform management.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">5. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or rent your personal information. We may share information in the following
                    circumstances:
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Within Your Organization</h3>
                  <ul className="text-gray-600 space-y-1 mb-4">
                    <li>• Aggregated assessment results with designated managers/coaches</li>
                    <li>• Development recommendations with authorized personnel</li>
                    <li>• Team-level analytics with appropriate stakeholders</li>
                  </ul>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Service Providers</h3>
                  <p className="text-gray-600 mb-4">
                    We may share information with trusted third-party service providers who assist us in operating our
                    platform, conducting business, or serving users, provided they agree to keep information
                    confidential.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose information if required by law, regulation, legal process, or governmental request.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">6. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your information:
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• End-to-end encryption for data transmission</li>
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• SOC 2 Type II compliance</li>
                    <li>• Multi-factor authentication options</li>
                    <li>• Role-based access controls</li>
                    <li>• Regular security training for staff</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">7. Data Retention</h2>
                  <p className="text-gray-600 mb-4">We retain your information for the following periods:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Assessment results: 3 years from completion</li>
                    <li>• Individual responses: Anonymized after 1 year</li>
                    <li>• Account information: Until account deletion requested</li>
                    <li>• Log data: 90 days for security purposes</li>
                    <li>• Backup data: Purged according to retention schedule</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">8. Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal information:
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Access and Correction</h3>
                  <p className="text-gray-600 mb-4">
                    You can access and update your personal information through your account settings or by contacting
                    us.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Data Deletion</h3>
                  <p className="text-gray-600 mb-4">
                    You can request deletion of your personal information at any time. Note that some information may be
                    retained for legal or business purposes.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Communication Preferences</h3>
                  <p className="text-gray-600">
                    You can opt out of marketing communications at any time. Essential service communications may still
                    be sent for assessment administration purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">9. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and
                    provide personalized content. You can control cookie settings through your browser preferences.
                  </p>

                  <h3 className="text-lg font-medium text-[#201C50] mb-3">Types of Cookies We Use</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Essential cookies for platform functionality</li>
                    <li>• Analytics cookies to understand usage patterns</li>
                    <li>• Preference cookies to remember your settings</li>
                    <li>• Security cookies to protect against fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-600">
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    appropriate safeguards are in place to protect your information in accordance with this Privacy
                    Policy and applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">11. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect
                    personal information from children under 18. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">12. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use
                    of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-[#201C50] mb-4">13. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-[#F3EDDB]/30 p-4 rounded-lg">
                    <p className="text-gray-600">
                      <strong>Dr. Kalifa Oliver</strong>
                      <br />
                      L.E.A.D.Better 360 Executive Behavioral Assessment
                      <br />
                      Email: privacy@leadbetter360.com
                      <br />
                      Phone: [Phone Number]
                      <br />
                      Address: [Business Address]
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
