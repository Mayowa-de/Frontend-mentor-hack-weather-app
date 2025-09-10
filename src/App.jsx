import './index.css'
import Header from "./Hero/Header.jsx"
import Title from "./Hero/title"
import TodayCloud from './Hero/todayCloud'
import SubCloud from './Hero/SubCloud.jsx'

function App() {

  return (
    <>
    <div className='justify-center items-center flex mb-10 flex-col pb-10 px-32 '>
    <Header/>
    <Title/>
    <TodayCloud/>
    <SubCloud/>
    </div>
    </>
  )
}

export default App
