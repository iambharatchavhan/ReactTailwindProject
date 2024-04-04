import React from 'react'

const Button = ({textColor,background,content}) => {
  return (
    <>
    <button className={`${background} ${textColor} border-none px-5 py-2 rounded-full text-xl mx-4 outline-none `}>{content}</button>
    <button className='  mt-4'></button>

    </>
  )
}

export default Button