import React from 'react'
import Image from 'next/image'
import Matrix from '../../public/matrix.jpg'

const WorkPage = () => {
  return (
    <main>
      <section>
        <div className='center-me'>
          <Image 
            src={Matrix}
            alt="Image of green text running over a black background from the movie The Matrix"
            style={{
              borderRadius: "12px",
            }}
          />
        </div>
      </section>
      <section>
        coding projects
      </section>
      <sectiom>
        blogs 
      </sectiom>
      <section>
        workshops
      </section>
    </main>
  )
}

export default WorkPage