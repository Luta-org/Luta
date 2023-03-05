import {
    Button
} from '@chakra-ui/react';

const Buttons = ({bgColor, textColor, text, borderStyle}) => {
  return (
    <div>
        <Button 
            style={{ backgroundColor: bgColor, color: textColor, border: borderStyle }}
            sx={{
                w: '120px',
                borderRadius: '15px',
                fontSize: '14px',
                p: '7px 20px',
                cursor: 'pointer'                
            }}
        >{text}</Button>
    </div>
  )
}

export default Buttons