import React, { useState } from 'react';

export default function GuidanceAnswerModal({
  isOpen,
  title = '回答引導問題',
  question,
  onSubmit,
  onClose,
}) {
  const [answer, setAnswer] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!answer.trim()) return;
    onSubmit(answer.trim());
    setAnswer('');
  };

  return (
    <div className="guidance-modal__backdrop" role="dialog" aria-modal="true">
      <div className="guidance-modal">
        <h4>{title}</h4>
        <p>{question}</p>
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="請輸入你的想法..."
          rows={5}
        />
        <div className="guidance-modal__actions">
          <button type="button" onClick={onClose}>
            取消
          </button>
          <button type="button" onClick={handleSubmit}>
            送出回答
          </button>
        </div>
      </div>
    </div>
  );
}
