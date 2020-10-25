import React, { Component } from 'react';

class Demolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ["apple", "orange", "pine apple", "grapes", "banana", "chacka"],
            users: [{ name: 'shibili', age: 22 },
            { name: 'sanjay', age: 24 },
            { name: 'sandy', age: 23 },
            { name: 'suku', age: 22 }
            ]
        };
    }


    render() {

        // var lis=this.state.items.map((item,key)=>{
        //     return <li>{item}</li>

        // })

        return (
            <div>
                <p>{this.state.items.map((item, key) => <li key={this.key}>{item}</li>)}</p>
                <table>
                    <th>Name</th>
                    <th>Age</th>
                    <tr>
                        {
                            this.state.users.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </tr>
                </table>
            </div>
        )
    }

}


export default Demolist 