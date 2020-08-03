import React, {Component} from 'react'
import GameInfoList from '../../components/GameInfoList/GameInfoList'
import {
    Container, 
    Row, 
    Col, 
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Gameinfo.module.css'

const numbers = [3,5,10]

export default class Gameinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagination: 5,  
            data: null,
            loading: false
        };
    }
    componentDidMount() {
        fetch('https://yyy-ps.omegasys.eu/ps/ips/getGameInfo')
        .then(response => response.json())
        .then(data => this.setState({ data, loading: true }));
    }

    setPaginationHandler(number){
        console.log('number',number)
        this.setState({
            pagination: number
        })
    }

    render(){
        return(
            <Container fluid="md">
                <Row>
                    <Col>
                        <div className={classes.GameinfoLine}>
                            <h1 className={classes.title}>Game Info</h1>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Pagination
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        numbers.map((number, index)=>{
                                            return  <Dropdown.Item 
                                                key={index}
                                                onClick={this.setPaginationHandler.bind(this, number)}
                                            >
                                                {number}
                                            </Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <GameInfoList 
                            data={this.state.data} 
                            isLoading={this.state.loading}
                            pagination={this.state.pagination}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}