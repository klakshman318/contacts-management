import React, {Fragment} from 'react';

import {useContextAPI} from '../../../../APIContext';

import ContactItem from './ContactItem';

// const handleOnPressContact = (data) => {
//     import('./ShowContactDetails').then((ShowContactDetails) => {
//         // to do
//     }).catch(error => {
//         console.log(error);
//     });
// };

const ListContacts = () => {
    const {contacts, handleOnPressContact} = useContextAPI();
    return (
        <Fragment>
            {contacts.map((contact, idx) => {
                return (
                    <ContactItem 
                        key={contact.email || idx} 
                        contact={contact} 
                        handleOnPressContact={handleOnPressContact}
                    />
                )
            })}
        </Fragment>
    );
}

export default ListContacts;