import styles from "@/styles/pages/Projects.module.css";
import Image from "next/image";
import { Devices, GitHub } from "@mui/icons-material";
import Link from "next/link";
const Projects = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.project}>
						<div className={styles.left}>
							<div className={styles.imgContainer}>
								<Image
									src="/projects/burger.jpeg"
									fill
									alt="Image"
									className={styles.image}
								/>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.info}>
								<h2>NEXTJS PROJECT</h2>
								<h4>BurgerCrown | India</h4>
								<p>
									Burger crown project based on Burger-King
									theme , written in javascript ,framework
									used NextJs. Db : mongoDb
								</p>
								<h2 style={{ color: "rgb(98,98,98)" }}>
									Source Links :
								</h2>
								<div className={styles.links}>
									<Link
										href="https://burger-crown.vercel.app"
										style={{ color: "rgb(98,98,98)" }}
									>
										<Devices className={styles.icon} />
									</Link>
									<Link
										href="https://github.com/web10crown/burger-crown"
										style={{ color: "rgb(98,98,98)" }}
									>
										<GitHub className={styles.icon} />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.project}>
						<div className={styles.left}>
							<div className={styles.imgContainer}>
								<Image
									src="/projects/shop.jpeg"
									fill
									alt="Image"
									className={styles.image}
								/>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.info}>
								<h2>MERN stack PROJECT</h2>
								<h4>CrownShop | India</h4>
								<p>
									crown Shop project based on e-comm website
									theme ,with Login system signup system,
									written in javascript ,framework used
									ReactJs NodeJs Express. Db : mongoDb
								</p>
								<h2 style={{ color: "rgb(98,98,98)" }}>
									Source Links :
								</h2>
								<div className={styles.links}>
									<Link
										href="https://crown-shop.pages.dev/"
										style={{ color: "rgb(98,98,98)" }}
									>
										<Devices className={styles.icon} />
									</Link>
									<Link
										href="https://github.com/web10crown/crown-shop"
										style={{ color: "rgb(98,98,98)" }}
									>
										<GitHub className={styles.icon} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Projects;
