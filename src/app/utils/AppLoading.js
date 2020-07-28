import React, {Fragment} from 'react';
import {
    Container,
    Row,
    Col,
    Spinner
} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

const AppLoading = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                        <div style={{textAlign:'center', marginTop:40}}>
                            <Spinner animation="grow" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AppLoading;