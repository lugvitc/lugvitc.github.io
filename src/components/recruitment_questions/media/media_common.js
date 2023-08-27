export default function MediaCommonQuestions({ handleChange, values }) {
    return (
        <>
            <div className='form-textarea'>
                <label> Provide the links of your previous work. </label>
                <textarea
                    rows='6'
                    onChange={handleChange('media1')}
                    value={values.media1}
                    placeholder='E.g. canva design links, figma design links, gdrive links for photography'
                />
            </div>
        </>
    )
}