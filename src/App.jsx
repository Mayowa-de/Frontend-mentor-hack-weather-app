import './index.css'
import Header from "./Hero/Header.jsx"
import Title from "./Hero/title"
import TodayCloud from './Hero/todayCloud'

function App() {

  return (
    <>
    <div className='justify-center items-center flex mb-10 flex-col pb-10 px-32 '>
    <Header/>
    <Title/>
    <TodayCloud/>
    </div>
    </>
  )
}

export default App
