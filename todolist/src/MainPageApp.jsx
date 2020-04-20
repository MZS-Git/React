import React, { Component } from 'react';
import "./MainPageApp.css"
import TaskList from "./TaskList";


class MainPageApp extends Component {
    
    state = { 
        items:[],
        task :{
            text:'',
            key:''
        }
     }


    handleInputEvent = (event)=>{
        this.setState({
            task:{
                text: event.target.value,
                key: Date.now()

            }
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const updatedStateItem = this.state.task;
        if(updatedStateItem.text!==''){
             const newItems = [...this.state.items , updatedStateItem]
             this.setState({
                 items:newItems,
                 task:{
                     text:'',
                     key:''

                 }
             })
        }
        console.log(this.state.items)

    }

    handleDelete = (selectedKey)=>{
        const filterItems = this.state.items.filter(stateItems=>
            selectedKey!==stateItems.key
        )
        this.setState({
            items:filterItems
        })

        

    }
    
    render() { 
        return (
            <div id="formBackground">
                <form id="formFields">
                    <input id="inputText" value = {this.state.task.text} type="text" placeholder="Enter Todo tasks here...!" onChange={this.handleInputEvent}/>
                    <button id="addItemBtn" type="button" onClick={this.handleSubmit}>Add Task</button>
                </form>
                <TaskList taskItems = {this.state.items}
                    callDelete = {this.handleDelete}
                ></TaskList>
            </div> 
            
        );
        
    }
    
}
 
export default MainPageApp;