import React from 'react'

const ContactItem = ({ item }) => {
  return (
    <div className='ContactItem'>
      <a href={item.url}>
        <img src={item.image} />
      </a>
      <div className='speech-bubble'>
        {item.url}
      </div>
    </div>
  )
}

export default ContactItem
