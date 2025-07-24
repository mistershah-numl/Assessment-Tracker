"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

interface Team {
    id: number
    name: string
    key: string
    members: number
    completed: number
}

interface ViewTeamDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    team: Team | null
}

export function ViewTeamDialog({ open, onOpenChange, team }: ViewTeamDialogProps) {
    if (!team) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Team Details for {team.name}</DialogTitle>
                    <DialogDescription>Overview of the selected team's details.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Team Name:</span>
                        <span className="col-span-2">{team.name}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Team Key:</span>
                        <span className="col-span-2">{team.key}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Members:</span>
                        <span className="col-span-2">{team.members}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="text-sm font-medium">Progress:</span>
                        <div className="col-span-2">
                            <div className="text-sm">
                                {team.completed}/{team.members} completed
                            </div>
                            <Progress value={(team.completed / team.members) * 100} className="w-full" />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}