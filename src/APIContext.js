import React, {
    useState, 
    useEffect, 
    useContext,
    createContext
} from 'react';

const APIContext = createContext();

export function APIContextProvider({children}) {

    const apiURL = 'https://randomuser.me/api/?results=50';

    const [contacts, setContacts] = useState([]);
    const [contactInfo, setContactInfo] = useState({});
    const [showContact, setContact] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const fetchContactsList = async () => {
        try {
            const response = await fetch(apiURL);
            const {results} = await response.json();
            setContacts(results);
            setLoading(false);
            console.log(results);
        } catch(error) {
            if(error) {
                console.log(error.message);
            }
        }
    }

    const handleOnPressContact = (data = {}) => {
        setContact(!showContact);
        setContactInfo(data);
    }

    const handleOnCloseContact = () => {
        setContact(false);
        setContactInfo({});
    }

    useEffect(() => {
        fetchContactsList();
    }, []);

    return (
        <APIContext.Provider value={{contacts, contactInfo, showContact, loading, handleOnPressContact, handleOnCloseContact}}>
            {children}
        </APIContext.Provider>
    );
}

export function useContextAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('something went wrong with provider');
  }
  return context;
}