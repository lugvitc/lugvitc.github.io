// Edit this file to write your code
// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QRcode from './qrcode_payus.png';
import useFetch from '../../../hooks/useFetch';

export default function Registration() {
    const [formValues, setFormValues] = useState({
        name: '',
        regno: '',
        email: '',
        countryCode: '+91',
        contact: '',
        paymentID: '',
        meal: 'Non-veg'
    });

    const handleChange = input => e => {
        setFormValues({ ...formValues, [input]: e.target.value });
    };

    const navigate = useNavigate();
    const { apiPost } = useFetch();

    const [validRegNo, setValidRegNo] = useState(false);
    const [validPaymentId, setValidPaymentId] = useState(false);

    const validateRegistrationNo = async () => {
        if (formValues.regno && formValues.regno.length !== 9)
            setValidRegNo(false);
        else {
            const res = await apiPost('/rt22/verify-participant-regno', {
                registrationNo: formValues.regno
            });
            const data = await res.json();
            const isValid = await data.valid;
            setValidRegNo(isValid);
        }
    };

    const validatePaymentId = async () => {
        const res = await apiPost('/rt22/verify-payment-id', {
            paymentId: formValues.paymentID
        });
        const data = await res.json();
        const isValid = await data.valid;
        setValidRegNo(isValid);
    };

    useEffect(() => {
        if (formValues.regno) validateRegistrationNo();
    }, [formValues.regno]);

    useEffect(() => {
        if (formValues.paymentID) validatePaymentId();
    }, [formValues.paymentID]);

    const submitForm = async e => {
        e.preventDefault();
        if (!validRegNo) window.alert('you have already registered');
        else if (!validRegNo) window.alert('duplicate payment Id');
        else if (
            !formValues.name ||
            !formValues.regno ||
            !formValues.email ||
            !formValues.countryCode ||
            !formValues.contact ||
            !formValues.paymentID ||
            !formValues.meal
        ) {
            alert('Please fill out all the fields');
        } else {
            const properFormValues = {
                name: formValues.name,
                registrationNo: formValues.regno,
                phoneNo: `${formValues.countryCode.replace('+', '')}${formValues.contact}`,
                paymentId: formValues.paymentID,
                email: formValues.email,
                mealPreference:
                    formValues.meal === 'Non-veg'
                        ? 'non-vegetarian'
                        : 'vegetarian'
            };

            console.log(formValues);

            const res = await apiPost('/rt22/signup', properFormValues);

            if (res.ok) {
                navigate('/test-rt22/make-team');
            } else {
                window.alert('there was an error, please try again');
            }
        }
    };

    return (
        <TerminalWindow
            title='Join the team'
            prompts={[
                { path: '~/rescue-tux', command: 'cd ./register' },
                {
                    path: '~/test-rt22/register',
                    command: 'sudo start registration.service'
                }
            ]}
        >
            <form className='lug-form' onSubmit={submitForm}>
                <div className='form-start'> Register here </div>

                <div className='form-field'>
                    <label> Name: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('name')}
                        value={formValues.name}
                    />
                </div>

                <div className='form-field'>
                    <label> Registration Number (VIT): </label>
                    <input
                        type='text'
                        maxLength='9'
                        onChange={handleChange('regno')}
                        value={formValues.regno}
                    />
                </div>

                <div className='form-field'>
                    <label> Email: </label>
                    <input
                        type='email'
                        maxLength='128'
                        onChange={handleChange('email')}
                        value={formValues.email}
                    />
                </div>

                <div className='form-field'>
                    <label> Country Code: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('countryCode')}
                        value={formValues.countryCode}
                    />
                </div>

                <div className='form-field'>
                    <label> Contact Number (WhatsApp): </label>
                    <input
                        type='tel'
                        maxLength='10'
                        onChange={handleChange('contact')}
                        value={formValues.contact}
                        pattern='[1-9]{1}[0-9]{9}'
                    />
                </div>

                <div className='form-field'>
                    <label> Pay us here </label>
                    <img
                        loading='lazy'
                        src={QRcode}
                        height={200}
                        width={500}
                        style={{ width: '100%', height: 'auto' }}
                        alt='payment_QR_code'
                    />
                </div>

                <div className='form-field'>
                    <label> Payment ID: </label>
                    <input
                        type='text'
                        maxLength='128'
                        onChange={handleChange('paymentID')}
                        value={formValues.paymentID}
                    />
                </div>

                <div className='form-field longlabel'>
                    <label> Meal Preference: </label>
                    <select
                        id='meal'
                        value={formValues.meal}
                        onChange={handleChange('meal')}
                    >
                        <option value='Non-veg'>Non-veg</option>
                        <option value='Veg'>Veg</option>
                    </select>
                </div>

                <div className='form-end'>
                    <button type='submit' className='form-nav-button'>
                        Register
                    </button>
                </div>
            </form>
        </TerminalWindow>
    );
}

