import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


const NotFoundPage = () => {
    const router = useRouter();

   useEffect(() => {
    setTimeout(()=>{
        router.push('/');
    }, 3000);
   }, []);




    return (
        <div className='not-found'>
            <h1>УПС...</h1>
            <h2>Что-то пошло не так :(</h2>
            <h2>Я автоматически перейду на главную страницу через 3 секунды)</h2>
        </div>
    )
}


export default NotFoundPage;