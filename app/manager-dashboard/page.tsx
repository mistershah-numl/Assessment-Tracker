"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Users, BarChart3, Plus, Eye, Edit, Mail, Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { MatrixVisualization } from "@/components/matrix-visualization"
import { ViewAssessmentDialog } from "@/components/view-assessment-dialog"
import { EditAssessmentDialog } from "@/components/edit-assessment-dialog"
import { SendEmailDialog } from "@/components/send-email-dialog"
import { CreateDevelopmentPlanDialog } from "@/components/create-devlopment-plan-dialog"
import { ScheduleCoachingSessionDialog } from "@/components/schedule-coaching-session-dialog"
import { CreateAssessmentDialog } from "@/components/create-assessment-dialog"
import { exportAssessmentsToCsv } from "@/lib/export-utils"
import { toast } from "@/hooks/use-toast"

// Mock data for manager view
interface Assessment {
  id: number
  leaderName: string
  leaderEmail: string
  status: string
  ratingsReceived: number
  ratingsNeeded: number
  daysRemaining: number
  strategicScore: number | null
  leadScore: number | null
  profile: string
  risk: string
}

const initialAssessments: Assessment[] = [
  {
    id: 1,
    leaderName: "Sarah Johnson",
    leaderEmail: "sarah.johnson@company.com",
    status: "Active",
    ratingsReceived: 7,
    ratingsNeeded: 10,
    daysRemaining: 15,
    strategicScore: 2.8,
    leadScore: 2.4,
    profile: "Strategic Business Leader, Strong People Partner",
    risk: "Low",
  },
  {
    id: 2,
    leaderName: "Michael Chen",
    leaderEmail: "michael.chen@company.com",
    status: "Complete",
    ratingsReceived: 8,
    ratingsNeeded: 8,
    daysRemaining: 0,
    strategicScore: 1.2,
    leadScore: 2.7,
    profile: "People-Focused Emerging Business Driver",
    risk: "Medium",
  },
  {
    id: 3,
    leaderName: "Emily White",
    leaderEmail: "emily.white@company.com",
    status: "Pending",
    ratingsReceived: 2,
    ratingsNeeded: 10,
    daysRemaining: 20,
    strategicScore: null,
    leadScore: null,
    profile: "New Leader, Needs Assessment",
    risk: "High",
  },
]

