import { Code2, Layers, Wrench} from 'lucide-react'
import SlideIn from './SlideIn.jsx'

const skillGroups = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'Java', 'C#', 'C', 'JavaScript', 'Typescript', 'HTML/CSS', 'R'],
  },
  {
    icon: Layers,
    title: 'Libraries & Frameworks',
    skills: ['PyTorch', 'Numpy', 'React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Pygame',]
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Unix', 'Vite',],
  },
]

export default function About() {
  return (
    <section id="about" className="about-section page-width">
      <div>
        <SlideIn as="p" className="eyebrow">
          <span>/</span> ABOUT ME
        </SlideIn>
        <SlideIn as="h2" delay={70}>
          Curious by nature.
          <br />
          <span className="serif">Builder</span> by choice.
        </SlideIn>
        <SlideIn
          as="p"
          className="mb-[15px] text-base leading-[1.9] text-[#646464]"
          delay={140}
        >
          I’m Taehyun—you can call me Brian—a developer who cares as much about how
          things feel as how they work. I enjoy finding the sweet spot between
          thoughtful design and clean, reliable code.
        </SlideIn>
        <SlideIn
          as="p"
          className="mb-[15px] text-base leading-[1.9] text-[#646464]"
          delay={210}
        >
          When I’m away from the keyboard, you’ll find me exploring new places,
          collecting too many bookmarks, or chasing the perfect cup of coffee.
        </SlideIn>
      </div>
      <div className="skills-panel pt-[3px]">
        <SlideIn as="p" className="eyebrow">
          TECH STACKS
        </SlideIn>
        {skillGroups.map(({ icon: Icon, title, text, skills }, index) => (
          <SlideIn
            className="flex gap-[18px] border-b border-b-[#e6e6e6] py-7
              last:border-b-0"
            key={title}
            delay={index * 80}
          >
            <span
              className="grid h-[43px] min-w-[43px] place-items-center
                rounded-[3px] bg-[#f4f4f4] text-[#222]"
            >
              <Icon size={21} />
            </span>
            <div>
              <h3 className="mb-1.5 text-[15px] font-[650] text-[#111]">{title}</h3>
              <p className="mb-[11px] text-[14px] leading-[1.7] text-[#646464]">
                {text}
              </p>
              <div
                className="flex flex-wrap gap-x-4 gap-y-[7px]
                  text-[12px] text-[#707070]"
              >
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  )
}
