import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Enroll Now</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight font-heading">
                Secure Your <span className="text-primary">Seat</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                Batches fill up fast. We only take 5 students per batch. Fill out the form and we'll get back to you within 24 hours with available slots.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mb-10 rounded-2xl border border-border bg-card/50 px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body mb-3">Contact</p>
                <a
                  href="mailto:elbin@zeku.in"
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  elbin@zeku.in
                </a>
                <a
                  href="tel:+917306516842"
                  className="mt-2 block text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  +91 73065 16842
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-6">
                {[
                  { title: "Free Trial Class", desc: "Try before you commit. No payment needed." },
                  {
                    title: "Expert tutors, not overcrowded halls",
                    desc: "Dedicated educators trained in PCM, clear explanations, patient doubt support, and teaching that adapts to how your child learns.",
                  },
                  { title: "Quick Response", desc: "We'll reach out within 24 hours." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground font-heading">{item.title}</p>
                      <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">Thank you!</h3>
                <p className="text-sm text-muted-foreground font-body">We've received your request. Our team will contact you within 24 hours to schedule your trial class.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Student Name</label>
                  <input type="text" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="Enter student's full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Email</label>
                  <input type="email" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="parent@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Phone</label>
                  <input type="tel" required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow" placeholder="+91 73065 16842" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Class</label>
                    <select required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow">
                      <option value="">Select</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Plan</label>
                    <select required className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow">
                      <option value="">Select</option>
                      <option value="6-month">6 months</option>
                      <option value="1-year">1 year</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Message (optional)</label>
                  <textarea rows={3} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow" placeholder="Any questions or preferred time slots?" />
                </div>
                <button type="submit" className="w-full h-11 rounded-lg bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Secure Your Seat
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
