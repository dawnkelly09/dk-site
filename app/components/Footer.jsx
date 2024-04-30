import Link from "next/link"

const Footer = () => {
  return (
    <section className="">
        <div className="">
            <h2 className=''>Dawn Kelly</h2>
            <h2 className=''>dawnkelly09@gmail.com</h2>
            <span className="">© Dawn Kelly - last updated April 30, 2024</span>
        </div>
        <div className="m-8 text-lg text-white">
            <h4 id='contact' className='font-display color-ink'>Where to find me:</h4>
            <Link href="https://twitter.com/run4pancakes" className="text-md mr-2 hover:text-aqua" target="_blank">
                twitter |
            </Link>
            <Link href="https://www.linkedin.com/in/dawnkelly09/" className="text-md mr-2 hover:text-aqua" target="_blank">
                linkedin |
            </Link>
            <Link href="https://t.me/dawnkelly" className="text-md mr-2 hover:text-aqua" target="_blank">
                telegram |
            </Link>
            <Link href="https://discordapp.com/users/dawnkelly09" className="text-md mr-2 hover:text-aqua" target="_blank">
                discord
            </Link>
        </div>
        
    </section>
  )
}

export default Footer