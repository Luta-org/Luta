import {
    Box,
    Text
} from '@chakra-ui/react';

const Form = () => {
  return (
    <div className='h-[50vh] flex justify-center items-center bg-white'>
      <form>
        <Text>Fields marked * are required</Text>
        
        <label>
            First Name*
            <input
                type={'text'}
                required 
            />
        </label>
      </form>
    </div>
  )
}

export default Form
