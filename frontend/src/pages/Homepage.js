import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const { loading, error, data} = useFetch('http://localhost:1337/api/reviews')

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error:(</p>

    console.log(data)
    console.log("Hallo")

  return (
    <div>
        {data.data.map((review) => (
            <div key={review.id} className="review-card">
                <div className='rating'>{data.data.review.rating}</div>
                <h2>{data.data.review.title}</h2>

                <small>Console list</small>

                <p>{data.data.review.body}</p>
                <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
        ))};
    </div>
  )
}



