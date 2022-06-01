import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className=" mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <div className="grid grid-cols-9 ">
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  )
}

export default Home
