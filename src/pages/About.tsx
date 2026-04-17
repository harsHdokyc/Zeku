import { Layout } from "@/components/Layout";
import { Section, Reveal } from "@/components/Section";
import aboutVisual from "@/assets/about-visual.png";

const About = () => (
  <Layout>
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="max-w-lg">
          <Reveal>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">About ZEKU</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-heading">
              Education should be <span className="text-primary">personal</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              ZEKU was born from a simple frustration: why do students pay premium prices for coaching that treats them like a number? We believed there had to be a better way.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground leading-relaxed font-body">
              Founded in 2025, ZEKU is an online learning platform designed exclusively for Class 11 and 12 students studying Physics, Chemistry, and Mathematics. We limit every batch to just 5 students — because that's where real learning happens.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutVisual}
              alt="3D compass on book representing ZEKU's educational mission"
              width={420}
              height={420}
              loading="lazy"
              className="w-full max-w-[420px] h-auto"
            />
          </div>
        </Reveal>
      </div>
    </Section>

    <Section className="bg-surface-sunken">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 h-full group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Our Mission</p>
            <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight font-heading">
              Make premium education accessible
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              We believe every student deserves the kind of attention that was previously reserved for expensive private tutoring. ZEKU bridges that gap — delivering personalized, concept-driven teaching at a fraction of the cost.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-border bg-card p-8 h-full group hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">Our Philosophy</p>
            <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight font-heading">
              Understanding over memorization
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              We don't race through the syllabus. Our teachers take the time to build deep conceptual understanding, ensuring students don't just pass exams — they truly learn the subject.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>

    <Section>
      <Reveal>
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase font-body">What Drives Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 tracking-tight font-heading">
          Our values
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
        {[
          { title: "Student First", desc: "Every decision — from batch size to schedule — is made with the student's learning in mind.", num: "01" },
          { title: "Radical Honesty", desc: "No false promises. We tell students exactly what to expect and deliver on it.", num: "02" },
          { title: "Continuous Improvement", desc: "We obsess over making every class better than the last. Feedback is our fuel.", num: "03" },
        ].map((v) => (
          <Reveal key={v.title}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full group hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <span className="text-3xl font-bold text-primary/15 font-heading block mb-4">{v.num}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  </Layout>
);

export default About;
