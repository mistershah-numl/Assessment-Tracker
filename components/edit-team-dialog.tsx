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

interface Team {
    id: number
    name: string
    key: string
    members: number
    completed: number
}

interface EditTeamDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    team: Team | null
    onSave: (updatedTeam: Team) => void
}

export function EditTeamDialog({ open, onOpenChange, team, onSave }: EditTeamDialogProps) {
    const [formData, setFormData] = useState<Team | null>(null)

    useEffect(() => {
        if (team) {
            setFormData(team)
        }
    }, [team])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((prev) => {
            if (!prev) return null
            return {
                ...prev,
                [id]: id === "members" || id === "completed" ? Number.parseInt(value) || 0 : value,
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
                    <DialogTitle>Edit Team: {formData.name}</DialogTitle>
                    <DialogDescription>Make changes to the team details here. Click save when you're done.</DialogDescription>
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
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="completed" className="text-right">
                            Completed
                        </Label>
                        <Input
                            id="completed"
                            type="number"
                            value={formData.completed}
                            onChange={handleChange}
                            className="col-span-3"
                        />
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