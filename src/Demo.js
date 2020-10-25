import React from 'react'

function Demo(){
    var x=10
    function test(){
        alert (/*'test funtion'*/x++)
    }
    return (
        <div>
            <button onClick={test/*()=>{alert('welcome')}*/}>
                Click
            </button>
        </div>
    )
}

export default Demo;