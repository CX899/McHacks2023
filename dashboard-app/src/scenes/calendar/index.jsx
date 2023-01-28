import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import Modal from '../Modal/index.js';
import { useState } from 'react';

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleOpen = () => {
    (modalOpen ? close() : open());
  }

  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Calendar" subtitle="Always know when thing's happen"/>
        <FullCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'addEventButton',
        }}
        customButtons={{
          addEventButton: {
            text: 'Add Event',
            click: () => {
              handleOpen();
              console.log('clicked the button!');
            }
          },
        }}
        plugins={[ dayGridPlugin ]}
        height="auto"
        />
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
    </Box>
    </div>
    </div>
  )
}

export default Calendar