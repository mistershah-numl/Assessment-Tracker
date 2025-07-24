"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  BarChart3,
  Download,
  Eye,
  Edit,
  Plus,
  Mail,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { MatrixVisualization } from "@/components/matrix-visualization"
import { ViewAssessmentDialog } from "@/components/view-assessment-dialog"
import { EditAssessmentDialog } from "@/components/edit-assessment-dialog"
import { SendEmailDialog } from "@/components/send-email-dialog"
import { CreateDevelopmentPlanDialog } from "@/components/create-devlopment-plan-dialog"
import { ScheduleCoachingSessionDialog } from "@/components/schedule-coaching-session-dialog"
import { CreateAssessmentDialog } from "@/components/create-assessment-dialog"
import { CreateTeamDialog } from "@/components/create-team-dialog"
import { ViewTeamDialog } from "@/components/view-team-dialog"
import { EditTeamDialog } from "@/components/edit-team-dialog"
import { exportAssessmentsToCsv } from "@/lib/export-utils"
import { toast } from "@/hooks/use-toast"

// Assessment interface
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

// Team interface
interface Team {
  id: number
  name: string
  key: string
  members: number
  completed: number
}

// Mock data for assessments
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
    leaderName: "Emily Rodriguez",
    leaderEmail: "emily.rodriguez@company.com",
    status: "Pending",
    ratingsReceived: 3,
    ratingsNeeded: 10,
    daysRemaining: 22,
    strategicScore: null,
    leadScore: null,
    profile: "New Leader, Needs Assessment",
    risk: "High",
  },
]

