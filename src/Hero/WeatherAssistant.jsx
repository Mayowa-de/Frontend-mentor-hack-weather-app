import  { useState } from 'react'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function WeatherAssistant({ weatherData }) {
    const [input, setInput] = useState('');
    const [message, setMessage]=useState([])
    const [adviceMessage, setAdviceMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    
    const handleAskAdvice = async () => {
        const userText =input.value.trim();
        if(!userText) return
        setMessage((prev=> [...prev, {text: userText, sender: 'user'}]))
        setInput('')
        setLoading(true);
        setAdviceMessage('');
        setError(null)
        try{
            const res= await axios.post('/api/assistant',
                {
                    prompt: `Weather ${input}. Give concise advice and what they should hold along if necessary.`
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
        <div className='min-h-screen bg-primary w-full absolute z-50 justify-center flex items-center'>
            {error && <div className='bg-red-500 text-white p-3 rounded-full mb-3'>{error}</div>}
            {adviceMessage && (
                <div className='flex gap-3'><i className='bi bi-robot text-2xl'/>{adviceMessage}</div>
            )}
            {message.map((msg, i) => (
                <div key={i} msg={text} className={`${msg.sender === 'user' ? 'user' : 'ai'} bg-white rounded-full p-3`}>
                    
                </div>
            ))}
            <div className='flex w-full p-2 md:w-1/2 bottom-10  absolute'>
                <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Ask about the weather...' className='flex p-3 px-4 w-full  rounded-full rounded-r-none outline-secondary bg-white border-2 ' />
                <button onClick={handleAskAdvice} disabled={loading} className='flex p-4 px-5 md:px-7 rounded-r-full bg-secondary text-center justify-center text-white '>{loading ? "Thinking..." : "Ask"}</button>
                {msg.text}
            </div>

        </div>
    )
}
