import TerminalWindow from '../../components/terminal/terminalWindow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import classes from './recruitment.module.css';

export default function RecruitmentStepTwo({
  values,
  handleChange,
  nextStep,
  previousStep,
}) {
  const next = (e) => {
    e.preventDefault();
    if (!values.whyLinux || !values.expLinux || !values.prefDept) {
      alert('Please fill out all Fields');
    } else {
      nextStep();
    }
  };

  const back = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <form className="lug-form">
      <div className="form-start">Step 2 of 3</div>
      <div className="form-textarea">
        <label> Why do you want to join the Linux Club? </label>
        <div className={classes.input}>
          <textarea
            rows="6"
            onChange={handleChange('whyLinux')}
            value={values.whyLinux}
          />
        </div>
      </div>
      <div className="form-textarea">
        <label>
          Have you ever used any Linux distro? Whats your favourite distro?{' '}
        </label>
        <div className={classes.input}>
          <textarea
            rows="6"
            onChange={handleChange('expLinux')}
            value={values.expLinux}
          />
        </div>
      </div>
      <div className="form-field longlabel">
        <label htmlFor="dept">
          Which department interests you the most in the Club? <br />
          <br />
          Department Preference 1
        </label>
        <div className={classes.input}>
          <select
            name="dept"
            id="dept"
            value={values.prefDept}
            onChange={handleChange('prefDept')}
          >
            <option value=" ">Select a department</option>
            <option value="Technical Department">Technical Department</option>
            <option value="Management Department">Management Department</option>
            <option value="Operations Department">Operations Department</option>
            <option value="Media Department">Media Department</option>
            <option value="Content Department">Content Department</option>
          </select>
        </div>
      </div>

      {values.prefDept === 'Technical Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>What are your field of interests? </label>
          </div>
          <div className={classes.input}>
            <textarea
              rows="6"
              onChange={handleChange('tech1')}
              value={values.tech1}
              placeholder="E.g. Cybersecurity, Web Development, App Development, AI etc."
            />
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              What frameworks/tools are you comfortable with in your field of
              interest?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('tech2')}
                value={values.tech2}
                placeholder="E.g. Metasploit, Kali Linux, ReactJS, NodeJS, Flask, Django, Flutter etc."
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              Give the link to your github or any place where your projects are
              hosted (if any){' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('tech3')}
                value={values.tech3}
                placeholder="E.g. https://github.com/user"
              />
            </div>
          </div>
        </div>
      ) : values.prefDept === 'Management Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              Do you have prior experience in management or marketing? If so
              specify what you have worked upon
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('mang1')}
                value={values.mang1}
                placeholder="E.g. yes, I have marketed so and so event under this club"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label> How would you market an umbrella in summer season? </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('mang2')}
                value={values.mang2}
              />
            </div>
          </div>
        </div>
      ) : values.prefDept === 'Operations Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in getting sponsors for events?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('ops1')}
                value={values.ops1}
                placeholder="E.G. yes, I have approached so and so sponsor for this event"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              How would you approch a cybersecurity firm to sponsor a club CTF
              event?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('ops2')}
                value={values.ops2}
              />
            </div>
          </div>
        </div>
      ) : values.prefDept === 'Media Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in Designing or Photography? If so,
              specify where you worked.{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('media1')}
                value={values.media1}
                placeholder="E.g, yes, I have experience with canva/figma. Designed a poster for so and so event"
              />
            </div>
          </div>
          <div className="form-textarea"></div>
          <label> Provide the links of your previous work. </label>
          <div className={classes.input}>
            <textarea
              rows="6"
              onChange={handleChange('media2')}
              value={values.media2}
              placeholder="E.g. canva design links, figma design links, gdrive links for photography"
            />
          </div>
        </div>
      ) : values.prefDept === 'Content Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in writing content for events or
              social media handles? If so, specify where you worked.{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('content1')}
                value={values.content1}
                placeholder="E.g. yes, I have covered captions/email body for so and so event under this club"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              Which type of content attracts the user{"'"}s eyes in your opinion
              and why?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('content2')}
                value={values.content2}
                placeholder="E.g. A text content with proper combination of simple words and complex phrases attracts the eyes"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="form-field longlabel">
        <label htmlFor="dept2">Department Preference 2 </label>
        <div className={classes.input}>
          <select
            name="dept2"
            id="dept2"
            value={values.prefDept2}
            onChange={handleChange('prefDept2')}
          >
            <option value=" ">Select a Department (Optional)</option>
            <option value="Technical Department">Technical Department</option>
            <option value="Management Department">Management Department</option>
            <option value="Operations Department">Operations Department</option>
            <option value="Media Department">Media Department</option>
            <option value="Content Department">Content Department</option>
          </select>
        </div>
      </div>

      {values.prefDept2 === 'Technical Department' ? (
        <div className="dept-area">
          <div className="form-textarea"></div>
          <label>What are your field of interests? </label>
          <div className={classes.input}>
            <textarea
              rows="6"
              onChange={handleChange('tech1')}
              value={values.tech1}
              placeholder="E.g. Cybersecurity, Web Development, App Development, AI etc."
            />
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              What frameworks/tools are you comfortable with in your field of
              interest?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('tech2')}
                value={values.tech2}
                placeholder="E.g. Metasploit, Kali Linux, ReactJS, NodeJS, Flask, Django, Flutter etc."
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              Give the link to your github or any place where your projects are
              hosted (if any){' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('tech3')}
                value={values.tech3}
                placeholder="E.g. https://github.com/user"
              />
            </div>
          </div>
        </div>
      ) : values.prefDept2 === 'Management Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              Do you have prior experience in management or marketing? If so
              specify what you have worked upon
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('mang1')}
                value={values.mang1}
                placeholder="E.g. yes, I have marketed so and so event under this club"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label> How would you market an umbrella in summer season? </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('mang2')}
                value={values.mang2}
              />
            </div>
          </div>
        </div>
      ) : values.prefDept2 === 'Operations Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in getting sponsors for events?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('ops1')}
                value={values.ops1}
                placeholder="E.G. yes, I have approached so and so sponsor for this event"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              How would you approch a cybersecurity firm to sponsor a club CTF
              event?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('ops2')}
                value={values.ops2}
              />
            </div>
          </div>
        </div>
      ) : values.prefDept2 === 'Media Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in Designing or Photography? If so,
              specify where you worked.{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('media1')}
                value={values.media1}
                placeholder="E.g, yes, I have experience with canva/figma. Designed a poster for so and so event"
              />
            </div>
          </div>
          <div className="form-textarea"></div>
          <label> Provide the links of your previous work. </label>
          <div className={classes.input}>
            <textarea
              rows="6"
              onChange={handleChange('media2')}
              value={values.media2}
              placeholder="E.g. canva design links, figma design links, gdrive links for photography"
            />
          </div>
        </div>
      ) : values.prefDept2 === 'Content Department' ? (
        <div className="dept-area">
          <div className="form-textarea">
            <label>
              {' '}
              Do you have prior experience in writing content for events or
              social media handles? If so, specify where you worked.{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('content1')}
                value={values.content1}
                placeholder="E.g. yes, I have covered captions/email body for so and so event under this club"
              />
            </div>
          </div>
          <div className="form-textarea">
            <label>
              {' '}
              Which type of content attracts the user{"'"}s eyes in your opinion
              and why?{' '}
            </label>
            <div className={classes.input}>
              <textarea
                rows="6"
                onChange={handleChange('content2')}
                value={values.content2}
                placeholder="E.g. A text content with proper combination of simple words and complex phrases attracts the eyes"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="form-end">
        <button type="submit" onClick={back} className="form-nav-button prev">
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button>
        <button type="submit" className="form-nav-button next" onClick={next}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
    </form>
  );
}
