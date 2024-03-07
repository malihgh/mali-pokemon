import classNames from 'classnames';
import { FC } from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'normal' | 's';
};

const Text: FC<TextProps> = ({ children, className, type, ...props }) => {
  const commonStyle = 'not-italic font-flexo font-semibold text-gray-600';
  const ultraHeader =
    'phone:text-2xl text-5xl tablet:text-4xl font-flexoBold leading-[136%]';
  const mainHeader = 'phone:text-xl text-4xl tablet:text-3xl leading-[136%]';
  const header = 'phone:text-base text-2xl tablet:text-xl leading-[150%]';
  const normal =
    'phone:text-sm text-xl tablet:text-lg font-normal phone:leading-5 leading-8';
  const small = 'phone:text-xs text-lg tablet:text-base font-normal';

  const selectStyle = () => {
    switch (type) {
      case 'h1':
        return ultraHeader;
      case 'h2':
        return mainHeader;
      case 'h3':
        return header;
      case 'normal':
        return normal;
      case 's':
        return small;

      default:
        return normal;
    }
  };

  return (
    <div
      className={classNames(commonStyle, selectStyle(), className)}
      {...props}>
      {children}
    </div>
  );
};

export default Text;
