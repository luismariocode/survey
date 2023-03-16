import { StatementData } from '../types/types';

function shuffleStatements(array: StatementData[]): StatementData[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map((s, index) => ({ ...s, newIndex: index }));
}

export default shuffleStatements;