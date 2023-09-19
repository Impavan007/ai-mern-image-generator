import React from 'react'



const FormField = ({name,isSurpriseMe,value,labelName,type,placeholder,handleChange,handleSurpriseMe}) => {
  return (
    <div>
        <div className='flex item-center gap-2 mb-2'>
            <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{labelName}</label>
            {isSurpriseMe && (
                <button className='font semi-bold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black ' type='button' onClick={handleSurpriseMe}>Surprise me</button>
            )}

        </div>
        <input type={type} id={name} name={name} placeholder={placeholder} value={value} 
        onChange={handleChange} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
         outline-none block w-full p-3'/>
    </div>
  )
}

export default FormField