import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const screen = 'detail'

class ProjectDetail extends Component {
    constructor() {
        super()
        this.state = {
            project: {
                id: '',
                name: '',
                slug: '',
                desc: '',
                manager: '',
                tasks: []
            },
            tasks: []
        }
    }

    componentDidMount() {
        const id = this.props.location.id

        this.documentData = JSON.parse(localStorage.getItem('projects'));
        if (localStorage.getItem('projects')) {
            this.setState({
                project: this.documentData.find(x => x.id === id)
            },
                () => {
                    console.log(this.state.project)
                })
        } else {
            this.setState({
                

            })
        }

        this.documentData = JSON.parse(localStorage.getItem('tasks'));
        if (localStorage.getItem('tasks')) {
            this.setState({
                tasks: this.documentData
            })
        } else {
            this.setState({
                

            })
        }
    }

    handleEdit = () => {
        this.props.history.push("/project/edit", { project: this.state.project })
    }

    handleDelete = () => {
        const id = this.props.location.id
        var projects = []
        this.documentData = JSON.parse(localStorage.getItem('projects'));
        if (localStorage.getItem('projects')) {
            projects = this.documentData.filter(x => x.id != id)
            this.setState({
                projects: [...projects]
            }, () => {
                localStorage.setItem('projects', JSON.stringify(this.state.projects));
                this.props.history.push('/project/listing')
            })
        } else {

        }
    }

    handleBack = () => {
        this.props.history.push("/project/listing")
    }



    render() {
        const { project } = this.state
        const { tasks } = this.state
        return (
            <div >
                <h1>Project Detail</h1>
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
                    <div>
                        <h1>List of Task</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Project ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.length != 0 &&
                                    tasks.map(task => (
                                        task.projectId == project.id &&
                                        <tr key={task.id}>
                                            <td>
                                                <Link
                                                    to={{
                                                        pathname: '/task/detail',
                                                        id: task.id,
                                                        item: {
                                                            okay: 123
                                                        },
                                                        key: task.id,
                                                    }}
                                                >
                                                    {task.id}
                                                </Link>
                                            </td>
                                            <td>{task.id}</td>
                                            <td>{task.projectId}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default ProjectDetail