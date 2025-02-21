export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          
          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
          
          {/* Tools & Others */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <ul className="space-y-2">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Database (SQL/NoSQL)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 