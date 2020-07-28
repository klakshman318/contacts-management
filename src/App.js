import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {AppLoading} from './app/utils';

import {APIContextProvider} from './APIContext';
import {useThemeContext} from './ThemeProvider';

const Contacts = lazy(() => import('./app/components/Contacts'));

function App() {

  const {darkMode} = useThemeContext();

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Suspense fallback={<AppLoading />}>
          <APIContextProvider>
            <Route path='/' exact component={Contacts} />
          </APIContextProvider>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
