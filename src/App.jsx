import Header from './components/Header'
import { ColorProvider } from './utils/Context'
import ColorPickers from './components/ColorPickers'

function App() {
  return (
    <div>
      <ColorProvider>
        <Header />
        <ColorPickers />
      </ColorProvider>
    </div>
  )
}

export default App
