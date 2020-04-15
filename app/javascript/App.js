import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/Menu';

//bin/webpack-dev-server Run react
 
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Menu />
				<Routes />
			</BrowserRouter>
    </>
  );
}
export default App;