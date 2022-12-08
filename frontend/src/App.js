import React from "react";
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import layout from './hocs/layout'
import blog from './components/home'
import blogdetail from './components/blogdetail'
import category from './components/category'

constApp = () => {
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={home}/>
                <Route exact path='/blog' component={blog}/>
                <Route exact path='/category/:id' component={category}/>
                <Route exact path='/blog/:id' component={blogdetail}/>
            </Switch>
        </Layout>
    </Router>


};
export default App;