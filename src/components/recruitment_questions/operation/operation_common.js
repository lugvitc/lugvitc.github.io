export default function OperationsCommonQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Do you have prior experience in getting sponsors for events? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('ops1')}
                    value={values.ops1}
                    placeholder='E.G. yes, I have approached so and so sponsor for this event'
                />
            </div>
            <div className='form-textarea'>
                <label> How would you approch a cybersecurity firm to sponsor a club CTF event? </label>
                <textarea
                    rows='6'
                    onChange={handleChange('ops2')}
                    value={values.ops2}
                />
            </div>
        </>
    )
}