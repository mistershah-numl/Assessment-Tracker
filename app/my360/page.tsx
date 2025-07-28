"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, BarChart3, Download, Plus, Eye } from "lucide-react"
import Link from "next/link"
import { MatrixVisualization } from "@/components/matrix-visualization"

export default function My360Dashboard() {
  const [showResults, setShowResults] = useState(true) // Simulating 5+ ratings received
  const [newRaterEmail, setNewRaterEmail] = useState("")
  const [newRaterName, setNewRaterName] = useState("")
  const [newRaterRole, setNewRaterRole] = useState("")

  // Mock data for the leader's assessment
  const myAssessment = {
    ratingsReceived: 8,
    ratingsNeeded: 5,
    strategicScore: 2.8,
    leadScore: 2.4,
    profile: "Strategic Business Leader, Strong People Partner",
    risk: "Low",
    lScore: 2.6,
    eScore: 2.3,
    aScore: 2.5,
    dScore: 2.2,
  }

  const pendingRaters = [
    { name: "John Smith", email: "john.smith@company.com", role: "Direct Report", status: "Pending" },
    { name: "Lisa Wong", email: "lisa.wong@company.com", role: "Peer", status: "Completed" },
    { name: "David Johnson", email: "david.johnson@company.com", role: "Manager", status: "Completed" },
  ]

  const handleAddRater = () => {
    // This would normally send to manager for approval
    alert("Rater request sent to your manager for approval!")
    setNewRaterEmail("")
    setNewRaterName("")
    setNewRaterRole("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="font-bold text-[#201C50]">L.E.A.D.Better 360</span>
              </Link>
              <Badge className="bg-[#80967D] text-white">My Assessment</Badge>
            </div>
            <div className="flex items-center space-x-4">
              {showResults && (
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Assessment Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ratings Received</CardTitle>
              <Users className="h-4 w-4 text-[#201C50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#201C50]">{myAssessment.ratingsReceived}</div>
              <p className="text-xs text-muted-foreground">
                {myAssessment.ratingsReceived >= myAssessment.ratingsNeeded
                  ? "Assessment complete!"
                  : `${myAssessment.ratingsNeeded - myAssessment.ratingsReceived} more needed`}
              </p>
            </CardContent>
          </Card>

          {showResults && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Strategic Execution</CardTitle>
                  <BarChart3 className="h-4 w-4 text-[#EDA820]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#EDA820]">{myAssessment.strategicScore}/3</div>
                  <p className="text-xs text-muted-foreground">Strong business leadership</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">L.E.A.D.Better Score</CardTitle>
                  <Users className="h-4 w-4 text-[#F2789D]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#F2789D]">{myAssessment.leadScore}/3</div>
                  <p className="text-xs text-muted-foreground">Developing people leadership</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {showResults ? (
          /* Results View */
          <div className="space-y-6">
            {/* Matrix Placement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">Your Leadership Profile</CardTitle>
                <CardDescription>Your placement on the Strategic Execution vs L.E.A.D.Better matrix</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <MatrixVisualization
                      leaders={[
                        {
                          name: "You",
                          strategicScore: myAssessment.strategicScore,
                          leadScore: myAssessment.leadScore,
                          profile: myAssessment.profile,
                          risk: myAssessment.risk,
                        },
                      ]}
                      highlightLeader="You"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-[#201C50] mb-2">Your Profile</h3>
                      <Badge className="bg-green-100 text-green-800 mb-3">{myAssessment.profile}</Badge>
                      <p className="text-sm text-gray-600">
                        You demonstrate strong strategic leadership while building positive culture and employee
                        experience. You're well-positioned for senior leadership roles.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-[#201C50] mb-2">L.E.A.D. Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Listen</span>
                          <span className="text-sm font-medium">{myAssessment.lScore}/3</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Empathize</span>
                          <span className="text-sm font-medium">{myAssessment.eScore}/3</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Analyze</span>
                          <span className="text-sm font-medium">{myAssessment.aScore}/3</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Delegate</span>
                          <span className="text-sm font-medium">{myAssessment.dScore}/3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Development Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">Your Development Focus</CardTitle>
                <CardDescription>Areas to focus on for continued leadership growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Build on Success and Lead at Scale</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• You are doing a great job, keep growing your leadership impact</li>
                      <li>• Look for opportunities to mentor and coach other leaders</li>
                      <li>• Take on complex projects that stretch both your strategic and people leadership</li>
                      <li>• Share your leadership practices to help shape a strong culture across the organization</li>
                      <li>• Prepare for future roles of higher impact and responsibility</li>
                      <li>• Model balanced leadership: Lead Strategically. Lead Better.</li>
                    </ul>
                  </div>

                  <div className="bg-[#80967D]/10 p-4 rounded-lg">
                    <h4 className="font-medium text-[#80967D] mb-2">Next Steps</h4>
                    <p className="text-sm text-gray-600">
                      Consider discussing these development opportunities with your manager or coach to create a
                      specific action plan that leverages your strengths while continuing to grow your impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Pending Results View */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">Assessment in Progress</CardTitle>
                <CardDescription>
                  Your 360 assessment is currently collecting feedback. Results will be available once 5 or more ratings
                  are received.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#EDA820]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#EDA820]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#201C50] mb-2">Collecting Feedback</h3>
                  <p className="text-gray-600 mb-4">
                    {myAssessment.ratingsReceived} of {myAssessment.ratingsNeeded} minimum ratings received
                  </p>
                  <Progress
                    value={(myAssessment.ratingsReceived / myAssessment.ratingsNeeded) * 100}
                    className="w-48 mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Rater Management */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-[#201C50]">Manage Your Raters</CardTitle>
            <CardDescription>
              View who has been invited to provide feedback and request additional raters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Current Raters */}
              <div>
                <h3 className="font-medium mb-4">Current Raters</h3>
                <div className="space-y-2">
                  {pendingRaters.map((rater, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{rater.name}</div>
                        <div className="text-sm text-gray-500">
                          {rater.email} • {rater.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Rater */}
              <div>
                <h3 className="font-medium mb-4">Request Additional Rater</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="raterName">Name</Label>
                    <Input
                      id="raterName"
                      value={newRaterName}
                      onChange={(e) => setNewRaterName(e.target.value)}
                      placeholder="Enter rater's name"
                      disabled={pendingRaters.length >= 3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="raterEmail">Email</Label>
                    <Input
                      id="raterEmail"
                      type="email"
                      value={newRaterEmail}
                      onChange={(e) => setNewRaterEmail(e.target.value)}
                      placeholder="Enter rater's email"
                      disabled={pendingRaters.length >= 3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="raterRole">Relationship</Label>
                    <select
                      id="raterRole"
                      value={newRaterRole}
                      onChange={(e) => setNewRaterRole(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      disabled={pendingRaters.length >= 3}
                    >
                      <option value="">Select relationship</option>
                      <option value="Direct Leader">Direct Leader</option>
                      <option value="Direct Report">Direct Report</option>
                      <option value="Professional Peer">Professional Peer</option>
                      <option value="Professional Collaborator">Professional Collaborator</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Project Report">Project Report</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <Button
                  onClick={handleAddRater}
                  disabled={!newRaterName || !newRaterEmail || !newRaterRole || pendingRaters.length >= 3}
                  className="bg-[#80967D] hover:bg-[#80967D]/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Request Rater Approval
                </Button>
                {pendingRaters.length >= 3 && (
                  <p className="text-sm text-red-500 mt-2">You can only request up to 3 raters at a time.</p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Rater requests will be sent to your manager for approval before invitations are sent.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="mt-6 bg-[#F3EDDB]/30">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-[#80967D] mt-0.5" />
              <div>
                <h3 className="font-medium text-[#201C50] mb-2">Your Privacy is Protected</h3>
                <p className="text-sm text-gray-600">
                  All feedback is confidential and aggregated. Individual rater responses are never shown. Only summary
                  data and development insights are shared with you and your manager/coach. A minimum of 5 raters is
                  required before any results are displayed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
