import Image from 'next/image'

export default function Profile() {
  return (
    <div className="mb-8 p-6 border border-[#2d2d3d] rounded-lg bg-[#0f0f1a]">
      <h2 className="text-xl font-bold border-b border-[#2d2d3d] pb-2 mb-6">Profile : Title</h2>
      <div className="flex gap-8">
        {/* 프로필 이미지 */}
        <div className="relative">
          <div className="w-32 h-32 bg-purple-600 rounded-full overflow-hidden">
            <span className="flex items-center justify-center h-full text-lg">사진</span>
          </div>
        </div>

        {/* 프로필 정보 */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="gradient-text-purple text-lg font-semibold mb-2">_I AM</h3>
            <div className="space-y-1 text-gray-200">
              <p>이름 : 이프로</p>
              <p>포지션: PM 서비스 기획 / FE Developer(jr)</p>
            </div>
          </div>

          <div>
            <h3 className="gradient-text-blue text-lg font-semibold mb-2">_Contact</h3>
            <div className="space-y-1 text-gray-200">
              <p>Email : leepro@naver.com</p>
              <p>Phone : +082 - 1234-5678</p>
            </div>
          </div>

          <div>
            <h3 className="gradient-text-pink text-lg font-semibold mb-2">_Channel</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-16 text-gray-200">SNS :</span>
                <div className="flex-1 h-8 border border-pink-500/30 rounded bg-[#1a1a2e]"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-gray-200">GitHub :</span>
                <div className="flex-1 h-8 border border-pink-500/30 rounded bg-[#1a1a2e]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 