import classNames from 'classnames';
import { FC } from 'react';
import Header from '@/core/components/Header';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  // mt-16 -> Header hight is 16
  return (
    <div className="box-border clear-both block max-w-screen-xl overflow-hidden bg-repeat bg-auto bg-[url('/images/background.png')] py-16 mt-16">
      <Header />
      <div
        className={classNames(
          'mx-[12%] py-8 bg-white flex flex-col justify-center items-center',
          className
        )}
        {...props}>
        {children}
      </div>
    </div>
  );
};

export default Container;
