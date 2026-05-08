import React, { useMemo, useState } from 'react';
import GuidanceCard from './GuidanceCard';
import GuidanceAnswerModal from './GuidanceAnswerModal';
import AiReframeSuggestion from './AiReframeSuggestion';

const MOCK_PRIVATE_QUESTIONS = [
  '剛剛哪一句話讓你最受傷？',
  '這件事裡，你最在意的是什麼？',
  '你希望對方真正理解的是什麼？',
  '你現在最需要的是被安慰、被理解，還是一起想辦法？',
];

const MOCK_REFRAME = {
  default: '我剛剛聽到那句話時感到受傷，因為我在意的是彼此尊重。',
  softer: '我想分享一下，剛才那句話讓我有點受傷，我很希望我們可以更尊重彼此。',
  direct: '那句話讓我受傷了。我需要你正面理解我在意的是尊重。',
};

export default function PrivateGuidanceCard() {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [tone, setTone] = useState('default');

  const question = useMemo(() => MOCK_PRIVATE_QUESTIONS[index], [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % MOCK_PRIVATE_QUESTIONS.length);
    setStatus('waiting');
    setSubmittedAnswer('');
  };

  return (
    <GuidanceCard
      title="私人引導卡"
      question={question}
      status={status}
      onSkip={() => setStatus('skipped')}
      onNext={handleNext}
    >
      <button type="button" onClick={() => setIsModalOpen(true)}>
        私下回答
      </button>

      <GuidanceAnswerModal
        isOpen={isModalOpen}
        question={question}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(answer) => {
          setSubmittedAnswer(answer);
          setStatus('answered');
          setIsModalOpen(false);
        }}
      />

      {submittedAnswer ? (
        <AiReframeSuggestion
          tone={tone}
          suggestion={MOCK_REFRAME[tone]}
          onSend={() => setStatus('sent')}
          onSofter={() => setTone('softer')}
          onDirect={() => setTone('direct')}
          onCancel={() => {
            setSubmittedAnswer('');
            setStatus('cancelled');
          }}
        />
      ) : null}
    </GuidanceCard>
  );
}
