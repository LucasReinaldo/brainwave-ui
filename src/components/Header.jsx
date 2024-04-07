import { brainwave } from '../assets';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom';
import { Button } from './Button';

import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${isMenuOpen ? 'bg-n-8' : 'bg-n-8/90'} lg:bg-b-8/90 fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:backdrop-blur-md`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img width={190} height={40} src={brainwave} alt="Brainwave" />
        </a>

        <nav
          aria-modal={isMenuOpen}
          data-menu-open={isMenuOpen}
          className={`fixed bottom-0 left-0 right-0 top-[5rem] ${isMenuOpen ? 'flex' : 'hidden'} bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.url}
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className={`relative block font-code text-2xl uppercase text-n-1 transition-colors duration-150 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button className="hidden lg:inline-flex" href="#signin">
          Sign In
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={() => setIsMenuOpen((state) => !state)}
        >
          <MenuSvg openNavigation={isMenuOpen} />
        </Button>
      </div>
    </div>
  );
};
