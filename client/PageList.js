import React from 'react'
import SingleRow from './SingleRow'

const PageList =(props)=>{
    const {problems, selectProblem}=props
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>author</th>
                    <th>name</th>
                    <th>year</th>
                </tr>
            </thead>
            <tbody>
                    {problems.map(problem=>(
                        <SingleRow
                        problem={problem}
                        key={problem.id}
                        selectProblem={selectProblem}

                        />
                    ))}
            </tbody>

        </table>

    )



}
export default PageList