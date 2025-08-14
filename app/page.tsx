'use client'

import { useRouter } from 'next/navigation'

const words = ['a', 'tiger', 'who', 'ate', 'the', 'moonlight']

export default function Home() {
  const router = useRouter()

  return (
    <div className="main_wrap">
      <h2 className="animated_title">
        {words.map((word, i) => {
          let className = 'word'
          if (word === 'tiger') className += ' tiger'
          if (word === 'moonlight') className += ' moonlight'

          return (
            <span
              key={i}
              className={className}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {word}
            </span>
          )
        })}
      </h2>

      <div className="main_img">
        <img
          src="/img/main.png"
          alt="메인 이미지"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push('/p1')}
              className="main_fadein"
        />
      </div>
    </div>
  )
}
