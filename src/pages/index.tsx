// Home.tsx
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";
import CardComponent from "../components/CardComponent";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.upperContainer}>
          <div className={styles.leftContainer}>
            <span className={styles.name}>Elijah Chan</span>
            <hr className={styles.split} />
            <span className={styles.major}>
              Digital Designer and Front End Developer
            </span>
          </div>
          <div className={styles.rightContainer}>
            <button className={styles.btn}>Contact Me</button>
            <span className={styles.viewp}>View Project</span>
            <ScrollAnimation />
          </div>
        </div>

        <div className={styles.lowerContainer}>
          <div className={styles.upperBox}>
            <Link href="/caseStudy">
              <CardComponent
                imageUrl="/HumphreyIcons/newHabitsCover.png"
                title="New Habits"
                description="New Habits is a app that helps people identify drug addiction for themselves or their loved ones. 
                It will ask multiple questions to determine if the user is addicted to drugs and the severity level."
              />
            </Link>
            <Link href="#">
              <CardComponent
                imageUrl="/images/psproject.jpg"
                title="Project 2"
                description="Description of project"
              />
            </Link>
          </div>

          <div className={styles.lowerBox}>
            <Link href="#">
              <CardComponent
                imageUrl="/images/psproject.jpg"
                title="Project 3"
                description="Description of project"
              />
            </Link>
            <Link href="#">
              <CardComponent
                imageUrl="/images/psproject.jpg"
                title="Project 4"
                description="Description of project"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
