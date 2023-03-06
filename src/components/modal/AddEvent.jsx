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
        // customOnChange(() => userHdler1("123"))
        // console.log("-------------------")
        // customOnChange(() => userHdler2) 
        //---non arrow 
        customOnChange(function () {
            return userHdler1Fd("123")
        })
        console.log("-------------------")
        customOnChange(function () {
            return userHdler2Fd
        })
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
        console.log("userhdler--------------HERE", userHdler)
        let currentEvent = "event"
        //userHdler() is = userHdler1("123") do cu phap return khi goi ham ()=>userHdler("123")
        userHdler()(currentEvent)

        //userHdler is not arrow=userHdler1("123") thi 123 work, "event" not work
        //userHdler is arrow= =(()=>userHdler1("123"))(currentEvent)
        //userHdler(currentEvent)
        //this is not work bc: 


    }
    //not a function this is curried function
    const userHdler1 = (firstParamOfUserInpHdlerFunction) => (currenEvent) => {
        console.log("My param: ", firstParamOfUserInpHdlerFunction)
        console.log("My Parent Param: ", currenEvent)
    }
    const userHdler1Fd = function (firstParamOfUserInpHdlerFunction) {
        return function (currenEvent) {
            console.log("My param: ", firstParamOfUserInpHdlerFunction)
            console.log("My Parent Param: ", currenEvent)
        }
    }
    //this is normal hdler function
    const userHdler2 = (currenEvent) => {

        console.log("NORMAL: My Parent Param: ", currenEvent)
    }
    const userHdler2Fd = function (currenEvent) {

        console.log("NORMAL: My Parent Param: ", currenEvent)
    }





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