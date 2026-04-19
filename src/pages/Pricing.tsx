import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import pricingVisual from "@/assets/pricing-visual.png";

const plans = [
  {
    price: "₹2,999",
    period: "/month",
    desc: "Perfect for trying ZEKU with one subject.",
    features: ["1 subject of your choice", "5-student batch", "Daily 1-hour live class", "Doubt support after class", "Monthly progress summary"],
    popular: true,
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

      <div className="max-w-2xl mx-auto">
        {plans.map((plan) => (
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
                  No contracts • Cancel anytime • Free trial class available
                </p>
              </div>
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
              </tr>
            </thead>
            <tbody>
              {[
                ["Subjects", "1"],
                ["Batch Size", "5"],
                ["Daily Classes", "✓"],
                ["Doubt Support", "Basic"],
                ["Progress Reports", "Monthly"],
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
