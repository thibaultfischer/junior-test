import { Provider } from 'react-redux';
import store from './src/store/store';
import { Text } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <></>
    </Provider>
  );
};

export default App;
