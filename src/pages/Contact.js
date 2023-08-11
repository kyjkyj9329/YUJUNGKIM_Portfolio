import React from 'react'
import ContactData from '../assets/data/contactdata'
import ContactItem from '../components/ContactItem'
import ContactForm from '../components/ContactForm'

export const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact-container'>
        <div className='contact-main'>
          <div className='contact-intro'>
            <h1>저에게 궁금한 점이 있으신가요?</h1>
            <span>버튼을 클릭하거나 메시지를 남겨주세요!</span>
          </div>
          <div className='contact-list'>
            {ContactData.map((item) => 
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
