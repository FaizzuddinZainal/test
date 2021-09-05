import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../Navbar"

class TaskListing extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            index: 1,
            loading: true
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
                

            })
        }
        
    }


    handleAdd = () => {
        this.props.history.push("/task/add")
    }

    render() {
        const { tasks } = this.state
        return (
            <div>
                <Navbar/>
                <h1>Task Listing</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Project ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <th scope="row">{this.state.index++}</th>
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
                        {this.state.loading ?
                            <tr>
                                <td align="center" colSpan={5}>

                                </td>
                            </tr>
                            :
                            <tr>
                                {tasks.length == 0 && <td align="center" colSpan={5}>No record found</td>}
                            </tr>
                        }
                    </tbody>
                </table>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default TaskListing