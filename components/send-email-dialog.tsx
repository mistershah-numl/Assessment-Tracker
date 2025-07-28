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
import { toast } from "@/hooks/use-toast"

interface SendEmailDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    leaderEmail: string
    leaderName: string
}

export function SendEmailDialog({ open, onOpenChange, leaderEmail, leaderName }: SendEmailDialogProps) {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log(`Sending email to ${leaderName} (${leaderEmail}):`)
        console.log(`Subject: ${subject}`)
        console.log(`Message: ${message}`)
        toast({
            title: "Email Sent!",
            description: `Email to ${leaderName} has been simulated.`,
        })
        setSubject("")
        setMessage("")
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Send Email to {leaderName}</DialogTitle>
                    <DialogDescription>
                        Compose an email to {leaderName} ({leaderEmail}).
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="recipient" className="text-right">
                            To
                        </Label>
                        <Input id="recipient" value={leaderEmail} readOnly className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject" className="text-right">
                            Subject
                        </Label>
                        <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="col-span-3 min-h-[100px]"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Send Email
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
