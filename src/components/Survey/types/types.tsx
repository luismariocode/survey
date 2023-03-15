export interface StatementProps {
  entrie: string;
  description: string;
  number: number;
  newIndex: number;
  options: { label: string }[];
  answered: boolean;
}

export interface StatementData {
  entrie: string;
  description: string;
  number: number;
  newIndex: number;
  options: { label: string }[];
  
}

export interface EntryValues {
  "entry.1591421491": string;
  "entry.23723034": string;
}

export interface IndexValues {
  indexPath: number;
  indexRender: number;
}

export type LocationStateProps = {
  entriesProps: {
    entries: EntryValues;
    nextQuestion: IndexValues;
    currentQuestion: IndexValues;
    prevQuestion: IndexValues;
  };
}