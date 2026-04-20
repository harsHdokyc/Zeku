import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import pricingVisual from "@/assets/pricing-visual.png";

const Pricing = () => {
  const [selectedClass, setSelectedClass] = useState<"11-12" | "10">("11-12");

  const pricingData = {
    "11-12": {
      features: [
        "Physics, Chemistry and Maths",
        "5 Students Per Class",
        "20 Hours of Live Classes",
        "Doubt support after class",
        "Monthly progress summary",
        "100% Online",
      ] as const,
      plans: [
        {
          name: "6-Month Plan",
          label: "Regular",
          price: "Rs.3,000",
          totalPrice: "Rs.18,000",
          yearlyPrice: "Rs.36,000",
          period: "/month (Rs.150/hr)",
          popular: false,
        },
        {
          name: "1-Year Plan",
          label: "Best Value",
          price: "Rs.2750",
          totalPrice: "Rs.33,000",
          period: "/month (Rs.140/hr)",
          popular: true,
          savings: "Save Rs.3,000 per year",
          savingsDesc: "vs the 6-month plan over 12 months (Rs.36,000)",
        },
      ],
    },
    "10": {
      features: [
        "Physics, Chemistry, Maths, Biology, English",
        "5 Students Per Class",
        "25 Hours of Live Classes",
        "Weekly Practice & Homework",
        "Monthly Tests & Performance Tracking",
        "Maximum 5 Students per Class",
      ] as const,
      plans: [
        {
          name: "6-Month Plan",
          label: "Regular",
          price: "Rs.3,000",
          totalPrice: "Rs.18,000",
          yearlyPrice: "Rs.36,000",
          period: "/month (Rs.120/hr)",
          popular: false,
        },
        {
          name: "1-Year Plan",
          label: "Best Value",
          price: "Rs.2750",
          totalPrice: "Rs.33,000",
          period: "/month (Rs.110/hr)",
          popular: true,
          savings: "Save Rs.3,000 per year",
          savingsDesc: "vs the 6-month plan over 12 months (Rs.36,000)",
        },
      ],
    },
  };

  const currentPricing = pricingData[selectedClass];

  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center md:text-left max-w-lg">
            <Reveal>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Pricing</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight font-heading">
                Plans that match your <span className="text-primary">timeline</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-muted-foreground font-body mb-6">
                Pay monthly on the 6-month plan, or lock in a full year at our best rate. Free trial class before you commit.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="relative inline-flex">
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value as "11-12" | "10")}
                    className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-10 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer"
                  >
                    <option value="11-12">Class 11-12</option>
                    <option value="10">Class 10</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-16">
          {currentPricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <div className={`relative flex h-full flex-col rounded-3xl border ${
                plan.popular 
                  ? "border-2 border-primary bg-gradient-to-br from-card to-card/80 shadow-xl shadow-primary/10 ring-4 ring-primary/15 hover:ring-primary/25" 
                  : "border border-border bg-card shadow-sm hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
              } p-8 md:p-10 transition-all duration-300`}>
                <h3 className="mb-6 text-xl font-bold text-foreground font-heading">
                  {plan.name} <span className={`${plan.popular ? "text-primary" : "text-muted-foreground"} font-semibold`}>({plan.label})</span>
                </h3>

                <div className="mb-8">
                  <p className="flex flex-wrap items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground font-heading md:text-5xl">{plan.price}</span>
                    <span className="text-lg text-muted-foreground font-body">{plan.period}</span>
                  </p>
                </div>

                <dl className="space-y-4 border-t border-border pt-6 text-sm font-body">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-muted-foreground">Total for {plan.name.includes("6") ? "6" : "1"} {plan.name.includes("6") ? "months" : "year"}</dt>
                    <dd className="text-right text-base font-semibold text-foreground tabular-nums">{plan.totalPrice}</dd>
                  </div>
                  {plan.yearlyPrice && (
                    <div className="flex items-baseline justify-between gap-4 pt-4 border-t border-border/80">
                      <dt className="text-muted-foreground">1 year (same plan)</dt>
                      <dd className="text-right text-base font-semibold text-foreground tabular-nums">{plan.yearlyPrice}</dd>
                    </div>
                  )}
                  {plan.savings && (
                    <div className="rounded-xl bg-primary/10 px-4 py-3 text-center">
                      <p className="text-sm font-semibold text-primary font-heading">{plan.savings}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{plan.savingsDesc}</p>
                    </div>
                  )}
                </dl>

                <ul className="mt-8 space-y-3">
                  {currentPricing.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground font-body">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    className={`inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg"
                        : "border border-border bg-background text-foreground hover:bg-secondary"
                    }`}
                  >
                    {plan.popular ? "Secure the annual rate" : "Get started"}
                  </Link>
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
                  <th className="text-center py-4 px-4 font-medium text-muted-foreground font-body">6-Month Plan</th>
                  <th className="text-center py-4 px-4 font-medium text-muted-foreground font-body">1-Year Plan</th>
                </tr>
              </thead>
              {selectedClass === "11-12" ? (
                <tbody>
                  {[
                    ["Monthly Price", "Rs.3,000 (Rs.150/hr)", "Rs.2,750 (Rs.140/hr)"],
                    ["Total Cost", "Rs.18,000 (6 months)", "Rs.33,000 (1 year)"],
                    ["Subjects", "Physics, Chemistry, Maths", "Physics, Chemistry, Maths"],
                    ["Batch Size", "5 students", "5 students"],
                    ["Live Classes", "20 Hours Total", "20 Hours Total"],
                    ["Doubt Support", "After class support", "After class support"],
                    ["Progress Reports", "Monthly summary", "Monthly summary"],
                    ["Platform", "100% Online", "100% Online"],
                  ].map(([feature, ...values]) => (
                    <tr key={feature} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-6 text-foreground font-body">{feature}</td>
                      {values.map((v, i) => (
                        <td key={i} className="text-center py-4 px-4 text-muted-foreground font-body">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {[
                    ["Monthly Price", "Rs.3,000 (Rs.120/hr)", "Rs.2,750 (Rs.110/hr)"],
                    ["Total Cost", "Rs.18,000 (6 months)", "Rs.33,000 (1 year)"],
                    ["Subjects", "Physics, Chemistry, Maths, Biology, English", "Physics, Chemistry, Maths, Biology, English"],
                    ["Batch Size", "5 students", "5 students"],
                    ["Live Classes", "25 Hours Total", "25 Hours Total"],
                    ["Practice & Homework", "Weekly", "Weekly"],
                    ["Tests & Tracking", "Monthly", "Monthly"],
                    ["Platform", "100% Online", "100% Online"],
                  ].map(([feature, ...values]) => (
                    <tr key={feature} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-6 text-foreground font-body">{feature}</td>
                      {values.map((v, i) => (
                        <td key={i} className="text-center py-4 px-4 text-muted-foreground font-body">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </Reveal>
      </Section>
    </Layout>
  );
};

export default Pricing;
