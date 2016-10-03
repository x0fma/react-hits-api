import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './search-bar';
import SelectSort from './select-sort';
import Hits from './hits';

class App extends Component {

	render() {
		return (
			<Grid style={{padding: '2em'}}>
				<Row>
					<SearchBar />
				</Row>
				<Row>
					<SelectSort />
				</Row>
				<Row>
					<Col xs={12}>
						<Hits />
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;