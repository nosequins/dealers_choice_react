import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PageList from './PageList'
import SingleProblem from './SingleProblem'
import axios from 'axios';

export default class App extends Component{
    constructor (){
        super();
        this.state={
            problems:[],
            
            selectedProblem:{}
        }
        this.selectProblem= this.selectProblem.bind(this)
        
    }
    async componentDidMount(){
        const problems= (await axios.get('/problems')).data
        this.setState({problems});
    }

    async selectProblem(id){
        try{
            const selectedProblem= (await axios.get(`/problems/id`)).data
            this.setState({selectedProblem})
        }catch(err){
            console.log(err)
        }
    }

    render(){
        const {problems, selectedProblem}= this.state;
        return(
            <div>
                <div id= 'createproblem'>
                    <h1>Create a Problem</h1>
                    <form method ='POST' action='/problems' id='formProblem'>
                        <input name='author' placeholder='enter author name'></input>
                        <input name='name' placeholder='enter the name of the problem'></input>
                        <input name='description' placeholder='enter description of the problem'></input>
                        <input name='year' placeholder='enter the year the problem year'></input>
                        <input name='visual' placeholder='enter a url of a visual representation of the problem'></input>
                        <button>Create</button>
                    </form>
                </div>
                <div id='list'>
                    {selectedProblem.id? (<SingleProblem selectedProblem={selectedProblem}/>):(<PageList problems={problems}  selectProblem={this.selectProblem}/>)}
                </div>
            </div>
            
        )


        
    }
}
ReactDOM.render(<App />, document.getElementById('page'));