export default function ManagerDashboard() {
  const [selectedTab, setSelectedTab] = useState("assessments")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [myAssessments, setMyAssessments] = useState<Assessment[]>(initialAssessments)

  // Dialog states
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [isDevelopmentPlanDialogOpen, setIsDevelopmentPlanDialogOpen] = useState(false)
  const [isCoachingSessionDialogOpen, setIsCoachingSessionDialogOpen] = useState(false)
  const [isCreateAssessmentDialogOpen, setIsCreateAssessmentDialogOpen] = useState(false)

  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null)

  const handleViewAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsViewDialogOpen(true)
  }

  const handleEditAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsEditDialogOpen(true)
  }

  const handleSaveAssessment = (updatedAssessment: Assessment) => {
    setMyAssessments((prevAssessments) =>
      prevAssessments.map((a) => (a.id === updatedAssessment.id ? updatedAssessment : a)),
    )
  }

  const handleSendEmail = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsEmailDialogOpen(true)
  }

  const handleCreateDevelopmentPlan = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsDevelopmentPlanDialogOpen(true)
  }

  const handleScheduleCoachingSession = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsCoachingSessionDialogOpen(true)
  }

  const handleAddNewAssessment = (newAssessmentData: Omit<Assessment, "id" | "ratingsReceived" | "daysRemaining">) => {
    const newAssessment: Assessment = {
      id: myAssessments.length > 0 ? Math.max(...myAssessments.map((a) => a.id)) + 1 : 1,
      ratingsReceived: 0,
      daysRemaining: 30,
      ...newAssessmentData,
    }
    setMyAssessments((prevAssessments) => [...prevAssessments, newAssessment])
    toast({
      title: "Assessment Created!",
      description: `New assessment for ${newAssessment.leaderName} has been added.`,
    })
  }

  const handleExportReports = () => {
    exportAssessmentsToCsv(myAssessments)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
        return "bg-green-100 text-green-800"
      case "Active":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const activeAssessmentsCount = myAssessments.filter((a) => a.status === "Active").length
  const completedAssessmentsCount = myAssessments.filter((a) => a.status === "Complete").length
  const leadersNeedingCoaching = myAssessments.filter((a) => a.risk === "High" || a.risk === "Medium").length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg">L</span>
                </div>
                <span className="font-bold text-lg sm:text-xl text-[#201C50]">LEAD Better</span>
              </Link>
              <Badge className="bg-[#F2789D] text-white px-2 py-1 text-xs sm:text-sm">Manager/Coach</Badge>
            </div>
            <div className="flex items-center space-x-4">
              {/* Desktop Actions */}
              <div className="hidden sm:flex items-center space-x-4">
                <Button variant="outline" size="sm" onClick={handleExportReports}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Reports
                </Button>
                <Button className="bg-[#EDA820] hover:bg-[#EDA820]/90" onClick={() => setIsCreateAssessmentDialogOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Assessment
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <button className="sm:hidden text-[#201C50] focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 sm:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 w-3/4 bg-white/95 backdrop-blur-xl shadow-2xl h-full p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-[#201C50] focus:outline-none">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                {["assessments", "matrix", "development"].map((tab) => (
                  <button
                    key={tab}
                    className={`w-full py-3 px-4 text-left rounded-lg text-base font-medium ${selectedTab === tab
                      ? "bg-gradient-to-r from-[#201C50] to-[#EDA820] text-white"
                      : "text-[#201C50] hover:bg-gray-100/50"
                      } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#201C50]`}
                    onClick={() => {
                      setSelectedTab(tab)
                      setIsMenuOpen(false)
                    }}
                  >
                    {tab === "assessments" ? "My Assessments" : tab.charAt(0).toUpperCase() + tab.slice(1)} View
                  </button>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <Button
                  variant="outline"
                  className="w-full text-[#201C50] hover:bg-[#201C50] hover:text-white bg-transparent hover:shadow-lg transition-all duration-300 text-base py-2"
                  onClick={() => {
                    handleExportReports()
                    setIsMenuOpen(false)
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export Reports
                </Button>
                <Button
                  className="w-full bg-[#EDA820] hover:bg-[#EDA820]/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base py-2 mt-3"
                  onClick={() => {
                    setIsCreateAssessmentDialogOpen(true)
                    setIsMenuOpen(false)
                  }}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Assessments</CardTitle>
              <BarChart3 className="h-4 w-4 text-[#201C50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#201C50]">{myAssessments.length}</div>
              <p className="text-xs text-gray-500">
                {activeAssessmentsCount} active, {completedAssessmentsCount} completed
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Performance</CardTitle>
              <Users className="h-4 w-4 text-[#80967D]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#80967D]">85%</div>
              <p className="text-xs text-gray-500">Average team score</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Development Needed</CardTitle>
              <Users className="h-4 w-4 text-[#EC5A29]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#EC5A29]">{leadersNeedingCoaching}</div>
              <p className="text-xs text-gray-500">Leaders need coaching</p>
            </CardContent>
          </Card>
        </div>
        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-3 bg-white shadow-md rounded-lg p-1 mb-6">
            <TabsTrigger
              value="assessments"
              className={`text-sm sm:text-base py-2 ${selectedTab === "assessments"
                ? "bg-gradient-to-r from-[#201C50] to-[#EDA820] text-white font-bold"
                : "text-[#201C50] hover:bg-gray-100/50"
                } transition-all duration-300`}
            >
              My Assessments
            </TabsTrigger>
            <TabsTrigger
              value="matrix"
              className={`text-sm sm:text-base py-2 ${selectedTab === "matrix"
                ? "bg-gradient-to-r from-[#201C50] to-[#EDA820] text-white font-bold"
                : "text-[#201C50] hover:bg-gray-100/50"
                } transition-all duration-300`}
            >
              Team Matrix
            </TabsTrigger>
            <TabsTrigger
              value="development"
              className={`text-sm sm:text-base py-2 ${selectedTab === "development"
                ? "bg-gradient-to-r from-[#201C50] to-[#EDA820] text-white font-bold"
                : "text-[#201C50] hover:bg-gray-100/50"
                } transition-all duration-300`}
            >
              Development
            </TabsTrigger>
          </TabsList>
          <TabsContent value="assessments" className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-[#201C50] text-lg sm:text-xl">Assessment Management</CardTitle>
                <CardDescription className="text-gray-600">Manage assessments for your team members and view their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-sm sm:text-base">Leader</TableHead>
                        <TableHead className="text-sm sm:text-base">Status</TableHead>
                        <TableHead className="text-sm sm:text-base">Progress</TableHead>
                        <TableHead className="text-sm sm:text-base">Scores</TableHead>
                        <TableHead className="text-sm sm:text-base">Profile</TableHead>
                        <TableHead className="text-sm sm:text-base">Risk</TableHead>
                        <TableHead className="text-sm sm:text-base">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {myAssessments.map((assessment) => (
                        <TableRow key={assessment.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium text-sm sm:text-base">{assessment.leaderName}</div>
                              <div className="text-xs sm:text-sm text-gray-500">{assessment.leaderEmail}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(assessment.status)}>{assessment.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-sm">
                                {assessment.ratingsReceived}/{assessment.ratingsNeeded} ratings
                              </div>
                              <Progress
                                value={(assessment.ratingsReceived / assessment.ratingsNeeded) * 100}
                                className="w-20 sm:w-24"
                              />
                              {assessment.daysRemaining > 0 && (
                                <div className="text-xs sm:text-sm text-gray-500">{assessment.daysRemaining} days left</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {assessment.strategicScore !== null && assessment.leadScore !== null ? (
                              <div className="text-sm">
                                <div>Strategic: {assessment.strategicScore}</div>
                                <div>L.E.A.D.: {assessment.leadScore}</div>
                              </div>
                            ) : (
                              <span className="text-gray-400">Pending</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="text-sm max-w-24 sm:max-w-32">{assessment.profile}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getRiskColor(assessment.risk)}>{assessment.risk}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => handleViewAssessment(assessment)}>
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleEditAssessment(assessment)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleSendEmail(assessment)}>
                                <Mail className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="matrix" className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-[#201C50] text-lg sm:text-xl">Team Leadership Matrix</CardTitle>
                <CardDescription>
                  View your team members plotted on the Strategic Execution vs L.E.A.D.Better matrix
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MatrixVisualization
                  leaders={myAssessments
                    .filter((a) => a.strategicScore !== null && a.leadScore !== null)
                    .map((a) => ({
                      name: a.leaderName,
                      strategicScore: a.strategicScore!,
                      leadScore: a.leadScore!,
                      profile: a.profile,
                      risk: a.risk,
                    }))}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="development" className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-[#201C50] text-lg sm:text-xl">Development Recommendations</CardTitle>
                <CardDescription>
                  HR/OD professional guidance for each team member based on their matrix placement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {myAssessments
                    .filter((a) => a.strategicScore !== null && a.leadScore !== null)
                    .map((assessment) => (
                      <div key={assessment.id} className="border rounded-lg p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium text-[#201C50] text-sm sm:text-base">{assessment.leaderName}</h3>
                            <p className="text-sm text-gray-600">{assessment.profile}</p>
                          </div>
                          <Badge className={getRiskColor(assessment.risk)}>{assessment.risk} Risk</Badge>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm mb-2">Recommended Actions:</h4>
                            {assessment.risk === "Low" ? (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Position for larger enterprise impact roles</li>
                                <li>• Assign enterprise-level mentors or sponsors</li>
                                <li>• Leverage as mentor for other leaders</li>
                                <li>• Include in succession planning discussions</li>
                              </ul>
                            ) : (
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Business skills training (finance, operations, strategic thinking)</li>
                                <li>• Partner with strong business leader as mentor</li>
                                <li>• Assign stretch projects tied to business KPIs</li>
                                <li>• Retain & encourage cultural strengths</li>
                              </ul>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <Button
                              size="sm"
                              className="bg-[#80967D] hover:bg-[#80967D]/90 w-full sm:w-auto"
                              onClick={() => handleCreateDevelopmentPlan(assessment)}
                            >
                              Create Development Plan
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full sm:w-auto"
                              onClick={() => handleScheduleCoachingSession(assessment)}
                            >
                              Schedule Coaching Session
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialogs */}
      <ViewAssessmentDialog
        open={isViewDialogOpen}
        onOpenChange={setIsViewDialogOpen}
        assessment={selectedAssessment}
      />
      <EditAssessmentDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        assessment={selectedAssessment}
        onSave={handleSaveAssessment}
      />
      <SendEmailDialog
        open={isEmailDialogOpen}
        onOpenChange={setIsEmailDialogOpen}
        leaderEmail={selectedAssessment?.leaderEmail || ""}
        leaderName={selectedAssessment?.leaderName || ""}
      />
      <CreateDevelopmentPlanDialog
        open={isDevelopmentPlanDialogOpen}
        onOpenChange={setIsDevelopmentPlanDialogOpen}
        leaderName={selectedAssessment?.leaderName || ""}
      />
      <ScheduleCoachingSessionDialog
        open={isCoachingSessionDialogOpen}
        onOpenChange={setIsCoachingSessionDialogOpen}
        leaderName={selectedAssessment?.leaderName || ""}
      />
      <CreateAssessmentDialog
        open={isCreateAssessmentDialogOpen}
        onOpenChange={setIsCreateAssessmentDialogOpen}
        onSave={handleAddNewAssessment}
      />
    </div>
  )
}