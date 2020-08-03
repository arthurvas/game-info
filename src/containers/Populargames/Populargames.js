import React, {Component} from 'react'
import {
    Container,
    Row, 
    Col, 
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularGamesList from '../../components/PopularGamesList/PopularGamesList'
import classes from './Populargames.module.css'

const numbers = [3,5,10]

export default class Populargames extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pagination:5,
            data: null,
            loading: false
        };
    }
    componentDidMount() {
        fetch('https://yyy-ps.omegasys.eu/ps/ips/getMostPopularGames')
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
                        <div className={classes.PopulargamesLine}>
                            <h1 className={classes.title}>Popular Games</h1>
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
                        <PopularGamesList data={this.state.data} isLoading={this.state.loading} pagination={this.state.pagination}/>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}