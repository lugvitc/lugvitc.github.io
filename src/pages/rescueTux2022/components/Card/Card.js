import { useRef, useState } from 'react';
import styles from './Card.module.css';
import ChallengeModal from '../challengeModal/ChallengeModal';
import ReactMarkdown from 'react-markdown';

export default function Card({ challenge, isSolved, qWasCorrect }) {
    const [questionModalOpen, setQuestionModalOpen] = useState(false);
    const modalRef = useRef(null);

    function openQuestionModal() {
        if (modalRef.current) {
            setQuestionModalOpen(true);
            modalRef.current.showModal();
        }
    }

    return (
        <>
            {!isSolved && (
                <ChallengeModal
                    challenge={challenge}
                    modalRef={modalRef}
                    questionModalOpen={questionModalOpen}
                    setQuestionModalOpen={setQuestionModalOpen}
                    isSolved={isSolved}
                    qWasCorrect={qWasCorrect}
                />
            )}
            <div
                className={`${styles.card} ${isSolved ? styles.solved : ''}`}
                onClick={openQuestionModal}
            >
                <div className={styles.header}>
                    <h2>{challenge.name}</h2>
                    <div>Points | {challenge.points}</div>
                </div>
                {!isSolved ? (
                    <div className={styles.description}>
                        <ReactMarkdown
                            components={{
                                a: props => (
                                    <a
                                        {...props}
                                        target='_blank'
                                        rel='noreferrer'
                                    />
                                )
                            }}
                        >
                            {challenge.description}
                        </ReactMarkdown>
                    </div>
                ) : (
                    'solved'
                )}
            </div>
        </>
    );
}

