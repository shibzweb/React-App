import React from 'react' ;
import './contact.css' ;

function Contact(props){
    var nm=props.name.toUpperCase();
   // alert (typeof props.id)
   var st={color:"red",padding:10,border:"solid 1px gray"}
    return(
        <div className="test" style={st}/*style={{color:"red",padding:10,border:"solid 1px gray"}}*/>
            <p>{props.id.age}</p>
            <h1>{nm} contact</h1>
            <label>Email id</label>
            <input type="text" />
            <br/>
            <label>Message</label>
            <textarea/>
            <button>Send</button>
            <p>{props.id[1]}</p>
        </div>
    )
}

export default Contact ;