function TaskItem(props) {
    return <div>Task Name: {props.item.task}&nbsp;&nbsp; Completed Status: {props.item.completed?"Complete":"Not Complete"}&nbsp;&nbsp; Assign to: {props.item.assignTo}&nbsp;&nbsp;&nbsp; <button id={"btn"+props.slid} style={{color:"red"}} onClick={props.deleteFunc}>Delete Task</button>&nbsp;&nbsp; <button id={"tgl"+props.slid} style={{color:"green"}} onClick={props.tglFunc}>Toggle Task</button>

    </div>;
  }
  
  export default TaskItem;