import { Icon } from '@iconify/react';
import React, {
  useState,
  useEffect,
  useCallback,
  FC,
  MutableRefObject,
  useMemo
} from 'react';
import cls from 'classnames';

interface Props {
  itemsTotal: number;
  containerRef: MutableRefObject<HTMLUListElement | null>;
  itemsLoaded: boolean;
  className?: string;
}

type Direction = 'left' | 'right';

const HorizontalScroll: FC<Props> = props => {
  const { itemsTotal, containerRef, className, itemsLoaded } = props;
  const [containerWidth, setContainerWidth] = useState<number>();
  // const ////////
  // const [isScrollable, setIsScrollable] = useState({ left: false, right: })

  const scrollStep = useMemo(() => {
    if (!containerRef.current) return;
    return;
  }, [containerWidth]);

  useEffect(() => {
    if (!containerRef.current) return;
    const onResizeWindow = setContainerWidth.bind(null, containerRef.current.scrollWidth);

    window.addEventListener('resize', onResizeWindow);
    return () => window.removeEventListener('resize', onResizeWindow);
  }, [containerRef.current]);

  useEffect(() => {
    if (!containerRef.current) return;

    // const onContainerScroll = () => {
    //   const scrolledAmt = containerRef.current!.scrollLeft;
    //   console.log({ scrolledAmt });
    //   if (containerRef.current!)
    // };
    // containerRef.current.addEventListener('scroll', onContainerScroll);
    // return () => window.removeEventListener('scroll', onContainerScroll);
  }, [containerRef.current]);

  useEffect(() => {
    if (!itemsLoaded || !containerRef.current) return;
    setContainerWidth(containerRef.current?.scrollWidth);
    containerRef.current.scrollTo(0, 0);
  }, [itemsLoaded, containerRef.current]);

  const getScrollAmount = (direction: Direction, scrolledAmt: number) => {
    return direction === 'right'
      ? containerWidth! / itemsTotal + scrolledAmt
      : scrolledAmt - containerWidth! / itemsTotal;
  };

  const scroll = useCallback(
    (direction: Direction) => {
      if (!containerWidth) return;

      const scrolledAmt = containerRef.current!.scrollLeft;
      console.log({ scrolledAmt });

      // const shouldScroll =
      //   (direction === 'left' && scrolledAmt > 0) ||
      //   (direction === 'right' && scrolledAmt <= containerWidth);

      // if (!shouldScroll) return;

      if (direction === 'left' && scrolledAmt <= 0)
        return containerRef.current?.scrollTo({
          left: containerWidth,
          behavior: 'smooth'
        });

      // This if-statement doesnt work!
      if (
        direction === 'right' &&
        scrolledAmt + containerRef.current!.clientWidth ===
          containerRef.current!.clientWidth * 10
      )
        return containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });

      const scrollBy = getScrollAmount(direction, scrolledAmt);
      containerRef.current?.scrollTo({ left: scrollBy, behavior: 'smooth' });
    },
    [containerWidth, containerRef]
  );

  return (
    <div className="tw-flex tw-justify-center tw-gap-3 -tw-translate-y-8">
      <button
        className="tw-simple-link active:tw-outline focus:tw-outline-pry active:tw-outline-pry tw-z-10 tw-p-7 tw-comp-circle tw-bg-gray-100  hover:tw-bg-gray-200 tw-duration-150 tw-transition-colors"
        onClick={scroll.bind(null, 'left')}
      >
        <Icon icon="ooui:next-rtl" width={20} />
      </button>

      <button
        className="tw-simple-link active:tw-outline focus:tw-outline-pry active:tw-outline-pry tw-z-10 tw-p-7 tw-comp-circle tw-bg-gray-100  hover:tw-bg-gray-200 tw-duration-150 tw-transition-colors"
        onClick={scroll.bind(null, 'right')}
      >
        <Icon icon="ooui:next-ltr" width={20} />
      </button>
    </div>
  );
};

export default HorizontalScroll;
