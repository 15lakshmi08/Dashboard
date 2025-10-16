import Link from "@mui/material/Link"

const Footer = () => {
  return (
    <div>
        © All rights reserved
        <Link href='https://codedthemes.com/' target='_blank' underline="hover"> CodedThemes</Link>
        <div style={{display:"flex",gap:"20px",justifyContent:"right",marginRight:"20px"}}>
            <Link href='https://codedthemes.com/about-us/' target='_blank' style={{color:"black"}} underline="hover"> About us</Link>
            <Link href='https://mui.com/legal/privacy/' target='_blank' style={{color:"black"}} underline="hover"> Privacy</Link>
            <Link href='https://mui.com/store/terms/' target='_blank' style={{color:"black"}} underline="hover"> Terms</Link>
        </div>
    </div>
  )
}

export default Footer