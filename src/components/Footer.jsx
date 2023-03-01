import styles from "@/styles/components/Footer.module.css";
import { LinkedIn, HomeRepairService, GitHub, Send } from "@mui/icons-material";
const Footer = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.left}>
							<h3>Neeraj Rana</h3>
							<p>HOME</p>
							<p>PROJECTS</p>
							<p>LinkedIn</p>
							<p>GitHub</p>
						</div>
						<div className={styles.center}>
							<h3>Find and hire perfect designer</h3>
							<h3>for your company</h3>
							<div className={styles.feedback}>
								<input
									type="text"
									placeholder="Send Feedback"
								/>
								<Send style={{ cursor: "pointer" }} />
							</div>
						</div>
						<div className={styles.right}>
							<h3>CONTACT US</h3>
							<div className={styles.icons}>
								<LinkedIn className={styles.icon} style={{fontSize:"30px}} />
								<GitHub className={styles.icon} />
								<HomeRepairService className={styles.icon} style={{fontSize:"30px}} />
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<hr />
						<p
							style={{
								textAlign: "center",
								margin: "10px 0",
								fontWeight: "350",
							}}
						>
							All rights reserved NeerajRana© 2022-2023
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
