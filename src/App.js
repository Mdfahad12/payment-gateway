import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount!");
    }else{
      var options = {
        key: "rzp_test_8uh70UDOEw5eSV",
        key_secret:"ojT7xA3DHqmfWiBiS5TQiCb8",
        amount:100* amount,
        currency:"INR",
        name:"Task Project",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Md Fahad",
          email:"mdfahadalam6260@gmail.com",
          contact:"6260579953"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <>
     <h2>Razorpay Payment Integration Gateway</h2>
    <div className="App">
     <br/>
     <input type="number" placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} className='input-field' />
     <br/><br/>
     <button onClick={handleSubmit} className='pay-btn'>Pay now</button>
    </div>
    </>
  );
}

export default App;