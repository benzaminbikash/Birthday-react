import React from 'react'

const Detail = ({ Data }) => {
    return (
        <>
            {Data.map((items) => {
                const { image, name, age } = items
                return (
                    <div className='flex-direction'>
                        <div>
                            <img src={image} alt="randomImages" />
                        </div>
                        <div className='details'>
                            <h5>{name}</h5>
                            <p>{age}</p>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default Detail