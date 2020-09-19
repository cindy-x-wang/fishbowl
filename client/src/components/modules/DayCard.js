import React, { Component } from "react";
import {Task, TaskInput} from './Task.js';
import './DayCard.css';


class DayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        day: 'Monday', 
        tasks: [],
        taskName: 'do psets'
    };

    this.addTask = this.addTask.bind(this);
  }


  addTask() {
    let newTasks = this.state.tasks.concat(<Task taskName={this.state.taskName}/>);
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <>
        <div className='DayCard-container'>
            <div className='DayCard-addTask' onClick={this.addTask}> + </div>
            <div> {this.state.day} </div>
            <hr/>
            {this.state.tasks}
            <TaskInput/>

        </div>

      </>
    );
  }
}

export default DayCard;
