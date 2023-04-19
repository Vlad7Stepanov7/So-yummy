import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="So-yummy">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
