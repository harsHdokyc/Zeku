import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import pricingVisual from "@/assets/pricing-visual.png";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    desc: "Perfect for trying ZEKU with one subject.",
    features: ["1 subject of your choice", "5-student batch", "Daily 1-hour live class", "Doubt support after class", "Monthly progress summary"],
  },
  {
    name: "Standard",
    price: "₹4,999",
    period: "/month",
    desc: "The most popular choice for serious students.",
    features: ["2 subjects of your choice", "5-student batch", "Daily 1-hour live class", "Priority doubt support", "Monthly progress reports", "Parent access to reports"],
    popular: true,
  },
  {
    name: "Complete",
    price: "₹6,999",
    period: "/month",
    desc: "Full coverage across Physics, Chemistry & Maths.",
    features: ["All 3 subjects included", "5-student batch", "Daily 1-hour live class", "Priority doubt support", "Weekly progress reports", "Parent dashboard access", "Exam prep sessions"],
  },
];

const Pricing = () => (
  <Layout>
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-center md:text-left max-w-lg">
          <Reveal>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight font-heading">
              Simple, <span className="text-primary">transparent</span> pricing
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground font-body">
              No hidden fees. No contracts. Cancel anytime. Start with a free trial class.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="flex justify-center md:justify-end">
            <img
              src={pricingVisual}
              alt="3D price tags and shield representing transparent pricing"
              width={320}
              height={320}
              loading="lazy"
              className="w-full max-w-[320px] h-auto"
            />
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
        {plans.map((plan) => (
          <Reveal key={plan.name}>
            <div className={`rounded-2xl border p-8 h-full flex flex-col group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${plan.popular ? "border-primary ring-1 ring-primary/20 bg-card" : "border-border bg-card hover:border-primary/30"}`}>
              {plan.popular && (
                <span className="inline-flex self-start items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-4 font-body">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground font-heading">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6 font-body">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground font-heading">{plan.price}</span>
                <span className="text-sm text-muted-foreground font-body">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex h-11 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                Get Started
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section className="bg-surface-sunken">
      <Reveal>
        <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight font-heading">Compare Plans</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-medium text-muted-foreground font-body">Feature</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground font-body">Starter</th>
                <th className="text-center py-4 px-4 font-medium text-primary font-body">Standard</th>
                <th className="text-center py-4 px-4 font-medium text-muted-foreground font-body">Complete</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Subjects", "1", "2", "3"],
                ["Batch Size", "5", "5", "5"],
                ["Daily Classes", "✓", "✓", "✓"],
                ["Doubt Support", "Basic", "Priority", "Priority"],
                ["Progress Reports", "Monthly", "Monthly", "Weekly"],
                ["Parent Dashboard", "—", "—", "✓"],
                ["Exam Prep", "—", "—", "✓"],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-6 text-foreground font-body">{feature}</td>
                  {values.map((v, i) => (
                    <td key={i} className="text-center py-4 px-4 text-muted-foreground font-body">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  </Layout>
);

export default Pricing;
