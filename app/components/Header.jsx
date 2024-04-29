import Image from "next/image";
import Link from "next/link";
import DK from '../../public/DK.svg'
import '../globals.css'

const Header = () => {
  return (
    <nav>
        <div className="nav-logo">
            <Link href="/" passHref legacyBehavior>
                <Image priority src={DK} alt="DK logo" height="80"/>
            </Link>
            <div>
                <span className="first-name">DAWN </span><span className="last-name">KELLY</span>
            </div>
        </div>
        <div>
            <Link href="/work" className='links-row'>work</Link>
            <Link href="/contact" className='links-row'>contact</Link>
        </div>
    </nav>
  )
}

export default Header