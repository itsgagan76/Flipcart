import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
    
const [apidata,setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((data)=>{
                  setData(data)
                  console.log(data)
            })
        })
    },[])



  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"10px"}}>
        {
            apidata.map((item)=>
                <MDBCol>
            <MDBCard style={{paddingBottom:"10px"}}>
              <center>
              <MDBCardImage
                src={item.image}
                alt='...'
                position='top'
                style={{width:"100px", height:"100px", padding:"10px"}}
              />
              </center>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle>{item.price*80}Rs</MDBCardTitle>
                <MDBCardTitle>{item.category}</MDBCardTitle>
                <MDBCardText>
                  {item.description.substr(0,100)}
                </MDBCardText>
              </MDBCardBody>
              <MDBBtn> View details</MDBBtn>
            </MDBCard>
          </MDBCol>)
        }



    </MDBRow>
  );
}