'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className='main_wrap'>

      <h2>
        a tiger who ate the moonlight
        </h2>
<div className='main_img'>
        <img
        src="../img/main.png"
        alt="메인 이미지"
        style={{ cursor: 'pointer' }}
        onClick={() => router.push('/p1')}
      />
</div>
    </div>
  )
}
