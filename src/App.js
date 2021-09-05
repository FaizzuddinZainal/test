import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import TaskListing from './task/TaskListing'
import TaskDetail from './task/TaskDetail'
import TaskEdit from './task/TaskEdit'
import TaskAdd from './task/TaskAdd'
import TaskConfirm from './task/TaskConfirm'

import ProjectListing from './project/ProjectListing'
import ProjectDetail from './project/ProjectDetail'
import ProjectEdit from './project/ProjectEdit'
import ProjectAdd from './project/ProjectAdd'
import ProjectConfirm from './project/ProjectConfirm'

// import UserHome from './page/UserHome'
// import AdminHome from './page/AdminHome'
// import ApplyListing from './apply/ApplyListing'
// import ApplyDetail from './apply/ApplyDetail'
// import ApplyNew from './apply/ApplyNew'
// import ApplyConfirm from './apply/ApplyConfirm'
// import TaskApplyListing from './task/TaskApplyListing'
// import TaskApplyDetail from './task/TaskApplyDetail'
// import Login from './login/Login'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route exact path='/project/listing' component={ProjectListing} />
                        <Route exact path='/project/detail' component={ProjectDetail} />
                        <Route exact path='/project/edit' component={ProjectEdit} />
                        <Route exact path='/project/add' component={ProjectAdd} />
                        <Route exact path='/project/confirm' component={ProjectConfirm} />

                        <Route exact path='/task/listing' component={TaskListing} />
                        <Route exact path='/task/detail' component={TaskDetail} />
                        <Route exact path='/task/edit' component={TaskEdit} />
                        <Route exact path='/task/add' component={TaskAdd} />
                        <Route exact path='/task/confirm' component={TaskConfirm} />
                        
                        
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
