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

const ContactItem = ({contact, handleOnPressContact}) => {
    const {name, email, picture, phone} = contact;
    const {darkMode} = useThemeContext();
    return (
        <Fragment>
            <ListGroup.Item className={`${darkMode ? 'dark-mode-content' : 'light-mode-content'} urlPointer`} onClick={() => handleOnPressContact({contact})}>
                <Row>
                    <Col sm={3} md={3}>
                        <div style={{textAlign:'center'}}>
                            <Image src={getContactPicture(picture)} roundedCircle />
                        </div>
                    </Col>
                    <Col sm={9} md={9}>
                        <div className='contactName'>{name ? `${name.first} ${name.last}` : ''}</div>
                        <div>{phone ? phone : ''}</div>
                        <div>{email ? email : ''}</div>
                    </Col>
                </Row>
            </ListGroup.Item>
        </Fragment>
    );
}

export default ContactItem;