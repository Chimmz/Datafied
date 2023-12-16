import cls from 'classnames';
import { ReactNode } from 'react';

const AppContainer = (props: { children: ReactNode; className?: string }) => {
  return (
    <div className={cls('tw-container desktop:tw-max-w-[960px]', props.className)}>
      {props.children}
    </div>
  );
};

export default AppContainer;
