import React from "react";
import styles from "../styles/About.module.css";
import Carousel from "../components/carousel";
import Link from "next/dist/client/link";

export default function About() {
	return (
		<div className={styles.container}>
			<header  className={styles.header}>
				<Link href="/" >
					HOME
				</Link>{" "}
			</header>
			<header  className={styles.header} >
				<Link href="/employeelist">
					EMPLOYEES
				</Link>{" "}
			</header>
			<header  className={styles.header} >
				<Link href="/topinfo">
					TOP INFO
				</Link>{" "}
			</header>
			<h2 className={styles.title}>About Page</h2>
			<Carousel />
			<h1 className={styles.h1}>What needs work</h1>
            <br/>
            <h1 className={styles.subject}>Diversity</h1>
            <h3 className={styles.description}>A diverse culture creates communities that celebrate differences. For this reason, leading technology companies like GoDaddy encourage their employees to celebrate their unique qualities.</h3>

            <br/>
            <h1 className={styles.subject}>Meaningful Interactions</h1>
            <h3 className={styles.description}>The core value of creating meaningful interactions boosts employee engagement. As an employee, working under a leader that proactively interacts with their team means a more open flow of ideas and a smooth conflict resolution process.</h3>

            <br/>
            <h1 className={styles.subject}>Integrity</h1>
            <h3 className={styles.description}>Trust amongst employees and customers is essential to a company’s success. The tech industry is saturated with confidential information. Great technology companies must do business with integrity to gain their customers respect and trust..</h3>

            <br/>
            <h1 className={styles.subject}>Personal Development</h1>
            <h3 className={styles.description}>Professional growth cannot happen without personal development. Development is one of the top core values for technology companies.</h3>

            <br/>
            <h1 className={styles.subject}>Courage </h1>
            <h3 className={styles.description}>The field of technology is about building creative, new applications that change the way the world uses technology. A task this big needs support from a company that values courageous pursuits.</h3>

			<br/>
            <h1 className={styles.subject}>Pure Excellence</h1>
            <h3 className={styles.description}>The value of pursuing excellence sets the bar high and encourages employees to strive for excellence in all they do.</h3>
		</div>
	);
}
