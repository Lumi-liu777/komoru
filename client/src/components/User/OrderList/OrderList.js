import React from "react"
import './OrderList.css'
import { Accordion } from 'react-bootstrap'
import OrderListDaily from "./OrderListDaily/OrderListDaily";
// import BookingOrderPage from "../../pages/orderPage/BookingOrderPage"




export default function OrderList(props) {

  // 計算旅程天數
  let end = Date.parse(props.orderEndDate);
  let start = Date.parse(props.orderStartDate);
  let stayNight = (end - start) / 86400000 + 1;

  // roomPic
  const getRoomPic = (roomId) => {
      if (props.roomId === 1) return 1;
      if (props.roomId === 2) return 5;
      if (props.roomId === 3) return 14;
      if (props.roomId === 4) return 11;
      if (props.roomId === 5) return 9;
      if (props.roomId === 6) return 13;
      if (props.roomId === 7) return 12;
      if (props.roomId === 8) return 10;
    }


  return (
    <>
      {/* 下：有訂房紀錄版 */}
      {/* { props.isOrder &&  */}
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <ul className="acco-header p-2 w-100 d-flex justify-content-between">
              <li className="pt-2 pb-1">{props.orderStartDate}</li>
              <li className="ps-2 pt-2 pb-1 w-75">{props.cityName}　{props.hotelTitle} / {props.roomType}</li>
              <li className="pt-2 pb-1">{props.memberName}</li>
            </ul>
          </Accordion.Header>
          <Accordion.Body className="p-5 text-start lh-lg orderDetails fw-normal">
            <h3>訂單資料確認</h3>
            <p className="text-secondary mb-5">一條龍記錄您的訂單及活動行程，並即時更新在會員中心讓您隨時查看。</p>
            <div className="orderDetails--card row">
              <div className="card--pic col-5">
                <img className="img-fluid rounded" 
                      src={`http://localhost:5000/images/room/room-${ getRoomPic(props.roomId) }.jpeg`} 
                      alt="room-pic" />

              </div>
              <div className="card--list col-7">
                <ul>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">入住日期</span>
                    <span className="fw-light col-8">{props.orderStartDate}</span>
                  </li>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">日住天數</span>
                    <span className="fw-light col-8">
                      {stayNight} 晚
                    </span>
                  </li>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">飯店/房型</span>
                    <span className="fw-light col-8">{props.hotelTitle} / {props.roomType}</span>
                  </li>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">優惠編號</span>
                    <span className="fw-light col-8">{props.couponItemId? props.couponItemId:"無" }</span>
                  </li>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">活動參與</span>
                    <span className="fw-light col-8"> </span>
                  </li>
                  <li className="card--list--item fs-4 row">
                    <span className="col-3 ">活動天數</span>
                    <span className="fw-light col-8"> </span>
                  </li>
                </ul>
              </div>
              <OrderListDaily
                date={props.orderStartDate}/>

            </div>

            {/* cityName: "台中市"
couponItemId: 2
createDatetime: "2022-07-06 13:46:47"
hotelAddr: "台中市西區公益路68號15樓"
hotelDesc: null
hotelTel: "+886 4 2321-9696"
hotelTitle: "Star Hostel"
memberGender: "男"
memberId: 1
memberImgPath: "/images/member/wanggmailcom.PNG"
memberMail: "wang@gmail.com"
memberName: "王小明"
memberNickName: "小明"
memberPhone: "0966777899"
orderEndDate: "2022-07-11"
orderId: 130
orderNumber: "2LQUI5ka"
orderStartDate: "2022-07-08"
orderStatus: "未入住"
orderTotal: 3500
roomDesc: null
roomId: 2
roomType: "背包客" */}









          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* } */}
    </>
  )

}