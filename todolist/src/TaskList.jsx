import React from 'react';
import "./TaskList.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash}  from '@fortawesome/free-solid-svg-icons'

function TaskList(props)  {
    


        const items = props.taskItems;
        const itemsListToShow = items.map(item=>{
            return (
                <div id="list" key={item.key}>
                    <p id="listPara">{item.text}
                        <span id="trashIcon">
                            <FontAwesomeIcon icon={faTrash}
                            onClick={()=>props.callDelete(item.key)}></FontAwesomeIcon>
                        </span>
                    </p>
                </div>
            );
                
        })

        return(
            <div>
                {itemsListToShow}
            </div>
        );
    }


 
export default TaskList;