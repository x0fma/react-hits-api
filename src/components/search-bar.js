import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import { searchHits } from '../actions/hits';

class SearchBar extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            search: ''
        };
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({search: value});
        this.props.dispatch(searchHits(value));
    }

    render() {
        return (
            <Col xs={12}>
                <form>
                    <FormGroup controlId='searchBar'>
                        <FormControl type='text' placeholder='Search by name' value={this.state.search} onChange={this.handleChange}/>
                    </FormGroup>
                </form>
            </Col>
        );
    }
}

export default connect()(SearchBar);