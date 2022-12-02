import Link from 'next/link';
import { AiOutlineLaptop } from 'react-icons/ai';

const Header = () => {
    return (
        <header>
            <div>
                <AiOutlineLaptop />
            </div>
            <nav>
                <Link href='/'><a>Главная страница</a> </Link>
               <Link href='/eventloop'><a>Event Loop</a> </Link>
               <Link href='/objectModels'><a>Object Models</a> </Link>
               <Link href='/reviews'><a>getServerSideProps</a> </Link>
               <Link href='/about'><a>О нас</a> </Link>
            </nav>
        </header>
    )
}

export default Header;