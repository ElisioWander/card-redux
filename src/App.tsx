import { configureAppStore } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { Catalog } from './components/Catalog'
import { Cart } from './components/Cart'

const store = configureAppStore()

export function App() {
  return (
    <ReduxProvider store={store}>
      <Catalog />
      <Cart />
    </ReduxProvider>
  )
}
