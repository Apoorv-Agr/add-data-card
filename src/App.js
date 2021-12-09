import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { reducerFn } from './reducer/reducer';
import thunk from 'redux-thunk';
import FormComponent from './components/FormComponent';
const store = createStore(reducerFn, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
      </div>
    </Provider>
  );
}

export default App;
