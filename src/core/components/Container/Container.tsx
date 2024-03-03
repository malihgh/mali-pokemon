import classNames from 'classnames';
import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className="box-border clear-both block max-w-screen-xl overflow-hidden bg-repeat bg-auto bg-[url('/images/background.png')] py-16">
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
