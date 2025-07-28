"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Users, Shield, BarChart3, Zap, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [loginType, setLoginType] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [raterCode, setRaterCode] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    // Simulate login logic
    switch (loginType) {
      case "admin":
        router.push("/admin")
        break
      case "manager":
        router.push("/manager-dashboard")
        break
      case "leader":
        router.push("/my360")
        break
      case "rater":
        if (raterCode) {
          router.push(`/rate/${raterCode}`)
        }
        break
      default:
        break
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#201C50]/10 via-white to-[#EDA820]/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#F2789D]/20 to-[#EDA820]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#80967D]/20 to-[#201C50]/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-4 mb-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#201C50] via-[#201C50] to-[#EDA820] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-2xl">L</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                L.E.A.D.Better 360
              </h1>
              <p className="text-sm text-gray-600 font-medium">Executive Assessment</p>
            </div>
          </Link>
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Sign in to access your L.E.A.D.Better 360 assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="space-y-3">
              <Label htmlFor="loginType" className="text-base font-medium">
                I am a...
              </Label>
              <Select value={loginType} onValueChange={setLoginType}>
                <SelectTrigger className="h-12 border-2 border-gray-200 hover:border-[#201C50]/30 transition-colors">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leader" className="py-3">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-[#80967D]" />
                      <div>
                        <div className="font-medium">Leader being assessed</div>
                        <div className="text-sm text-gray-500">View your assessment results</div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="rater" className="py-3">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-[#F2789D]" />
                      <div>
                        <div className="font-medium">Rater (providing feedback)</div>
                        <div className="text-sm text-gray-500">Complete a 360 assessment</div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="manager" className="py-3">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-[#EDA820]" />
                      <div>
                        <div className="font-medium">Manager/Coach/HR/OD</div>
                        <div className="text-sm text-gray-500">Manage team assessments</div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="admin" className="py-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-[#201C50]" />
                      <div>
                        <div className="font-medium">Administrator</div>
                        <div className="text-sm text-gray-500">Full system access</div>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loginType === "rater" ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="raterCode" className="text-base font-medium">
                    Assessment Code
                  </Label>
                  <Input
                    id="raterCode"
                    placeholder="Enter your unique assessment code"
                    value={raterCode}
                    onChange={(e) => setRaterCode(e.target.value)}
                    className="h-12 border-2 border-gray-200 hover:border-[#201C50]/30 focus:border-[#201C50] transition-colors"
                  />
                  <p className="text-sm text-gray-500">This code was provided in your invitation email</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-2 border-gray-200 hover:border-[#201C50]/30 focus:border-[#201C50] transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-base font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 border-2 border-gray-200 hover:border-[#201C50]/30 focus:border-[#201C50] transition-colors"
                  />
                </div>
              </div>
            )}

            <Button
              className="w-full h-12 bg-gradient-to-r from-[#201C50] to-[#80967D] hover:from-[#201C50]/90 hover:to-[#80967D]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base font-medium"
              onClick={handleLogin}
              disabled={!loginType || (loginType === "rater" ? !raterCode : !email || !password)}
            >
              {loginType === "rater" ? (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Start Rating
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {loginType !== "rater" && (
              <>
                <Separator />
                <div className="text-center space-y-3">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#80967D] hover:text-[#80967D]/80 hover:underline transition-colors"
                  >
                    Forgot your password?
                  </Link>
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-[#80967D] hover:text-[#80967D]/80 hover:underline transition-colors font-medium"
                    >
                      Contact your administrator
                    </Link>
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Demo Access */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4 font-medium">Want to see how it works?</p>
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/admin")}
              className="border-[#EDA820]/30 text-[#EDA820] hover:bg-[#EDA820] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Shield className="w-4 h-4 mr-1" />
              Admin
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/manager-dashboard")}
              className="border-[#F2789D]/30 text-[#F2789D] hover:bg-[#F2789D] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <BarChart3 className="w-4 h-4 mr-1" />
              Manager
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/my360")}
              className="border-[#80967D]/30 text-[#80967D] hover:bg-[#80967D] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <User className="w-4 h-4 mr-1" />
              Leader
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
