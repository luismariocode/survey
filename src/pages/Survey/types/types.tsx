export interface StatementProps {
  entrie: string;
  description: string;
  number: number;
  newIndex: number;
  options: { label: string }[];
  answered: boolean;
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


export type ButtonNavProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};


export type CountProps = {
  count: number;
  total: number;
};
