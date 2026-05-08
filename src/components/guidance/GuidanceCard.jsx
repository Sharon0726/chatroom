import React from 'react';

export default function GuidanceCard({
  title,
  question,
  status,
  onSkip,
  onNext,
  children,
}) {
  return (
    <section className="guidance-card" aria-live="polite">
      <header className="guidance-card__header">
        <h3>{title}</h3>
        <span className={`guidance-card__status guidance-card__status--${status}`}>
          {status}
        </span>
      </header>

      <p className="guidance-card__question">{question}</p>

      <div className="guidance-card__content">{children}</div>

      <footer className="guidance-card__actions">
        <button type="button" onClick={onSkip}>
          略過
        </button>
        <button type="button" onClick={onNext}>
          換一題
        </button>
      </footer>
    </section>
  );
}
