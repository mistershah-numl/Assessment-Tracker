import { toast } from "@/hooks/use-toast"

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

export function exportAssessmentsToCsv(assessments: Assessment[]) {
    if (assessments.length === 0) {
        toast({
            title: "No Data to Export",
            description: "There are no assessments to export.",
            variant: "destructive",
        })
        return
    }

    const headers = [
        "ID",
        "Leader Name",
        "Leader Email",
        "Status",
        "Ratings Received",
        "Ratings Needed",
        "Days Remaining",
        "Strategic Score",
        "L.E.A.D. Score",
        "Profile",
        "Risk",
    ]

    const rows = assessments.map((assessment) => [
        assessment.id,
        assessment.leaderName,
        assessment.leaderEmail,
        assessment.status,
        assessment.ratingsReceived,
        assessment.ratingsNeeded,
        assessment.daysRemaining,
        assessment.strategicScore !== null ? assessment.strategicScore : "N/A",
        assessment.leadScore !== null ? assessment.leadScore : "N/A",
        `"${assessment.profile.replace(/"/g, '""')}"`, // Handle commas and quotes in profile
        assessment.risk,
    ])

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "assessments_report.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    toast({
        title: "Export Successful!",
        description: "Assessments data exported to assessments_report.csv",
    })
}
