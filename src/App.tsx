import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { Catalog } from './components/Catalog'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Catalog />
    </ReduxProvider>
  )
}
