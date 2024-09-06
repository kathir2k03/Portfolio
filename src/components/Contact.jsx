import React from 'react'

const Contact = () => {
    
    const config = {
        info:"If you want to discuss more in detail, please contact me",
        mail:"m.kathiravan2003@gmail.com",
        phone:"91+9629873947",
    }

  return (
    <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
    <div className='flex flex-col items-center'>
    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
    <p className='pb-5'>{config.info}</p>
    <a href='mailto:m.kathiravan2003@gmail.com' className='py-2'><span className='font-bold'>Email : </span>{config.mail}</a>
    <p className='py-2'><span className='font-bold'>Phone : </span>{config.phone}</p>
    </div>
    </section>
  )
}

export default Contact;