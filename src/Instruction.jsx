'use client';

import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';


export default function Instruction() {

  const [openModal, setOpenModal] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleAcceptClick = () => {
    setOpenModal(undefined);
    setShowQuiz(true);
  };

  const shouldShowStartButton = !showQuiz && openModal !== 'default';

  return (
    
    <Router>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {shouldShowStartButton && (
          <Button onClick={() => setOpenModal('default')}>Start Quiz</Button>
        )}
        <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
          <Modal.Header>Instructions</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <ol className="text-base leading-relaxed list-decimal ml-6 mb-4 text-gray-500 dark:text-gray-400">
                <li>This quiz contains 10 multiple-choice questions.</li>
                <li>Each question contains four alternatives</li>
                <li>You have 1 minute to answer each question.</li>
                <li>Each question has only one correct answer.</li>
                <li>Click the 'Next' button to move to the next question.</li>
                <li>You cannot go back to the previous question.</li>
                <li>Each question carries 2 marks.</li>
                <li>There is no negative markings.</li>
                <li>After answering all questions, click 'Finish' to see your results.</li>
                <li>Click on 'I Accept' to start the quiz.</li>
              </ol>
              <h3 className="flex justify-center items-center">GOOD LUCK!!</h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleAcceptClick}>I Accept</Button>
            <Button color="gray" onClick={() => setOpenModal(undefined)}>Decline</Button>
          </Modal.Footer>
        </Modal>

        {/* Conditional rendering of the Quiz component */}
        {showQuiz && <Quiz />}
      </div>
    </Router>
  );
}

