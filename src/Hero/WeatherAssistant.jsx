import  {  useState } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function WeatherAssistant({ weatherData }) {
    const [input, setInput] = useState('');
    const [message, setMessage]=useState([])
    const [adviceMessage, setAdviceMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const inputRef= useRef(null)
    
   
    const handleAskAdvice = async () => {
        const userText = inputRef.current.value.trim();
        if(!userText) return
        setMessage((prev=> [...prev, {text: userText, sender: 'user'}]))
        setInput(input)
        setLoading(true);
        setAdviceMessage('');
        setError(null)
        try{
            const res= await axios.post('/api/assistant',
                {
                    prompt: `Weather ${userText}. Give concise advice and what they should hold along if necessary.`
                }
            )
            const aiText = res.data.choices?.[0]?.messages?.content;
            setMessage((prev) => [...prev, { text: aiText, sender: 'ai' }]);
        }catch(error){
            setError('Unable to get advice. Try again later')
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen  w-full  z-50 justify-center flex items-center relative'>
            <div className='flex flex-col gap-3  justify-between  w-full'> 
            {error &&
             <div className='bg-red-500 gap-2 left-1 justify-start text-white p-4 rounded-xl mb-5 w-1/2'>{error}</div>}
            {adviceMessage && (
                <div className='flex gap-3 bg-white p-3 left-0'><i className='bi bi-robot text-2xl'/>{adviceMessage}</div>
            )}
            <div className='flex flex-col gap-2  right-1  justify-end mb-32 items-end '>
            { message.map((msg, i) => (
                <div key={i}  className={`${msg.sender === 'user' ? 'user' : 'ai'} bg-white rounded-xl p-3 flex flex-col gap-2`}>
                    {msg.text}
                </div>
            ))}
        </div>
            </div>
            <div className='flex w-full p-2  bottom-10  absolute'>
                <input type="text" ref={inputRef} onChange={(e)=>setInput(e.target.value)} placeholder='Ask about the weather...' className='flex p-3 px-4 w-full  rounded-full rounded-r-none outline-secondary bg-white border-2 ' />
                <button onClick={handleAskAdvice} disabled={loading} className='flex p-4 px-5 md:px-10 rounded-r-full bg-secondary text-center justify-center text-white '>{loading ? "Thinking..." : "Ask"}</button>
            </div>

        </div>
    )
}
