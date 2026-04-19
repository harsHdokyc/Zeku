import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import { Users, Clock, Monitor, BookOpen, ArrowRight, Star, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroVisual from "@/assets/hero-visual.png";
import smallBatchVisual from "@/assets/small-batch-visual.png";
import subjectsVisual from "@/assets/subjects-visual.png";
import howItWorksVisual from "@/assets/how-it-works-visual.png";

const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Now enrolling for 2026–27
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6 text-balance font-heading">
              Smarter Learning{" "}
              <span className="text-primary">Starts Here.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-10 font-body">
              Affordable. Focused. Powerful learning for Class 11–12 students in Physics, Chemistry & Mathematics.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              {/* <Link
                to="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                View Plans
              </Link> */}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="flex justify-center md:justify-end">
            <img
              src={heroVisual}
              alt="3D illustration of books, molecules and mathematical symbols representing ZEKU's learning platform"
              width={520}
              height={520}
              className="w-full max-w-[520px] h-auto"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <Section className="bg-surface-sunken">
    <Reveal>
      <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">The Problem</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight font-heading">
        Traditional coaching is broken
      </h2>
      <p className="text-muted-foreground max-w-xl mb-16 font-body">
        Students deserve better than overcrowded classrooms and one-size-fits-all teaching.
      </p>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
      {[
        { title: "Large Batches", desc: "50–100 students crammed into a single class. No space for questions." },
        { title: "Zero Attention", desc: "Teachers can't track individual progress. Students fall behind silently." },
        { title: "Overpriced", desc: "₹50K–₹2L per year for coaching that doesn't deliver personal attention." },
      ].map((item) => (
        <Reveal key={item.title}>
          <div className="rounded-2xl border border-border bg-card p-8 h-full group hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-3 font-heading">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Solution = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <Reveal>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">The ZEKU Model</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight font-heading">
            Built around the student
          </h2>
          <p className="text-muted-foreground mb-10 font-body">
            Every decision we make starts with one question: what helps the student learn better?
          </p>
        </Reveal>
        <div className="space-y-8 stagger-children">
          {[
            { icon: Users, title: "5 Students Per Class", desc: "Small enough for real attention. Every student gets heard." },
            { icon: Clock, title: "1 Hour Daily", desc: "Structured, focused sessions. No burnout, no wasted time." },
            { icon: Monitor, title: "100% Online", desc: "Learn from anywhere. All you need is a screen and curiosity." },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1 font-heading">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={150}>
        <div className="flex justify-center">
          <img
            src={smallBatchVisual}
            alt="3D illustration of 5 figures sitting around a table representing small batch learning"
            width={440}
            height={440}
            loading="lazy"
            className="w-full max-w-[440px] h-auto"
          />
        </div>
      </Reveal>
    </div>
  </Section>
);

const Features = () => (
  <Section className="bg-surface-sunken">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <Reveal>
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={subjectsVisual}
            alt="3D laptop with floating equations and molecules"
            width={400}
            height={400}
            loading="lazy"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </Reveal>
      <div className="order-1 md:order-2">
        <Reveal>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight font-heading">
            Everything you need to excel
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
          {[
            { icon: Users, title: "Small Batch", desc: "Every doubt gets addressed." },
            { icon: BookOpen, title: "Concept-Based", desc: "Deep understanding over rote." },
            { icon: Clock, title: "Daily Learning", desc: "Build discipline naturally." },
            { icon: Monitor, title: "Learn Anywhere", desc: "No commute, no compromise." },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="rounded-2xl border border-border bg-card p-6 h-full group hover:border-primary/30 transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 font-heading">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const HowItWorksPreview = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <Reveal>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 tracking-tight font-heading">
            Simple. Structured. Effective.
          </h2>
        </Reveal>
        <div className="space-y-6 stagger-children">
          {[
            { step: "01", title: "Choose Your Subject", desc: "Physics, Chemistry, or Mathematics." },
            { step: "02", title: "Get Matched", desc: "We place you in a batch of just 5." },
            { step: "03", title: "Attend Daily", desc: "1-hour focused sessions online." },
            { step: "04", title: "Excel", desc: "Build understanding, see results." },
          ].map((item) => (
            <Reveal key={item.step}>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-primary/25 font-heading shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-0.5 font-heading">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={150}>
        <div className="flex justify-center">
          <img
            src={howItWorksVisual}
            alt="3D connected nodes representing the learning pathway"
            width={440}
            height={440}
            loading="lazy"
            className="w-full max-w-[440px] h-auto"
          />
        </div>
      </Reveal>
    </div>
  </Section>
);

const PricingPreview = () => (
  <Section className="bg-surface-sunken">
    <Reveal>
      <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Pricing</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight font-heading">
        Transparent pricing, no surprises
      </h2>
      <p className="text-muted-foreground max-w-xl mb-16 font-body">
        Premium education shouldn't break the bank.
      </p>
    </Reveal>
    <div className="max-w-2xl mx-auto">
      {[
        {  price: "₹2,999", period: "/month", desc: "Perfect for trying ZEKU with one subject.", features: ["1 subject of your choice", "5 Students Per Class", "Daily 1-hour live class", "Doubt support after class", "Monthly progress summary", "100% Online"], popular: true },
      ].map((plan) => (
        <Reveal key={plan.price}>
          <div className={`relative rounded-3xl border-2 p-10 md:p-12 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm ${plan.popular ? "border-primary ring-4 ring-primary/20 shadow-2xl shadow-primary/10" : "border-border bg-card"} group hover:-translate-y-2 transition-all duration-500`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground font-body shadow-lg">
                  ✨ Most Popular Choice
                </span>
              </div>
            )}
            
            <div className="text-center mb-12">
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-bold text-foreground font-heading bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-xl text-muted-foreground font-body ml-2">{plan.period}</span>
              </div>
              <p className="text-lg text-muted-foreground font-body max-w-md mx-auto">{plan.desc}</p>
            </div>
            
            <div className="space-y-4 mb-12">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-4 text-base text-foreground font-body">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className={`inline-flex h-14 px-8 items-center justify-center rounded-xl text-lg font-semibold transition-all duration-300 font-body ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                Start Your Learning Journey
              </Link>
              <p className="text-sm text-muted-foreground mt-4 font-body">
                No contracts. Cancel anytime. Free trial class available.
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Trust = () => (
  <Section>
    <Reveal>
      <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">What Students Say</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 tracking-tight font-heading">
        Trusted by students & parents
      </h2>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
      {[
        { quote: "ZEKU changed how I study Physics. The small batch means the teacher actually knows where I'm stuck.", name: "Arjun S.", detail: "Class 12, Physics" },
        { quote: "Finally, a platform that doesn't feel like a factory. My daughter actually looks forward to classes.", name: "Meera P.", detail: "Parent" },
        { quote: "The daily structure helped me build consistency. My marks improved from 65% to 89% in one term.", name: "Priya K.", detail: "Class 11, Mathematics" },
      ].map((t) => (
        <Reveal key={t.name}>
          <div className="rounded-2xl border border-border bg-card p-8 h-full flex flex-col group hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-6 flex-1 font-body">"{t.quote}"</p>
            <div>
              <p className="text-sm font-medium text-foreground font-heading">{t.name}</p>
              <p className="text-xs text-muted-foreground font-body">{t.detail}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const faqs = [
  { q: "What subjects does ZEKU offer?", a: "We currently offer Physics, Chemistry, and Mathematics for Class 11 and Class 12 students." },
  { q: "How many students are in each batch?", a: "Every batch is capped at exactly 5 students. This ensures each student gets personal attention and can ask questions freely." },
  { q: "How long is each class?", a: "Each class is 1 hour long and runs daily (Monday–Saturday). The sessions are designed to be focused and distraction-free." },
  { q: "Can I try before committing?", a: "Absolutely. We offer a free trial class so you can experience our teaching style and batch format before enrolling." },
  { q: "What platform do you use for classes?", a: "We conduct live classes on Zoom/Google Meet. All you need is a stable internet connection and a device with a screen." },
  { q: "Can I switch subjects or plans later?", a: "Yes. You can upgrade, downgrade, or switch subjects at the start of any new month. No lock-in contracts." },
  { q: "How do I track my child's progress?", a: "You'll receive monthly progress reports to track your child's learning journey and performance." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-surface-sunken">
      <Reveal>
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 tracking-tight font-heading">
          Frequently asked questions
        </h2>
      </Reveal>
      <div className="max-w-2xl mx-auto space-y-2 stagger-children">
        {faqs.map((faq, i) => (
          <Reveal key={i}>
            <div className="border border-border rounded-xl bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-foreground font-heading pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed font-body">{faq.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => (
  <Section>
    <div className="text-center max-w-2xl mx-auto">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight text-balance font-heading">
          Stop struggling in silence.{" "}
          <span className="text-primary">Start learning the smart way.</span>
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="text-muted-foreground mb-10 font-body">
          Join a batch of 5 students. Get the attention you deserve. See real results.
        </p>
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
);

const Index = () => (
  <Layout>
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <HowItWorksPreview />
    <PricingPreview />
    <Trust />
    <FAQ />
    <FinalCTA />
  </Layout>
);

export default Index;
