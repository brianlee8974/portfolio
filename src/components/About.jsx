import { Code2, Layers, Sparkles } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Frontend development',
    text: 'Responsive, accessible experiences built for real people.',
    skills: ['JavaScript', 'React', 'HTML & CSS'],
  },
  {
    icon: Layers,
    title: 'Thoughtful interfaces',
    text: 'The details that make a good experience feel effortless.',
    skills: ['Tailwind CSS', 'Figma', 'Responsive design'],
  },
  {
    icon: Sparkles,
    title: 'A builder’s mindset',
    text: 'From first idea to the final polish. Always learning.',
    skills: ['Vite', 'Git', 'Creative problem-solving'],
  },
]

export default function About() {
  return (
    <section id="about" className="about-section page-width">
      <div>
        <p className="eyebrow">
          <span>02 /</span> ABOUT ME
        </p>
        <h2>
          Curious by nature.
          <br />
          <span className="serif">Builder</span> by choice.
        </h2>
        <p className="mb-3.75 text-base leading-airy text-secondary">
          I’m Taehyun—you can call me Brian—a developer who cares as much about how
          things feel as how they work. I enjoy finding the sweet spot between
          thoughtful design and clean, reliable code.
        </p>
        <p className="mb-3.75 text-base leading-airy text-secondary">
          When I’m away from the keyboard, you’ll find me exploring new places,
          collecting too many bookmarks, or chasing the perfect cup of coffee.
        </p>
      </div>
      <div className="skills-panel pt-0.75">
        <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
        {skillGroups.map(({ icon: Icon, title, text, skills }) => (
          <div
            className="flex gap-4.5 border-b border-b-divider py-5
              last:border-b-0"
            key={title}
          >
            <span
              className="grid h-10.75 min-w-10.75 place-items-center
                rounded-subtle bg-surface text-strong"
            >
              <Icon size={21} />
            </span>
            <div>
              <h3 className="mb-1.5 text-label font-demibold text-accent">{title}</h3>
              <p className="mb-2.75 text-sm leading-comfortable text-secondary">
                {text}
              </p>
              <div
                className="flex flex-wrap gap-x-4 gap-y-1.75
                  text-xs/normal text-caption"
              >
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
