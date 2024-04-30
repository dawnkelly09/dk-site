import Image from 'next/image'
import Link from 'next/link'
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
        <div>
          <Link href="https://docs.google.com/document/d/1Z_RvRmz-OXIPKYszc2Pf5JpZNOv4oc6x-LNQlIedH1I/edit?usp=sharing" className="contact-link" target="_blank" rel="noopener">
            <h4>Resume</h4>
          </Link>
        </div>
      <div className="contact-links">
            <h4 id='contact'>Where to find me:</h4>
            <Link href="https://t.me/dawnkelly" className="contact-link" target="_blank" rel="noopener">
                telegram |
            </Link>
            <Link href="https://twitter.com/run4pancakes" className="contact-link" target="_blank" rel="noopener">
                twitter |
            </Link>
            <Link href="https://warpcast.com/dawnkelly" className="contact-link" target="_blank" rel="noopener">
                farcaster |
            </Link>
            <Link href="https://discordapp.com/users/dawnkelly09" className="contact-link" target="_blank" rel="noopener">
                discord |
            </Link>
            <Link href="https://www.linkedin.com/in/dawnkelly09/" className="contact-link" target="_blank" rel="noopener">
                linkedin |
            </Link>
        </div>
      </section>
    </main>
  )
}

export default ContactPage