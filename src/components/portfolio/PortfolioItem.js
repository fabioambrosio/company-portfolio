import React from 'react'

const PortfolioItem = props =>{
    return(
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src={props.content.image} alt='' width='300' height='200' />
                <p><strong>{props.content.title}</strong></p>
                <p>{props.content.description}</p>
            </div>
        </div>
    )
}

export default PortfolioItem    