import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

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

interface ViewAssessmentDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    assessment: Assessment | null
}

export function ViewAssessmentDialog({ open, onOpenChange, assessment }: ViewAssessmentDialogProps) {
    if (!assessment) return null

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

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assessment Details for {assessment.leaderName}</DialogTitle>
                    <DialogDescription>Overview of the selected leader's assessment.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Name:</span>
                        <span className="col-span-2">{assessment.leaderName}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Email:</span>
                        <span className="col-span-2">{assessment.leaderEmail}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Status:</span>
                        <Badge className={getStatusColor(assessment.status)}>{assessment.status}</Badge>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Progress:</span>
                        <div className="col-span-2">
                            <div className="text-sm">
                                {assessment.ratingsReceived}/{assessment.ratingsNeeded} ratings
                            </div>
                            <Progress value={(assessment.ratingsReceived / assessment.ratingsNeeded) * 100} className="w-full" />
                            {assessment.daysRemaining > 0 && (
                                <div className="text-xs text-gray-500">{assessment.daysRemaining} days left</div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Scores:</span>
                        <div className="col-span-2">
                            {assessment.strategicScore !== null && assessment.leadScore !== null ? (
                                <>
                                    <div>Strategic: {assessment.strategicScore}</div>
                                    <div>L.E.A.D.: {assessment.leadScore}</div>
                                </>
                            ) : (
                                <span className="text-gray-400">Pending</span>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Profile:</span>
                        <span className="col-span-2">{assessment.profile}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Risk:</span>
                        <Badge className={getRiskColor(assessment.risk)}>{assessment.risk}</Badge>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
