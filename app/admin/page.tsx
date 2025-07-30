
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
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
  Menu,
  X,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [assessments, setAssessments] = useState<Assessment[]>(initialAssessments)
  const [teams, setTeams] = useState<Team[]>(initialTeams)

  // Dialog states
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [isDevelopmentPlanDialogOpen, setIsDevelopmentPlanDialogOpen] = useState(false)
  const [isCoachingSessionDialogOpen, setIsCoachingSessionDialogOpen] = useState(false)
  const [isCreateAssessmentDialogOpen, setIsCreateAssessmentDialogOpen] = useState(false)
  const [isViewTeamDialogOpen, setIsViewTeamDialogOpen] = useState(false)
  const [isEditTeamDialogOpen, setIsEditTeamDialogOpen] = useState(false)
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false)
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null)
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  // Menu toggle handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

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
      <header className="bg-white/90 backdrop-blur-lg border-b shadow-sm sticky top-0 z-50">
        <div className="px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-sm sm:text-base">L</span>
                </div>
                <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  LEAD Better
                </span>
              </Link>
              <Badge className="bg-gradient-to-r from-[#201C50] to-[#80967D] text-white px-2 sm:px-3 py-0.5 text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Administrator
              </Badge>
            </div>
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm hover:bg-gray-100"
                onClick={handleExportReports}
              >
                <Download className="w-4 h-4 mr-1 sm:mr-2" />
                Export
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-xs sm:text-sm"
                onClick={() => setIsCreateAssessmentDialogOpen(true)}
              >
                <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                New Assessment
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#201C50]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden" onClick={closeMenu}>
          <div
            className="fixed top-0 right-0 w-3/4 max-w-sm bg-white/95 shadow-2xl h-full p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button onClick={closeMenu} className="text-[#201C50]">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col gap-2">
                {["assessments", "teams", "matrix", "settings"].map((tab) => (
                  <Button
                    key={tab}
                    variant={selectedTab === tab ? "default" : "ghost"}
                    className={`w-full py-2 px-3 text-left rounded-lg text-sm font-medium ${selectedTab === tab
                      ? "bg-gradient-to-r from-[#201C50] to-[#80967D] text-white"
                      : "text-[#201C50] hover:bg-gray-100/50"
                      }`}
                    onClick={() => {
                      setSelectedTab(tab)
                      closeMenu()
                    }}
                  >
                    {tab === "matrix" ? "Matrix View" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <Button
                  variant="outline"
                  className="w-full text-[#201C50] hover:bg-[#201C50] hover:text-white text-sm py-2"
                  onClick={() => {
                    handleExportReports()
                    closeMenu()
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-sm py-2 mt-2"
                  onClick={() => {
                    setIsCreateAssessmentDialogOpen(true)
                    closeMenu()
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">Total Assessments</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-br from-[#201C50] to-[#80967D] rounded-lg flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#201C50]">{totalAssessments}</div>
              <p className="text-xs text-green-600 font-medium flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                {activeAssessments} active
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-pink-50/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">Active Assessments</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-br from-[#F2789D] to-[#EC5A29] rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#F2789D]">{activeAssessments}</div>
              <p className="text-xs text-orange-600 font-medium mt-1">
                {assessments.filter((a) => a.daysRemaining <= 7 && a.daysRemaining > 0).length} closing this week
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">Completion Rate</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-br from-[#80967D] to-[#201C50] rounded-lg flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#80967D]">{completionRate}%</div>
              <p className="text-xs text-green-600 font-medium mt-1">Above target of 85%</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-red-50/50 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">High Risk Leaders</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-br from-[#EC5A29] to-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-[#EC5A29]">{highRiskLeaders}</div>
              <p className="text-xs text-red-600 font-medium mt-1">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-white/90 backdrop-blur-sm shadow-md rounded-xl p-2">
            {["assessments", "teams", "matrix", "settings"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 min-w-[80px] sm:min-w-[100px] py-2 px-3 text-xs sm:text-sm font-medium rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#201C50] data-[state=active]:to-[#80967D] data-[state=active]:text-white hover:bg-gray-100/50 transition-all duration-200"
              >
                {tab === "matrix" ? "Matrix View" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="assessments" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Assessment Management
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  Manage all 360 assessments, view progress, and access detailed reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b-2 border-gray-200">
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Leader</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Status</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Progress</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm hidden md:table-cell">Scores</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm hidden md:table-cell">Profile</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Risk</TableHead>
                        <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assessments.map((assessment) => (
                        <TableRow key={assessment.id} className="hover:bg-gray-50/80 transition-colors">
                          <TableCell>
                            <div>
                              <div className="font-medium text-[#201C50] text-sm">{assessment.leaderName}</div>
                              <div className="text-xs text-gray-500">{assessment.leaderEmail}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(assessment.status)} text-xs`}>{assessment.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="text-xs font-medium">
                                {assessment.ratingsReceived}/{assessment.ratingsNeeded}
                              </div>
                              <Progress
                                value={(assessment.ratingsReceived / assessment.ratingsNeeded) * 100}
                                className="w-20 h-1.5"
                              />
                              {assessment.daysRemaining > 0 && (
                                <div className="text-xs text-gray-500">{assessment.daysRemaining} days</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {assessment.strategicScore && assessment.leadScore ? (
                              <div className="text-xs">
                                <div>Strategic: {assessment.strategicScore}</div>
                                <div>L.E.A.D.: {assessment.leadScore}</div>
                              </div>
                            ) : (
                              <span className="text-gray-400 italic text-xs">Pending</span>
                            )}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="text-xs max-w-28 font-medium">{assessment.profile}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getRiskColor(assessment.risk)} text-xs`}>{assessment.risk}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-1.5 sm:p-2"
                                onClick={() => handleViewAssessment(assessment)}
                              >
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-1.5 sm:p-2"
                                onClick={() => handleEditAssessment(assessment)}
                              >
                                <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="p-1.5 sm:p-2"
                                onClick={() => handleSendEmail(assessment)}
                              >
                                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
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

          <TabsContent value="teams" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Team Management
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  Create and manage team assessments with shared matrix views
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-xs sm:text-sm"
                    onClick={() => setIsCreateTeamDialogOpen(true)}
                  >
                    <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                    Create Team
                  </Button>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b-2 border-gray-200">
                          <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Team Name</TableHead>
                          <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Team Key</TableHead>
                          <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Members</TableHead>
                          <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Completed</TableHead>
                          <TableHead className="font-bold text-[#201C50] text-xs sm:text-sm">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teams.map((team) => (
                          <TableRow key={team.id} className="hover:bg-gray-50/80 transition-colors">
                            <TableCell className="font-medium text-[#201C50] text-xs sm:text-sm">{team.name}</TableCell>
                            <TableCell>
                              <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">{team.key}</code>
                            </TableCell>
                            <TableCell className="font-medium text-xs sm:text-sm">{team.members}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-xs sm:text-sm">{team.completed}/{team.members}</span>
                                <Progress value={(team.completed / team.members) * 100} className="w-20 h-1.5" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="p-1.5 sm:p-2"
                                  onClick={() => handleViewTeam(team)}
                                >
                                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="p-1.5 sm:p-2"
                                  onClick={() => handleEditTeam(team)}
                                >
                                  <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
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

          <TabsContent value="matrix" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  Leadership Matrix Overview
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">
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

          <TabsContent value="settings" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                  System Settings
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">
                  Configure system defaults and manage user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#F3EDDB]/30 to-white p-4 rounded-lg border">
                    <h3 className="text-base sm:text-lg font-bold text-[#201C50] mb-3">Assessment Defaults</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Default Assessment Period</label>
                        <select className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#201C50] text-sm">
                          <option>30 days</option>
                          <option>60 days</option>
                          <option>90 days</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Minimum Raters Required</label>
                        <input
                          type="number"
                          defaultValue={5}
                          className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-[#201C50] text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#F3EDDB]/30 to-white p-4 rounded-lg border">
                    <h3 className="text-base sm:text-lg font-bold text-[#201C50] mb-3">Reminder Settings</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-[#201C50] rounded" />
                        <span className="text-xs sm:text-sm">Send automatic reminders every 30 days</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-[#201C50] rounded" />
                        <span className="text-xs sm:text-sm">Send completion notifications</span>
                      </label>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#201C50] to-[#80967D] hover:from-[#201C50]/90 hover:to-[#80967D]/90 text-sm">
                    Save Settings
                  </Button>
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
