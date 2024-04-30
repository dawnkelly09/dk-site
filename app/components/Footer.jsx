import Link from "next/link"

const Footer = () => {
  return (
    <section className="footer-container">
        <div className="footer-left">
            <h4>Dawn Kelly</h4>
            <h5>dawnkelly09@gmail.com</h5>
            <span className="small-text">© Dawn Kelly - last updated April 30, 2024</span>
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
  )
}

export default Footer