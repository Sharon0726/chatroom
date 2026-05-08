import React, { useMemo, useState } from 'react';
import GuidanceCard from './GuidanceCard';
import GuidanceAnswerModal from './GuidanceAnswerModal';
import GuidanceSummaryCard from './GuidanceSummaryCard';

const MOCK_SHARED_QUESTIONS = [
  '這件事裡，你最希望對方理解的是什麼？',
  '剛剛哪個瞬間讓你覺得自己沒有被理解？',
  '如果只能先解決一件事，你希望是哪一件？',
  '你願意為這段關係或合作做出的一個小改變是什麼？',
];

const MOCK_SUMMARY = {
  commonGround: '雙方都希望被尊重，也都想把事情解決而不是繼續爭論。',
  differences: 'A 偏重語氣與態度，B 偏重流程與責任分工。',
  nextStep: '先約定對話規則，再把責任分工寫成可確認的清單。',
};

export default function SharedGuidanceCard() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [status, setStatus] = useState('open');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [activeUser, setActiveUser] = useState(null);

  const question = useMemo(() => MOCK_SHARED_QUESTIONS[questionIndex], [questionIndex]);
  const bothAnswered = Boolean(answerA && answerB);

  const handleNext = () => {
    setQuestionIndex((prev) => (prev + 1) % MOCK_SHARED_QUESTIONS.length);
    setAnswerA('');
    setAnswerB('');
    setStatus('open');
  };

  return (
    <GuidanceCard
      title="共同引導卡"
      question={question}
      status={bothAnswered ? 'ready_to_review' : status}
      onSkip={() => setStatus('skipped')}
      onNext={handleNext}
    >
      <div className="shared-guidance-card__status">
        <p>A 是否已回答：{answerA ? '已回答' : '尚未回答'}</p>
        <p>B 是否已回答：{answerB ? '已回答' : '尚未回答'}</p>
      </div>

      <div className="shared-guidance-card__actions">
        <button type="button" onClick={() => setActiveUser('A')}>
          以 A 身分回答
        </button>
        <button type="button" onClick={() => setActiveUser('B')}>
          以 B 身分回答
        </button>
      </div>

      <GuidanceAnswerModal
        isOpen={Boolean(activeUser)}
        title={`共同引導卡回答（${activeUser ?? ''}）`}
        question={question}
        onClose={() => setActiveUser(null)}
        onSubmit={(answer) => {
          if (activeUser === 'A') setAnswerA(answer);
          if (activeUser === 'B') setAnswerB(answer);
          setStatus('collecting');
          setActiveUser(null);
        }}
      />

      {bothAnswered ? (
        <>
          <div className="shared-guidance-card__answers">
            <p>
              <strong>A 的答案：</strong>
              {answerA}
            </p>
            <p>
              <strong>B 的答案：</strong>
              {answerB}
            </p>
          </div>
          <GuidanceSummaryCard {...MOCK_SUMMARY} />
        </>
      ) : null}
    </GuidanceCard>
  );
}
