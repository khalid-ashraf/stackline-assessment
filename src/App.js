import ProductDetails from './pages/productDetails.tsx';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    </div>
  );
}

export default App;
