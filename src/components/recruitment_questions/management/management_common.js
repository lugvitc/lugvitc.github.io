export default function ManagementCommonQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label>Do you have prior experience in management or marketing? If so specify what you have worked upon</label>
                <textarea
                    rows='6'
                    onChange={handleChange('mang1')}
                    value={values.mang1}
                    placeholder='E.g. yes, I have marketed so and so event under this club'
                />
            </div>
            <div className='form-textarea'>
                <label> How would you market an umbrella in summer season?  </label>
                <textarea
                    rows='6'
                    onChange={handleChange('mang2')}
                    value={values.mang2}
                />
            </div>
            <div className='form-textarea'>
                <label> If worked in any club tell about the duties you were given, were you successful enough to provide the best terms?  </label>
                <textarea
                    rows='6'
                    onChange={handleChange('mang3')}
                    value={values.mang3}
                />
            </div>
            <div className='form-textarea'>
                <label> What are the reasons for which we should not take you in consideration (negative points) </label>
                <textarea
                    rows='6'
                    onChange={handleChange('mang4')}
                    value={values.mang4}
                />
            </div>
            <div className='form-textarea'>
                <label> Some positive and negative qualities of yours</label>
                <textarea
                    rows='6'
                    onChange={handleChange('mang5')}
                    value={values.mang5}
                />
            </div>
        </>
    )
}