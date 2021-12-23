import React from "react";
import styles from '../styles/TopInfo.module.css'
import Form from "../components/form"
import Link from "next/dist/client/link";

export default function TopInfo(){
    return(
        <div className={styles.container}>
            <Form/>
            <div  className={styles.header} >
				<Link href="/">
					HOME
				</Link>{" "}
			</div>
            <div  className={styles.header} >
				<Link href="/employeelist">
					EMPLOYEES
				</Link>{" "}
			</div>
            <div  className={styles.header} >
				<Link href="/about">
					ABOUT
				</Link>{" "}
			</div>
        </div>
    )
}