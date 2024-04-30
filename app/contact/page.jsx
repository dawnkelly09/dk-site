import Image from 'next/image'
import Matrix from '../../public/matrix.jpg'

const ContactPage = () => {
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
        socials
      </section>
      <section>
        resume
      </section>
    </main>
  )
}

export default ContactPage