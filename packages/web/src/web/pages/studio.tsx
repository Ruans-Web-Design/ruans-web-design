import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Menu,
  X,
  Plus,
  Download,
  Monitor,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";

const packages = [
  {
    name: "Starter",
    pages: "2 pages",
    amount: "500",
    monthly: "120",
    desc: "A thoughtful first step online.",
    features: [
      "Home + Contact",
      "Responsive, mobile-friendly design",
      "Basic SEO foundations",
      "Contact form",
    ],
  },
  {
    name: "Standard",
    pages: "3 pages",
    amount: "750",
    monthly: "150",
    desc: "More room to tell your story.",
    features: [
      "Home + About + Contact",
      "Responsive, mobile-friendly design",
      "Basic SEO & indexing submission",
      "Clean, professional layout",
    ],
  },
  {
    name: "Growth",
    pages: "4 pages",
    amount: "1,000",
    monthly: "180",
    desc: "Built for your next chapter.",
    features: [
      "Home + About + Services + Contact",
      "Responsive, mobile-friendly design",
      "Basic SEO foundations",
      "Clear enquiry-focused structure",
    ],
  },
];
const faqs = [
  [
    "What does basic SEO include?",
    "Page titles and descriptions, clear headings, readable URLs, image descriptions, internal links and a sitemap. Your website starts with a search-friendly foundation. Ongoing SEO campaigns are not part of the offer, and Google indexing or rankings cannot be guaranteed.",
  ],
  [
    "What is the monthly fee for?",
    "The monthly care fee covers hosting and ongoing website maintenance and support. The final scope, editing allowance, backup arrangements and cancellation terms will be agreed before a project starts. Domain and email costs will be confirmed separately.",
  ],
  [
    "Do I need to provide my own content?",
    "Yes. You provide your business information, wording, logo and photographs. I help organise it into clear, useful pages. Additional writing or content work can be discussed separately.",
  ],
  [
    "Can I add more pages later?",
    "Absolutely. Additional brochure pages are R150 per page. Complex features or pages may require a separate quote, agreed with you first.",
  ],
  [
    "How long will my website take?",
    "A delivery schedule is agreed once your content and project scope are ready. You will have a chance to review the design before launch.",
  ],
  [
    "Are there any other costs?",
    "Prices are in South African rand. Tax treatment, domain registration, renewal costs, email hosting and any custom features must be confirmed in your project quote. Nothing extra is added without agreement.",
  ],
];

