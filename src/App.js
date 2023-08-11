import {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [time1,setTime1] = useState(54000);
  const [timerOn1,setTimerOn1] = useState(false);
  const [peroff1,setPer1] = useState(false);

  const [time2,setTime2] = useState(54000);
  const [timerOn2,setTimerOn2] = useState(false);
  const [peroff2,setPer2] = useState(false);

  const [time3,setTime3] = useState(54000);
  const [timerOn3,setTimerOn3] = useState(false);
  const [peroff3,setPer3] = useState(false);


  const [time4,setTime4] = useState(54000);
  const [timerOn4,setTimerOn4] = useState(false);
  const [peroff4,setPer4] = useState(false);

  const [time5,setTime5] = useState(54000);
  const [timerOn5,setTimerOn5] = useState(false);
  const [peroff5,setPer5] = useState(false);


  const setTimer = () => {
      
      if(timerOn5===true && peroff1 === false){
         setTimerOn5(false);
         setTimerOn1(true);
      }
      else if(timerOn5===true && peroff1 === true && peroff2 === false){
        setTimerOn5(false);
        setTimerOn2(true);
      }
      else if(timerOn5===true && peroff1 === true && peroff2 === true  && peroff3 === false){
        setTimerOn5(false);
        setTimerOn3(true);
      }
      else if(timerOn5===true && peroff1 === true && peroff2 === true  && peroff3 === true && peroff4 === false){
        setTimerOn5(false);
        setTimerOn4(true);
        
      }
      else if(timerOn5===true && peroff1 === true && peroff2 === true  && peroff3 === true && peroff4 === true){
        setTimerOn5(true);
      }



      else if (timerOn1===true  && peroff2 === false ){
        setTimerOn1(false);
        setTimerOn2(true);
      }
      else if(timerOn1===true && peroff2 === true && peroff3 === false){
        setTimerOn1(false);
        setTimerOn3(true);
      }
      else if(timerOn1===true && peroff2 === true && peroff3 === true  && peroff4 === false){
        setTimerOn1(false);
        setTimerOn4(true);
      }
      else if(timerOn1===true && peroff2 === true && peroff3 === true  && peroff4 === true && peroff5 === false){
        setTimerOn1(false);
        setTimerOn5(true);
      }
      else if(timerOn1===true && peroff2 === true && peroff3 === true  && peroff4 === true && peroff5 === true){
        setTimerOn1(true);
      }




      else if (timerOn2===true  && peroff3 === false) {
        setTimerOn2(false);
        setTimerOn3(true)
      }
      else if(timerOn2===true && peroff3 === true && peroff4 === false){
        setTimerOn2(false);
        setTimerOn4(true);
      }
      else if(timerOn2===true && peroff3 === true && peroff4 === true  && peroff5 === false){
        setTimerOn2(false);
        setTimerOn5(true);
      }
      else if(timerOn2===true && peroff3 === true && peroff4 === true  && peroff5 === true && peroff1 === false){
        setTimerOn2(false);
        setTimerOn1(true);
      }
      else if(timerOn2===true && peroff3 === true && peroff4 === true  && peroff5 === true && peroff1 === true){
        setTimerOn2(true);
      }






      else if (timerOn3===true  && peroff4 === false) {
        setTimerOn3(false);
        setTimerOn4(true)
      }
      else if(timerOn3===true && peroff4 === true && peroff5 === false){
        setTimerOn3(false);
        setTimerOn5(true);
      }
      else if(timerOn3===true && peroff4 === true && peroff5 === true  && peroff1 === false){
        setTimerOn3(false);
        setTimerOn1(true);
      }
      else if(timerOn3===true && peroff4 === true && peroff5 === true  && peroff1 === true && peroff2 === false){
        setTimerOn3(false);
        setTimerOn2(true);
      }
      else if(timerOn3===true && peroff4 === true && peroff5 === true  && peroff1 === true && peroff2 === true){
        setTimerOn3(true);
      }




      else if (timerOn4===true  && peroff5 === false) {
        setTimerOn4(false);
        setTimerOn5(true)
      }
      else if(timerOn4===true && peroff5 === true && peroff1 === false){
        setTimerOn4(false);
        setTimerOn1(true);
      }
      else if(timerOn4===true && peroff5 === true && peroff1 === true  && peroff2 === false){
        setTimerOn4(false);
        setTimerOn2(true);
      }
      else if(timerOn4===true && peroff5 === true && peroff1 === true  && peroff2 === true && peroff3 === false){
        setTimerOn4(false);
        setTimerOn3(true);
      }
      else if(timerOn4===true && peroff5 === true && peroff1 === true  && peroff2 === true && peroff3 === true){
        setTimerOn4(true);
      }
  }

  const handlePause = () => {
    setTimerOn1(false);
    setTimerOn2(false);
    setTimerOn3(false);
    setTimerOn4(false);
    setTimerOn5(false);
  }

  useEffect(() =>{
    let interval = null;
   if(timerOn1 ){
      interval = setInterval(()=>{
        
        setTime1(prevTime => prevTime -1)},10)
    }
    else {clearInterval(interval)}
    return () => clearInterval(interval)
  },[timerOn1])

  useEffect(() =>{
   if(time1 ===0){
     setTime1(-2200);
     setPer1(true);
     setTimerOn1(false);

     if(peroff2 === false) setTimerOn2(true);
     else if(peroff3 === false)setTimerOn3(true);
     else if(peroff4 === false)setTimerOn4(true);
     else if(peroff5 === false)setTimerOn5(true);
      
    }

    else if (time1 < 0 && time1>= -2000){
      setPer1(true);
      setTimerOn1(false);

     }
  },[time1, peroff2, peroff3, peroff4, peroff5])

  useEffect(() =>{
    let interval = null;
    if(timerOn2){
      interval = setInterval(()=>{
        setTime2(prevTime => prevTime -1)
      },10)
    }
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timerOn2])

  useEffect(() =>{
    if(time2===0){
      setTime2(-2200);
      setPer2(true);
      setTimerOn2(false);

      if(peroff3 === false)setTimerOn3(true);
       else if(peroff4 === false)setTimerOn4(true);
       else if(peroff5 === false)setTimerOn5(true);
       else if(peroff1 === false) setTimerOn1(true);
      }

      else if (time2 < 0 && time2>= -2000){
        setPer2(true);
        setTimerOn2(false);
  
       }
   },[time2, peroff3, peroff4, peroff5, peroff1])

  useEffect(() =>{
    let interval = null;
    if(timerOn3){
      interval = setInterval(()=>{
        setTime3(prevTime => prevTime -1)
      },10)
    }
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timerOn3])

  useEffect(() =>{
    if(time3 ===0){
      setTime3(-2200);
      setPer3(true);
      setTimerOn3(false);

      if(peroff4 === false) setTimerOn4(true);
      else if(peroff5 === false)setTimerOn5(true);
       else if(peroff1 === false) setTimerOn1(true);
      else if(peroff2 === false)setTimerOn2(true);
       
     }

     else if (time3 < 0 && time3>= -2000){
      setPer3(true);
      setTimerOn3(false);

     }
   },[time3, peroff4, peroff5, peroff1, peroff2])

  useEffect(() =>{
    let interval = null;
    if(timerOn4){
      interval = setInterval(()=>{
        setTime4(prevTime => prevTime -1)
      },10)
    }
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timerOn4])

  useEffect(() =>{
    if(time4 ===0){
      setTime4(-2200);
      setPer4(true);
      setTimerOn4(false);

      if(peroff5 === false) setTimerOn5(true);
      else if(peroff1 === false)setTimerOn1(true);
       else if(peroff2 === false) setTimerOn2(true);
      else if(peroff3 === false)setTimerOn3(true);
       
     }
     else if (time4 < 0 && time4>= -2000){
      setPer4(true);
      setTimerOn4(false);

     }
   },[time4, peroff5, peroff1, peroff2, peroff3])


  useEffect(() =>{
    let interval = null;
    if(timerOn5){
      interval = setInterval(()=>{
        setTime5(prevTime => prevTime -1)
      },10)
    }
    else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timerOn5])

  useEffect(() =>{
    if(time5 ===0){
      
      setPer5(true);
      setTimerOn5(false);

      if(peroff1 === false) setTimerOn1(true);
      else if(peroff2 === false)setTimerOn2(true);
       else if(peroff3 === false) setTimerOn3(true);
      else if(peroff4 === false)setTimerOn4(true);
       
     }
     else if (time5 < 0 && time5>= -2000){
      setPer5(true);
      setTimerOn5(false);

     }

   },[time5, peroff1, peroff2, peroff3, peroff4])

   const handlecheckmate1 = () =>{
    setPer1(true);
    setTime1(-2200);
   }

   const handlecheckmate2 = () =>{
    setPer2(true);
    setTime2(-2200);
   }

   const handlecheckmate3 = () =>{
    setPer3(true);
    setTime3(-2200);
   }

   const handlecheckmate4 = () =>{
    setPer4(true);
    setTime4(-2200);
   }

   const handlecheckmate5 = () =>{
    setPer5(true);
    setTime5(-2200);
   }

  return (
   
    <div class = "overall">
      <div className = "clocks">
      <div className = "timer1">

        {time1 > 0 ? 

         <div className = "sub1a">
        <div>{("0" + Math.floor(time1/6000)%60).slice(-2)}:</div>
        <div>{("0" + Math.floor(time1/100)%60).slice(-2)}</div>
        </div> :
        <div className = "sub1a">
        <div>{"00"}:</div>
        <div>{"00"}</div>
        </div>

        }
       

        <div className = "sub1b">
        <button onClick = {()=> setTime1(prev => prev-2000)}>Penalty</button>
        <button onClick = {()=> setTime1(prev => prev+100)} className = "button1b2">Increment</button>
         <button onClick = {()=> setTimerOn1(true)}>Start Here</button>
         <button onClick = {handlecheckmate1}>X</button>
        </div>
        
      </div>
      
      <br></br>

      <div className = "timer2">

       
      {time2 > 0 ? 

<div className = "sub2a">
<div>{("0" + Math.floor(time2/6000)%60).slice(-2)}:</div>
<div>{("0" + Math.floor(time2/100)%60).slice(-2)}</div>
</div> :
<div className = "sub2a">
<div>{"00"}:</div>
<div>{"00"}</div>
</div>

}

        <div className = "sub2b">
        <button onClick = {()=> setTime2(prev => prev-2000)}>Penalty</button>
        <button onClick = {()=> setTime2(prev => prev+100)} className = "button2b2">Increment</button>
         <button onClick = {()=> setTimerOn2(true)}>Start Here</button>
         <button onClick = {handlecheckmate2}>X</button>
         </div>
       
      </div>
      <br></br>


      <div className = "timer3">

       
      {time3 > 0 ? 

<div className = "sub3a">
<div>{("0" + Math.floor(time3/6000)%60).slice(-2)}:</div>
<div>{("0" + Math.floor(time3/100)%60).slice(-2)}</div>
</div> :
<div className = "sub3a">
<div>{"00"}:</div>
<div>{"00"}</div>
</div>

}
        
        <div className = "sub3b">
        <button onClick = {()=> setTime3(prev => prev-2000)}>Penalty</button>
        <button onClick = {()=> setTime3(prev => prev+100)} className = "button3b2">Increment</button>
        <button onClick = {()=> setTimerOn3(true) }>Start Here</button>
        <button onClick = {handlecheckmate3}>X</button>
        </div>
        
      </div>
      
      <br></br>

      <div className = "timer4">

     
      {time4 > 0 ? 

<div className = "sub4a">
<div>{("0" + Math.floor(time4/6000)%60).slice(-2)}:</div>
<div>{("0" + Math.floor(time4/100)%60).slice(-2)}</div>
</div> :
<div className = "sub4a">

<div>{"00"}:</div>
<div>{"00"}</div>
</div>

}
      <div className = "sub4b">
        <button onClick = {()=> setTime4(prev => prev-2000)}>Penalty</button>
        <button onClick = {()=> setTime4(prev => prev+100)} className = "button4b2">Increment</button>
        <button onClick = {()=> setTimerOn4(true)}>Start Here</button>
        <button onClick = {handlecheckmate4}>X</button>
        </div>
      
      </div>

      <br></br>

      <div className = "timer5">

      
      {time5 > 0 ? 

<div className = "sub5a">
<div>{("0" + Math.floor(time5/6000)%60).slice(-2)}:</div>
<div>{("0" + Math.floor(time5/100)%60).slice(-2)}</div>
</div> :
<div className = "sub5a">

<div>{"00"}:</div>
<div>{"00"}</div>
</div>

}

       <div className = "sub5b">
        <button onClick = {()=> setTime5(prev => prev-2000)}>Penalty</button>
        <button onClick = {()=> setTime5(prev => prev+100)} className = "button5b2">Increment</button>
        <button onClick = {()=> setTimerOn5(true)}>Start Here</button>
        <button onClick = {handlecheckmate5}>X</button>
      </div> 
        
      </div>
      
      <br></br>

      <div class = "main">
      {(time1===54000) ?
          <button onClick={() => setTimerOn1(true)} className = "btn">Start</button>
        :null}
      {(time1!==54000) ?
        <button onClick={setTimer} className = "btn">Next timer</button>:null}
      <button onClick = {handlePause} >Pause</button>
      </div>

      </div>
      
    </div>
  );
}

export default App;
