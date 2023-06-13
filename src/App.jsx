import Header from './components/Header'
import { ColorProvider, ModalProvider } from './utils/Context'
import ColorPickers from './components/ColorPickers'
import Modal from './components/Modal'

function App() {
  return (
    <ColorProvider>
      <ModalProvider>
        <Header />
        <ColorPickers />
        <Modal />
      </ModalProvider>
    </ColorProvider>
  )
}

export default App
