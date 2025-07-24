"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Save } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Assessment questions data
const strategicExecutionBehaviors = [
  "Aligns team priorities to the organization's top strategic goals.",
  "Makes data-driven decisions that balance risk and opportunity.",
  "Demonstrates financial acumen in decision-making.",
  "Drives innovation and encourages creative thinking.",
  "Effectively navigates ambiguity and leads through change.",
  "Demonstrates strong enterprise thinking — acts in the interest of the whole organization, not just their own area.",
  "Sets clear, measurable performance goals.",
  "Holds self and others accountable for results.",
  "Builds cross-functional partnerships to drive business outcomes.",
  "Demonstrates agility and responsiveness in a changing business environment.",
  "Champions operational excellence and continuous improvement.",
  "Inspires confidence in stakeholders through strategic leadership.",
  "Effectively anticipates and plans for future trends impacting the business.",
  "Makes tough decisions in service of long-term business outcomes.",
  "Drives measurable impact on key business KPIs.",
]

const leadBehaviors = [
  // Listen
  "Practices active listening in all interactions.",
  "Seeks input from a diverse range of employees and stakeholders.",
  "Creates space for open dialogue and feedback.",
  // Empathize
  "Demonstrates genuine care for employee wellbeing.",
  "Acknowledges and validates diverse perspectives.",
  "Builds psychological safety on the team (people feel safe to speak up, take risks).",
  // Analyze
  "Uses data and insights to inform people decisions.",
  "Regularly reviews and reflects on feedback to drive continuous improvement in leadership.",
  "Makes equitable decisions based on facts, not assumptions or bias.",
  // Delegate
  "Distributes responsibilities effectively to foster growth.",
  "Encourages autonomy and trust in team members.",
  "Develops future leaders through intentional delegation and stretch assignments.",
]

const ratingOptions = [
  { value: "0", label: "Not Observed", description: "I have not observed this behavior" },
  { value: "1", label: "Needs Development", description: "Behavior is inconsistent or needs improvement" },
  { value: "2", label: "Actively Demonstrated", description: "Behavior is regularly demonstrated" },
  { value: "3", label: "Role Model", description: "Exemplary demonstration of this behavior" },
]

