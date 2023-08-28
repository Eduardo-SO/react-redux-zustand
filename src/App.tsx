import { Provider as ReduxProvider } from 'react-redux'
import './styles/global.css'

import { store } from './store';
import { PLayer } from './pages/player';

export function App() {
  return (
    <ReduxProvider store={store}>
      <PLayer />
    </ReduxProvider>
  )
}
