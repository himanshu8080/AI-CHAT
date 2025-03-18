import { useState } from 'react'
import axios from 'axios';

function App() {
  const [question , setQuestion] = useState("");
  const [answer ,setAnswer] = useState("");
  
  async function generateAnswer(){
    setAnswer("loading...");

   
    

    const response =await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBJsFQon7QDK7QRslWWBGPxhbuUJBcWB0k" ,
      method: "POST",
      data:{
        contents:[{
          parts:[{text:question}]
        },],
      },
      });
      
      console.log(response.data);
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
      setQuestion(''); 
  }
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      generateAnswer();
    }
  };
  return (
    <>
    <div className='parentArea'>

    <div className='heading'>
      <h1>AI Chat</h1>
      </div>

      <div className='box'>
       <pre> {answer}</pre>
     </div>

     <div className='chatArea'>
     <textarea value={question} onChange={(e)=> setQuestion(e.target.value)}cols="30" rows="10"  onKeyDown={handleKeyPress}></textarea> 
     <button onClick={generateAnswer}>Answer</button>
     </div>


   
     
    </div>
     
    </>
  );
}

export default App;
