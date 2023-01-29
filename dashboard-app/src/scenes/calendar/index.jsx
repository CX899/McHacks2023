import Header from '../../components/Header'
import {Box, Typography} from '@mui/material'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import Modal from '../Modal/index.js';
import { useRef, useState } from 'react';

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {setTimeout(() => { setModalOpen(false);}, 1)};
  const open = () => setModalOpen(true);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const calendarRef = useRef(null);

  const receivedValues = (input1, input2) => {
    const calendar = calendarRef.current.calendar;
    setInput1(input1);
    setInput2(input2);
    var date = new Date(input2 + 'T00:00:00');
    console.log(date);

    const newEvent = {
      title: input1,
      start: date,
      allDay: true
    }

    if (!isNaN(date.valueOf())) {
      calendar.addEvent(newEvent);
  
      //alert('Great. Now, update your database...');
      // call your database and update it add the event objects in here
  
    } else {
      alert('Invalid date.');
    }
  }

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
        ref={calendarRef}
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
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} sendValues={receivedValues}/>}
    </Box>
    </div>
    </div>
  )
}

export default Calendar