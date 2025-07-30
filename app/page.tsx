
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, TrendingUp, Award, BarChart3, ArrowRight, Star, Zap, Shield, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const closeMenu = () => setIsMenuOpen(false)

  // Close menu on escape key press
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMenu()
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
    } else {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen, handleKeyDown])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#F3EDDB]/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#201C50] via-[#201C50] to-[#EDA820] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">L</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                LEAD Better
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Executive Behavioral Assessment</p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-[#201C50]/20 text-[#201C50] hover:bg-[#201C50] hover:text-white bg-transparent hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Log In
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-[#201C50] focus:outline-none hover:bg-gray-100/50 rounded-full p-2 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Popup */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 sm:hidden transition-opacity duration-300"
          onClick={closeMenu}
        >
          <div
            className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white/95 backdrop-blur-xl shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={closeMenu}
                className="text-[#201C50] hover:bg-gray-100/50 rounded-full p-2 focus:outline-none transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/login" onClick={closeMenu}>
                <Button
                  variant="outline"
                  className="w-full py-3 text-base font-medium border-[#201C50]/30 text-[#201C50] hover:bg-[#201C50] hover:text-white bg-transparent hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/demo" onClick={closeMenu}>
                <Button
                  className="w-full py-3 text-base font-medium bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link href="/matrix-guide" onClick={closeMenu}>
                  <Button
                    variant="ghost"
                    className="w-full py-3 text-base font-medium text-[#201C50] hover:bg-gray-100/50 transition-all duration-300 hover:scale-105"
                  >
                    Matrix Guide
                  </Button>
                </Link>
                <Link href="/privacy" onClick={closeMenu}>
                  <Button
                    variant="ghost"
                    className="w-full py-3 text-base font-medium text-[#201C50] hover:bg-gray-100/50 transition-all duration-300 hover:scale-105"
                  >
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/security" onClick={closeMenu}>
                  <Button
                    variant="ghost"
                    className="w-full py-3 text-base font-medium text-[#201C50] hover:bg-gray-100/50 transition-all duration-300 hover:scale-105"
                  >
                    Security & Privacy
                  </Button>
                </Link>
                <Link href="/help" onClick={closeMenu}>
                  <Button
                    variant="ghost"
                    className="w-full py-3 text-base font-medium text-[#201C50] hover:bg-gray-100/50 transition-all duration-300 hover:scale-105"
                  >
                    Help & Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#201C50]/5 via-transparent to-[#EDA820]/5"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-[#F2789D]/20 to-[#EDA820]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#80967D]/20 to-[#201C50]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-[#F2789D]/10 to-[#EDA820]/10 text-white border-[#F2789D]/20 px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium shadow-lg">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            By Kalifa Oliver, Ph.D. | Author & Employee Experience Expert
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#201C50] via-[#80967D] to-[#201C50] bg-clip-text text-transparent">
              L.E.A.D.Better 360
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold">Executive Assessment</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Identify leadership behaviors that drive{" "}
            <span className="font-semibold text-[#EDA820]">strategic business outcomes</span> and create
            <span className="font-semibold text-[#F2789D]"> positive culture</span> — the twin engines of
            high-performance leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <Link href="/login">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#201C50] to-[#80967D] hover:from-[#201C50]/90 hover:to-[#80967D]/90 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Get Started Now
              </Button>
            </Link>
            <Link href="/matrix-guide">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#80967D]/30 text-[#80967D] hover:bg-[#80967D] hover:text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Explore the Matrix
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: "27", label: "Behavioral Indicators", icon: CheckCircle },
              { number: "2", label: "Leadership Dimensions", icon: Target },
              { number: "16", label: "Matrix Profiles", icon: BarChart3 },
              { number: "5+", label: "Minimum Raters", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#201C50]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#201C50] mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Unique */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#F3EDDB]/30 via-white to-[#F3EDDB]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                What Makes L.E.A.D.Better 360 Unique?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional assessments, we measure both strategic execution and cultural leadership, plotting
              leaders on a comprehensive matrix for actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#EDA820]/5 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#EDA820]/10 to-[#EDA820]/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#EDA820]" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#201C50] mb-3 sm:mb-4">Strategic Execution Score</CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Measures business acumen, results-driven leadership, enterprise thinking, and innovation capabilities
                  that drive measurable business outcomes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#F2789D]/5 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F2789D]/10 to-[#F2789D]/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#F2789D]" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#201C50] mb-3 sm:mb-4">L.E.A.D.Better Score</CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Evaluates Listen, Empathize, Analyze, Delegate behaviors that create positive culture and exceptional
                  employee experiences.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                Who Should Use This Assessment?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Executives",
                desc: "C-suite and senior leaders",
                color: "from-[#201C50] to-[#80967D]",
                icon: Award,
              },
              {
                title: "Organizations",
                desc: "Companies focused on culture",
                color: "from-[#EDA820] to-[#EC5A29]",
                icon: Target,
              },
              {
                title: "HR/OD Teams",
                desc: "People development professionals",
                color: "from-[#F2789D] to-[#EC5A29]",
                icon: Users,
              },
              {
                title: "Executive Coaches",
                desc: "Leadership development experts",
                color: "from-[#80967D] to-[#201C50]",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <CardHeader className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#201C50] mb-2 sm:mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#80967D]/5 via-white to-[#201C50]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                Transform Your Leadership Impact
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Strategic Action Planning",
                desc: "Clear development roadmaps based on precise matrix placement and risk assessment",
                gradient: "from-[#EDA820] to-[#EC5A29]",
              },
              {
                icon: Users,
                title: "Succession Planning",
                desc: "Identify and develop high-potential leaders for seamless organizational advancement",
                gradient: "from-[#F2789D] to-[#EDA820]",
              },
              {
                icon: Award,
                title: "Executive Development",
                desc: "Targeted coaching programs for balanced strategic and cultural leadership",
                gradient: "from-[#80967D] to-[#201C50]",
              },
              {
                icon: BarChart3,
                title: "Performance Management",
                desc: "Data-driven leadership evaluation with measurable business impact metrics",
                gradient: "from-[#201C50] to-[#80967D]",
              },
              {
                icon: Target,
                title: "High Potential Development",
                desc: "Retain and accelerate top talent with personalized growth strategies",
                gradient: "from-[#EC5A29] to-[#F2789D]",
              },
              {
                icon: CheckCircle,
                title: "Culture & Results Alignment",
                desc: "Build leaders who excel at driving outcomes while fostering positive culture",
                gradient: "from-[#80967D] to-[#EDA820]",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <CardHeader className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#201C50] mb-3 sm:mb-4">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, behavior-focused assessment with clear action planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Multi-Rater 360°",
                desc: "Manager, colleagues, peers, direct reports, and collaborators provide comprehensive behavioral ratings",
                gradient: "from-[#EDA820] to-[#EC5A29]",
              },
              {
                step: "2",
                title: "Observable Behaviors",
                desc: "Easy-to-complete assessment focusing on specific, measurable leadership behaviors with clear definitions",
                gradient: "from-[#F2789D] to-[#EDA820]",
              },
              {
                step: "3",
                title: "Actionable Insights",
                desc: "Leaders receive detailed matrix placement, risk assessment, and targeted development recommendations",
                gradient: "from-[#80967D] to-[#201C50]",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${step.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-6 sm:mb-8 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                >
                  {step.step}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#201C50] mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-[#201C50] via-[#201C50] to-[#80967D] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#EDA820]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#F2789D]/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Build Leaders Who Lead
            <br />
            <span className="bg-gradient-to-r from-[#EDA820] to-[#F2789D] bg-clip-text text-transparent">
              Strategically, Lead Better
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            The kind of leadership that drives high performance, innovation, and engagement in today's world of work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Start Assessment
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-[#201C50] px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#201C50] to-[#80967D] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#EDA820] to-[#EC5A29] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">L</span>
                </div>
                <div>
                  <span className="font-bold text-xl sm:text-2xl">LEAD Better </span>
                  <p className="text-white/80 text-sm sm:text-base">Executive Behavioral Assessment</p>
                </div>
              </div>
              <p className="text-white/80 text-sm sm:text-lg leading-relaxed max-w-md">
                By Dr. Kalifa Oliver, Ph.D. - Building leaders who drive both strategic results and positive culture.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/matrix-guide" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Matrix Guide
                </Link>
                <Link href="/login" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Login
                </Link>
                <Link href="/demo" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Request Demo
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Support</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link href="/privacy" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
                <Link href="/security" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Security & Privacy
                </Link>
                <Link href="/help" className="block text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                  Help & Support
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white/60">
            <p className="text-xs sm:text-sm">&copy; 2025 Dr. Kalifa Oliver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
