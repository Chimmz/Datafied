import AppContainer from '@/components/helpers/AppContainer';
import cls from 'classnames';
import { FC, ReactNode, useMemo } from 'react';

const Section: FC<SectionProps> = function (props) {
  const { as: Element = 'section', paddingBlock = true, title } = props;

  const titleClassNames = useMemo(() => {
    return ['tw-text-center tw-mb-14', props.titleClassName];
  }, [props.titleClassName]);

  return (
    <Element
      className={cls(paddingBlock && 'tw-py-24 md:tw-py-28', props.className)}
      id={props.id}
    >
      <AppContainer className={props.containerClassName}>
        {props.title ? (
          <h2 className={cls(...titleClassNames, 'tw-max-w-[20ch] tw-mx-auto')}>
            {title}
          </h2>
        ) : null}
        {props.children}
      </AppContainer>
    </Element>
  );
};

export default Section;
