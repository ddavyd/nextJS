import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
     
    
    <div >
      
     <h1 className={`${styles.title} font-effect-fire-animation`}>MAIN PAGE</h1>

        <div className={styles.mainImage}>
            <Image src='/nextjs.png' alt='nextJS'  width={600} height={150}  />
        </div>
        <p className={styles.text}>Привет! Это мой первый тестовый проект, созданный с использованием фреймворка Next.JS.</p>
        <p className={styles.text}>Я попробовал изучуить его на минимально базовом уровне и предлагаю Вам оценить мою работу.</p> 
        <p className={styles.text}>Так же я изучил рекомендованные мне темы (BOM, DOM, OM) и решил создать данный проект на Next.JS про данные темы дабы закрепить материал еще лучше.</p> 
        <Link href='/objectModels' className={styles.btn}>Object Models</Link>
    </div>
  )
}
