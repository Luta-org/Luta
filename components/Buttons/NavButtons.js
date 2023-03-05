import {
    Button
} from '@chakra-ui/react';

const SignupButton = ({bgColor, textColor, text, borderStyle}) => {
  return (
    <div>
        <Button 
            style={{ backgroundColor: bgColor, color: textColor, border: borderStyle }}
            sx={{
                borderRadius: '10px',
                fontSize: '14px',
                p: '7px 20px',
                cursor: 'pointer'                
            }}
        >{text}</Button>
    </div>
  )
}

export default SignupButton