function SectionHead({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function Pricing() {
  return (
    <section id="packages" className="section pricing">
      <div className="container">
        <SectionHead
          label="A SIMPLE START"
          title="Good design. Clear pricing."
          text="A professional website doesn’t need to be complicated. Choose the space your business needs, and let’s make it feel like you."
        />
        <div className="package-grid">
          {packages.map((p, i) => (
            <article
              className={"package " + (i === 1 ? "featured" : "")}
              key={p.name}
            >
              <div className="package-top">
                <span className="eyebrow">
                  0{i + 1} / {p.pages}
                </span>
                {i === 1 && <span className="popular">THE SWEET SPOT</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="package-desc">{p.desc}</p>
              <div className="price">
                <span className="currency">R</span>
                {p.amount}
                <small>ONCE-OFF BUILD</small>
              </div>
              <p className="monthly">
                + R{p.monthly}
                <span> / month hosting & care</span>
              </p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={13} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                className={"button " + (i === 1 ? "solid" : "")}
                href={"/contact?package=" + p.name}
              >
                Choose {p.name}
                <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
        </div>
        <div className="pricing-note">
          <span>
            <Check size={14} /> Basic SEO included in every package
          </span>
          <span>Extra pages from R150 · Prices in ZAR</span>
        </div>
        <p className="fineprint">
          Once-off build fee plus monthly care. Domain, email costs and tax
          treatment are confirmed in your quote. Indexing and rankings are not
          guaranteed.
        </p>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHead
          label="WHAT I CAN HELP WITH"
          title="A little less complicated."
          text="From your first website to a fresh start for an existing one. Practical design, considered details, and a person you can actually talk to."
        />
        <div className="service-grid">
          {[
            {
              icon: Monitor,
              title: "Website design",
              text: "Beautiful, purposeful websites that tell your story and make it easy for the right people to get in touch.",
              items: "Business websites / Responsive layouts / Contact forms",
            },
            {
              icon: Smartphone,
              title: "Website improvements",
              text: "An outdated website doesn’t have to stay that way. A fresh layout, clearer content, and a better mobile experience.",
              items: "Design refreshes / Mobile usability / Website reviews",
            },
            {
              icon: Search,
              title: "Ongoing care",
              text: "A website needs a little care after launch. Hosting, maintenance and support, so you can focus on your business.",
              items: "Secure hosting / Maintenance / Direct support",
            },
          ].map((s, i) => (
            <article key={s.title}>
              <div className="service-num">
                <span>0{i + 1}</span>
                <s.icon size={23} strokeWidth={1} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="service-items">{s.items}</div>
            </article>
          ))}
        </div>
        <div className="seo-note">
          <span className="asterisk">✳</span>
          <p>
            <strong>SEO isn’t an extra. It’s a foundation.</strong>
            <br />
            Every website includes the basics that help search engines
            understand your business. No separate SEO package. No unrealistic
            promises.
          </p>
        </div>
      </div>
    </section>
  );
}
function Process() {
  return (
    <section id="process" className="section process">
      <div className="container narrow">
        <SectionHead
          label="HOW WE GET THERE"
          title="Made together. Built with care."
          text="No complicated jargon. No disappearing after the first call. Just a straightforward process from that first idea to your finished website."
        />
        <div className="timeline">
          {[
            [
              "Let’s talk",
              "We start with your business, your people and what you need your website to do. Together, we find the right package and a clear direction.",
            ],
            [
              "Make it feel like you",
              "Your story becomes a considered design. I bring the pages together, making room for your content and the little details that set you apart.",
            ],
            [
              "Refine & get ready",
              "You review the website. We refine the details, test it across screen sizes, check the SEO basics, and get everything ready for launch.",
            ],
            [
              "Launch. Then look after it.",
              "Your website goes live when you’re happy. Hosting and ongoing care keep it in good shape, with support whenever you need to discuss the next step.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span className="timeline-number">0{i + 1}</span>
              <div>
                <span className="eyebrow">
                  {["DISCOVER", "DESIGN", "REFINE", "LAUNCH & CARE"][i]}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Concept({ variant }: { variant: string }) {
  return (
    <div className={"concept " + variant}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>CONCEPT DESIGN / NOT A CLIENT PROJECT</span>
      </div>
      <div className="mock-nav">
        <strong>
          {variant === "botanical" ? "field & stem." : "the still house"}
        </strong>
        <span>ABOUT &nbsp; COLLECTION &nbsp; CONTACT</span>
      </div>
      <div className="mock-content">
        <span className="eyebrow">
          {variant === "botanical"
            ? "GROW SOMETHING GOOD"
            : "A SLOWER WAY TO STAY"}
        </span>
        <h3>
          {variant === "botanical" ? (
            <>
              Rooted in nature.
              <br />
              Made for living.
            </>
          ) : (
            <>
              A little space.
              <br />A lot of stillness.
            </>
          )}
        </h3>
        <div className="mock-pill">
          {variant === "botanical"
            ? "Explore the collection"
            : "Find your escape"}{" "}
          <ArrowRight size={11} />
        </div>
      </div>
      <div className="mock-art">
        {variant === "botanical" ? (
          <>
            <div className="plant-pot" />
            <div className="plant-leaf leaf1" />
            <div className="plant-leaf leaf2" />
            <div className="plant-leaf leaf3" />
          </>
        ) : (
          <img
            src="/images/coast.jpg"
            alt="Coastal landscape used in a demonstration website"
            width="600"
            height="400"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <SectionHead
          label="A FEEL FOR THE POSSIBILITIES"
          title="Your business. A fresh perspective."
          text="Two original design explorations, created to show what a considered website can feel like. These are concepts, not completed client projects."
        />
        <div className="concept-grid">
          <div>
            <Concept variant="botanical" />
            <div className="concept-caption">
              <h3>Field & Stem</h3>
              <span>BOTANICAL SHOP · DESIGN CONCEPT</span>
            </div>
          </div>
          <div>
            <Concept variant="retreat" />
            <div className="concept-caption">
              <h3>The Still House</h3>
              <span>COASTAL RETREAT · DESIGN CONCEPT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function About({ full = false }: { full?: boolean }) {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-art">
          <span className="big-monogram">r.</span>
          <span className="about-art-label">INDEPENDENT BY DESIGN</span>
          <div className="about-signature">Ruan</div>
        </div>
        <div>
          <span className="eyebrow">THE PERSON BEHIND THE PIXELS</span>
          {full ? (
            <h1>
              A personal approach.
              <br />
              <em>A purposeful website.</em>
            </h1>
          ) : (
            <h2>
              Hi, I’m Ruan.
              <br />
              <em>Let’s make something good.</em>
            </h2>
          )}
          <p>
            I’m building Ruan’s Web Design around a simple idea: a small
            business deserves a website that feels professional, personal and
            easy to use.
          </p>
          <p>
            This is a direct, collaborative approach to web design. We start
            with what your business actually needs, keep things clear, and build
            a website with care—not unnecessary complexity.
          </p>
          <p>
            From the first conversation to the finishing touches, the focus
            stays on your story, your customers and a website you can feel proud
            of.
          </p>
          <Link href="/contact" className="text-link">
            Let’s talk about your idea <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  return (
    <section className="section faq">
      <div className="container narrow">
        <SectionHead
          label="A FEW THINGS YOU MIGHT BE WONDERING"
          title="Good questions. Straight answers."
        />
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={17} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function QuoteForm() {
  const [preview, setPreview] = useState(false);
  const selected =
    new URLSearchParams(window.location.search).get("package") || "";
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPreview(true);
  }
  function download() {
    const form = document.querySelector<HTMLFormElement>("#quote-form");
    if (!form) return;
    const data = new FormData(form);
    const text =
      "Ruan’s Web Design — project brief\n\n" +
      [...data].map(([k, v]) => `${k}: ${v}`).join("\n") +
      "\n\nPreview only. This enquiry has not been sent.";
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-website-brief.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <form id="quote-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Your name
          <input
            aria-label="Your name"
            name="Name"
            placeholder="First and last name"
            required
            autoComplete="name"
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            aria-label="Email address"
            name="Email"
            placeholder="you@yourbusiness.co.za"
            required
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form-grid">
        <label>
          Business name
          <input
            aria-label="Business name"
            name="Business"
            placeholder="Your business or idea"
          />
        </label>
        <label>
          I’m interested in
          <select
            aria-label="Package interest"
            name="Package"
            defaultValue={selected}
          >
            <option value="">Let’s find the right fit</option>
            {packages.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
            <option>Website improvements</option>
            <option>Maintenance & support</option>
          </select>
        </label>
      </div>
      <label>
        A little about your project
        <textarea
          aria-label="Project details"
          name="Project"
          placeholder="What do you have in mind? Tell me about your business and what you’d like to create."
          rows={4}
          required
        />
      </label>
      <p className="form-note">
        Preview only: this form does not send or store your details. Contact
        details are placeholders.{" "}
        <Link href="/privacy">Privacy information</Link>
      </p>
      <button className="button light" type="submit">
        Preview my enquiry <ArrowUpRight size={16} />
      </button>
      {preview && (
        <output className="form-result">
          <strong>Your project brief is ready to review.</strong>
          <p>
            Nothing has been sent. You can save a copy while the studio’s real
            contact details are being configured.
          </p>
          <button className="text-link" type="button" onClick={download}>
            <Download size={15} /> Save my brief
          </button>
        </output>
      )}
    </form>
  );
}
function Contact({ full = false }: { full?: boolean }) {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          {full ? (
            <h1>
              Have an idea?
              <br />
              <em>Let’s bring it to life.</em>
            </h1>
          ) : (
            <h2>
              Have an idea?
              <br />
              <em>Let’s bring it to life.</em>
            </h2>
          )}
          <p>
            A first website. A fresh start. Or a question you’ve been meaning to
            ask. Tell me a little about what you have in mind.
          </p>
          <div className="contact-details">
            <span>CONTACT DETAILS / TO BE CONFIRMED</span>
            <p>
              [Your email address]
              <br />
              [Your WhatsApp number]
              <br />
              [Your location & service area]
            </p>
          </div>
          <span className="contact-signature">Let’s make something good.</span>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

export default function Studio() {
  const [location] = useLocation();
  const [menu, setMenu] = useState(false);
  const home = location === "/";
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Websites with purpose",
      "/services": "Website Design Packages & Pricing",
      "/about": "About Ruan",
      "/contact": "Start Your Website Project",
      "/privacy": "Privacy — Preview",
    };
    document.title =
      (titles[location] || "Page not found") + " | Ruan’s Web Design";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      location === "/services"
        ? "Mobile-friendly website packages from R500 once-off plus R120 per month. Basic SEO included in every package."
        : "Thoughtful website design for small businesses. Clear pricing, responsive layouts, basic SEO foundations and ongoing care.",
    );
    setMenu(false);
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);
  const nav = [
    ["Services", "/services"],
    ["Packages", "/#packages"],
    ["Process", "/#process"],
    ["About", "/about"],
  ];
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {home && (
        <header className="hero">
          <img
            className="hero-image"
            src="/images/coast.jpg"
            alt="Quiet coastal dunes and ocean at sunset"
            width="1920"
            height="1280"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="hero-top">
            <Link href="/" className="wordmark">
              Ruan<span>’s</span>
              <small>WEB DESIGN</small>
            </Link>
            <span className="hero-top-note">INDEPENDENT WEB DESIGN STUDIO</span>
            <Link className="hero-contact" href="/contact">
              LET’S TALK <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="hero-content">
            <span className="eyebrow">
              THOUGHTFULLY DESIGNED. SIMPLY BUILT.
            </span>
            <h1>
              Small business.
              <br />
              <em>Big possibilities.</em>
            </h1>
            <p>
              Websites that feel like you.
              <br />
              Built with purpose. Made to grow.
            </p>
            <a className="button hero-button" href="#packages">
              Find your starting point <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-bottom">
            <span>GOOD DESIGN STARTS WITH A CONVERSATION</span>
            <a href="#intro" aria-label="Explore the website">
              <ArrowDown size={18} />
            </a>
            <span>YOUR NEXT CHAPTER, ONLINE</span>
          </div>
        </header>
      )}
      <nav
        className={"navigation " + (!home ? "inner-nav" : "")}
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {!home ? (
            <Link href="/" className="small-wordmark">
              Ruan’s <span>Web Design</span>
            </Link>
          ) : (
            <Link href="/" className="nav-home">
              RUAN’S WEB DESIGN
            </Link>
          )}
          <div className={"nav-links " + (menu ? "open" : "")}>
            {nav.map(([text, url]) => (
              <a
                href={url}
                key={text}
                onClick={() => setMenu(false)}
                className={location === url ? "active" : ""}
              >
                {text}
              </a>
            ))}
            <Link href="/contact" className="nav-quote">
              Get in touch <ArrowUpRight size={13} />
            </Link>
          </div>
          <button
            className="menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <main id="main">
        {home ? (
          <>
            <section id="intro" className="intro section">
              <div className="container narrow">
                <span className="eyebrow">
                  FOR THE BUSINESSES BUILT WITH HEART
                </span>
                <h2>
                  You do what you love.
                  <br />
                  <em>I’ll help the world see it.</em>
                </h2>
                <p>
                  You’ve put a lot into your business. Your website should
                  reflect that.
                  <br className="desktop-break" /> I create thoughtful,
                  mobile-friendly websites that make a good first impression,
                  <br className="desktop-break" /> tell your story clearly, and
                  turn a curious visitor into a conversation.
                </p>
                <div className="intro-values">
                  <span>MOBILE-FRIENDLY</span>
                  <i />
                  <span>BASIC SEO INCLUDED</span>
                  <i />
                  <span>PERSONAL SUPPORT</span>
                </div>
              </div>
            </section>
            <Pricing />
            <Services />
            <Process />
            <Work />
            <About />
            <FAQ />
            <Contact />
          </>
        ) : location === "/services" ? (
          <>
            <section className="page-intro">
              <span className="eyebrow">WEBSITES, WITHOUT THE OVERWHELM</span>
              <h1>
                A place for your business
                <br />
                <em>to grow.</em>
              </h1>
              <p>
                Thoughtful design. Search-friendly foundations. Straightforward
                packages.
              </p>
            </section>
            <Pricing />
            <Services />
            <FAQ />
            <Contact />
          </>
        ) : location === "/about" ? (
          <>
            <About full />
            <Process />
            <Contact />
          </>
        ) : location === "/contact" ? (
          <Contact full />
        ) : location === "/privacy" ? (
          <section className="section container narrow legal">
            <span className="eyebrow">PRE-LAUNCH INFORMATION</span>
            <h1>Your privacy matters.</h1>
            <p>
              This website is a preview. The enquiry form does not send or store
              personal details. If you download a brief, it is created in your
              browser and saved on your device.
            </p>
            <h2>Analytics</h2>
            <p>
              The hosting platform’s default analytics may collect technical
              usage information. A final privacy notice and any appropriate
              tracking controls must be reviewed before public launch.
            </p>
            <h2>Before launch</h2>
            <p>
              Real business contact details, data retention practices, service
              terms and the final privacy notice are still to be configured. Do
              not submit sensitive personal information.
            </p>
            <Link href="/contact" className="text-link">
              Back to your enquiry <ArrowUpRight size={16} />
            </Link>
          </section>
        ) : (
          <section className="section container narrow">
            <h1>A little off the beaten path.</h1>
            <p>That page doesn’t exist.</p>
            <Link href="/" className="button">
              Back to home
            </Link>
          </section>
        )}
      </main>
      <footer>
        <div className="container footer-inner">
          <Link href="/" className="footer-wordmark">
            Ruan’s <span>Web Design</span>
          </Link>
          <span>© {new Date().getFullYear()} Ruan’s Web Design</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <a
              href={home ? "#top" : "/"}
              onClick={() => {
                if (home) window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
