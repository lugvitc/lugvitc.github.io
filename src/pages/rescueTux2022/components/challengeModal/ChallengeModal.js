import { useState, useEffect } from 'react';
import TerminalWindow from '../../../../components/terminal/terminalWindow';
import styles from './ChallengeModal.module.css';
import useFetch from '../../../../hooks/useFetch';
import ReactMarkdown from 'react-markdown';

function ChallengeModal({
    challenge,
    modalRef,
    questionModalOpen,
    setQuestionModalOpen,
    isSolved
}) {
    const [inputValue, setInputValue] = useState('');

    function inputChangeHandler(event) {
        setInputValue(event.target.value);
    }

    function closeQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(false);
            modalRef.current.close();
            setInputValue('');
        }
    }

    const { apiPostAsTeam } = useFetch();

    const submitFlag = async () => {
        const res = await apiPostAsTeam('/rt22/submit-flag', {
            flag: inputValue,
            challenge_id: challenge.id
        });
        const data = await res.json();
        if (data.valid) {
            console.log('good!');
        }
    };

    useEffect(() => {
        const closeIfClickedOutside = e => {
            if (questionModalOpen && e.target === modalRef.current) {
                closeQuestionModal();
                setQuestionModalOpen(false);
            }
        };
        window.addEventListener('click', closeIfClickedOutside);
        return () => {
            window.removeEventListener('click', closeIfClickedOutside);
        };
    }, [modalRef, questionModalOpen, closeQuestionModal]);

    return (
        <dialog ref={modalRef} open={false} className={styles.modal}>
            <TerminalWindow
                title={challenge.name}
                onClickRed={closeQuestionModal}
            >
                {isSolved && 'done'}
                <div className={styles.header}>
                    <h2>Challenge {challenge.name}</h2>
                    <p>Points | {challenge.points}</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.description}>
                        <ReactMarkdown>{challenge.description}</ReactMarkdown>
                    </div>
                </div>
                <input
                    value={inputValue}
                    onChange={inputChangeHandler}
                    className={styles.valid}
                />
                <button onClick={submitFlag}>Submit</button>
            </TerminalWindow>
        </dialog>
    );
}

export default ChallengeModal;

