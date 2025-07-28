"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

interface ScheduleCoachingSessionDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    leaderName: string
}

export function ScheduleCoachingSessionDialog({ open, onOpenChange, leaderName }: ScheduleCoachingSessionDialogProps) {
    const [sessionDate, setSessionDate] = useState<Date | undefined>(undefined)
    const [sessionTime, setSessionTime] = useState("")
    const [sessionNotes, setSessionNotes] = useState("")

    const handleSubmit = () => {
        console.log(`Scheduling coaching session for ${leaderName}:`)
        console.log(`Date: ${sessionDate ? format(sessionDate, "PPP") : "N/A"}`)
        console.log(`Time: ${sessionTime || "N/A"}`)
        console.log(`Notes: ${sessionNotes || "N/A"}`)
        toast({
            title: "Coaching Session Scheduled!",
            description: `Session for ${leaderName} has been simulated.`,
        })
        setSessionDate(undefined)
        setSessionTime("")
        setSessionNotes("")
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Schedule Coaching Session for {leaderName}</DialogTitle>
                    <DialogDescription>Set up a coaching session with {leaderName}.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sessionDate" className="text-right">
                            Date
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "col-span-3 justify-start text-left font-normal",
                                        !sessionDate && "text-muted-foreground",
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {sessionDate ? format(sessionDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={sessionDate} onSelect={setSessionDate} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sessionTime" className="text-right">
                            Time
                        </Label>
                        <Input
                            id="sessionTime"
                            type="time"
                            value={sessionTime}
                            onChange={(e) => setSessionTime(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sessionNotes" className="text-right">
                            Notes
                        </Label>
                        <Textarea
                            id="sessionNotes"
                            value={sessionNotes}
                            onChange={(e) => setSessionNotes(e.target.value)}
                            className="col-span-3 min-h-[100px]"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Schedule Session
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
