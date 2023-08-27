export default function TechnicalDevopsQuestions({ handleChange, values }){
    return (
        <>
            <div className='form-textarea'>
                <label>Have you ever set up a self-hosted service or application? If yes, could you describe the process and technologies you used?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_devops_1')}
                    value={values.tech_devops_1}
                />
            </div>
            <div className='form-textarea'>
                <label> What motivates you to explore self-hosting instead of relying on cloud services?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_devops_2')}
                    value={values.tech_devops_2}
                />
            </div>
            <div className='form-textarea'>
                <label>Do you have experience with configuring and managing web servers like Apache or Nginx for self-hosted projects?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_devops_3')}
                    value={values.tech_devops_3}
                />
            </div>
            <div className='form-textarea'>
                <label>Have you explored containerization like docker for self-hosting?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_devops_4')}
                    value={values.tech_devops_4}
                />
            </div>
            <div className='form-textarea'>
                <label>Could you share an idea for a self-hosted project you'd be interested in working on as a part of our Linux club?</label>
                <textarea
                    rows='6'
                    onChange={handleChange('tech_devops_5')}
                    value={values.tech_devops_5}
                />
            </div>
        </>
    )
}