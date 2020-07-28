import React, {Fragment} from 'react';
import {
    ListGroup,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import {useThemeContext} from '../../../../ThemeProvider';

const getContactPicture = (picture = {}) => {
    if(picture.medium) {
        return picture.medium;
    } else if(picture.thumbnail) {
        return picture.thumbnail;
    } else {
        return 'https://bit.ly/39zk0CV';
    }
}

const ShowContactDetails = ({contact}) => {
    const {
        name, 
        email, 
        picture, 
        phone,
        cell,
        location,
        gender,
        dob
    } = contact;
    const {darkMode} = useThemeContext();
    return (
        <Fragment>
            <ListGroup variant="flush">
                <ListGroup.Item className={darkMode ? 'dark-mode-content' : 'light-mode-content'}>
                    <div style={{paddingTop:20}} />
                    <Row>
                        <Col sm={2} md={2}>
                            <div style={{textAlign:'center'}}>
                                <Image src={getContactPicture(picture)} roundedCircle />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10} md={10} style={{lineHeight:2.1}}>
                            <div><span className='title'>Contact Name:</span> {name ? `${name.title}. ${name.first} ${name.last}` : ''}</div>
                            <div><span className='title'>Cell:</span> {cell ? cell : ''}</div>
                            <div><span className='title'>Phone:</span> {phone ? phone : ''}</div>
                            <div><span className='title'>Email:</span> {email ? email : ''}</div>
                            <div><span className='title'>Gender:</span> {gender ? gender : ''}</div>
                            <div><span className='title'>Age:</span> {dob && dob.age ? dob.age : ''}</div>
                            <div><span className='title'>Date Of Birth:</span> {dob && dob.date ? new Date(dob.date).toDateString() : ''}</div>
                            <div><span className='title'>Address:</span> {location ? 
                                `${location.street.name}, 
                                ${location.street.number}, ${location.city}, ${location.state}, ${location.country} - ${location.postcode}` : ''}</div>
                        </Col>
                    </Row>
                    <div style={{paddingBottom:20}} />
                </ListGroup.Item>
            </ListGroup>
        </Fragment>
    );
}

export default ShowContactDetails;