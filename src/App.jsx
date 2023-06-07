import Header from './components/Header'
import { ColorProvider, ModalProvider } from './utils/Context'
import ColorPickers from './components/ColorPickers'
import Modal from './components/Modal'

function App() {
  return (
    <div>
      <ColorProvider>
        <ModalProvider>
          <Header />
          <ColorPickers />
          <Modal />
        </ModalProvider>
      </ColorProvider>
    </div>
  )
}

export default App
