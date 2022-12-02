import styles from '/styles/Models.module.css'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    const paths = data.map(objectModel => {
       return {
        params: {id: objectModel.id}
       } 
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();

    return {
        props: { objectModel: data}
    }
}


const Details =  ( {objectModel} ) => {
return (
    <div className={styles.singleModel}>
        <h1>{objectModel.name}</h1>
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
            <p>{objectModel.desc}</p>
        </div>
    </div>
)
}

export default Details;