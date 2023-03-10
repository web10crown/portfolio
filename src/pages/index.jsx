import Image from "next/image";
import styles from "@/styles/pages/Home.module.css";
import { GitHub, Devices, HomeRepairService } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.profile}>
              <div className={styles.backgroundImg}>
                <Image
                  src="/avatar/background.jpeg"
                  alt="background"
                  fill
                  sizes="auto"
                  className={styles.profileBackground}
                />
              </div>

              <div className={styles.avatar}>
                <div className={styles.avatarContainer}>
                  <Image
                    className={styles.avatarImg}
                    src="/avatar/profile.jpeg"
                    alt="profile"
                    sizes="auto"
                    fill
                  />
                </div>
              </div>
              <div className={styles.info}>
                <h1>Neeraj Rana</h1>
                <h5>nextJs || ReactJs || MERN stack</h5>
                <p>Talks about #nextJs #MERNstack #ReactJs</p>
                <p>India, Panchkula, Haryana </p>
                <div className={styles.workContainer}>
                  <Link href="https://www.linkedin.com/in/neeraj-rana-387a53259/">
                    <button className={styles.work}>Open to Work</button>
                  </Link>
                </div>
              </div>
            </div>

            {/*About section     ====================================================>*/}

            <div className={styles.aboutContainer}>
              <h2>ABOUT</h2>
              <p>
                My name is Neeraj and I am working as full-stack developer in
                the web-development industry. I am skilled in Javascript, C ,
                C++ , html , css and PHP.
              </p>
              <p>
                i have experience of building many web apps, primarily with a
                focus on MERN stack projects, few of them are pushed on my
                github account .
              </p>
              <p>
                i would like to code in javascript along with html , css but as
                per my experience i think i would love to code Back-end (nodejs,
                express) api.
              </p>
              <b>FRAMEWORKS:</b>
              <p>React js,</p>
              <p>node.js </p>
              <p>(MERN stack)</p>
              <p>Next js .</p>
              <p>Laravel.</p>

              <p> currently working on a next js project.</p>
            </div>

            {/*projects section =========================================================>*/}

            <div className={styles.projects}>
              <h2>PROJECTS</h2>
              <div className={styles.projectContainer}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImgContainer}>
                    <Image
                      className={styles.projectImg}
                      src="/projects/burger.jpeg"
                      alt="burgerCrown"
                      fill
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>BURGER-CROWN || NextJs</h4>
                    <p>
                      Prepared with nextJs, admin Login,crud opertions for admin
                    </p>
                  </div>
                  <div className={styles.projectLinks}>
                    <div className={styles.github}>
                      <Link href="https://github.com/web10crown/burger-crown">
                        <GitHub className={styles.github} />
                      </Link>
                    </div>
                    <div className={styles.device}>
                      <Link href="https://burger-crown.vercel.app">
                        <Devices className={styles.device} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.projectCard}>
                  <div className={styles.projectImgContainer}>
                    <Image
                      className={styles.projectImg}
                      src="/projects/shop.jpeg"
                      alt="burgerCrown"
                      fill
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>CROWN-SHOP|| MERN stack</h4>
                    <p>Prepared with MERN stack, crud opertions,Login system</p>
                  </div>
                  <div className={styles.projectLinks}>
                    <div className={styles.github}>
                      <Link href="https://github.com/web10crown/crown-shop">
                        <GitHub className={styles.github} />
                      </Link>
                    </div>
                    <div className={styles.device}>
                      <Link href="https://crown-shop.pages.dev">
                        <Devices className={styles.device} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*right container start from here ===========================================> */}

          <div className={styles.right}>
            <div className={styles.rightWrapper}>
              <div className={styles.skillContainer}>
                <div className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <Image
                      src="/skills/nextjs.png"
                      alt="skill"
                      fill
                      sizes="auto"
                      className={styles.skillImg}
                    />
                  </div>
                  <h3>NextJs || </h3>
                  <Link
                    href="https://github.com/web10crown/burger-crown"
                    style={{ color: "rgb(98,98,98)" }}
                  >
                    <HomeRepairService
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Link>
                </div>
                <div className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <Image
                      src="/skills/reactjs.png"
                      alt="skill"
                      fill
                      sizes="auto"
                      className={styles.skillImg}
                    />
                  </div>
                  <h3>ReactJs || </h3>
                  <Link
                    href="https://github.com/web10crown/crown-shop"
                    style={{ color: "rgb(98,98,98)" }}
                  >
                    <HomeRepairService
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Link>
                </div>
                <div className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <Image
                      src="/skills/nodejs.png"
                      alt="skill"
                      fill
                      sizes="auto"
                      className={styles.skillImg}
                    />
                  </div>
                  <h3>NodeJs || </h3>
                  <Link
                    href="https://github.com/web10crown/crown-shop"
                    style={{ color: "rgb(98,98,98)" }}
                  >
                    <HomeRepairService
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Link>
                </div>
                <div className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <Image
                      src="/skills/mern.png"
                      alt="skill"
                      fill
                      sizes="auto"
                      className={styles.skillImg}
                    />
                  </div>
                  <h3>MERN stack || </h3>
                  <Link
                    href="https://github.com/web10crown/crown-shop"
                    style={{ color: "rgb(98,98,98)" }}
                  >
                    <HomeRepairService
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Link>
                </div>
                <div className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <Image
                      src="/skills/laravel.png"
                      alt="skill"
                      fill
                      sizes="auto"
                      className={styles.skillImg}
                    />
                  </div>
                  <h3>LARAVEL 8 || </h3>
                  <Link href="" style={{ color: "rgb(98,98,98)" }}>
                    <HomeRepairService
                      style={{ fontSize: "30px", cursor: "pointer" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
