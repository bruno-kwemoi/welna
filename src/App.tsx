import { Route, Routes } from 'react-router-dom'

import MeetJoin from './components/MeetJoin'
import SelectMic from './components/SelectMic'
import MainApp from './components/MeetRoom/MainApp'
import JoinMode from './components/JoinMode'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MeetJoin />} />
      <Route path='/SelectMic' element={<SelectMic/>} />
      <Route path='/JoinMode' element={<JoinMode/>} />
      <Route path='/MainApp' element={<MainApp />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
  )
}

export default App
