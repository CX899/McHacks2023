import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';


const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

const Modal = ({handleClose, sendValues}) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const setValues = (e) => {
        e.preventDefault();
        console.log(input1, input2);
        sendValues(input1, input2)
    };  

    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
            onClick={(e) => e.stopPropagation()}
            className='modal'
            variants={flip}
            initial='hidden'
            animate='visible'
            exit='visible'
            >
              <form onSubmit={setValues}>
                  <TextField
                    label="Title"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                  />

                  <TextField
                    label="Enter a date in YYYY-MM-DD format"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                  />
                  
                  <Button type="submit"  onClick={handleClose}>Add Event</Button>
                </form>
            </motion.div>
        </Backdrop>
    )
    }

export default Modal;