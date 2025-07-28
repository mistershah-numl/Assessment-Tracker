"use client"

import type React from "react"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

interface NewAssessmentData {
    leaderName: string
    leaderEmail: string
    status: string
    ratingsNeeded: number
    strategicScore: number | null
    leadScore: number | null
    profile: string
    risk: string
}

interface CreateAssessmentDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (newAssessment: NewAssessmentData) => void
}

export function CreateAssessmentDialog({ open, onOpenChange, onSave }: CreateAssessmentDialogProps) {
    const [formData, setFormData] = useState<NewAssessmentData>({
        leaderName: "",
        leaderEmail: "",
        status: "Pending",
        ratingsNeeded: 5,
        strategicScore: null,
        leadScore: null,
        profile: "",
        risk: "Low",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]:
                id === "ratingsNeeded" || id === "strategicScore" || id === "leadScore"
                    ? Number.parseFloat(value) || (id === "ratingsNeeded" ? 0 : null)
                    : value,
        }))
    }

    const handleSelectChange = (id: keyof NewAssessmentData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = () => {
        if (!formData.leaderName || !formData.leaderEmail) {
            toast({
                title: "Missing Information",
                description: "Please fill in leader name and email.",
                variant: "destructive",
            })
            return
        }

        onSave(formData)
        setFormData({
            leaderName: "",
            leaderEmail: "",
            status: "Pending",
            ratingsNeeded: 5,
            strategicScore: null,
            leadScore: null,
            profile: "",
            risk: "Low",
        })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Assessment</DialogTitle>
                    <DialogDescription>Fill in the details for the new leader's assessment.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="leaderName" className="text-right">
                            Leader Name
                        </Label>
                        <Input
                            id="leaderName"
                            value={formData.leaderName}
                            onChange={handleChange}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="leaderEmail" className="text-right">
                            Leader Mail
                        </Label>
                        <Input
                            id="leaderEmail"
                            type="email"
                            value={formData.leaderEmail}
                            onChange={handleChange}
                            className="col-span-3"
                            required
                        />
                    </div>
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
                        Create Assessment
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
