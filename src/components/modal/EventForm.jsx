import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EventForm = (props) => {
    console.log("........", props)
    const { modalId, title, closeModal, eventName, inputChange, checkbox, onCheckBoxChange, showTime, startDate, endDate, onInputChange, color, colors, hdlChange, createEvent, buttonText, colorObj } = props;
    return (
        <div><div id={modalId} style={{ color: 'black' }} className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
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

                                    onChange={event => onCheckBoxChange()(event)}
                                />
                                <label htmlFor="" className="control-label">All day event?</label>


                            </div>
                            <div className="form-group ">
                                <label htmlFor="" >start</label>

                                {!showTime ?
                                    <div className="row col-12">
                                        <DatePicker
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={1}
                                            dateFormat="Pp"
                                            selected={startDate}
                                            onChange={(event) => onInputChange('startdate')(event)} />
                                    </div> :
                                    <div className="row col-12">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={onInputChange('startdate')} />
                                    </div>}




                            </div>
                            <div className="form-group ">
                                <label htmlFor="" >end</label>
                                {!showTime ?
                                    <div className="row col-12">
                                        <DatePicker
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={1}
                                            dateFormat="Pp"
                                            selected={endDate}
                                            onChange={onInputChange('enddate')} />
                                    </div> :
                                    <div className="row col-12">
                                        <DatePicker
                                            selected={endDate}
                                            onChange={onInputChange('enddate')} />
                                    </div>}




                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="control-label">Color</label>

                                <select className="form-control form-white" name="event-color" id="" onChange={hdlChange}>
                                    <option key={color.toLowerCase()} value={color}>Select color</option>
                                    {
                                        colors.map(color => <option>{color}</option>)
                                    }
                                </select>


                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={createEvent} disabled={!eventName || !startDate || !endDate || !color}>Save</button>
                    </div>
                </div>
            </div>
        </div> </div>
    )
}

export default EventForm