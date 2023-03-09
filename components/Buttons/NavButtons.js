import {
    Button
} from '@chakra-ui/react';

const SignupButton = ({bgColor, textColor, text, borderStyle}) => {
  return (
    <div>
        <Button 
            style={{ 
              backgroundColor: bgColor, 
              color: textColor, 
              border: borderStyle 
            }}

            sx={{
                width: '100px',
                height: '40px',
                borderRadius: '32px',
                fontSize: '.9rem',
                fontWeight: 'bold',
                p: '9px 20px',
                cursor: 'pointer'                
            }}
        >{text}</Button>
    </div>
  )
}

export default SignupButton