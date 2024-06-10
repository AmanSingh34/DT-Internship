import './App.css'
import logo from './assets/logo.svg'
import bell from './assets/bell.png'
import home from './assets/home.png'
import profile from './assets/profile.jpeg'
import tools from './assets/tools.png'
import more from './assets/more.png'
import question from './assets/question.png'
import schedule from './assets/schedule.png'
import meeting from './assets/meeting.png'
import Card from './component/Card'
import iframe from './assets/iframe.png'
import Thread from './component/Thread'
import SubThread from './component/SubThread'
import Catoug from './component/Catoug'
import Select from './component/Select'
import Button from './component/Button'
import Title from './component/Title'
import Contents from './component/Contents'
import Methods from './component/Methods'
import LeftCard from './component/LeftCard'
import { useState } from 'react'
import RightPop from './component/RightPop'

function App() {
  const [pop,setPop] = useState(true)

  return (
    <>
    <nav>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='right'>
        <div className="home">
          <img src={home} alt="" />
        </div>
        <div className="setting">
          <img src={tools} alt="" />
        </div>
        <div className="noti">
          <img src={bell} alt="" />
        </div>
        <img src={profile} className="profile" alt="" />  
        <img src={more} className="more" alt="" />  
      </div>
    </nav>
    <div className='left-pop'>
      <div className='left-card' onClick={()=>setPop(prev=>!prev)} style={pop?{left:"-350px"}:{left:"0"}}>
        {pop? <button>1</button>:null}
        <LeftCard/>
      </div>
      <div className='right-card'>
        <RightPop/>
      </div>
    </div>
   
    <div className='header'>
      <h1>Technical Project Management</h1>
      <button>Submit task</button>
    </div>
    <div className='sub-head'>
      <div>
      <h1>Explore the world of management</h1>
      <p>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
      </div>
    </div>
    <div className='cards-container'>
      <Card 
      heading={"Technical Project Management"} 
      desc={"Story of Alignment Scope of Agility Specific Accountable Staggering Approach"}
      center={<img src={iframe} alt="" />}
      />
      <Card 
      heading={"Threadbuild"}
      desc={" Watch the video and threadbuild, and jot out key threads while watching the video"}
      center={
      <>
      <Thread/>
      <div className='sub-thread-container'>
        <SubThread
          heading={"Sub Thread 1"}
        />
        <SubThread
          heading={"Sub intrepertation 1"}
        />
      </div>
      <div className='catag'>
        <Catoug/>
        <div className='select-container'>
          <Select
            val={"Select Catag"}
          />
          <Select
            val={"Select Process"}
          />
        </div>
      </div>
      <div className='btn'>
      <Button/>
      </div>
      <div className='summary'>
        <SubThread
        heading={"Summmary for Thread A"}
        />
      </div>
      </>
      }
      />
      <Card 
      heading={"Structure your Pointers"}
      desc={"Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world"}
      center={
      <>
            <Title
            title={"Title"}
            />
            <Title
            title={"Content"}
            children={<Contents/>}
            />
      </>}
      />
      <Card 
      heading={"4SA Method"}
      desc={"To Explore more read more"}
      center={
      <>
        <Methods
        heading={"Introduction"}
        subhead={"The 4SA Method , How to bring a idea into progress ?"}
        />
        <Methods
        heading={"Thread A"}
        subhead={"How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?"}
        />
        <div className='example'>
            <p>Example 1</p>
        </div>
        <div className='last-p'>
          <p>You have a concept , How will you put into progress?</p>
        </div>
      </>}
      />
    </div>

    <div className='footer'>
      <div className='ques'>
       <div>
        <img src={question} alt="" />
       </div>
       <div>
        <img src={meeting} alt="" />
       </div>
       <div>
        <img src={schedule} alt="" />
       </div>
      </div>
    </div>
    </>
  )
}

export default App
