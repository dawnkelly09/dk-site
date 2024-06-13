import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Matrix from '../../public/matrix.jpg'
import Card from '../components/Card'
import '../globals.css'

const WorkPage = () => {
  return (
    <main className='work-container'>
      <section>
        <div className='center-me'>
          <h2>A collection of things I&apos;ve yeeted into the universe:</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>dev stuff</h2>
          <div className='dev-stuff'>
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/Qmd8cepVeEfANLwCpVMytYbebhXQk47Jq83LWQRXFXaNu2"
            tags={['profile', 'code']}
            title="Github: dawnkelly09"
            description="A pleasant mashup of half-finsihed experiments with a few gems buried in there as well."
            readMoreUrl="https://github.com/dawnkelly09"
          />
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/QmUcfbsJ6jQR6unK3pt4brKrPkeEtHFNLB6NdMKjKq7eTe"
            tags={['website', 'code']}
            title="nursebloc.io"
            description="I had the good fortune of building this landing page with waitlist via Deform for a founder I met via Build DAO."
            readMoreUrl="https://www.nursebloc.io/"
          />
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/QmSkTPgZzmRPXX8KJyHNkkYh8FdsPDAAmUjz1ixFn4p5KS"
            tags={['hackathon', 'code']}
            title="RPG Building Blocks"
            description="Built this for ETH Denver but waited until the last minute to try and submit and couldn't get through the process in time. Womp. Womp."
            readMoreUrl="https://www.loom.com/share/66a50d384f964368a4a7334729de0b46?sid=9c094ab5-aad4-4101-884c-9d49e94c23ef"
          />
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/QmSbrR7Zi6BtZJG7cGzSDS8vVJWid73hFq8E1WfmBkKffG"
            tags={['games', 'code']}
            title="Early Bird Game"
            description="This was my first attempt at creating a game with HTML5 Canvas. Users can pick the direction but the game decides how many squares to move between 2-6 per turn."
            readMoreUrl="https://robin-game.vercel.app/"
          />
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/QmXNNKL9XV6bhhMcgwpNqFvYgFcQ3f3MLqkaX6kUAmzPYM"
            tags={['hackathon', 'code']}
            title="Mind Palace - HackFS"
            description="Proof of concept to generate Open Graph protocol object files, store & serve them from web3storage, and use them as embeds in tldraw canvas. Submitted to HackFS 2024, won a pool prize from Fleek."
            readMoreUrl="https://ethglobal.com/showcase/mind-palace-d9sb9"
          />
          <Card 
            imageUrl="https://cyan-interesting-takin-110.mypinata.cloud/ipfs/QmP599yNAj4zL2wfEBey1Ks2Qy3CH6uFnuSxJD5qwYJDYA"
            tags={['hackathon', 'code']}
            title="Mind Palace - Onchain Summer"
            description="Expanding upon the concept I explored for HackFS, this build integrates the Coinbase Smart Wallet and adds additional canvas offerings."
            readMoreUrl="https://mind-palace-smartwallet-demo.vercel.app/"
          />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>writing</h2>
          <div className='link-list'>
            <Link href="https://medium.com/@dawnkelly09/builders-wanted-objects-props-437981fd9d90" target="_blank" rel="noopener">Builders Wanted: Objects & Props</Link>
            <Link href="https://medium.com/@dawnkelly09/intro-to-eth-restaking-30466fa13b93" target="_blank" rel="noopener">Intro to ETH restaking</Link>
            <Link href="https://medium.com/@dawnkelly09/cryptos-woman-problem-b3c5d6eb938b" target="_blank" rel="noopener">Crypto&apos;s woman problem</Link>
          </div>
        </div>
      </section>
      <section>
      <div>
          <h2>workshops</h2>
          <div className='link-list'>
            <Link href="https://www.youtube.com/watch?v=O7j_MpQ3ZlE" target="_blank" rel="noopener">Filecoin Presents: Winning Ideas and How to Share Them</Link>
            <Link href="https://www.youtube.com/watch?v=RSq3UUpDGgg" target="_blank" rel="noopener">Decentralising Your Stack - Building on Filecoin with Web3.Storage</Link>
            <Link href="https://www.youtube.com/watch?v=aTyP_gZkQy0" target="_blank" rel="noopener">Filecoin & IPFS 101</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkPage