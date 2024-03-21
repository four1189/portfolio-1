import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image=": /src/assets/react.svg" />

        <Title title="Ratchaphon Chaikaew (Four)">
          <h3>ตำแหน่ง : backend</h3>
        </Title>

        <Title title="Contact">
          
          <p>Email : Monthqa12@gmail.com</p>
          <p>วันเกิด: {moment("2001/03/01").format("01 03 2544")}</p>
          <p style={{ display: hide ? 'none' : 'block' }} >
            Tel : +6628114668
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show' : 'Hide'}
          </button>
          
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>สวัสดีครับ ผมได้สนใจอย่างมากในด้าน Back End และอยากขอโอกาสฝึกงานใน ตำแหน่ง Back End Developer เพื่อเสริมสร้างประสบการณ์ให้กับตัวเอง จากการศึกษาและการเรียนรู้ของผม ตอนนี้ผมมีพื้นฐานในด้านการพัฒนาเว็บไซต์ผมเชื่อว่าการที่ได้ฝึกงานจะช่วยเพิ่มประสบการณ์และทักษะที่จำเป็นให้กับผมเพื่อใช้ในการประกอบอาชีพในอนาคตได้ผมหวังว่าจะได้รับโอกาสในการเข้าร่วมฝึกงานกับทีมของพี่ ๆ เพื่อพัฒนาทักษะและเป็นส่วนหนึ่งของการสร้างผลงานที่มีคุณภาพในอนาคตครับ</p>
        </Title>

        <Title title="Work Experience">
          <p>สามารถสร้างเว็บไซค์ได้ด้วย vs code ภาษา html/css/js</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vs code</p>
          <p>Github</p>
          <p></p>
        </Title>
      </div>
    </main>
  )
}

export default App