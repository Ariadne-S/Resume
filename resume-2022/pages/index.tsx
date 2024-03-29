import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageHeader from "../components/page-header";
import Experience from "../components/experience";
import Education from "../components/education";
import EducationSection from "../components/education";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Toni Sefton's Resume</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <PageHeader/>
            <main className={styles.main}>
                <Experience/>
                <EducationSection />
            </main>
        </div>
    )
}

export default Home
