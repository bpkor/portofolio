import Image from 'next/image'

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 relative">
              <Image 
                src="/project1.jpg" 
                alt="Project 1" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">프로젝트 제목</h3>
              <p className="text-gray-600 mb-4">프로젝트 설명을 입력해주세요.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 