import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/Models.module.css'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    return {
        props:{ objectModels: data }
    }
}

const ObjectModels =  ( {objectModels} ) => {
    return (
        <div>
            <h1>Object Models</h1>
           {objectModels.map(objectModel =>{
            return (
                <Link href={`/objectModels/${objectModel.id}`} key={objectModel.id} className={styles.modelCard}>
                    
                        <div className={styles.imageContainer}>
                            <Image
                                src={`${objectModel.image}`}
                                alt={`${objectModel.name}`}
                                width="150"
                                height="150"
                                Layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <h3>{ objectModel.name }</h3>
                            <p>{objectModel.desc}</p>
                        </div>                   
                </Link>
            )
           })}
        </div>
    )
    }
    
    export default ObjectModels;