import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Users } from "lucide-react"
import Link from "next/link"

const matrixProfiles = [
  // Row 3 (High Strategic)
  { x: 0, y: 3, title: "Business Powerhouse, People Risk", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
  {
    x: 1,
    y: 3,
    title: "Business Leader with Growing People Awareness",
    risk: "Low",
    color: "bg-green-100 text-green-800",
  },
  {
    x: 2,
    y: 3,
    title: "Strategic Business Leader, Strong People Partner",
    risk: "Low",
    color: "bg-green-100 text-green-800",
  },
  {
    x: 3,
    y: 3,
    title: "Ideal Leader: Strategic & Culturally Positive",
    risk: "Low",
    color: "bg-green-100 text-green-800",
  },

  // Row 2 (Developing Strategic)
  { x: 0, y: 2, title: "Business Builder, Culture Gap", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { x: 1, y: 2, title: "Business-Driven Culture Learner", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { x: 2, y: 2, title: "Balanced Business & People Leader", risk: "Low", color: "bg-green-100 text-green-800" },
  {
    x: 3,
    y: 2,
    title: "High-Impact Culture-Driven Business Leader",
    risk: "Low",
    color: "bg-green-100 text-green-800",
  },

  // Row 1 (Emerging Strategic)
  { x: 0, y: 1, title: "Business Rookie, People Weak", risk: "High", color: "bg-red-100 text-red-800" },
  { x: 1, y: 1, title: "Balanced Beginner", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
  {
    x: 2,
    y: 1,
    title: "Developing People-Positive Business Leader",
    risk: "Medium",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    x: 3,
    y: 1,
    title: "People-Focused Emerging Business Driver",
    risk: "Medium",
    color: "bg-yellow-100 text-yellow-800",
  },

  // Row 0 (Low Strategic)
  { x: 0, y: 0, title: "Leadership at Risk", risk: "High", color: "bg-red-100 text-red-800" },
  { x: 1, y: 0, title: "Culture Novice", risk: "High", color: "bg-red-100 text-red-800" },
  { x: 2, y: 0, title: "Culture Builder, Business Beginner", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { x: 3, y: 0, title: "Culture Champion, Business Starter", risk: "Medium", color: "bg-yellow-100 text-yellow-800" },
]

export default function MatrixGuidePage() {
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#201C50] mb-4">Leadership Matrix Guide</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the Strategic Execution vs L.E.A.D.Better matrix and what each placement means for
              leadership development
            </p>
          </div>

          {/* Matrix Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">The L.E.A.D.Better Matrix</CardTitle>
              <CardDescription>
                Leaders are plotted based on two critical dimensions of effective leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#EDA820]/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#EDA820]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#201C50] mb-2">Strategic Execution (Y-Axis)</h3>
                      <p className="text-sm text-gray-600">
                        How well leaders drive strategic business outcomes through business acumen, results focus,
                        enterprise thinking, and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#F2789D]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#F2789D]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#201C50] mb-2">L.E.A.D.Better Score (X-Axis)</h3>
                      <p className="text-sm text-gray-600">
                        How well leaders create positive culture and employee experience through Listen, Empathize,
                        Analyze, and Delegate behaviors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3EDDB]/30 p-6 rounded-lg">
                  <h3 className="font-medium text-[#201C50] mb-3">The Ideal Leader (3,3)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The goal is to develop leaders who excel in both dimensions - driving business results while
                    creating a thriving, positive culture.
                  </p>
                  <Badge className="bg-[#80967D] text-white">Strategic & Culturally Positive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Level Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Risk Level Classification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-red-800">High Risk</div>
                    <div className="text-sm text-red-600">
                      Immediate development needed to avoid organizational harm
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-yellow-800">Medium Risk</div>
                    <div className="text-sm text-yellow-600">
                      Moderate concern; development needed to optimize impact
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-green-800">Low Risk</div>
                    <div className="text-sm text-green-600">Strong leadership, low organizational risk</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matrix Profiles Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">All Matrix Profiles</CardTitle>
              <CardDescription>
                Click on any profile to learn more about the leadership characteristics and development recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {matrixProfiles.map((profile, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-500">
                          ({profile.x}, {profile.y})
                        </div>
                        <Badge className={profile.color}>{profile.risk} Risk</Badge>
                      </div>
                      <CardTitle className="text-sm leading-tight">{profile.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Who Sees What */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Privacy & Access Levels</CardTitle>
              <CardDescription>
                Understanding what information is visible to different roles in the assessment process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Information</th>
                      <th className="text-center p-3 font-medium">Leader</th>
                      <th className="text-center p-3 font-medium">Rater</th>
                      <th className="text-center p-3 font-medium">Manager/Coach</th>
                      <th className="text-center p-3 font-medium">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Individual rater responses</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">Own only</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Aggregated scores & matrix placement</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Rater relationship summary</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">Summary only</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Development recommendations</td>
                      <td className="text-center p-3">Basic</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">Detailed</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                    <tr>
                      <td className="p-3">Team matrix view</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">❌</td>
                      <td className="text-center p-3">✅</td>
                      <td className="text-center p-3">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-[#201C50] mb-4">Ready to Assess Your Leadership Team?</h2>
            <p className="text-gray-600 mb-6">
              Start building leaders who drive both strategic results and positive culture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button className="bg-[#201C50] hover:bg-[#201C50]/90">Get Started</Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  className="border-[#80967D] text-[#80967D] hover:bg-[#80967D] hover:text-white bg-transparent"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
