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
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Ratchaphon Chaikaew (Four)">
          <h3>ตำแหน่ง : backend</h3>
        </Title>

        <Title title="Contact">

          <p>วันที่ปัจจุบัน: {moment().format("22 03 2567")}</p>
          <p>วันเกิด: {moment("2001/03/01").format("22 03 2567")}</p>
          <p style={{ display: hide ? 'none' : 'block' }} >
            Tel : +6628114668
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show' : 'Hide'}
          </button>
          <p>Email : Monthqa12@gmail.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quas natus soluta debitis nihil placeat, molestiae quae distinctio. Corporis dolores sit similique vitae dignissimos rerum saepe dolorem laboriosam rem impedit.</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi cumque, laborum dolore error at, excepturi eum distinctio iste facere obcaecati natus impedit eaque eveniet nulla? Cupiditate, blanditiis in?</p>
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
