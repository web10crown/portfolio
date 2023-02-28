import styles from "@/styles/components/Navbar.module.css";
import {
  LinkedIn,
  Search,
  Home,
  HomeRepairService,
  GitHub,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <Link href="https://www.linkedin.com/in/neeraj-rana-387a53259/">
              <LinkedIn className={styles.linkedin} />
            </Link>
            <div className={styles.find}>
              <input type="text" placeholder="Search" />
              <Search className={styles.search} />
            </div>
          </div>

          <div className={styles.right}>
            <Link
              href="/"
              style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            >
              <div className={styles.links}>
                <Home className={styles.icons} />
                HOME
              </div>
            </Link>
            <Link
              href="/projects"
              style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            >
              <div className={styles.links}>
                <HomeRepairService className={styles.icons} />
                PROJECTS
              </div>
            </Link>
            <Link
              href="https://github.com/web10crown/"
              style={{ textDecoration: "none", color: "rgb(98, 98, 98)" }}
            >
              <div className={styles.links}>
                <GitHub className={styles.icons} />
                GITHUB
              </div>
            </Link>
            <div className={styles.avatar}>
              <Link href="/">
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.avatarImg}
                    src="/avatar/profile.jpeg"
                    alt="avatar"
                    sizes="auto"
                    fill
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
