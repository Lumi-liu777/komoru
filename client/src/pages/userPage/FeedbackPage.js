import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/User/User.css'
import Feedback from '../../components/User/Feedback'
import axios from 'axios'
import { Button } from 'react-bootstrap'


export default function FeedbackPage() {

  const [feedbackData, setFeedbackData] = useState([])
  // const [orderData, setOrderData] = useState([])
  const [isOrder, setIsOrder] = useState(false)

  //0623 aki - 若沒有token則跳轉登入頁
  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/login', { replace: true })
    }
  })

  //  0628 aki 抓取該會員的訂單記錄
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:5000/feeback/getFeebeakByMemberId",
      data: {
        token: localStorage.token
      }
    }).then((res) => {
      if (res.data.length) {
        let postFeedbackData = res.data;
        setFeedbackData(postFeedbackData) //想辦法把值取出來
        setIsOrder(true)
      }
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  //  0628 aki 抓取該會員的feedback記錄
  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/feeback/getFeebeakByMemberId",
  //     data: {
  //       token: localStorage.token
  //     }
  //   }).then((res) => {
  //     if (res.data.length) {
  //       let postFeedbackData = res.data;
  //       setFeedbackData(postFeedbackData) //想辦法把值取出來
  //       setIsOrder(true)
  //     }
  //     console.log(res.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

  // 0629 aki 接收到的資料設定入元件
  const feebacks = feedbackData.map(item => {
    return (
      <Feedback
        key={item.orderId}
        isOrder={isOrder}
        {...item}
      />
    )
  })

  return (
    <div className='wrap'>
      <Navbar />
      <div className='User--container'>
        <div className="Feedback">
          <ul className="Feedback--menu">
            <li><a href="/user" className="menu--item">基本資料</a></li>
            <li><a href="/member-order" className="menu--item">訂單記錄</a></li>
            <li><a href="/member-feedback" className="menu--item--on">活動回饋</a></li>
            <li><a href="/member-coupon" className="menu--item">優惠表單</a></li>
          </ul>

          
          {!isOrder && // 若無任何訂單的畫面
            <div className="Feedback--card--none">
              <p>目前沒有可供評論的訂單，現在就出發！</p>
              <Button size="lg" variant="secondary">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </Button>
            </div>}

          {isOrder && // 訂單記錄畫面
            <div className="Feedback--card">
              {feebacks}
            </div>
          }

        </div>
      </div>
    </div>
  )
}