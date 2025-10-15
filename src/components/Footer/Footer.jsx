import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        © All rights reserved
        <a href='https://codedthemes.com/' target='_blank' rel='noreferrer' style={{textDecoration:"none"}}> CodedThemes</a>
        <div style={{display:"flex",gap:"20px",justifyContent:"right",marginRight:"20px"}}>
            <a href='https://codedthemes.com/about-us/' target='_blank' rel='noreferrer' style={{textDecoration:"none",color:"black"}}> About us</a>
            <a href='https://mui.com/legal/privacy/' target='_blank' rel='noreferrer' style={{textDecoration:"none",color:"black"}}> Privacy</a>
            <a href='https://mui.com/store/terms/' target='_blank' rel='noreferrer' style={{textDecoration:"none",color:"black"}}> Terms</a>
        </div>
    </div>
  )
}

export default Footer