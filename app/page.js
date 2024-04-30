import Image from "next/image";
import HeroImage from '../public/dawn.svg'

export default function Home() {
  return (

    <main>
      <section className="hero-container">
      <div className="grid-box-1 image1">
        <Image 
          src={HeroImage}
          alt="Picture of Dawn Kelly"
          className="hero-image"
        />
      </div>
      <div className="grid-box-2 text1">
      <h2 style={{ 
          color: "var(--primary-color)",
          fontSize: "3em",
        }} className="hero-h2">
          Learn in Public
        </h2>
        <p>Need someone to become obssessed with learning deeply about your thing and share the journey with motivated builders and their communities? Hi, it&apos;s me.</p>
      </div>
      <div className="grid-box-3 text2">
        <h2 style={{ 
          color: "var(--secondary-color)",
          fontSize: "3em",
        }}>
          Build in Public
        </h2>
        <p>My developer journey started on Tech & Crypto Twitter. The Build in Public is baked right in. Ideate, build, ship, measure, iterate, and share all along the way. </p>
      </div>
      <div className="grid-box-4 text3">
      <h2 style={{ 
          color: "var(--accent-color-2)",
          fontSize: "3em",
        }}>
          Teach in Public
        </h2>
        <p>Information is the key ingredient to cultivating the knowledge needed to innovate, adapt, and hopefully create a better world. Information is the most basic of public goods and should be free for those who wish to learn.</p>
      </div>
      </section>
    </main>
  );
}
