import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="container" style={{width:"400px",height:"667px",}}>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:"9px"}}>
    <img className="img-fluid" style={{height:"18px",width:"24px"}} src={require('../assests/Images/menu.png')} alt="" />
    <img className="img-fluid" style={{height:"38px",width:"37px"}} src={require('../assests/Images/logo.png')} alt="" />
    </div>

    <div className="col-12  mt-2 mb-3">
    <div  >
      <div class="row g-0 px-4">
        <div class="col-4">
          <img src={require('../assests/Images/1.png')} class="img-fluid" alt="..."  />
        </div>
        <div class="col-4">
          <div>
            <p style={{textAlign:'left',lineHeight:"16px"}}>Quarty Watch Leather Watch</p>
            <p style={{textAlign:'left',fontSize:'24px',fontWeight:'600',lineHeight:"0"}}>₹ 12000</p>
            <span style={{textAlign:'left',fontSize:'13px',fontWeight:'600'}}>color:<span>Brown</span></span>
            <p style={{textAlign:'left',fontSize:'13px',fontWeight:'600',color:"#009C2CCF"}}>In Stock</p>
          </div>
        </div>
      </div>



      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
      <div className="col-4 px-4">
      <div style={{background:'#C4C4C430',borderRadius:'2px',justifyContent:'space-between',display:'flex',padding:'5px 2px'}}>
    <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/minus.png')} alt="" />
    <span style={{fontSize:"12px"}}>1</span>
    <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/plus.png')} alt="" />
      
      </div>
      </div>
      <div className="col-3"><span style={{color:'#F77000',background:'#fff',padding:'5px 18px',borderRadius:'15px',fontSize:'12px',border:"2px solid #F77000"}}>Delete</span></div>
      <div className="col-5"><span style={{color:'#fff',background:'#F77000',padding:'5px 18px',borderRadius:'15px',fontSize:'12px'}}>See more like this</span></div>
      </div>

      </div>
      </div>
<div style={{border:"1px solid #C4C4C466"}}></div>

      <div className="col-12  mt-2 mb-3">
      <div  >
        <div class="row g-0 px-4">
          <div class="col-4">
            <img src={require('../assests/Images/2.png')} class="img-fluid" alt="..."  />
          </div>
          <div class="col-4">
            <div>
              <p style={{textAlign:'left',lineHeight:"16px"}}>Quarty Watch Leather Watch</p>
              <p style={{textAlign:'left',fontSize:'24px',fontWeight:'600',lineHeight:"0"}}>₹ 12000</p>
              <span style={{textAlign:'left',fontSize:'13px',fontWeight:'600'}}>color:<span>Brown</span></span>
              <p style={{textAlign:'left',fontSize:'13px',fontWeight:'600',color:"#009C2CCF"}}>In Stock</p>
            </div>
          </div>
        </div>
  
  
  
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className="col-4 px-4">
        <div style={{background:'#C4C4C430',borderRadius:'2px',justifyContent:'space-between',display:'flex',padding:'5px 2px'}}>
      <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/minus.png')} alt="" />
      <span style={{fontSize:"12px"}}>1</span>
      <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/plus.png')} alt="" />
        
        </div>
        </div>
        <div className="col-3"><span style={{color:'#F77000',background:'#fff',padding:'5px 18px',borderRadius:'15px',fontSize:'12px',border:"2px solid #F77000"}}>Delete</span></div>
        <div className="col-5"><span style={{color:'#fff',background:'#F77000',padding:'5px 18px',borderRadius:'15px',fontSize:'12px'}}>See more like this</span></div>
        </div>
  
        </div>
        </div>
        <div style={{border:"1px solid #C4C4C466"}}></div>

        <div className="col-12  mt-2 mb-3">
        <div  >
          <div class="row g-0 px-4">
            <div class="col-4">
              <img src={require('../assests/Images/3.png')} class="img-fluid" alt="..."  />
            </div>
            <div class="col-4">
              <div>
                <p style={{textAlign:'left',lineHeight:"16px"}}>Quarty Watch Leather Watch</p>
                <p style={{textAlign:'left',fontSize:'24px',fontWeight:'600',lineHeight:"0"}}>₹ 12000</p>
                <span style={{textAlign:'left',fontSize:'13px',fontWeight:'600'}}>color:<span>Brown</span></span>
                <p style={{textAlign:'left',fontSize:'13px',fontWeight:'600',color:"#009C2CCF"}}>In Stock</p>
              </div>
            </div>
          </div>
    
    
    
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <div className="col-4 px-4">
          <div style={{background:'#C4C4C430',borderRadius:'2px',justifyContent:'space-between',display:'flex',padding:'5px 2px'}}>
        <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/minus.png')} alt="" />
        <span style={{fontSize:"12px"}}>1</span>
        <img className="img-fluid" style={{height:"12px",width:"12px",marginTop:"3px"}} src={require('../assests/Images/plus.png')} alt="" />
          
          </div>
          </div>
          <div className="col-3"><span style={{color:'#F77000',background:'#fff',padding:'5px 18px',borderRadius:'15px',fontSize:'12px',border:"2px solid #F77000"}}>Delete</span></div>
          <div className="col-5"><span style={{color:'#fff',background:'#F77000',padding:'5px 18px',borderRadius:'15px',fontSize:'12px'}}>See more like this</span></div>
          </div>
    
          </div>
          </div>
    
          <div style={{border:"1px solid #C4C4C466"}}></div>

          <div style={{padding: '20px',marginTop:"10px"}}>
          <p style={{textAlign:'left',fontSize:'18px',fontWeight:'600',lineHeight:"0",textAlign:'center',marginBottom:"20px"}}>SubTotal ₹ 12000</p>
          <p style={{marginTop: 5,backgroundColor: '#DB4700',color: '#fff',border: '1px solid #86E1B0',borderRadius: "20px",padding:"10px 50px",fontSize: "18px",marginRight: "10px",}}>Proceed to buy (3 items)</p>
            </div>
</div>
    </>
  )
}

export default Cart