// Mock data for teams
const initialTeams: Team[] = [
  {
    id: 1,
    name: "Executive Team",
    key: "EXEC2024",
    members: 5,
    completed: 3,
  },
  {
    id: 2,
    name: "Sales Leadership",
    key: "SALES2024",
    members: 8,
    completed: 6,
  },
]

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("assessments")
  const [assessments, setAssessments] = useState<Assessment[]>(initialAssessments)
  const [teams, setTeams] = useState<Team[]>(initialTeams)

  // Dialog states for assessments
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [isDevelopmentPlanDialogOpen, setIsDevelopmentPlanDialogOpen] = useState(false)
  const [isCoachingSessionDialogOpen, setIsCoachingSessionDialogOpen] = useState(false)
  const [isCreateAssessmentDialogOpen, setIsCreateAssessmentDialogOpen] = useState(false)
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null)

  // Dialog states for teams
  const [isViewTeamDialogOpen, setIsViewTeamDialogOpen] = useState(false)
  const [isEditTeamDialogOpen, setIsEditTeamDialogOpen] = useState(false)
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  // Assessment action handlers
  const handleViewAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsViewDialogOpen(true)
  }

  const handleEditAssessment = (assessment: Assessment) => {
    setSelectedAssessment(assessment)
    setIsEditDialogOpen(true)
  }

  const handleSaveAssessment = (updatedAssessment: Assessment) => {
    setAssessments((prevAssessments) =>
      prevAssessments.map((a) => (a.id === updatedAssessment.id ? updatedAssessment : a)),
    )
    toast({
      title: "Assessment Updated!",
      description: `Assessment for ${updatedAssessment.leaderName} has been updated.`,
    })
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
      id: assessments.length > 0 ? Math.max(...assessments.map((a) => a.id)) + 1 : 1,
      ratingsReceived: 0,
      daysRemaining: 30,
      ...newAssessmentData,
    }
    setAssessments((prevAssessments) => [...prevAssessments, newAssessment])
    toast({
      title: "Assessment Created!",
      description: `New assessment for ${newAssessment.leaderName} has been added.`,
    })
  }

  // Team action handlers
  const handleViewTeam = (team: Team) => {
    setSelectedTeam(team)
    setIsViewTeamDialogOpen(true)
  }

  const handleEditTeam = (team: Team) => {
    setSelectedTeam(team)
    setIsEditTeamDialogOpen(true)
  }

  const handleSaveTeam = (updatedTeam: Team) => {
    setTeams((prevTeams) =>
      prevTeams.map((t) => (t.id === updatedTeam.id ? updatedTeam : t)),
    )
    toast({
      title: "Team Updated!",
      description: `Team ${updatedTeam.name} has been updated.`,
    })
  }

  const handleAddNewTeam = (newTeamData: Omit<Team, "id" | "completed">) => {
    const newTeam: Team = {
      id: teams.length > 0 ? Math.max(...teams.map((t) => t.id)) + 1 : 1,
      completed: 0,
      ...newTeamData,
    }
    setTeams((prevTeams) => [...prevTeams, newTeam])
    toast({
      title: "Team Created!",
      description: `New team ${newTeam.name} has been added.`,
    })
  }

  const handleExportReports = () => {
    exportAssessmentsToCsv(assessments)
    toast({
      title: "Export Successful!",
      description: "Assessments have been exported to CSV.",
    })
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300"
      case "Medium":
        return "bg-gradient-to-r from-yellow-100 to-orange-200 text-orange-800 border-orange-300"
      case "Low":
        return "bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 border-green-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
        return "bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 border-green-300"
      case "Active":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300"
      case "Pending":
        return "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Dynamic stats
  const totalAssessments = assessments.length
  const activeAssessments = assessments.filter((a) => a.status === "Active").length
  const completionRate = totalAssessments
    ? Math.round((assessments.filter((a) => a.status === "Complete").length / totalAssessments) * 100)
    : 0
  const highRiskLeaders = assessments.filter((a) => a.risk === "High").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#F3EDDB]/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  L.E.A.D.Better 360
                </span>
              </Link>
              <Badge className="bg-gradient-to-r from-[#201C50] to-[#80967D] text-white px-4 py-2 shadow-lg">
                <Users className="w-4 h-4 mr-2" />
                Administrator
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={handleExportReports}
              >
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
              <Button
                className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setIsCreateAssessmentDialogOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Assessment
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Assessments</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-[#201C50] to-[#80967D] rounded-xl flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#201C50] mb-1">{totalAssessments}</div>
              <p className="text-xs text-green-600 font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {activeAssessments} active
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-pink-50/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Assessments</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-[#F2789D] to-[#EC5A29] rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#F2789D] mb-1">{activeAssessments}</div>
              <p className="text-xs text-orange-600 font-medium">
                {assessments.filter((a) => a.daysRemaining <= 7 && a.daysRemaining > 0).length} closing this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completion Rate</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-[#80967D] to-[#201C50] rounded-xl flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#80967D] mb-1">{completionRate}%</div>
              <p className="text-xs text-green-600 font-medium">Above target of 85%</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-red-50/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">High Risk Leaders</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-[#EC5A29] to-red-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#EC5A29] mb-1">{highRiskLeaders}</div>
              <p className="text-xs text-red-600 font-medium">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-1">
            <TabsTrigger
              value="assessments"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#201C50] data-[state=active]:to-[#80967D] data-[state=active]:text-white"
            >
              Assessments
            </TabsTrigger>
            <TabsTrigger
              value="teams"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#201C50] data-[state=active]:to-[#80967D] data-[state=active]:text-white"
            >
              Teams
            </TabsTrigger>
            <TabsTrigger
              value="matrix"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#201C50] data-[state=active]:to-[#80967D] data-[state=active]:text-white"
            >
              Matrix View
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#201C50] data-[state=active]:to-[#80967D] data-[state=active]:text-white"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assessments" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Assessment Management
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Manage all 360 assessments, view progress, and access detailed reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-2 border-gray-200">
                        <TableHead className="font-bold text-[#201C50]">Leader</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Status</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Progress</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Scores</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Profile</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Risk</TableHead>
                        <TableHead className="font-bold text-[#201C50]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assessments.map((assessment) => (
                        <TableRow key={assessment.id} className="hover:bg-gray-50/80 transition-colors">
                          <TableCell>
                            <div>
                              <div className="font-medium text-[#201C50]">{assessment.leaderName}</div>
                              <div className="text-sm text-gray-500">{assessment.leaderEmail}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(assessment.status)}>{assessment.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              <div className="text-sm font-medium">
                                {assessment.ratingsReceived}/{assessment.ratingsNeeded} ratings
                              </div>
                              <Progress
                                value={(assessment.ratingsReceived / assessment.ratingsNeeded) * 100}
                                className="w-24 h-2"
                              />
                              {assessment.daysRemaining > 0 && (
                                <div className="text-xs text-gray-500">{assessment.daysRemaining} days left</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {assessment.strategicScore && assessment.leadScore ? (
                              <div className="text-sm">
                                <div className="font-medium">Strategic: {assessment.strategicScore}</div>
                                <div className="font-medium">L.E.A.D.: {assessment.leadScore}</div>
                              </div>
                            ) : (
                              <span className="text-gray-400 italic">Pending</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="text-sm max-w-32 font-medium">{assessment.profile}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getRiskColor(assessment.risk)}>{assessment.risk}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                                onClick={() => handleViewAssessment(assessment)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                                onClick={() => handleEditAssessment(assessment)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                                onClick={() => handleSendEmail(assessment)}
                              >
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

          <TabsContent value="teams" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Team Management
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Create and manage team assessments with shared matrix views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Button
                    className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setIsCreateTeamDialogOpen(true)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Team
                  </Button>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b-2 border-gray-200">
                          <TableHead className="font-bold text-[#201C50]">Team Name</TableHead>
                          <TableHead className="font-bold text-[#201C50]">Team Key</TableHead>
                          <TableHead className="font-bold text-[#201C50]">Members</TableHead>
                          <TableHead className="font-bold text-[#201C50]">Completed</TableHead>
                          <TableHead className="font-bold text-[#201C50]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teams.map((team) => (
                          <TableRow key={team.id} className="hover:bg-gray-50/80 transition-colors">
                            <TableCell className="font-medium text-[#201C50]">{team.name}</TableCell>
                            <TableCell>
                              <code className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-2 rounded-lg text-sm font-mono shadow-sm">
                                {team.key}
                              </code>
                            </TableCell>
                            <TableCell className="font-medium">{team.members}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <span className="font-medium">
                                  {team.completed}/{team.members}
                                </span>
                                <Progress value={(team.completed / team.members) * 100} className="w-24 h-2" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                                  onClick={() => handleViewTeam(team)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                                  onClick={() => handleEditTeam(team)}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matrix" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Leadership Matrix Overview
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  View all leaders plotted on the Strategic Execution vs L.E.A.D.Better matrix
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MatrixVisualization
                  leaders={assessments
                    .filter((a) => a.strategicScore && a.leadScore)
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
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Development Recommendations
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  HR/OD professional guidance for each team member based on their matrix placement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {assessments
                    .filter((a) => a.strategicScore !== null && a.leadScore !== null)
                    .map((assessment) => (
                      <div key={assessment.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium text-[#201C50]">{assessment.leaderName}</h3>
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
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              className="bg-[#80967D] hover:bg-[#80967D]/90"
                              onClick={() => handleCreateDevelopmentPlan(assessment)}
                            >
                              Create Development Plan
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
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

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  System Settings
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Configure system defaults and manage user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-[#F3EDDB]/30 to-white p-6 rounded-xl border">
                    <h3 className="text-xl font-bold text-[#201C50] mb-6">Assessment Defaults</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Default Assessment Period</label>
                        <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#201C50] transition-colors">
                          <option>30 days</option>
                          <option>60 days</option>
                          <option>90 days</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Minimum Raters Required</label>
                        <input
                          type="number"
                          defaultValue={5}
                          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#201C50] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#F3EDDB]/30 to-white p-6 rounded-xl border">
                    <h3 className="text-xl font-bold text-[#201C50] mb-6">Reminder Settings</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#201C50] rounded" />
                        <span className="font-medium">Send automatic reminders every 30 days</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-[#201C50] rounded" />
                        <span className="font-medium">Send completion notifications</span>
                      </label>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-[#201C50] to-[#80967D] hover:from-[#201C50]/90 hover:to-[#80967D]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-3">
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialogs for Assessments */}
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

      {/* Dialogs for Teams */}
      <ViewTeamDialog
        open={isViewTeamDialogOpen}
        onOpenChange={setIsViewTeamDialogOpen}
        team={selectedTeam}
      />
      <EditTeamDialog
        open={isEditTeamDialogOpen}
        onOpenChange={setIsEditTeamDialogOpen}
        team={selectedTeam}
        onSave={handleSaveTeam}
      />
      <CreateTeamDialog
        open={isCreateTeamDialogOpen}
        onOpenChange={setIsCreateTeamDialogOpen}
        onSave={handleAddNewTeam}
      />
    </div>
  )
}