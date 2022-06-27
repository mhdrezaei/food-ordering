import React from 'react'

function Footer() {
  return (
    <>
    <footer className='mt-5'>
    <div className='container-fluid bg-dark  px-0'>
        <div className='container' >
            <div className='row align-content-center'>
                <div className='col-xl-6 col-md-6 col-sm-12'>
                    <p className='text-center text-warning my-3' >Social Media</p>
                </div>
                <div className='col-xl-6 col-md-6 col-sm-12'>
                    <p className='text-center text-warning my-3'>Contact Information</p>
                </div>
            </div>
            <hr className='text-warning my-3'/>
            <div className='col-12'>
                <p className='text-center text-light'>
                    copyRight 2022
                </p>
            </div>
        </div>
    </div>
    </footer>
    </>
    
  )
}

export default Footer