import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">안녕하세요, 저는 [이름]입니다</h1>
        <p className="text-xl text-gray-600 mb-8">풀스택 개발자를 꿈꾸고 있습니다</p>
        <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-8">
          <Image 
            src="/profile.jpg" 
            alt="Profile" 
            width={160} 
            height={160}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
} 