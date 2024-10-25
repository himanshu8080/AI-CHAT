import { useState } from 'react'
import axios from 'axios';

function App() {
  const [question , setQuestion] = useState("");
  const [answer ,setAnswer] = useState("");
  
  async function generateAnswer(){
    setAnswer("loading...");
    const response =await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAHmTDX95QmQ4gx_XUx8xB9d2OYE376nG0",
      method: "POST",
      data:{
        contents:[{
          parts:[{text:question}]
        },],
      },
      });
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
      <h1>AI Chat -VANI</h1>
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

