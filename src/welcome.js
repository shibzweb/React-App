import React ,{Component} from 'react'




class Welcome extends Component{
        constructor(props){
            super(props);
        }

    render(){
        return(
            <div>
                <p>This is a class component</p>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Welcome ;