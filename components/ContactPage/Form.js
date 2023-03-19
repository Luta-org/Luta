import {
    Box,
    Text
} from '@chakra-ui/react';
import Buttons from '../Buttons/Button';

const Form = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center bg-white'>
      <form className='w-300px md:w-320px border-2 border-[#D1FFF7] p-4 rounded pb-8'>
        <Text className='text-sm font-bold mb-4'>Fields marked * are required</Text>
        
        <div className='flex justify-between items-center mb-6'>
          <label className='block text-sm pr-3 md:pr-5'>
              First Name*
              <input
                type={'text'}
                required 
                className='w-full block border-2 border-solid border-[#5A5B5B] rounded p-2 text-sm mt-[.5rem]'
              />
          </label>

          <label className='block text-sm'>
              Second Name
              <input
                type={'text'}
                className='w-full block border-2 border-solid border-[#5A5B5B] rounded p-2 text-sm mt-[.5rem]'
              />
          </label>
        </div>

        <label className='block text-sm mb-6'>
          Email address*
          <input
            type={'email'}
            required 
            className='w-full block border-2 border-solid border-[#5A5B5B] rounded p-2 text-sm mt-[.5rem]'
        />
        </label>

        <label className='block text-sm pr-3 md:pr-5 mb-12'>
          Inquiry*
          
          <textarea className='w-full block border-2 border-solid border-[#5A5B5B] rounded p-2 text-sm mt-[.5rem]'></textarea>
        </label>

        <Buttons 
          text={'Submit'}
          bgColor={'#1affd5'}
          textColor={'#00072d'}
        />
      </form>
    </div>
  )
}

export default Form
