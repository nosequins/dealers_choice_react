import React from 'react'

const SingleProblem=(props)=>{
    const {SingleProblem}=props;
    const {id, author, name, description, year, visual}=problem;
    return(
        <div id='theProblem'>
            <div>{id}| {author}</div>
            <div>{name}</div>
            <p>{description}</p>
            <div>{year}</div>
            <img src={visual}/>
        </div>
    )
}
export default SingleProblem