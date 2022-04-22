import React from 'react'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
      <>
    <div className="container" style={{backgroundImage: 'url(' + require('../assests/Images/bg.png') + ')',width:"400px",height:"667px",display:'flex',justifyContent:'center',alignItems:'center'}}>

    <div style={{backgroundColor:'#fff',opacity:'0.8',borderRadius:'40px',height:"300px",width:"300px",padding:"50px"}}>
    <div className="row" style={{borderBottom:'solid',borderBottomWidth:'1px',alignItems:'center',justifyContent:'center'}}>
    <div className="col-2">
    <img className="img-fluid" src={require('../assests/Images/msg.png')} alt="" />
     </div>

        <div className="col-10">
  <div style={{textAlign:"left"}}>
    <input placeholder='Email' style={{border:'none',backgroundColor:'transparent',outline:'none'}} />
    
  </div>
  </div>
 
  </div>

  <div className="row" style={{borderBottom:'solid',borderBottomWidth:'1px',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
  <div className="col-2">
  <img className="img-fluid" src={require('../assests/Images/lock.png')} alt="" />
   </div>

      <div className="col-10">
<div style={{textAlign:"left"}}>
  <input placeholder='Password' style={{border:'none',backgroundColor:'transparent',outline:'none'}} />
  
</div>
</div>

</div>

<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'10px'}}>
<div style={{display:'flex'}}>
<img style={{height:'8px',width:'8px'}} src={require('../assests/Images/right.png')} alt="" />
<span style={{fontSize:"8px"}}>Remember me</span>
</div>
<span style={{fontSize:"8px"}}>Forgot Password?</span>
</div>

<Link to="/cart" ><p style={{backgroundColor:'#DB4700',borderRadius:"15px",padding:"10px 60px",color:"#fff",marginTop:"30px"}}>Login</p></Link>
<p style={{fontSize:"9px",color:"#3C3C3C"}}>Don’t have an account? Sign up</p>
</div> 
    </div>

   


    </>
  )
}

export default Login