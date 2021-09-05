import React, { Component } from 'react'

class ProjectEdit extends Component {
    constructor(props) {
        super(props)

        const project = props.location.state.project

        console.log(project)
        this.state = project
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
        var projects = []
        this.documentData = JSON.parse(localStorage.getItem('projects'));
        if (localStorage.getItem('projects')) {
            projects = this.documentData.filter(x => x.id != this.state.id)
            this.setState({
                projects: [...projects, this.state]
            }, () => {
                localStorage.setItem('projects', JSON.stringify(this.state.projects));
                this.props.history.push('/project/listing')
            })
        } else {

        }

    }

    handleBack = (event) => {

        this.props.history.push('/project/listing')

    }

    render() {
        return (
            <div>
                <h1>Edit Project</h1>

                <div>
                    <div>
                        <div>
                            <form>
                                

                                <div>
                                    <p>ID</p>
                                    <p>{this.state.id}</p>
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Project Name</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleFieldChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Project Slug</label>
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
                                    <label htmlFor="exampleFormControlInput1">Project Description</label>
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
                                    <label htmlFor="exampleFormControlInput1">Project Manager</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='manager'
                                        value={this.state.manager}
                                        onChange={this.handleFieldChange}
                                    />
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