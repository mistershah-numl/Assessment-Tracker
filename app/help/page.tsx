import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MessageCircle, Book, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How does the L.E.A.D.Better 360 assessment work?",
        a: "The assessment is a multi-rater 360 evaluation where colleagues, managers, direct reports, and collaborators rate a leader on 27 specific behaviors across two dimensions: Strategic Execution (business leadership) and L.E.A.D.Better behaviors (people leadership). Results are plotted on a matrix to show leadership profile and development needs.",
      },
      {
        q: "Who can see my assessment results?",
        a: "Individual rater responses are completely confidential. Only aggregated results are shared. Leaders see their own scores and basic development guidance. Managers/coaches see detailed recommendations. A minimum of 5 raters is required before any results are displayed to protect confidentiality.",
      },
      {
        q: "How long does the assessment take to complete?",
        a: "For raters, the assessment takes approximately 10-15 minutes to complete. The assessment window can be set for 30, 60, or 90 days to allow adequate time for all raters to respond.",
      },
    ],
  },
  {
    category: "Assessment Process",
    questions: [
      {
        q: "What is the minimum number of raters required?",
        a: "A minimum of 5 raters must complete the assessment before results are displayed. This ensures statistical validity and protects individual rater confidentiality. Up to 14 raters can be invited per assessment.",
      },
      {
        q: "Can I add more raters after the assessment has started?",
        a: "Yes, leaders can request additional raters, but these requests must be approved by their manager/coach/HR before invitations are sent. This ensures appropriate rater selection and maintains assessment integrity.",
      },
      {
        q: "What happens if we don't get enough responses?",
        a: "If fewer than 5 raters complete the assessment by the deadline, no results will be displayed. The manager/coach/HR person will need to open a new assessment window or extend the current one to collect sufficient responses.",
      },
    ],
  },
  {
    category: "Results & Development",
    questions: [
      {
        q: "What do the matrix positions mean?",
        a: "The matrix plots leaders on Strategic Execution (Y-axis) vs L.E.A.D.Better Score (X-axis). Each position has a specific profile name and risk level. The ideal position is (3,3) - 'Strategic & Culturally Positive' leader. Different positions indicate different development needs and organizational risk levels.",
      },
      {
        q: "How are the L.E.A.D. scores calculated?",
        a: "L.E.A.D. behaviors are grouped into four elements: Listen (questions 16-18), Empathize (19-21), Analyze (22-24), and Delegate (25-27). Each element gets an individual score, and the overall L.E.A.D.Better score is the average across all 12 behaviors.",
      },
      {
        q: "What kind of development recommendations do I get?",
        a: "Leaders receive basic development guidance appropriate for their profile. Managers/coaches receive detailed HR/OD professional recommendations including specific actions, coaching strategies, and development priorities based on the leader's matrix placement and risk level.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        q: "How is my data protected?",
        a: "We use enterprise-grade security including end-to-end encryption, AES-256 encryption for stored data, and SOC 2 Type II compliance. Individual responses are never shared, and all data is aggregated to protect confidentiality.",
      },
      {
        q: "How long is my data retained?",
        a: "Assessment results are retained for 3 years. Individual responses are anonymized after 1 year. Leaders can request data deletion at any time. Account data is deleted upon request, with login data retained for 90 days for security purposes.",
      },
      {
        q: "Can I opt out of communications?",
        a: "Yes, you can opt out of email communications at any time. However, essential assessment-related communications (like completion notifications) may still be sent to ensure proper assessment administration.",
      },
    ],
  },
]

export default function HelpPage() {
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
            <h1 className="text-3xl font-bold text-[#201C50] mb-4">Help & Support</h1>
            <p className="text-lg text-gray-600">Find answers to common questions and get the support you need</p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <Book className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  New to L.E.A.D.Better 360? Learn the basics of how the assessment works.
                </p>
                <Link href="/matrix-guide">
                  <Button variant="outline" size="sm">
                    View Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">For Raters</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Providing feedback? Learn how to complete your assessment effectively.
                </p>
                <Button variant="outline" size="sm">
                  Rater Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <BarChart3 className="w-12 h-12 text-[#201C50] mx-auto mb-4" />
                <CardTitle className="text-[#201C50]">Understanding Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to interpret your leadership matrix results and development recommendations.
                </p>
                <Link href="/matrix-guide">
                  <Button variant="outline" size="sm">
                    Matrix Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to the most common questions about L.E.A.D.Better 360</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-[#80967D] text-white">{category.category}</Badge>
                    </div>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">{faq.q}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-[#F3EDDB]/30">
            <CardHeader>
              <CardTitle className="text-[#201C50]">Still Need Help?</CardTitle>
              <CardDescription>
                Our support team is here to help you get the most out of L.E.A.D.Better 360
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#EDA820]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-[#EDA820]" />
                  </div>
                  <h3 className="font-medium mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Get detailed help via email. We typically respond within 24 hours.
                  </p>
                  <Button size="sm" className="bg-[#EDA820] hover:bg-[#EDA820]/90">
                    Send Email
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F2789D]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-[#F2789D]" />
                  </div>
                  <h3 className="font-medium mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Chat with our support team in real-time during business hours.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F2789D] text-[#F2789D] hover:bg-[#F2789D] hover:text-white bg-transparent"
                  >
                    Start Chat
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#80967D]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-[#80967D]" />
                  </div>
                  <h3 className="font-medium mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Speak directly with our team for complex issues or training.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#80967D] text-[#80967D] hover:bg-[#80967D] hover:text-white bg-transparent"
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border">
                <h3 className="font-medium text-[#201C50] mb-2">Business Hours</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Documentation</h3>
                  <div className="space-y-2">
                    <Link href="/matrix-guide" className="block text-sm text-[#80967D] hover:underline">
                      • Leadership Matrix Guide
                    </Link>
                    <Link href="/security" className="block text-sm text-[#80967D] hover:underline">
                      • Security & Privacy Policy
                    </Link>
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Best Practices for Raters
                    </Link>
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Implementation Guide
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Training & Webinars</h3>
                  <div className="space-y-2">
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Getting Started Webinar
                    </Link>
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Advanced Features Training
                    </Link>
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Leadership Development Workshop
                    </Link>
                    <Link href="#" className="block text-sm text-[#80967D] hover:underline">
                      • Monthly Office Hours
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
