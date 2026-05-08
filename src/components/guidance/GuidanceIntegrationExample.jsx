import React, { useMemo } from 'react';
import { PrivateGuidanceCard, SharedGuidanceCard, pickMockGuidanceCardType } from './index';

const MOCK_CHAT_MESSAGES = [
  { id: 1, role: 'A', text: '你剛剛那句話讓我覺得不被尊重。' },
  { id: 2, role: 'B', text: '我只是想把事情講清楚，不是要攻擊你。' },
];

export default function GuidanceIntegrationExample() {
  const cardType = useMemo(() => pickMockGuidanceCardType(MOCK_CHAT_MESSAGES), []);

  return (
    <main>
      <aside>
        <h3>使用者 A 輸入區上方</h3>
        <PrivateGuidanceCard />
      </aside>

      <section>
        <h3>聊天室訊息流</h3>
        {MOCK_CHAT_MESSAGES.map((message) => (
          <p key={message.id}>
            <strong>{message.role}：</strong>
            {message.text}
          </p>
        ))}

        {cardType === 'shared' ? <SharedGuidanceCard /> : null}
      </section>
    </main>
  );
}
