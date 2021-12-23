/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.title}>
        Secret Website ...
        </h2>

        <div className={styles.grid}>
          <Link href="/employeelist" >
            <a className={styles.card}>
            <h2>Employees &rarr;</h2>
            </a>
          </Link>

          <Link href="/about" >
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            </a>
          </Link>

          <Link
            href="/topinfo"
            
          >
            <a className={styles.card}>
            <h2>TOP INFO &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}

// import Link from 'next/link'

// const Index = () => {
// 	return <div>
// 		 hello world
// 		 <br/>
// 		 <Link href='/employeelist'>Employees</Link>
// 	</div>;
// };
// export default Index;
