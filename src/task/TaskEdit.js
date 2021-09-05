import React, { Component } from 'react'

class ProjectEdit extends Component {
    constructor(props) {
        super(props)

        const task = props.location.state.task
        console.log(task)
        this.state = task
    }

    componentDidMount() {
      
    }

    handleFieldChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleEdit = () => {
        var tasks = []
        this.documentData = JSON.parse(localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks')) {
            tasks = this.documentData.filter(x => x.id != this.state.id)
            this.setState({
                tasks: [...tasks, this.state]
            }, () => {
                localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
                this.props.history.push('/task/listing')
            })
        } else {

        }
    }

    handleBack = (event) => {
        this.props.history.push('/task/listing')
    }

    render() {
        return (
            <div>
                <h1>Edit Task</h1>

                <div>
                    <div>
                        <div>
                            <form>
                                

                                <div>
                                    <p>ID</p>
                                    <p>{this.state.id}</p>
                                </div>
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
                                    <label htmlFor="exampleFormControlInput1">User</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='user'
                                        value={this.state.user}
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
                                        value={this.state.title}
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
                                        value={this.state.slug}
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
                                        value={this.state.desc}
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
                                        value={this.state.dueDate}
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
                                <button onClick={this.handleEdit}>Submit</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectEdit