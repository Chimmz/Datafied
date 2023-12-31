interface SectionProps {
  as?: React.ElementType;
  id?: string;
  title?: ReactNode;
  titleClassName?: string;
  className?: string;
  containerClassName?: string;
  paddingBlock?: boolean;
  children: ReactNode;
}
