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
          <span>02 /</span> A LITTLE ABOUT ME
        </p>
        <h2>
          Curious by nature.
          <br />
          <span className="serif">Builder</span> by choice.
        </h2>
        <p className="about-copy">
          I’m Alex, a developer who cares as much about how things feel as how they
          work. I enjoy finding the sweet spot between thoughtful design and clean,
          reliable code.
        </p>
        <p className="about-copy">
          When I’m away from the keyboard, you’ll find me exploring new places,
          collecting too many bookmarks, or chasing the perfect cup of coffee.
        </p>
      </div>
      <div className="skills-panel">
        <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
        {skillGroups.map(({ icon: Icon, title, text, skills }) => (
          <div className="skill-row" key={title}>
            <span className="skill-icon">
              <Icon size={21} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="skill-tags">
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
