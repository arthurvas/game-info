import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export default class PopularGamesList extends Component {

    renderList(){
        const props = this.props
        const pagination = this.props.pagination
        if(props.isLoading){
            
            
            return props.data.games.slice(0, pagination).map((item, index)=>{
                return (
                    <ListGroup key={index}>
                        <ListGroup.Item>{item.platformCode}</ListGroup.Item>
                    </ListGroup>
                )
            })
        } else {
            
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