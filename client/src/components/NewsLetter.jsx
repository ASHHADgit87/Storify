import React from 'react'

const NewsLetter = () => {
  return (
    <>
    <hr className="border-t-[1px] border-[#ff7f32]" />
    <div 
      id="newsletter" 
      className="flex flex-wrap justify-between  items-center bg-black bg-no-repeat px-8 py-10"
    >
      <div className='ml-16'>
        <h4 className="text-white text-[22px] font-bold">Sign Up For Newsletters</h4>
        <p className="text-[#818ea0] text-sm font-semibold">
          Get E-mail updates about our latest shop and{' '}
          <span className="text-[#ff7f32]">special offers</span>.
        </p>
      </div>
      <div className="flex w-[40%] mr-18">
        <input 
          type="text" 
          placeholder="Enter your email address"
          className="w-full h-[3.125rem] px-5 text-sm border border-transparent bg-white outline-none rounded-l-md"
        />
        <button 
          className="bg-[#ff7f32] text-white whitespace-nowrap px-6 rounded-r-md"
        >
          Sign Up
        </button>
      </div>
    </div>
    <hr className="border-t-[1px] border-[#ff7f32]" />

    </>
  )
}

export default NewsLetter