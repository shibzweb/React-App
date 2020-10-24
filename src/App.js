import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact'

function App() {

  return(
    <div>
<Contact st={{color:"red"}} id={{name:"shibili" ,age:22}} name="teacher" />
<p>breaking line</p>
<Contact st={{color:"green"}} id={{name:"sanjay" ,age:23}} name="student" />
<p>breaking line</p>
<Contact st={{color:"yellow"}} id={["shibili","sanjay"]} name="Array passing in props" />
    </div>

  )


}

export default App;
