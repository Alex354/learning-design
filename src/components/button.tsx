import { VFC } from 'react';

export type ButtonProps = {
  label: string;
};

export const Button: VFC<ButtonProps> = (props) => <button>{props.label}</button>;
