import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Navbar"

class ProjectListing extends Component {
    documentData
    constructor() {
        super()
        this.state = {
            projects: [],
            index: 1,
            loading: true
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
                

            })
        }

    }


    handleAdd = () => {
        this.props.history.push("/project/add")
    }

    render() {
        const { projects } = this.state
        return (
            <div>
                <Navbar />
                <h1>Project Listing</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Project ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length != 0 &&
                            projects.map(project => (
                                <tr key={project.id}>
                                    <th scope="row">{this.state.index++}</th>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: '/project/detail',
                                                id: project.id,
                                                item: {
                                                    okay: 123
                                                },
                                                key: project.id,
                                            }}
                                        >
                                            {project.id}
                                        </Link>
                                    </td>
                                    <td>{project.id}</td>
                                </tr>
                            ))}
                        {this.state.loading ?
                            <tr>
                                <td align="center" colSpan={5}>

                                </td>
                            </tr>
                            :
                            <tr>
                                {projects.length == 0 && <td align="center" colSpan={5}>No record found</td>}
                            </tr>
                        }
                    </tbody>
                </table>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default ProjectListing