import React, { useState } from 'react'
import EventForm from './EventForm'

const AddEvent = (props) => {
    const [color, setColor] = useState('')
    const [eventName, setEventName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const inputChange = (event) => {
        //for eventName
        setEventName(event.target.value)
    }
    const onCheckBoxChange = (text) => {
       userInpHdlerFunction("123")("456")
        return (event) => {
            //for all day


            if (event.target.checked == true) {

                setCheckbox(true)
                setShowTime(true)
            } else {

                setCheckbox(false)
                setShowTime(false)
            }
        }

    }
    const handleChange = () => {
        //drop down color

    }

    const customOnChange = (userHdler) => {
        console.log("--------------HERE")
        let currenEvent = "current event object"
        return (firstParamOfUserInpHdlerFunction) => {

            userHdler(firstParamOfUserInpHdlerFunction)(currenEvent)

        }
    }
    const userInpHdlerFunction = (firstParamOfUserInpHdlerFunction) => (currenEvent) => {
        console.log("My param: ", firstParamOfUserInpHdlerFunction)
        console.log("My Parent Param: ", currenEvent)
    }


    // const userInpHdlerFunctionNoParam = function (event) {
    //     console.log("My NOPARAM function have event from parent ", event)


    // }



    const onInputChange = function (propertyName) {

        //ham onInputChange nay sai nhu sau: onInputChange(propertyName)(eventVal)
        //hay cung co nghia la (onInputChange(propertyName))(event)

        return function (eventVal) {

            //startDate enddate

            if (propertyName === 'startdate') {
                setStartDate(eventVal)
            }
            if (propertyName === 'enddate') {
                setEndDate(eventVal)
            }
        }
    }


    const closeModal = () => {

    }

    const createEvent = () => {

    }
    return (
        <div >
            <EventForm
                modalId="add-event"
                title="Add Event"
                closeModal={closeModal}

                eventName={eventName}
                inputChange={inputChange}
                checkbox={checkbox}
                onCheckBoxChange={onCheckBoxChange}
                showTime={showTime}
                startDate={startDate}
                endDate={endDate}

                onInputChange={onInputChange}
                colors={["Primary", "Danger"]}
                color="Primary"
                handleChange={handleChange}
                createEvent={createEvent}


            >
            </EventForm>
        </div>
    )
}

export default AddEvent