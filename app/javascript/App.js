import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
 
const App = () => {
  return(
    <>
      <BrowserRouter>
				<Routes />
			</BrowserRouter>
    </>
  );
}
export default App;