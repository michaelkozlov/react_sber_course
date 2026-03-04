interface ISelectOptions {
  id: number;
  value: string;
  label: string;
}

export type TSelectOptions = ISelectOptions[];

export interface ISelectProps {
  options: TSelectOptions;
  onChange: (value: string) => void;
}
