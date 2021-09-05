import React, { Component } from 'react'

class ProjectConfirm extends Component {
    constructor(props) {
        super(props)

        const project = props.location.state.project
        this.state = {
            project: project
        }
    }

    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('projects'));
        if (localStorage.getItem('projects')) {
            this.setState({
                projects: this.documentData

            })
        } else {
            this.setState({
                projects: []
            })
        }

    }


    handleBack = (event) => {

        this.props.history.push('/project/add')

    }

    handleSubmit = (event) => {
        this.setState({
            projects: [...this.state.projects, this.state.project]
        }, () => {
            localStorage.setItem('projects', JSON.stringify(this.state.projects));
            this.props.history.push('/project/listing')
        })

    }


    render() {
        const { project } = this.state
        return (
            <div>
                <h1>Project Confirm</h1>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>ID</p>
                                    <p>{project.id}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>Name</p>
                                    <p>{project.name}</p>
                                </div>
                                <div>
                                    <p>Slug</p>
                                    <p>{project.slug}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Description</p>
                                    <p>{project.desc}</p>
                                </div>
                                <div>
                                    <p>Project Manager</p>
                                    <p>{project.manager}</p>
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

export default ProjectConfirm