
const Reviews = ({ reviews }) => {
    
    return (
        <div>
            <h1>ОТЗОВЫ С ПОМОЩЬЮ getServerSideProps </h1>
            <div className='reviews'>
                { !!reviews.length && reviews.slice(0,30).map(res => {
                    return (
                        <div key={res.id} className='review'>
                            {res.id}{' '}
                            {`${res.body.slice(0,90)}...`}
                        </div>
                    )
                })}
            </div>        
        </div>
    )
}

export async function getServerSideProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0,30)
        }
    }
}

export default Reviews;