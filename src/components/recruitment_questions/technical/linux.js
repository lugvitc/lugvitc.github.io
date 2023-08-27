export default function TechnicalLinuxQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label>What is secure boot?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_linux_1')}
                    value={values.tech_linux_1}
                />
            </div>
            <div className='form-textarea'>
                <label> What is TTY?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_linux_2')}
                    value={values.tech_linux_2}
                />
            </div>
            <div className='form-textarea'>
                <label> Procedure to edit grub menu in Ubuntu based os</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_linux_3')}
                    value={values.tech_linux_3}
                />
            </div>
            <div className='form-textarea'>
                <label> What is "top -i"?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_linux_4')}
                    value={values.tech_linux_4}
                />
            </div>
            <div className='form-textarea'>
                <label>How to open file manger in Linux with root privileges?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_linux_5')}
                    value={values.tech_linux_5}
                />
            </div>
        </>
    )
}