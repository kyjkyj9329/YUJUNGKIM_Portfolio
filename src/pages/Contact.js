import React, { useEffect, useState } from 'react'
// import ContactData from '../assets/data/contactdata'
import ContactItem from '../components/ContactItem'
import ContactForm from '../components/ContactForm'

export const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const getContact = async () => {
    let url = `https://my-json-server.typicode.com/kyjkyj9329/YUJUNGKIM_Portfolio/contact`;
    let response = await fetch(url);
    let data = await response.json();
    setContactList(data);
    
  }
  console.log("contactlist", contactList)
  useEffect(() => {
    getContact();
  }, [])
  return (
    <div className='Contact'>
      <div className='contact-container'>
        <div className='contact-main'>
          <div className='contact-intro'>
            <h1>저에게 궁금한 점이 있으신가요?</h1>
            <span>버튼을 클릭하거나 메시지를 남겨주세요!</span>
          </div>
          <div className='contact-list'>
            {contactList.map((item) => 
              <ContactItem item={item} key={item.id} />
            )}
          </div>
        </div>
        <hr />
        <div className='contact-form'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
