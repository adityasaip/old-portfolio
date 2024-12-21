import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header.jsx'
import TitleCard from './components/titlecard'
import Education from './components/education'
import Footer from './components/footer'
import Achievements from './components/achievements'
import Skills from './components/skills'
function App() {
  return (
    <main className='app'>
      <Header />
      <TitleCard />

      <Achievements />
      <Skills />
      <Footer />
    </main>
  )
}

export default App


      {/* <Education 
            name = "Bachelor of Technology"
            gpa = "8.61/10"
            college = "JNTU"
            year = "2021"
      />
      <Education 
            name = "12th"
            gpa = "9.84/10"
            college = "Narayana"
            year = "2017"
      />
      <Education 
            name = "10th"
            gpa = "9.30/10"
            college = "St Mary's"
            year = "2014"
      /> */}