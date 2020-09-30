import Head from 'next/head'
import Layout, {SiteName} from '../components/Layout'
import MemeContainer from '../components/MemeContainer'

const today = new Date()

function Home({data}) {
    return (
        <Layout>
            <Head>
                <title>{SiteName} - Random Memer</title>
            </Head>

            {/* posts container */}
            <div className="flex items-center justify-center h-full py-16 w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-lighter font-black text-4xl tracking-wide uppercase">Geezer</h1>
                    <MemeContainer meme={data.meme} />
                    <button className="px-8 mt-4 py-3 bg-mid-blue text-white text-sm font-light tracking-wide">next</button>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://gagger.herokuapp.com/`)
    const data = await res.json()

    return {props: {data}}
}

export default Home
