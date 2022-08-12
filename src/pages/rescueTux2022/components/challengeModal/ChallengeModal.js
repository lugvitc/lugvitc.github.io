import { useState } from 'react';
import TerminalWindow from '../../../../components/terminal/terminalWindow';
import styles from './ChallengeModal.module.css';

function ChallengeModal({
    challenge,
    modalRef,
    questionModalOpen,
    setQuestionModalOpen
}) {
    const [inputValue, setInputValue] = useState('');

    function inputChangeHandler(event) {
        setInputValue(event.target.value);
    }

    function closeQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(false);
            modalRef.current.close();
        }
    }

    return (
        <dialog ref={modalRef} open={false} className={styles.modal}>
            <TerminalWindow
                title={challenge.name}
                onClickRed={closeQuestionModal}
            >
                <div className={styles.header}>
                    <h2>Challenge {challenge.name}</h2>
                    <p>Points | {challenge.points}</p>
                </div>
                <div className={styles.grid}>
                    <p>Description : {challenge.description}</p>
                </div>
                <input
                    value={inputValue}
                    onChange={inputChangeHandler}
                    className={styles.valid}
                />
                <button>Submit</button>
            </TerminalWindow>
        </dialog>
    );
}

export default ChallengeModal;

