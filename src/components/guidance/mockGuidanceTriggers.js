export const MOCK_GUIDANCE_TRIGGERS = [
  { key: 'aggressive_language', label: '對話出現攻擊性語句', enabled: true },
  { key: 'repeated_argument', label: '雙方重複爭論同一點', enabled: true },
  { key: 'long_silence', label: '某一方沉默太久', enabled: false },
  { key: 'emotion_rising', label: '情緒溫度升高', enabled: true },
  { key: 'near_resolution', label: '對話接近和解，需要具體下一步', enabled: true },
];

export function pickMockGuidanceCardType() {
  const sharedFirst = ['aggressive_language', 'repeated_argument', 'near_resolution'];
  const activeTriggers = MOCK_GUIDANCE_TRIGGERS.filter((item) => item.enabled).map((item) => item.key);
  return activeTriggers.some((item) => sharedFirst.includes(item)) ? 'shared' : 'private';
}
