import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './GameInfoList.module.css'

export default class GameInfoList extends Component {
    renderList(){
        const props = this.props
        const pagination = this.props.pagination
        if(props.isLoading){
            return props.data.gameInfos.slice(0, pagination).map((item, index)=>{
                return (
                    <ListGroup key={index}>
                        <ListGroup.Item>{item.gameName}</ListGroup.Item>
                    </ListGroup>
                )
            })
        } else {
            console.log(classes)
            return <div className="loading">...Loading</div>
        }
    }    
    render(){
        return(
            <>
                {this.renderList()}
            </>
        )
    }
}