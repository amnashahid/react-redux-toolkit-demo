
import React from 'react'
import { store } from './redux/store';
import { Provider, } from 'react-redux'
import MyApp from './container'

function App()
{
  return (
    <Provider store={store}>
      <MyApp></MyApp>
    </Provider>
  );
}

export default App;
