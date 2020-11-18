import React, { Component } from 'react'
import "../index.css"
export class Components extends Component {
    state={list:[],dlist:[]}
 saved=(e)=> {
        e.preventDefault();
        let a=e.target.elements.task.value
        console.log(a)  
        this.setState({list:[...this.state.list,a],dlist:[...this.state.list,a]})
        e.target.elements.task.value=""
    }
 delete=(index)=>
{
    let a=[...this.state.list]
    console.log(index)
    a.splice(index,1)
    this.setState({list:[...a],dlist:[...a]})

    
}
filters=(e)=>
{
    let a=[...this.state.list]
let f=e.target.value
let b= a.filter(list=>list.includes(f))
this.setState({dlist:[...b]})

}

    render() {

       return (
            <div  >
           <h1 className="Welcome" style={{fontSize:"30px"}}>Welcome to ToDo</h1>  
                       <form onSubmit={this.saved} >
           <label style={{color:"white",fontSize:"20px"}} >Tasks  </label>
               <input style={{fontSize:"20px"}} type=" text" onChange={this.filters} name="task" placeholder="Enter Task"></input>
              <br></br>
              <input   type="Submit" value="Save"  name="Submit"></input>
               </form> 
               <div style={{color:"white"}}><ul>
                   
               {
                   this.state.dlist.map((list,index)=>{
                       return(
                       <li key={index}>{list} <input type="Button" value="Delete" name={index} onClick={()=>this.delete(index)} ></input></li>
                    ) })


               }     </ul> </div>
                   
            </div>
        )
    }
}

export default Components
