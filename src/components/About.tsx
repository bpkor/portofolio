export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          [자기소개를 입력해주세요]
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">[학교/교육 정보]</p>
              <p className="text-gray-600">[전공/과정]</p>
              <p className="text-sm text-gray-500">[기간]</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
} 