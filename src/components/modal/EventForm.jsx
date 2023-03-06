import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EventForm = (props) => {
    const { modalId, title, closeModal, eventName, inputChange, checkbox, onCheckBoxChange, showtime, startDate, endDate, onInputChange, color, colors, hdlChange, eventType, buttonText, colorObj } = props;
    return (
        <div><div id="add-event" style={{ color: 'black' }} className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-3">
                        <form >
                            <div className="form-group">
                                <label htmlFor="" className="control-label">Title</label>
                                <input type="text" className='form-control' value={eventName}
                                    onChange={inputChange}
                                    name="event-name" />

                            </div>
                            <div className="form-check">
                                <input type="checkbox" className='form-check-input'

                                    name="event-name"
                                    value={checkbox}
                                    checked={checkbox}

                                    onChange={onCheckBoxChange}
                                />
                                <label htmlFor="" className="control-label">All day event?</label>


                            </div>
                            <div className="form-group ">
                                <label htmlFor="" >start</label>

                                {!showtime ? <div className="row col-12">  <DatePicker showTimeSelect timeFormat="p" timeIntervals={1} dateFormat="Pp" /></div> :
                                    <div className="row col-12">  <DatePicker selected={startDate} onChange={onInputChange('startDate')} /></div>}




                            </div>
                            <div className="form-group ">
                                <label htmlFor="" >end</label>
                                <div className="row col-12">  <DatePicker showTimeSelect timeFormat="p" timeIntervals={1} dateFormat="Pp" /></div>




                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="control-label">Color</label>

                                <select className="form-control form-white" name="event-color" id="">
                                    <option value="">Select color</option>
                                    <option value="">Primary</option>
                                    <option value="">Info</option>
                                    <option value="">Danger</option>
                                    <option value="">Success</option>
                                </select>


                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> </div>
    )
}

export default EventForm