'use client';

import Link from 'next/link';
import Text from '../Text';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-16 bg-white fixed w-full top-0 z-10 flex justify-center items-center px-[12%] mx-0">
      <div className="w-full m-0 p-0 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={130}
            height={100}></Image>
        </Link>

        <div className="flex">
          <Link href="/">
            <Text
              type="normal"
              className={classNames(
                'hover:bg-gray-600 p-4 hover:text-white hove:text-white border-b-4 rounded-md rounded-t-none border-gray-600',
                pathname === '/' && 'bg-gray-600 text-white'
              )}>
              Home
            </Text>
          </Link>
          <Link href="/deck">
            <Text
              type="normal"
              className={classNames(
                'hover:bg-error p-4 hover:text-white hove:text-white border-b-4 rounded-md rounded-t-none border-error',
                pathname === '/deck' && 'bg-error text-white'
              )}>
              Cards
            </Text>
          </Link>
        </div>
      </div>
    </header>
  );
}
