type Option = {
  label: string;
  value: string;
};

export type RadioInput = {
  text: string;
  options: Option[];
  onAnswered?: (values: string[]) => void;
};
