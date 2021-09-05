import React, { Component } from 'react'

const screen = 'detail'

class TaskDetail extends Component {
    constructor() {
        super()
        this.state = {
            task: {}
        }
    }

    componentDidMount() {

        const id = this.props.location.id

        this.documentData = JSON.parse(localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks')) {
            this.setState({
                task: this.documentData.find(x => x.id === id)
            },
                () => {
                    console.log(this.state.task)
                })
        } else {
            this.setState({
               

            })
        }

    }

    handleEdit = () => {
        this.props.history.push("/task/edit", { task: this.state.task })
    }

    handleDelete = () => {
        const id = this.props.location.id
        var tasks = []
        this.documentData = JSON.parse(localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks')) {
            tasks = this.documentData.filter(x => x.id != id)
            this.setState({
                tasks: [...tasks]
            }, () => {
                localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
                this.props.history.push('/task/listing')
            })
        } else {

        }
    }

    handleBack = () => {
        this.props.history.push("/task/listing")
    }



    render() {
        const { task } = this.state
        return (
            <div >
                <h1>Task Detail</h1>
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
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default TaskDetail