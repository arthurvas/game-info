import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import classes from './Menu.module.css'

const links = [
    {
        to: '/',
        label:'Game info',
        exact: true
    },
    {
        to: '/popular-games',
        label:'Popular Games',
        exact: false
    }
]

class Menu extends Component {
    renderLinks() {  
        return links.map((link, index) => {
            return(
                <li key={index}>
                    <NavLink 
                        to={link.to} 
                        key={index}
                        exact={link.exact}
                        activeClassName={classes.active}
                    >
                        {link.label.toLocaleUpperCase()}
                    </NavLink>
                </li>
            )
        })
    }
    render(){
        return(
            <>
                <Container fluid="md">
                    <Row> 
                        <Col>
                            <nav className={classes.Menu}>
                                <ul>
                                    {this.renderLinks()}
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Container>
                
            </>
        )
    }
}

export default Menu