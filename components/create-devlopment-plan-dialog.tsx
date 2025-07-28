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

interface CreateDevelopmentPlanDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    leaderName: string
}

export function CreateDevelopmentPlanDialog({ open, onOpenChange, leaderName }: CreateDevelopmentPlanDialogProps) {
    const [planTitle, setPlanTitle] = useState("")
    const [planDescription, setPlanDescription] = useState("")
    const [targetDate, setTargetDate] = useState<Date | undefined>(undefined)

    const handleSubmit = () => {
        console.log(`Creating development plan for ${leaderName}:`)
        console.log(`Title: ${planTitle}`)
        console.log(`Description: ${planDescription}`)
        console.log(`Target Date: ${targetDate ? format(targetDate, "PPP") : "N/A"}`)
        toast({
            title: "Development Plan Created!",
            description: `Plan for ${leaderName} has been simulated.`,
        })
        setPlanTitle("")
        setPlanDescription("")
        setTargetDate(undefined)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Development Plan for {leaderName}</DialogTitle>
                    <DialogDescription>Outline a development plan for {leaderName}.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="planTitle" className="text-right">
                            Plan Title
                        </Label>
                        <Input
                            id="planTitle"
                            value={planTitle}
                            onChange={(e) => setPlanTitle(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="planDescription" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="planDescription"
                            value={planDescription}
                            onChange={(e) => setPlanDescription(e.target.value)}
                            className="col-span-3 min-h-[100px]"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="targetDate" className="text-right">
                            Target Date
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "col-span-3 justify-start text-left font-normal",
                                        !targetDate && "text-muted-foreground",
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {targetDate ? format(targetDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={targetDate} onSelect={setTargetDate} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Create Plan
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
