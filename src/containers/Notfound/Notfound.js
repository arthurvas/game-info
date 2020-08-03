import React, {Component} from 'react'
import classes from './NotFound.module.css'

 class Notfound extends Component {
    render(){
        return(
            <h1 className={classes.title}>Page Not Found <br/> 404</h1>
        )
    }
}
export default Notfound