import { Route, Routes } from 'react-router-dom'

import MeetJoin from './components/MeetJoin'
import SelectMic from './components/SelectMic'
import Loading from './components/Loading'

function App() {

  return (
    <Routes>
      <Route path='Meetjoin' element={<MeetJoin />} />
      <Route path='SelectMic' element={<SelectMic/>} />
      <Route path='/' element={<Loading />} />
    </Routes>
  )
}

export default App
