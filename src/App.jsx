import Header from './components/Header'
import { ColorProvider, ModalProvider } from './utils/Context'
import { HSLProvider } from './utils/ContextHSL'
import ColorPickers from './components/ColorPickers'
import Modal from './components/Modal'

function App() {
  return (
    <div>
      <HSLProvider>
        <ColorProvider>
          <ModalProvider>
            <Header />
            <ColorPickers />
            <Modal />
          </ModalProvider>
        </ColorProvider>
      </HSLProvider>
    </div>
  )
}

export default App
