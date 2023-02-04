
import React from 'react'
import { store } from './redux/store';
import { Provider } from 'react-redux'
import Cart from './Cart';
import Header from './Header';

function App()
{
  return (
    <Provider store={store}>
      <Header></Header>
      <Cart>
      </Cart>
    </Provider>
  );
}

export default App;
