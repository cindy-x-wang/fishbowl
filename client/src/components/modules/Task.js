import React, { Component } from "react";
import './Task.css';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
        completed: false,
    };

    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    this.setState({completed: !this.state.completed});
  }


  render() {
    return (
      <>
        <div className='Task-container'>
            <div className='Task-checkbox' onClick={this.completeTask} style={this.state.completed ? {background: '#d4d4d4'} : {background: '#fff'}}> </div>
            <div className='Task-task'> {this.props.taskName} </div>
        </div>

      </>
    );
  }
}


class TaskInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          completed: false,
      };
  
      this.completeTask = this.completeTask.bind(this);
    }
  
    completeTask() {
      this.setState({completed: !this.state.completed});
    }
  
  
    render() {
      return (
        <>
          <div className='Task-container'>
              <div className='Task-checkbox' onClick={this.completeTask} style={this.state.completed ? {background: '#d4d4d4'} : {background: '#fff'}}> </div>
              <input className='Task-task' />
          </div>
  
        </>
      );
    }
  }

export {Task, TaskInput};
