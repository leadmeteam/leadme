import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import App from './src/App';

const renderApp = () => { 
        <Provider store={store}>
            <App />
        </Provider>
};

AppRegistry.registerComponent('leadme', () => renderApp);