import React from 'react';

export default function GuidanceSummaryCard({ commonGround, differences, nextStep }) {
  return (
    <section className="guidance-summary-card">
      <h4>AI 整理</h4>
      <div>
        <strong>共同點</strong>
        <p>{commonGround}</p>
      </div>
      <div>
        <strong>差異</strong>
        <p>{differences}</p>
      </div>
      <div>
        <strong>下一步</strong>
        <p>{nextStep}</p>
      </div>
    </section>
  );
}
