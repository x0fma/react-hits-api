import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import { updateOrder } from '../actions/hits';

class SelectSort extends Component {

	constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

	handleChange(e) {
        const value = e.target.value;
        this.props.dispatch(updateOrder(value));
    }

	render() {
		return (
			<Col xs={4}>
				<form>
					<FormGroup controlId='selectSort'>
						<FormControl componentClass='select' onChange={this.handleChange}>
							<option value='asc'>Increasing price</option>
							<option value='desc'>Deascresing price</option>
						</FormControl>
					</FormGroup>
				</form>
			</Col>
		);
	}

}

export default connect()(SelectSort);