import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/*需要加入Provider 帶入store*/}
      <App />
    </Provider>
  </StrictMode>
)