import React from 'react'

export default function Footer() {

  return (

    <footer className='bg-blue-800 w-full'>    

  <div className='mx-8 sm:block md:hidden'>
 
  <div className='flex gap-24'>

    <ul className=' text-white font-bold p-2' > 
    
    Top Doctors

    <li className='font-thin text-sm leading-6'> Dr. Liaquat Majeed </li>
    <li className='font-thin text-sm leading-6'> Dr. Nayyer Iqbal </li>
    <li className='font-thin text-sm leading-6'> Dr. Hamza Bashir </li>
    </ul>
    
    <ul className=' text-white font-bold p-2'> 

    Top Hospitals 

    <li className='font-thin text-sm leading-6'> Doctors Hospital </li>
    <li className='font-thin text-sm leading-6' > National Hospital </li>
    <li className='font-thin text-sm leading-6'> Jinnah Hospital </li>
    </ul>

    </div>

    <div className='flex gap-24'>

    <ul className=' flex-col  text-white  font-bold p-2'> 
    Top Labs 
    <li className='font-thin text-sm leading-6 '> Al-Nasr Lab </li>
    <li className='font-thin text-sm leading-6'> Chughtai Lab </li>
    <li className='font-thin text-sm leading-6'> CRC Lab </li>
    </ul>
     <ul className=' flex-col  text-white font-bold p-2 mx-9'> 
    Top CITIES 
    <li className='font-thin text-sm leading-6'> LAHORE </li>
    <li className='font-thin text-sm leading-6'> ISLAMABAD </li>
    <li className='font-thin text-sm leading-6'> FAISALABAD </li>
    </ul>
</div>



    </div>

    <div className='mx-8 hidden md:block lg:hidden'> 

    <ul className=' flex gap-36 p-2'>
    <ul className=' flex-col  text-white font-bold p-2' > 
    Top Doctors
    <li className='font-thin text-sm leading-6'> Dr. Liaquat Majeed </li>
    <li className='font-thin text-sm leading-6'> Dr. Nayyer Iqbal </li>
    <li className='font-thin text-sm leading-6'> Dr. Hamza Bashir </li>
    </ul>
    <ul className=' flex-col  text-white  font-bold p-2'> 
    Top Hospitals 
    <li className='font-thin text-sm leading-6'> Doctors Hospital </li>
    <li className='font-thin text-sm leading-6' > National Hospital </li>
    <li className='font-thin text-sm leading-6'> Jinnah Hospital </li>
    </ul>
    <ul className=' flex-col  text-white  font-bold p-2'> 
    Top Labs 
    <li className='font-thin text-sm leading-6 '> Al-Nasr Lab </li>
    <li className='font-thin text-sm leading-6'> Chughtai Lab </li>
    <li className='font-thin text-sm leading-6'> CRC Lab </li>
    </ul>
     <ul className=' flex-col  text-white font-bold p-2 mx-9'> 
    Top CITIES 
    <li className='font-thin text-sm leading-6'> LAHORE </li>
    <li className='font-thin text-sm leading-6'> ISLAMABAD </li>
    <li className='font-thin text-sm leading-6'> FAISALABAD </li>
    </ul>
    </ul>
    
    </div>    

    <div className='mx-8 hidden lg:block'> 

    <ul className=' flex gap-52 p-2'>
    <ul className=' flex-col  text-white font-bold p-2' > 
    Top Doctors
    <li className='font-thin text-sm leading-6'> Dr. Liaquat Majeed </li>
    <li className='font-thin text-sm leading-6'> Dr. Nayyer Iqbal </li>
    <li className='font-thin text-sm leading-6'> Dr. Hamza Bashir </li>
    </ul>
    <ul className=' flex-col  text-white  font-bold p-2'> 
    Top Hospitals 
    <li className='font-thin text-sm leading-6'> Doctors Hospital </li>
    <li className='font-thin text-sm leading-6' > National Hospital </li>
    <li className='font-thin text-sm leading-6'> Jinnah Hospital </li>
    </ul>
    <ul className=' flex-col  text-white  font-bold p-2'> 
    Top Labs 
    <li className='font-thin text-sm leading-6 '> Al-Nasr Lab </li>
    <li className='font-thin text-sm leading-6'> Chughtai Lab </li>
    <li className='font-thin text-sm leading-6'> CRC Lab </li>
    </ul>
     <ul className=' flex-col  text-white font-bold p-2 mx-9'> 
    Top CITIES 
    <li className='font-thin text-sm leading-6'> LAHORE </li>
    <li className='font-thin text-sm leading-6'> ISLAMABAD </li>
    <li className='font-thin text-sm leading-6'> FAISALABAD </li>
    </ul>
    </ul>
    
    </div>

    <div className='mt-7 mx-6 sm:block md:hidden'>


    <ul className='flex mt-5' >
        <li className='flex-col'> 
            <div className='flex'> 
            <img className='w-25 max-h-20' src='doctor.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  PMC VERIFIED <br></br> DOCTORS </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4 mt-3'> Authentic and update Information </p>
            </li>
    </ul>
        
    <ul className='flex mt-5'>
            <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='security.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  12/7 CUTOMER <br></br> SUPPORT </h1>
            </div>
            <p className='text-white font-thin text-xs mt-3'> Always Available for Customers Help Support </p>
            </li>
        </ul>    
        
    <ul className='flex mt-5' >
        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-13' src='pmc.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-6'>  ONLINE MEDICAL <br></br> CHECKUP  </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4'> Complete Online Medical Checkup at Home </p>
            </li>
            </ul>
            
    <ul className='flex mt-5'>
        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='ewallet.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-2'>  SECURE ONLINE  <br></br> PAYMENTS </h1>
            </div>
            <p className='text-white font-thin text-xs mt-2'> Secure Online Payments through Credit <br></br>and Debit Cards </p>
            </li>

        
        
    </ul>

    </div>

    <div className='mt-7 mx-6 hidden md:block lg:hidden'>


    <ul className='flex mt-5 gap-60' >
        <li className='flex-col'> 
            <div className='flex'> 
            <img className='w-25 max-h-20' src='doctor.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  PMC VERIFIED <br></br> DOCTORS </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4 mt-3'> Authentic and update Information </p>
            </li>
    
        
            <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='security.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  12/7 CUTOMER <br></br> SUPPORT </h1>
            </div>
            <p className='text-white font-thin text-xs mt-3'> Always Available for Customers Help Support </p>
            </li>
        </ul>    
        
    <ul className='flex mt-5 gap-48' >
        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-13' src='pmc.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-6'>  ONLINE MEDICAL <br></br> CHECKUP  </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4'> Complete Online Medical Checkup at Home </p>
            </li>

        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='ewallet.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-2'>  SECURE ONLINE  <br></br> PAYMENTS </h1>
            </div>
            <p className='text-white font-thin text-xs mt-2'> Secure Online Payments through Credit <br></br>and Debit Cards </p>
            </li>

        
        
    </ul>

    </div>




    <div className='h-40 mt-7 mx-6 hidden lg:block' >

    <ul className='flex gap-28'>

        <li className='flex-col'> 
            <div className='flex'> <img className='w-25 max-h-20' src='doctor.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  PMC VERIFIED <br></br> DOCTORS </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4 mt-3'> Authentic and update Information </p>
            </li>
        
        
            <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='security.png'></img> 
            <h1 className='text-white font-semibold text-md mt-3'>  12/7 CUTOMER <br></br> SUPPORT </h1>
            </div>
            <p className='text-white font-thin text-xs mt-3'> Always Available for Customers Help Support </p>
            </li>
            
        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-13' src='pmc.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-6'>  ONLINE MEDICAL <br></br> CHECKUP  </h1>
            </div>
            <p className='text-white font-thin text-xs mx-4'> Complete Online Medical Checkup at Home </p>
            </li>
            
        <li className='flex-col'> 
            <div className='flex'> <img className='w-20 h-15' src='ewallet.png'></img> 
            <h1 className='text-white font-semibold text-sm mt-2'>  SECURE ONLINE  <br></br> PAYMENTS </h1>
            </div>
            <p className='text-white font-thin text-xs mt-2'> Secure Online Payments through Credit <br></br>and Debit Cards </p>
            </li>

        
        
    </ul>

    </div>


    <div className='text-sky-100 border-spacing-0 text-sm font-mono'>
    <p className='text-center hidden md:block mt-8'> © Copyright @ 2023 E-Clinic Telemedicine Pvt. Ltd. - All Rights Reserved </p>
    
    <p className='text-center mt-5 sm:block md:hidden'> © Copyright @ 2023 E-Clinic Telemedicine Pvt. Ltd. <br></br> All Rights Reserved </p>
    
    
    </div>

    </footer>












  )
}
