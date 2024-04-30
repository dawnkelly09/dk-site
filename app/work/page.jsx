import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Matrix from '../../public/matrix.jpg'

const WorkPage = () => {
  return (
    <main className='work-container'>
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
          <h2>dev stuff</h2>
          <div className='link-list'>
            <Link href="https://github.com/dawnkelly09" target="_blank" rel="noopener">github</Link>
            <Link href="https://www.nursebloc.io/" target="_blank" rel="noopener">nursebloc.io</Link>
            <Link href="https://www.loom.com/share/66a50d384f964368a4a7334729de0b46?sid=9c094ab5-aad4-4101-884c-9d49e94c23ef" target="_blank" rel="noopener">RPG Building Blocks (ETH Denver build)</Link>
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