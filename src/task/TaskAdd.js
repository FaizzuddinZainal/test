import React, { Component } from 'react'

class TaskAdd extends Component {
    constructor() {
        super()
        this.state = {
            projectId: '',
            id: '',
            user: '',
            title: '',
            status: 'To Do',
            projects:[]
        }
    }

    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('projects'));
        if (localStorage.getItem('projects')) {
            this.setState({
                projects: this.documentData,
                projectId: this.documentData[0].id
            })
        } else {
            this.setState({
                //     title: this.documentData.title,
                //    description: this.documentData.description,
                //    price: this.documentData.price

            })
        }

        
    }

    handleFieldChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleAdd = () => {
        this.props.history.push("/task/confirm", { task: this.state })
    }

    handleBack = (event) => {

        this.props.history.push('/task/listing')

    }

    render() {
        const { projects } = this.state
        return (
            <div>
                <h1>Add New Task</h1>

                <div>
                    <div>
                        <div>Please Fill In Information</div>
                        <div>
                            <form>
                                

                                <div>
                                    <label>Project Id</label>
                                    <select id="type"
                                        name="projectId"
                                        onChange={this.handleFieldChange}
                                        value={this.state.projectId}
                                    >
                                        {this.state.projects.map(project =>
                                            <option value={project.id}>{project.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Id</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='id'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">User</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='user'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Title</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='title'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Slug</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='slug'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Description</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='desc'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Due Date</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='dueDate'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select id="status"
                                        name="status"
                                        onChange={this.handleFieldChange}
                                        value={this.state.status}
                                    >
                                        <option value="To Do">To Do</option>
                                        <option value="Doing">Doing</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </div>
                                <button type="button" onClick={this.handleBack}>Back</button>
                                <button onClick={this.handleAdd}>Add</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskAdd