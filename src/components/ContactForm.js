import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sendMsg, setSendMsg] = useState('메일 전송');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('none');
  const [errorEmail, setErrorEmail] = useState('none');
  const [errorMessage, setErrorMessage] = useState('none');

  const sendEmail = () => {
    setSendMsg('Sending mail');
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(`${service_id}`, `${template_id}`, form.current, `${public_key}`)
    .then(() => {
      setSendMsg('성공적으로 전송했습니다!');
      for(let i = 0; i < 4; i++) {
        form.current[i].value = '';
      }
      setTimeout(()=>{
        setSendMsg('메일 전송');
      }, 2000);
    }, () => {
        setSendMsg('메일 전송에 실패했어요..');
        setTimeout(()=>{
          setSendMsg('메일 전송');
        },2000);
    });
  };

  const checkSubmit = (e) => {
    e.preventDefault();
    if(userName == "" && email == "" && message == "") {
      setErrorName('block');
      setErrorEmail('block');
      setErrorMessage('block');
    }
    if(userName == "") {
        setErrorName('block');
      } else {
        setErrorName('none');
        if (email == "") {
          setErrorEmail('block');
        } else {
          setErrorEmail('none');
          if (message == "") {
            setErrorMessage('block');
          } else {
            setErrorMessage('none');
            sendEmail();
          }
        }
      }
  }
  return (
      <form className='ContactForm' ref={form} onSubmit={checkSubmit}>
        <div>
          <input 
            type="text" 
            name="user_name" 
            placeholder='이름 또는 닉네임을 입력해주세요' 
            userName={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span style={{display: `${errorName}`}}>* 이름 또는 닉네임을 입력해주세요.</span>
        </div>
        <div>
          <input 
            type="email" 
            name="user_email" 
            placeholder='답변을 받을 이메일을 입력해주세요' 
            email={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <span style={{display: `${errorEmail}`}}>* 메일을 적어주세요.</span>

        </div>
        <div>
          <textarea
            name="message" 
            rows={10}
            placeholder='내용을 입력해주세요' 
            message={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
          <span style={{display: `${errorMessage}`}}>* 메시지를 적어주세요.</span>
        </div>
        <input type="submit" value={sendMsg} />
      </form>
  )
}

export default ContactForm