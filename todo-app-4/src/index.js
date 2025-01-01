import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/TodoApp';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
