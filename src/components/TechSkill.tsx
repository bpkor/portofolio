export default function TechSkill() {
  const skills = [
    { name: 'JS', color: 'bg-amber-500' },
    { name: 'TS', color: 'bg-blue-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Tailwindcss', color: 'bg-teal-500' },
    { name: 'Premierepro', color: 'bg-purple-500' }
  ]

  return (
    <div className="mb-8 p-6 border border-[#2d2d3d] rounded-lg bg-[#0f0f1a]">
      <h2 className="gradient-text-purple text-xl font-bold border-b border-[#2d2d3d] pb-2 mb-6">Tech Skill</h2>
      <div className="border border-[#2d2d3d] rounded p-4 bg-[#1a1a2e]">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className={`px-4 py-1 rounded-full text-white ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 