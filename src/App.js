import LoginPage from './LoginFolder/LoginPage'
import { Provider } from 'react-redux'
import PageContainer from './PageContainer'
import store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
  return (
    <Switch>
    <Provider store={store}>
        <div className="App">
          <Route path="/" component={PageContainer} />
          {/*<PageContainer/>*/}
        </div>
    </Provider>
    </Switch>
  );
}

export default App;
