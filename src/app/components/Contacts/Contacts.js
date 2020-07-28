import React, {Fragment} from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    ListGroup,
    Spinner,
    Button
} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import ListContacts from './components/ListContacts';
import ShowContactDetails from './components/ShowContactDetails';

import {useContextAPI} from '../../../APIContext';
import {useThemeContext} from '../../../ThemeProvider';

import {ToggleSwitchButton} from '../../utils';

const Contacts = () => {
    
    const {loading, showContact, contactInfo, handleOnCloseContact} = useContextAPI();
    const {darkMode, handleToggleSwitchMode} = useThemeContext();
    const switchModeTitleClass = darkMode ? 'switchTitleDark' : 'switchTitleLight';

    return (
        <Fragment>
            <Helmet>
                <title>Contact List</title>
                <style>{`body { background-color: ${darkMode ? '#1a1919' : '#eee'};  transition: background-color 0.25s ease-out;}`}</style>
            </Helmet>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                        <Row>
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className={darkMode ? 'dark-mode-header' : 'light-mode-header'}>
                                        <Row>
                                            <Col>
                                                <Navbar>
                                                    <Navbar.Brand>
                                                        <div className={`headerTitle ${switchModeTitleClass}`}>
                                                            Contact List
                                                        </div>
                                                    </Navbar.Brand>
                                                    <Navbar.Toggle />
                                                    <Navbar.Collapse className="justify-content-end">
                                                        <Navbar.Text>
                                                            <span className={switchModeTitleClass}>Switch to: {!darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                                                            <div>
                                                                <ToggleSwitchButton 
                                                                    id="switchDarkLightMode" 
                                                                    onChange={() => handleToggleSwitchMode()} 
                                                                    currentValue={darkMode}
                                                                    Text={['☀︎', '☾']}
                                                                />
                                                            </div>
                                                            {/* <div className="toggle-container">
                                                                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                                                                <span className="toggle">
                                                                    <input
                                                                        checked={darkMode}
                                                                        onChange={() => handleToggleSwitchMode()}
                                                                        id="checkbox"
                                                                        className="checkbox"
                                                                        type="checkbox"
                                                                    />
                                                                    <label htmlFor="checkbox" />
                                                                </span>
                                                                <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
                                                            </div> */}
                                                        </Navbar.Text>
                                                    </Navbar.Collapse>
                                                </Navbar>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {showContact ? (
                                        <ListGroup.Item className={darkMode ? 'dark-mode-header' : 'light-mode-header'}>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <Button onClick={() => handleOnCloseContact({})}>Go Back</Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ) : null}
                                    {loading ? (
                                        <div style={{textAlign:'center', marginTop:40}}>
                                            <Spinner animation="border" />
                                        </div>
                                    ) : (showContact ? (
                                        <ShowContactDetails {...contactInfo} />
                                    ) : (
                                        <ListContacts />
                                    ))}
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Contacts;