import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Hit extends Component {

    render() {
        const hit = this.props.hit;

        const categories = hit.get('product').get('categories_dict').map((cat) => <div>{cat.get('name')}</div>);

        return (
            <Row style={{marginBottom: '1em'}}>
                <Col xs={12} style={{border: '1px solid #ddd'}}>
                    <Row style={{padding: '1em'}}>
                        <Col xs={8}>
                            <h3 style={{marginTop: '0.5em'}}>{hit.get('product').get('name')}</h3>
                            <h3 style={{color: 'red'}}>{hit.get('price_with_vat').toString().replace('.', ',')} €</h3>
                            <div>{categories}</div>
                        </Col>                        
                        <Col xs={4}>
                            <img src={hit.get('default_image')} style={{float: 'right', width: '20em'}} role="presentation" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Hit;