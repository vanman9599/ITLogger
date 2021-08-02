import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'

export const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter the first and last name' })
        } else {
            addTech({
                firstName,
                lastName
            })
            //clear fields
            M.toast({ html: `${firstName} ${lastName} added as Tech` })
            setFirstName('')
            setLastName('')

        }

    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h3>New Technicain</h3>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor='firstName' className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor='lastName' className='active'>
                            Last  Name
                        </label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
                </div>
            </div>
        </div>
    )
}
AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}
export default connect(null, { addTech })(AddTechModal)