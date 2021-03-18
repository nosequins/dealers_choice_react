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
            <img src={visual} />
            {/*the more modern way to do this is to create a function
            that you use when the form is submitted.
            this would look like <form onSubmit={() => someFunction(id)}/>
            and in that function, use axios to make a delete request to  the server
            instead of using method override*/}
            <form method='POST' action={`/problems/${id}?_method=DELETE`}>
            <button>x</button>
            </form>
        </div>
    )
}
export default SingleProblem
