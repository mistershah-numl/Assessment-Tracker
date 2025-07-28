import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, Database, FileText } from "lucide-react"
import Link from "next/link"

export default function SecurityPrivacyPage() {
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
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#201C50] mb-4">Security & Privacy</h1>
            <p className="text-lg text-gray-600">
              Your data security and privacy are our top priorities. Learn how we protect your information.
            </p>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">Confidentiality</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Individual responses are never shared. Only aggregated, anonymous feedback is provided.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Lock className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Enterprise-grade security measures protect your data with encryption and secure access controls.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Eye className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Clear visibility into who can see what information, with role-based access controls.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Confidentiality Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50] flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Confidentiality & Minimum Rater Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Individual Responses Protected</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• No individual rater responses are ever shown to anyone</li>
                    <li>• Leaders cannot see who provided specific feedback</li>
                    <li>• Managers/coaches only see aggregated summaries</li>
                    <li>• Only administrators can access individual responses for system purposes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Minimum Rater Protection</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Results only shown when 5+ raters complete assessment</li>
                    <li>• Prevents identification of individual feedback</li>
                    <li>• Ensures statistical validity of results</li>
                    <li>• Assessment automatically closes if minimum not met</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Visibility */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50] flex items-center">
                <Database className="w-5 h-5 mr-2" />
                What Data is Visible to Whom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-[#80967D] mb-3">Leader Being Assessed</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-2">Can See:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Their own aggregated scores and matrix placement</li>
                      <li>• Number of ratings received (only if 5+ completed)</li>
                      <li>• Basic development guidance for their profile</li>
                      <li>• L.E.A.D. element breakdown scores</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg mt-3">
                    <p className="text-sm font-medium text-red-800 mb-2">Cannot See:</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Individual rater responses or names</li>
                      <li>• Detailed HR/coaching recommendations</li>
                      <li>• Team matrix comparisons</li>
                      <li>• Rater relationship details</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-[#F2789D] mb-3">Raters</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-2">Can See:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Only their own responses during completion</li>
                      <li>• Assessment instructions and behavioral definitions</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg mt-3">
                    <p className="text-sm font-medium text-red-800 mb-2">Cannot See:</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Other raters' responses</li>
                      <li>• Final results or scores</li>
                      <li>• Leader's development plan</li>
                      <li>• Who else is providing feedback</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-[#EDA820] mb-3">Manager/Coach/HR/OD</h3>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800 mb-2">Can See:</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Aggregated scores and matrix placement for their team members</li>
                      <li>• Detailed HR/OD coaching recommendations</li>
                      <li>• Team matrix view (if enabled)</li>
                      <li>• Summary of rater relationships (not individual names)</li>
                      <li>• Assessment progress and completion status</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg mt-3">
                    <p className="text-sm font-medium text-red-800 mb-2">Cannot See:</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Individual rater responses</li>
                      <li>• Specific rater names or emails</li>
                      <li>• Leaders outside their direct responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50] flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Data Retention & Deletion Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Assessment Data</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Assessment results retained for 3 years</li>
                    <li>• Individual responses anonymized after 1 year</li>
                    <li>• Leaders can request data deletion at any time</li>
                    <li>• Organizational data retained per contract terms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Account Data</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• User accounts deleted upon request</li>
                    <li>• Login data retained for security purposes (90 days)</li>
                    <li>• Email communications can be opted out</li>
                    <li>• Backup data purged according to schedule</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Security */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Technical Security Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Data Protection</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• End-to-end encryption for all data transmission</li>
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• SOC 2 Type II compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Access Controls</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-factor authentication available</li>
                    <li>• Role-based access permissions</li>
                    <li>• Session timeout and secure logout</li>
                    <li>• Audit logs for all system access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-[#F3EDDB]/30">
            <CardHeader>
              <CardTitle className="text-[#201C50]">Questions About Privacy or Security?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We're committed to transparency about our data practices. If you have questions about how your data is
                protected or used, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#80967D] hover:bg-[#80967D]/90">Contact Privacy Team</Button>
                <Button variant="outline">View Full Privacy Policy</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
