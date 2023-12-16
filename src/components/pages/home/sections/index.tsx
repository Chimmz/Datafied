import AppContainer from '@/components/helpers/AppContainer';
import cls from 'classnames';
import { FC, ReactNode, useMemo } from 'react';

interface Props {
  as?: React.ElementType;
  id?: string;
  title?: ReactNode;
  titleClassName?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

const HomeSection: FC<Props> = function (props) {
  const { as: Element = 'section', title } = props;

  const titleClassNames = useMemo(() => {
    return ['tw-text-center tw-mb-14', props.titleClassName, !props.title && 'tw-hidden'];
  }, [props.title, props.titleClassName]);

  return (
    <Element className={cls('tw-py-32', props.className)} id={props.id}>
      <AppContainer className={props.containerClassName}>
        <h2 className={cls(...titleClassNames)}>{title}</h2>
        {props.children}
      </AppContainer>
    </Element>
  );
};

export default HomeSection;
