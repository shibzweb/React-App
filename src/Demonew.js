import React, { Component } from 'react';
class Demonew extends Component {



 constructor(props){
     super (props);
     this.state={
         counter:0
     }
 }

textchange=(e)=>{

 this.setState({textcontent:e.target.value})
}

 Checkclicked=()=>{
this.setState((prev,props)=>(
    {enable:!prev.enable}
))

 }

    clickhandlerP = () => {
       // alert(123);
       this.setState((prev,props)=>(
           {counter:prev.counter+1}
       ))
    }

      

    clickhandlerM = () => {
        // alert(123);
        this.setState((prev,props)=>(
            {counter:prev.counter-1,
            enable:true,
            textcontent:"nothing"
            }
        ))
     }
    render() {

        return (
            <div>
                <button onClick={/*()=>{alert('clicked')}*/this.clickhandlerP}>+</button>
                <button onClick={/*()=>{alert('clicked')}*/this.clickhandlerM}>-</button>
        <p>you have clicked {this.state.counter} times</p>

        <input type="text" onChange={this.textchange} /><br/>
        <h3>{this.state.textcontent}</h3>

   <label>Enable<input type="checkbox" onClick={this.Checkclicked}/></label>
   <p>It is {this.state.enable? 'Enabled': "Disabled" } </p>

   <h1>{this.state.enable? 'Enabled': "Disabled" } </h1>
   <u>{this.state.enable? 'Enabled': "Disabled" } </u>

            </div>
        )

    }
}

export default Demonew;