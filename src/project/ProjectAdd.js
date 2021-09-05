import React, { Component } from 'react'

class ProjectAdd extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            slug: '',
            desc: '',
            manager: '',
            tasks: []
        }
    }

    componentDidMount() {

    }

    handleFieldChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd = () => {
        this.props.history.push("/project/confirm", { project: this.state })
    }

    handleBack = (event) => {

        this.props.history.push('/project/listing')
    }

    render() {
        const { projects } = this.state
        return (
            <div>
                <h1>Add New Project</h1>

                <div>
                    <div>
                        <div>Please Fill In Information</div>
                        <div>
                            <form>
                                <div>
                                    <label htmlFor="exampleFormControlInput1">Id</label>
                                    <input
                                        id='name'
                                        type='text'
                                        // ={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        class="form-control"
                                        name='id'
                                        value={this.state.id}
                                        onChange={this.handleFieldChange}
                                    />
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
                                <button onClick={this.handleAdd}>Add</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectAdd