import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class todo extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            items: [
                {
                    id: uuidv4(),
                    task: "Estudiar Web",
                    complete: false,
                },
                {
                    id: uuidv4(),
                    task: "Hacer Tarea",
                    complete: false,
                },
                {
                    id: uuidv4(),
                    task: "No ver One Piece",
                    complete: true,
                },
            ],
        }
    }
    render() {
        
        return (
            console.log(this.state.items),
            <div className="Todo">
                <h1>Nueva Tarea</h1>
            </div>
        );
    }
}

export default todo;