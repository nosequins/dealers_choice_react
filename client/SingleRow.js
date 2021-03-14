import React from 'react'

const SingleRow=(props)=>{
    const {problem, selectProblem}=props;
    const {id, author, name, year}=problem;
    return(
        <tr onClick={()=>{selectProblem(id)}} key={id} >
        <th>{id}</th>
        <th>{author}</th>
        <th>{name}</th>
        <th>{year}</th>
        </tr>
    )

}

export default SingleRow