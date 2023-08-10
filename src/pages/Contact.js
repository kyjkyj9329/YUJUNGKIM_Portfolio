import React from 'react'
import ContactData from '../assets/data/contactdata'
import ContactItem from '../components/ContactItem'

export const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact-container'>
        <div className='contact-main'>
          <h1>저에게 궁금한 점이 있으신가요?</h1>
          <span>버튼을 클릭하거나 메시지를 남겨주세요!</span>
          <div className='contact-list'>
            {ContactData.map((item) => 
              <ContactItem item={item} key={item.id} />
            )}
          </div>
        </div>
        <hr />
        <div className='contact-form'>
          <form>
            <input
              type='text'
              placeholder='이름 또는 닉네임을 입력해주세요
              '
            />
            <input
              type='text'
              placeholder='답변을 받을 이메일을 입력해주세요
              '
            />
            <input
              type='text'
              placeholder='내용을 입력해주세요
              '
            />
            <button
              type='submit'
            >
            전송하기
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
