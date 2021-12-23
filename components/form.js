import React from "react";
import { Card } from "react-bootstrap";
import styles from "../styles/Card.module.css"


export default function Form() {
	return (
		<div>

			<div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body className={styles.body}>
						<Card.Title className={styles.name}>Justin Bieber</Card.Title>
						<Card.Subtitle className={styles.subtitle}>
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text className={styles.progress}>He sucks so bad but its ok I know he's trying</Card.Text>
                        <Card.Text className={styles.birthday}>DOB: 03-01-1994</Card.Text>
                        <Card.Text className={styles.horoscope}>Sign: Pisces</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body className={styles.body}>
						<Card.Title className={styles.name}>Enrique Velasquez</Card.Title>
						<Card.Subtitle className={styles.subtitle}>
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text className={styles.progress}>He is so cute and hardworking i just want to marry him</Card.Text>
                        <Card.Text className={styles.birthday}>DOB: 05-27-1997</Card.Text>
                        <Card.Text className={styles.horoscope}>Sign: Gemini</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body className={styles.body}>
						<Card.Title className={styles.name}>Faith White</Card.Title>
						<Card.Subtitle className={styles.subtitle}>
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text className={styles.progress}>She is my top 3 very smart and needs a raise</Card.Text>
                        <Card.Text className={styles.birthday}>DOB: 10-17-2000</Card.Text>
                        <Card.Text className={styles.horoscope}>Sign: Libra</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body className={styles.body}>
						<Card.Title className={styles.name}>John Doe</Card.Title>
						<Card.Subtitle className={styles.subtitle}>
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text className={styles.progress}>He is so stupid and needs to be fired</Card.Text>
                        <Card.Text className={styles.birthday}>DOB: 11-21-1993</Card.Text>
                        <Card.Text className={styles.horoscope}>Sign: Scorpio</Card.Text>
					</Card.Body>
				</Card>
			</div>

			<div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body className={styles.body}>
						<Card.Title className={styles.name}>Beyonce</Card.Title>
						<Card.Subtitle className={styles.subtitle}>
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text className={styles.progress}>Shes so perfect i wish she was my mom</Card.Text>
                        <Card.Text className={styles.birthday}>DOB: 09-04-1981</Card.Text>
                        <Card.Text className={styles.horoscope}>Sign: Virgo</Card.Text>
					</Card.Body>
				</Card>
			</div>

            <div className={styles.card}>
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>Kerlin</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							WORK PROGRESS
						</Card.Subtitle>
						<Card.Text>He sucks so bad but its ok I know he's trying</Card.Text>
						<Card.Link href="#">Card Link</Card.Link>
						<Card.Link href="#">Another Link</Card.Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}
