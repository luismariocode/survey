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
  };
}