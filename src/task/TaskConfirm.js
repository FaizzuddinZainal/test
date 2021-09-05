import React, { Component } from 'react'

class TaskConfirm extends Component {
    constructor(props) {
        super(props)

        const task = props.location.state.task
        this.state = {
            
            task: task
        }
    }

    componentDidMount() {

        this.documentData = JSON.parse(localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks')) {
            this.setState({
                tasks: this.documentData
                

            })
        } else {
            this.setState({
                tasks: []
               
            })
        }

    }


    handleBack = (event) => {

        this.props.history.push('/task/add')

    }

    handleSubmit = (event) => {

        this.setState({
            tasks: [...this.state.tasks, this.state.task]
        }, () => {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
            this.props.history.push('/task/listing')
        })

    }
    

    render() {
        const { task } = this.state
        return (
            <div>
                <h1>Task Confirm</h1>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>ID</p>
                                    <p>{task.id}</p>
                                </div>
                                <div>
                                    <p>Project ID</p>
                                    <p>{task.projectId}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>User</p>
                                    <p>{task.user}</p>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Title</p>
                                    <p>{task.title}</p>
                                </div>
                                <div>
                                    <p>Slug</p>
                                    <p>{task.slug}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Description</p>
                                    <p>{task.desc}</p>
                                </div>
                                <div>
                                    <p>Due Date</p>
                                    <p>{task.dueDate}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Status</p>
                                    <p>{task.status}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={this.handleBack}>Back</button>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default TaskConfirm