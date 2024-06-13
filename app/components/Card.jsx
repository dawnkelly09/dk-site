import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../globals.css'

const Card = ({ imageUrl, tags, title, description, readMoreUrl }) => {
  return (
    <div id="container">
        <div className="card">
            <Image className='image' src={imageUrl} alt={title} width={500} height={300} />

            <div className="card-details">
                {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}

          <div className="name">{title}</div>
          <p className='description'>{description}</p>

          <Link href={readMoreUrl}>
            <button>Let's go! 🚀</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Card