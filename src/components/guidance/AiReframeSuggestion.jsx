import React from 'react';

const TONES = {
  default: '原始建議',
  softer: '再溫和一點',
  direct: '更直接一點',
};

export default function AiReframeSuggestion({
  suggestion,
  tone = 'default',
  onSend,
  onSofter,
  onDirect,
  onCancel,
}) {
  return (
    <article className="ai-reframe-suggestion">
      <h4>AI 整理建議（{TONES[tone]}）</h4>
      <p>{suggestion}</p>
      <div className="ai-reframe-suggestion__actions">
        <button type="button" onClick={onSend}>
          送出
        </button>
        <button type="button" onClick={onSofter}>
          再溫和一點
        </button>
        <button type="button" onClick={onDirect}>
          更直接一點
        </button>
        <button type="button" onClick={onCancel}>
          取消
        </button>
      </div>
    </article>
  );
}