export default function RaterAssessment({ params }: { params: { code: string } }) {
  const [currentStep, setCurrentStep] = useState(0) // 0: relationship, 1: strategic, 2: lead, 3: complete
  const [relationship, setRelationship] = useState("")
  const [strategicRatings, setStrategicRatings] = useState<Record<number, string>>({})
  const [leadRatings, setLeadRatings] = useState<Record<number, string>>({})
  const [cannotRate, setCannotRate] = useState(false)
  const router = useRouter()

  const leaderName = "Sarah Johnson" // This would come from the assessment code

  const handleRelationshipSelect = (value: string) => {
    if (value === "cannot-rate") {
      setCannotRate(true)
      return
    }
    setRelationship(value)
  }

  const handleStrategicRating = (questionIndex: number, value: string) => {
    setStrategicRatings((prev) => ({ ...prev, [questionIndex]: value }))
  }

  const handleLeadRating = (questionIndex: number, value: string) => {
    setLeadRatings((prev) => ({ ...prev, [questionIndex]: value }))
  }

  const canProceedFromRelationship = relationship && !cannotRate
  const canProceedFromStrategic = strategicExecutionBehaviors.every((_, index) => strategicRatings[index])
  const canProceedFromLead = leadBehaviors.every((_, index) => leadRatings[index])

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Submit ratings logic here
    setCurrentStep(3) // Go to completion page
  }

  const getProgress = () => {
    switch (currentStep) {
      case 0:
        return 25
      case 1:
        return 50
      case 2:
        return 75
      case 3:
        return 100
      default:
        return 0
    }
  }

  if (cannotRate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-[#201C50]">Thank You</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Thank you for your honesty. Since you feel you cannot provide accurate ratings for {leaderName}, your
              response has been noted and you will not be asked to complete the assessment.
            </p>
            <p className="text-sm text-gray-500">You may now close this window.</p>
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
            <div className="text-right">
              <div className="text-sm text-gray-600">Providing feedback for</div>
              <div className="font-medium text-[#201C50]">{leaderName}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Progress */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Assessment Progress</span>
            <span className="text-sm text-gray-600">{getProgress()}% Complete</span>
          </div>
          <Progress value={getProgress()} className="h-2" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 0: Relationship Selection */}
          {currentStep === 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">Your Working Relationship</CardTitle>
                <CardDescription>
                  How would you best describe your most accurate and relevant working relationship with {leaderName}?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={relationship} onValueChange={handleRelationshipSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your working relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direct-leader">
                      <div>
                        <div className="font-medium">Direct Leader</div>
                        <div className="text-sm text-gray-500">
                          I manage this person's work and performance directly
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="project-manager">
                      <div>
                        <div className="font-medium">Project Manager</div>
                        <div className="text-sm text-gray-500">
                          I manage work or projects for which this person is critically aligned
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="direct-report">
                      <div>
                        <div className="font-medium">Direct Report</div>
                        <div className="text-sm text-gray-500">
                          This person directly manages my work and performance
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="project-report">
                      <div>
                        <div className="font-medium">Project Report</div>
                        <div className="text-sm text-gray-500">
                          This person manages work or projects that I am critically aligned on
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="professional-peer">
                      <div>
                        <div className="font-medium">Professional Peer</div>
                        <div className="text-sm text-gray-500">We report to the same person and collaborate often</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="professional-collaborator">
                      <div>
                        <div className="font-medium">Professional Collaborator</div>
                        <div className="text-sm text-gray-500">
                          We work closely together on key projects and deliverables
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="other-close">
                      <div>
                        <div className="font-medium">Other</div>
                        <div className="text-sm text-gray-500">I work closely enough to provide accurate ratings</div>
                      </div>
                    </SelectItem>
                    <SelectItem value="cannot-rate">
                      <div>
                        <div className="font-medium">Cannot Rate</div>
                        <div className="text-sm text-gray-500">I cannot rate this person accurately or objectively</div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={!canProceedFromRelationship}
                    className="bg-[#201C50] hover:bg-[#201C50]/90"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 1: Strategic Execution Behaviors */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">Strategic Execution Behaviors</CardTitle>
                <CardDescription>
                  Rate how well {leaderName} demonstrates these business leadership behaviors. Focus on what you have
                  directly observed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {strategicExecutionBehaviors.map((behavior, index) => (
                  <div key={index} className="space-y-3">
                    <div className="font-medium text-sm">
                      {index + 1}. {behavior}
                    </div>
                    <RadioGroup
                      value={strategicRatings[index] || ""}
                      onValueChange={(value) => handleStrategicRating(index, value)}
                    >
                      {ratingOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`strategic-${index}-${option.value}`} />
                          <Label htmlFor={`strategic-${index}-${option.value}`} className="flex-1 cursor-pointer">
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.description}</div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={handlePrevious}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceedFromStrategic}
                    className="bg-[#201C50] hover:bg-[#201C50]/90"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: L.E.A.D. Behaviors */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#201C50]">L.E.A.D.Better Behaviors</CardTitle>
                <CardDescription>
                  Rate how well {leaderName} demonstrates these people leadership behaviors that create positive culture
                  and employee experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {leadBehaviors.map((behavior, index) => (
                  <div key={index} className="space-y-3">
                    <div className="font-medium text-sm">
                      {index + 16}. {behavior}
                    </div>
                    <RadioGroup
                      value={leadRatings[index] || ""}
                      onValueChange={(value) => handleLeadRating(index, value)}
                    >
                      {ratingOptions.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`lead-${index}-${option.value}`} />
                          <Label htmlFor={`lead-${index}-${option.value}`} className="flex-1 cursor-pointer">
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.description}</div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={handlePrevious}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceedFromLead}
                    className="bg-[#EDA820] hover:bg-[#EDA820]/90"
                  >
                    Submit Assessment
                    <Save className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Completion */}
          {currentStep === 3 && (
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-[#201C50]">Thank You!</CardTitle>
                <CardDescription>Your feedback has been successfully submitted</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Save className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Thank you for providing feedback for {leaderName}. Your input is valuable for their leadership
                    development.
                  </p>
                  <p className="text-sm text-gray-500">
                    Your feedback is confidential and will be combined with other responses to provide meaningful
                    insights.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500">You may now close this window.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
