'use client';
import React, { FC, FormEventHandler } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  onSubmit: () => void;
}

const AppForm: FC<Props> = props => {
  const handleSubmit: FormEventHandler = ev => {
    ev.preventDefault();
    props.onSubmit();
  };
  return (
    <form {...props} onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};

export default AppForm;
