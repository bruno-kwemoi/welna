import { Route, Routes } from 'react-router-dom'

import MeetJoin from './components/MeetJoin'
import SelectMic from './components/SelectMic'
import MainApp from './components/MainApp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MeetJoin />} />
      <Route path='/SelectMic' element={<SelectMic/>} />
      <Route path='/SelectMic/MainApp' element={<MainApp />} />
    </Routes>
  )
}

export default App
