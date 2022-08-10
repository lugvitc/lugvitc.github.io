import TerminalWindow from '../../../components/terminal/terminalWindow';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QRcode from './qrcode_payus.png';
import useFetch from '../../../hooks/useFetch';

import styles from './registration.module.css';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

export default function Registration() {
    const [registrationDone, setRegistrationDone] = useState(
        window.localStorage.getItem('rt22-registration-done') === 'true'
    );
    const [formValues, setFormValues] = useState({
        name: '',
        regno: '',
        email: '',
        countryCode: '+91',
        contact: '',
        paymentID: '',
        meal: 'Veg'
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
        setValidPaymentId(isValid);
    };

    useEffect(() => {
        if (formValues.regno) validateRegistrationNo();
    }, [formValues.regno]);

    useEffect(() => {
        if (formValues.paymentID) validatePaymentId();
    }, [formValues.paymentID]);

    const submitForm = async e => {
        e.preventDefault();
        if (
            !formValues.name ||
            !formValues.regno ||
            !formValues.email ||
            !formValues.countryCode ||
            !formValues.contact ||
            !formValues.paymentID ||
            !formValues.meal
        ) {
            alert('Please fill out all the fields');
        } else if (!validRegNo) {
            window.alert(
                'Invalid Registration Number (Already registered or incorrect format)'
            );
        } else if (!validPaymentId) {
            window.alert('duplicate payment Id');
        } else {
            const properFormValues = {
                name: formValues.name,
                registrationNo: formValues.regno,
                phoneNo: `${formValues.countryCode.replace('+', '')}${
                    formValues.contact
                }`,
                paymentId: formValues.paymentID,
                email: formValues.email,
                mealPreference:
                    formValues.meal === 'Non-veg'
                        ? 'non-vegetarian'
                        : 'vegetarian'
            };

            const res = await apiPost('/rt22/signup', properFormValues);

            if (res.ok) {
                // navigate('/rescue-tux/make-team');
                window.localStorage.setItem('rt22-registration-done', 'true');
                window.localStorage.setItem(
                    'rt22-participant-name',
                    formValues.name
                );
                setRegistrationDone(true);
            } else {
                window.alert('there was an error, please try again');
            }
        }
    };

    return (
        <TerminalWindow
            title='Registration'
            prompts={[
                { path: '~/rescue-tux', command: 'cd ./register' },
                {
                    path: '~/rescue-tux/register',
                    command: 'sudo ./registration --rt22'
                }
            ]}
        >
            {registrationDone ? (
                <>
                    Dear {window.localStorage.getItem('rt22-participant-name')},
                    Thanks for registering for our event! See you soon on the
                    18th of August! :)
                </>
            ) : (
                <form className='lug-form' onSubmit={submitForm}>
                    <div className={styles.grid}>
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
                                pattern='\d{2}[a-zA-Z]{3}\d{4}'
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
                            <label> Contact Number (WhatsApp): </label>
                            <div className={styles.phone}>
                                <input
                                    type='text'
                                    maxLength='5'
                                    onChange={handleChange('countryCode')}
                                    value={formValues.countryCode}
                                />
                                <input
                                    type='tel'
                                    maxLength='10'
                                    onChange={handleChange('contact')}
                                    value={formValues.contact}
                                    pattern='[1-9]{1}[0-9]{9}'
                                />
                            </div>
                        </div>

                        <div
                            className={`${'form-field'} ${styles.grid_QRCode}`}
                        >
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
                    </div>
                </form>
            )}
        </TerminalWindow>
    );
}

