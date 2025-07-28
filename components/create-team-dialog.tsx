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
import { toast } from "@/hooks/use-toast"

interface NewTeamData {
    name: string
    key: string
    members: number
}

interface CreateTeamDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (newTeam: NewTeamData) => void
}

export function CreateTeamDialog({ open, onOpenChange, onSave }: CreateTeamDialogProps) {
    const [formData, setFormData] = useState<NewTeamData>({
        name: "",
        key: "",
        members: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: id === "members" ? Number.parseInt(value) || 0 : value,
        }))
    }

    const handleSubmit = () => {
        if (!formData.name || !formData.key || formData.members <= 0) {
            toast({
                title: "Missing Information",
                description: "Please fill in team name, key, and a valid number of members.",
                variant: "destructive",
            })
            return
        }

        onSave(formData)
        setFormData({
            name: "",
            key: "",
            members: 0,
        })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Team</DialogTitle>
                    <DialogDescription>Fill in the details for the new team.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Team Name
                        </Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="key" className="text-right">
                            Team Key
                        </Label>
                        <Input
                            id="key"
                            value={formData.key}
                            onChange={handleChange}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="members" className="text-right">
                            Members
                        </Label>
                        <Input
                            id="members"
                            type="number"
                            value={formData.members}
                            onChange={handleChange}
                            className="col-span-3"
                            required
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Create Team
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}