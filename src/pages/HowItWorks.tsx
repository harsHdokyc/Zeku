import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import { ArrowRight, Clock, Users, BookOpen, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import howItWorksHero from "@/assets/howitworks-hero-visual.png";

const steps = [
  {
    step: "01",
    title: "subjects we offer",
    desc: "Pick from Physics, Chemistry, or Mathematics. Select your class: 10, 11, or 12. Start with one subject and add more later.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "Get Matched to a Batch",
    desc: "We match you with 4 other students at a similar level. Every batch is capped at 5 for maximum attention.",
    icon: Users,
  },
  {
    step: "03",
    title: "Attend Daily Sessions",
    desc: "Join a 1-hour live class every day. Sessions are structured, concept-driven, and interactive.",
    icon: Clock,
  },
  {
    step: "04",
    title: "Track Your Progress",
    desc: "Get regular progress reports. Your teacher tracks understanding and adjusts the pace accordingly.",
    icon: TrendingUp,
  },
  {
    step: "05",
    title: "Excel in Exams",
    desc: "With consistent daily practice and deep conceptual clarity, see real improvement in scores and confidence.",
    icon: CheckCircle,
  },
];

const classStructure = [
  { time: "First 10 min", activity: "Quick recap and doubt clearing", accent: true },
  { time: "Next 35 min", activity: "New concept with worked examples and discussion", accent: false },
  { time: "Last 15 min", activity: "Practice problems and Q&A", accent: true },
];

const teachingPoints = [
  "Concept-first approach, we build from fundamentals",
  "Interactive discussions, not one-way lectures",
  "Real-world examples to make abstract ideas stick",
  "Adaptive pacing based on student understanding",
  "Regular low-stakes assessments for feedback",
];

const HowItWorks = () => (
  <Layout>
    {/* Hero */}
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="max-w-lg">
          <Reveal>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">How It Works</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-heading">
              Your learning <span className="text-primary">journey</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              From enrollment to exam day, here's exactly what your ZEKU experience looks like. No guesswork, no overwhelm, just a clear, structured path designed to help you master Physics, Chemistry, and Mathematics.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground leading-relaxed font-body">
              Every step is intentional. From the moment you enroll to your final exam, you're guided by a dedicated teacher in a small batch of 5, with daily live sessions, regular progress check-ins, and a learning rhythm that actually fits into your school schedule.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="flex justify-center md:justify-end">
            <img
              src={howItWorksHero}
              alt="3D pathway with milestone nodes representing the ZEKU learning journey"
              width={420}
              height={420}
              loading="lazy"
              className="w-full max-w-[420px] h-auto"
            />
          </div>
        </Reveal>
      </div>
    </Section>

    {/* Steps: alternating cards */}
    <Section className="bg-surface-sunken">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body text-center">5 Simple Steps</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 tracking-tight font-heading text-center">
            Getting started is easy
          </h2>
        </Reveal>

        <div className="space-y-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <Reveal key={s.step} delay={i * 80}>
                <div className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Number + Icon */}
                  <div className="shrink-0 w-20 h-20 rounded-2xl border border-border bg-card flex flex-col items-center justify-center group hover:border-primary/40 transition-colors duration-300">
                    <span className="text-xs font-semibold text-primary/60 font-heading">{s.step}</span>
                    <Icon className="h-5 w-5 text-primary mt-1" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.desc}</p>
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>

    {/* Class structure + teaching style (bento layout) */}
    <Section>
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body text-center">Inside a Session</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 tracking-tight font-heading text-center">
            What to expect
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Class structure: 3 cols */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-heading">Class Structure</h3>
                  <p className="text-xs text-muted-foreground font-body">60 minutes, every day</p>
                </div>
              </div>

              <div className="space-y-0">
                {classStructure.map((item, i) => (
                  <div key={item.time} className={`flex items-start gap-4 p-4 rounded-xl ${item.accent ? "bg-primary/5" : ""}`}>
                    <div className="shrink-0 text-right w-24">
                      <p className="text-xs font-semibold text-primary font-heading">{item.time}</p>
                    </div>
                    <div className="h-full w-px bg-border shrink-0" />
                    <p className="text-sm text-muted-foreground font-body">{item.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Teaching style: 2 cols */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-8 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-heading">Teaching Style</h3>
                  <p className="text-xs text-muted-foreground font-body">How we approach learning</p>
                </div>
              </div>

              <ul className="space-y-4">
                {teachingPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                    <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-surface-sunken">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight font-heading">
            Ready to start your journey?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-muted-foreground mb-8 font-body">Book a free trial class and experience the ZEKU difference.</p>
        </Reveal>
        <Reveal delay={200}>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Secure Your Seat
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </Section>
  </Layout>
);

export default HowItWorks;
