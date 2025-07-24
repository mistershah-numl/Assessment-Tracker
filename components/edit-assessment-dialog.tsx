"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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

interface EditAssessmentDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    assessment: Assessment | null
    onSave: (updatedAssessment: Assessment) => void
}

export function EditAssessmentDialog({ open, onOpenChange, assessment, onSave }: EditAssessmentDialogProps) {
    const [formData, setFormData] = useState<Assessment | null>(null)

    useEffect(() => {
        if (assessment) {
            setFormData(assessment)
        }
    }, [assessment])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => {
            if (!prev) return null
            return {
                ...prev,
                [id]:
                    id === "ratingsReceived" ||
                        id === "ratingsNeeded" ||
                        id === "daysRemaining" ||
                        id === "strategicScore" ||
                        id === "leadScore"
                        ? Number.parseFloat(value) || 0
                        : value,
            }
        })
    }

    const handleSelectChange = (id: keyof Assessment, value: string) => {
        setFormData((prev) => {
            if (!prev) return null
            return {
                ...prev,
                [id]: value,
            }
        })
    }

    const handleSubmit = () => {
        if (formData) {
            onSave(formData)
            onOpenChange(false)
        }
    }

    if (!formData) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Assessment for {formData.leaderName}</DialogTitle>
                    <DialogDescription>
                        Make changes to the assessment details here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                            Status
                        </Label>
                        <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Complete">Complete</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ratingsReceived" className="text-right">
                            Ratings Received
                        </Label>
                        <Input
                            id="ratingsReceived"
                            type="number"
                            value={formData.ratingsReceived}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ratingsNeeded" className="text-right">
                            Ratings Needed
                        </Label>
                        <Input
                            id="ratingsNeeded"
                            type="number"
                            value={formData.ratingsNeeded}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="daysRemaining" className="text-right">
                            Days Remaining
                        </Label>
                        <Input
                            id="daysRemaining"
                            type="number"
                            value={formData.daysRemaining}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="strategicScore" className="text-right">
                            Strategic Score
                        </Label>
                        <Input
                            id="strategicScore"
                            type="number"
                            step="0.1"
                            value={formData.strategicScore || ""}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="leadScore" className="text-right">
                            L.E.A.D. Score
                        </Label>
                        <Input
                            id="leadScore"
                            type="number"
                            step="0.1"
                            value={formData.leadScore || ""}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="profile" className="text-right">
                            Profile
                        </Label>
                        <Textarea id="profile" value={formData.profile} onChange={handleChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="risk" className="text-right">
                            Risk
                        </Label>
                        <Select value={formData.risk} onValueChange={(value) => handleSelectChange("risk", value)}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select risk level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Low">Low</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
