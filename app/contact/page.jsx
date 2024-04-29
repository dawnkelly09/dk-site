import Image from 'next/image'
import Matrix from '../../public/matrix.jpg'

const ContactPage = () => {
  return (
    <main>
      <section>
        <div className='center-me'>
          <Image 
            src={Matrix}
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