import React, { Fragment } from 'react'
import Sidebar from './sidebar/Sidebar'
import Calendar from './calendar/Calendar'
const Main = () => {
    return (
        <div className='wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-12">
                        <div className='card'>

                            <div className='card-body'>
                                <div className='row'>
                                    <Sidebar></Sidebar>
                                    <Calendar></Calendar>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Main