import React from 'react'

const SingleRow=(props)=>{
    const {problem, selectProblem}=props;
    const {id, author, name, year}=problem;
    return(
        <tr onClick={selectProblem(id)} key={id} >
        <th>{id}</th>
        <th>{author}</th>
        <th>{name}</th>
        <th>{year}</th>
        <form method='POST' action={`/problems/${id}?_method=DELETE`}>
            <button>x</button>
        </form>
        </tr>
    )

}
// {`/problems/${id}?_method=DELETE`}
export default SingleRow