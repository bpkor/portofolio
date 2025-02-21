import Profile from '@/components/Profile'
import Introduce from '@/components/Introduce'
import TechSkill from '@/components/TechSkill'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Profile />
      <Introduce />
      <TechSkill />
    </main>
  )
}
