import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, TrendingUp, Award, BarChart3, ArrowRight, Star, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#F3EDDB]/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#201C50] via-[#201C50] to-[#EDA820] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                L.E.A.D.Better 360
              </h1>
              <p className="text-sm text-gray-600 font-medium">Executive Behavioral Assessment</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#201C50]/5 via-transparent to-[#EDA820]/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#F2789D]/20 to-[#EDA820]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#80967D]/20 to-[#201C50]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge className="mb-8 bg-gradient-to-r from-[#F2789D]/10 to-[#EDA820]/10 text-white border-[#F2789D]/20 px-6 py-2 text-sm font-medium shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            By Kalifa Oliver, Ph.D. | Author & Employee Experience Expert
          </Badge>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#201C50] via-[#80967D] to-[#201C50] bg-clip-text text-transparent">
              L.E.A.D.Better 360
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-700 font-semibold">Executive Assessment</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Identify leadership behaviors that drive{" "}
            <span className="font-semibold text-[#EDA820]">strategic business outcomes</span> and create
            <span className="font-semibold text-[#F2789D]"> positive culture</span> — the twin engines of
            high-performance leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#201C50] to-[#80967D] hover:from-[#201C50]/90 hover:to-[#80967D]/90 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </Link>
            <Link href="/matrix-guide">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#80967D]/30 text-[#80967D] hover:bg-[#80967D] hover:text-white px-10 py-4 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Target className="w-5 h-5 mr-2" />
                Explore the Matrix
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "27", label: "Behavioral Indicators", icon: CheckCircle },
              { number: "2", label: "Leadership Dimensions", icon: Target },
              { number: "16", label: "Matrix Profiles", icon: BarChart3 },
              { number: "5+", label: "Minimum Raters", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-[#201C50]" />
                </div>
                <div className="text-3xl font-bold text-[#201C50] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Unique */}
      <section className="py-20 bg-gradient-to-r from-[#F3EDDB]/30 via-white to-[#F3EDDB]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                What Makes L.E.A.D.Better 360 Unique?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional assessments, we measure both strategic execution and cultural leadership, plotting
              leaders on a comprehensive matrix for actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#EDA820]/5 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#EDA820]/10 to-[#EDA820]/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-[#EDA820]" />
                </div>
                <CardTitle className="text-2xl text-[#201C50] mb-4">Strategic Execution Score</CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Measures business acumen, results-driven leadership, enterprise thinking, and innovation capabilities
                  that drive measurable business outcomes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#F2789D]/5 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <CardHeader className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F2789D]/10 to-[#F2789D]/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-[#F2789D]" />
                </div>
                <CardTitle className="text-2xl text-[#201C50] mb-4">L.E.A.D.Better Score</CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Evaluates Listen, Empathize, Analyze, Delegate behaviors that create positive culture and exceptional
                  employee experiences.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                Who Should Use This Assessment?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 group text-center"
              >
                <CardHeader className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#201C50] mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#80967D]/5 via-white to-[#201C50]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                Transform Your Leadership Impact
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <CardHeader className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#201C50] mb-4">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#201C50] to-[#80967D] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, behavior-focused assessment with clear action planning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                  className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center text-white font-bold text-2xl mb-8 mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                >
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-[#201C50] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#201C50] via-[#201C50] to-[#80967D] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#EDA820]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F2789D]/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Leaders Who Lead
            <br />
            <span className="bg-gradient-to-r from-[#EDA820] to-[#F2789D] bg-clip-text text-transparent">
              Strategically, Lead Better
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            The kind of leadership that drives high performance, innovation, and engagement in today's world of work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#EDA820] to-[#EC5A29] hover:from-[#EDA820]/90 hover:to-[#EC5A29]/90 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Assessment
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#201C50] px-12 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#201C50] to-[#80967D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EDA820] to-[#EC5A29] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">L.E.A.D.Better 360</span>
                  <p className="text-white/80">Executive Behavioral Assessment</p>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                By Dr. Kalifa Oliver, Ph.D. - Building leaders who drive both strategic results and positive culture.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/matrix-guide" className="block text-white/80 hover:text-white transition-colors">
                  Matrix Guide
                </Link>
                <Link href="/login" className="block text-white/80 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/demo" className="block text-white/80 hover:text-white transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <div className="space-y-3">
                <Link href="/privacy" className="block text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/security" className="block text-white/80 hover:text-white transition-colors">
                  Security & Privacy
                </Link>
                <Link href="/help" className="block text-white/80 hover:text-white transition-colors">
                  Help & Support
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 Dr. Kalifa Oliver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
