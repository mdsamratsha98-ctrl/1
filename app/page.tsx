'use client';

import { useState } from 'react';

const skills = {
  Frontend: ['React','Next.js','TypeScript','Tailwind CSS'],
  Backend: ['Node.js','Express','REST APIs','GraphQL','Auth'],
  Database: ['PostgreSQL','MySQL','MongoDB','Redis'],
  'Cloud & DevOps': ['Git','GitHub','Docker','CI/CD','Vercel'],
  'Other': ['AI integrations','WebSockets','Automation','Security','Performance']
};

const projects = [
  { title:'Intelligent SaaS Platform', tag:'Full-Stack / AI', desc:'A scalable product experience combining intelligent workflows, secure APIs and an analytics-first dashboard.', stack:'Next.js · TypeScript · Node.js · PostgreSQL' },
  { title:'Realtime Operations Hub', tag:'Product Engineering', desc:'A fast operational workspace designed around live data, automation and an elegant responsive interface.', stack:'React · WebSockets · Node.js · Redis' },
  { title:'Digital Commerce Engine', tag:'Web Platform', desc:'A conversion-focused commerce experience with reusable components, clean architecture and performance in mind.', stack:'Next.js · API · Database · Vercel' }
];

export default function Home() {
  const [active, setActive] = useState('Frontend');
  const [dark, setDark] = useState(true);
  const [terminal, setTerminal] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <main className={dark ? 'site dark' : 'site'}>
      <nav className="nav"><a className="brand" href="#top">S<span>.</span></a><div className="links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><button className="theme" onClick={()=>setDark(!dark)}>{dark?'☼':'☾'}</button></nav>

      <section id="top" className="hero wrap"><div className="hero-copy"><div className="eyebrow">AVAILABLE FOR SELECT PROJECTS <i/></div><h1>Building digital<br/><em>products</em> that matter.</h1><p className="lead">Full-Stack Developer building scalable digital products, intelligent systems, and exceptional web experiences.</p><div className="actions"><a className="btn primary" href="#projects">View My Work ↗</a><a className="btn" href="#contact">Let’s Work Together</a></div><div className="social"><a href="https://github.com/" target="_blank">GitHub ↗</a><a href="https://linkedin.com/" target="_blank">LinkedIn ↗</a><a href="mailto:hello@example.com">Email ↗</a></div></div><div className="terminal"><div className="dots"><b/><b/><b/><span>developer@portfolio ~</span></div><div className="code"><p><small>01</small> <strong>const</strong> developer = {`{`}</p><p><small>02</small>&nbsp; name: <mark>'Samrat'</mark>,</p><p><small>03</small>&nbsp; role: <mark>'Full-Stack Engineer'</mark>,</p><p><small>04</small>&nbsp; focus: [<mark>'Scale'</mark>, <mark>'UX'</mark>, <mark>'AI'</mark>],</p><p><small>05</small>&nbsp; status: <mark>'building'</mark></p><p><small>06</small> {`}`};</p><div className="cmd">$ {terminal || 'whoami'}<span>▌</span></div></div><div className="terminal-buttons">{['whoami','skills','projects','contact'].map(x=><button key={x} onClick={()=>setTerminal(x)}>{x}</button>)}</div></div></section>

      <section id="about" className="section wrap"><div className="section-head"><span>01 / ABOUT</span><h2>Engineering with<br/><em>intent.</em></h2></div><div className="about-grid"><p className="bigcopy">I turn ambitious ideas into polished, reliable software. My approach sits at the intersection of engineering, product thinking and visual craft — creating systems that work beautifully under the hood and in the hands of real users.</p><div className="principles"><div><b>01</b><strong>Clarity over complexity</strong><p>Simple architectures, deliberate interfaces and maintainable code.</p></div><div><b>02</b><strong>Ship with purpose</strong><p>Every feature earns its place by solving a real problem.</p></div><div><b>03</b><strong>Built to evolve</strong><p>Scalable foundations that stay fast as products grow.</p></div></div></div><div className="stats"><div><strong>5+</strong><span>Years building</span></div><div><strong>40+</strong><span>Projects shipped</span></div><div><strong>20+</strong><span>Technologies</span></div><div><strong>15+</strong><span>Products & clients</span></div></div></section>

      <section id="skills" className="section wrap"><div className="section-head"><span>02 / EXPERTISE</span><h2>Tools for turning<br/><em>ideas into systems.</em></h2></div><div className="skill-layout"><div className="skill-tabs">{Object.keys(skills).map(k=><button className={active===k?'selected':''} onClick={()=>setActive(k)} key={k}>{k}<span>↗</span></button>)}</div><div className="skill-panel"><div className="skill-title"><span>0{Object.keys(skills).indexOf(active)+1}</span><h3>{active}</h3></div><div className="skill-list">{skills[active as keyof typeof skills].map((s,i)=><div className="skill" key={s}><span>0{i+1}</span><strong>{s}</strong><i>●</i></div>)}</div></div></div></section>

      <section id="projects" className="section wrap"><div className="section-head"><span>03 / SELECTED WORK</span><h2>Work that speaks<br/><em>for itself.</em></h2></div><div className="projects">{projects.map((p,i)=><article className={'project p'+i} key={p.title}><div className="project-visual"><span>{String(i+1).padStart(2,'0')}</span><div className="visual-ui"><div/><div/><div/></div></div><div className="project-info"><div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p></div><div><p className="stack">{p.stack}</p><a href="#contact">View case study ↗</a></div></div></article>)}</div></section>

      <section id="services" className="section wrap"><div className="section-head"><span>04 / SERVICES</span><h2>From first commit<br/><em>to final polish.</em></h2></div><div className="services">{['Full-Stack Web Development','SaaS & Product Development','API & Backend Engineering','AI Integration & Automation','Dashboards & Admin Systems','Performance & Technical Consulting'].map((s,i)=><div className="service" key={s}><span>0{i+1}</span><h3>{s}</h3><p>Architecture, implementation and refinement focused on measurable product value.</p><a href="#contact">Explore service →</a></div>)}</div></section>

      <section id="experience" className="section wrap"><div className="section-head"><span>05 / PROCESS</span><h2>A process designed<br/><em>to move forward.</em></h2></div><div className="timeline">{[['01','Discovery','Understand the idea, users, requirements and goals.'],['02','Strategy','Plan architecture, technology, features and roadmap.'],['03','Design','Create a clean, scalable product experience.'],['04','Development','Build frontend, backend, APIs, data and integrations.'],['05','Testing & Launch','Validate responsiveness, performance, security and deploy.']].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>

      <section id="contact" className="contact wrap"><div className="contact-inner"><div><span className="eyebrow">06 / CONTACT</span><h2>Have an idea worth<br/><em>building?</em></h2><p>Tell me what you're working on. I’ll turn the rough idea into a clear technical direction.</p><div className="contact-links"><a href="mailto:hello@example.com">hello@example.com ↗</a><a href="https://github.com/" target="_blank">GitHub ↗</a><a href="https://linkedin.com/" target="_blank">LinkedIn ↗</a></div></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Project type<select><option>Web product</option><option>SaaS</option><option>AI / Automation</option><option>Other</option></select></label><label>Message<textarea required placeholder="Tell me about the project..."/></label><button className="btn primary" type="submit">{sent?'Message ready ✓':'Send inquiry →'}</button></form></div></section>
      <footer className="footer wrap"><span>© 2026 Samrat. Crafted with intent.</span><span>Next.js · TypeScript · Vercel</span></footer>
    </main>
  );
}
