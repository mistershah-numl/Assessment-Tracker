"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DemoRequestPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    teamSize: "",
    industry: "",
    challenges: "",
    timeline: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-[#201C50]">Demo Request Received!</CardTitle>
            <CardDescription>Thank you for your interest in L.E.A.D.Better 360</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Dr. Kalifa Oliver's team will review your request and contact you within 1-2 business days to schedule
              your personalized demo.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">What happens next:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Initial consultation call (30 minutes)</li>
                <li>• Customized demo based on your needs</li>
                <li>• Discussion of implementation options</li>
                <li>• Pricing and next steps</li>
              </ul>
            </div>
            <Link href="/">
              <Button className="bg-[#201C50] hover:bg-[#201C50]/90">Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#201C50] to-[#EDA820] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-bold text-[#201C50]">L.E.A.D.Better 360</span>
            </Link>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#201C50] mb-4">Request a Demo</h1>
            <p className="text-lg text-gray-600">
              See how L.E.A.D.Better 360 can help your organization build leaders who drive both strategic results and
              positive culture
            </p>
          </div>

          {/* Demo Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#201C50]">Tell Us About Your Organization</CardTitle>
              <CardDescription>Help us customize the demo to your specific needs and challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                {/* Organization Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Your Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="teamSize">Leadership Team Size</Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleInputChange("teamSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 leaders</SelectItem>
                        <SelectItem value="6-15">6-15 leaders</SelectItem>
                        <SelectItem value="16-50">16-50 leaders</SelectItem>
                        <SelectItem value="51-100">51-100 leaders</SelectItem>
                        <SelectItem value="100+">100+ leaders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="financial">Financial Services</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Challenges and Timeline */}
                <div>
                  <Label htmlFor="challenges">Current Leadership Challenges</Label>
                  <Textarea
                    id="challenges"
                    placeholder="What leadership development challenges is your organization facing? (e.g., succession planning, culture issues, performance gaps)"
                    value={formData.challenges}
                    onChange={(e) => handleInputChange("challenges", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Implementation Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When are you looking to implement?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately (within 30 days)</SelectItem>
                      <SelectItem value="quarter">This quarter (1-3 months)</SelectItem>
                      <SelectItem value="half-year">Next 6 months</SelectItem>
                      <SelectItem value="year">Within a year</SelectItem>
                      <SelectItem value="exploring">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#EDA820] hover:bg-[#EDA820]/90"
                  disabled={
                    !formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.title
                  }
                >
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <Card className="mt-8 bg-[#F3EDDB]/30">
            <CardHeader>
              <CardTitle className="text-[#201C50]">What to Expect in Your Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Personalized Walkthrough</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Live demonstration of the assessment process</li>
                    <li>• Matrix visualization with sample data</li>
                    <li>• Role-based dashboard views</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Next Steps:  Book A Strategic Discussion</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your specific leadership challenges</li>
                    <li>• Implementation best practices</li>
                    <li>• ROI and success metrics</li>
                    <li>• Pricing and package options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
