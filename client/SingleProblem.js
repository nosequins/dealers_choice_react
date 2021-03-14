import React from 'react'

const SingleProblem=(props)=>{
    const {selectedProblem}=props;
    const {id, author, name, description, year, visual}=selectedProblem;
    return(
        <div id='theProblem'>
            <div>{id}| {author}</div>
            <div>{name}</div>
            <p>{description}</p>
            <div>{year}</div>
            <img src={visual}/>
            <form method='POST' action={`/problems/${id}?_method=DELETE`}>
            <button>x</button>
            </form>
        </div>
    )
}
export default SingleProblem