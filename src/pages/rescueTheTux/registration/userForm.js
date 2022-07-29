// Edit this file to write your code
// which adds a registration page
// needed to add a new participant to the event.
import TerminalWindow from '../../../components/terminal/terminalWindow';
import QRcode from './qrcode_chrome.png';

export default function UserForm({ showSuccess, showFailureRegno, showFailurePayment, handleChange, formValues }) {

    const submit = async e => {
        e.preventDefault();
        if (!formValues.name ||
            !formValues.regno ||
            !formValues.email ||
            !formValues.countryCode ||
            !formValues.contact ||
            !formValues.paymentID ||
            !formValues.meal) {
            alert('Please fill out all the fields');
        }
        else {
            // Use flask backend here to 
            // submit all the data as a JSON object
            // to the hosted API.

            // add email
            const properFormValues = {
                name: formValues.name,
                registrationNo: formValues.regno,
                phoneNo: `${formValues.countryCode}${formValues.contact}`,
                paymentId: formValues.paymentID,
                mealPreference: formValues.meal === 'Non-veg' ? "non-vegetarian" : "vegetarian"
            }

            fetch(
                'http://localhost:5000/api/rt22/signup',
                {
                    method: 'POST',
                    headers: {
                        ContentType: 'application/json'
                    },
                    body: JSON.stringify(properFormValues)
                });
            console.log(formValues);
            // if backend result is success,
            showSuccess();
            // if backend result is failure with duplicate regno,
            // showFailureRegno();
            // if backend result is failure with duplicate payment,
            // showFailurePayment();
        }
    };

    return (
        <TerminalWindow
            title="Join the team"
            prompts={[
                { path: '~/rescue-the-tux', command: 'cd ./register' },
                { path: '~/rescue-the-tux/register', command: 'sudo start registration.service' }
            ]}
        >
            <form className='lug-form' onSubmit={submit}>
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
                    <img loading='lazy' src={QRcode} height={500} width={500} style={{ width: '100%', height: 'auto' }} alt='payment_QR_code' />
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
                    <button type='submit' className='form-nav-button'> Register </button>
                </div>
            </form>

        </TerminalWindow>
    );
}
