import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full pb-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center">
        {/* Logo */}
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />

        {/* Navigation links */}
        <div className="flex flex-1 justify-center max-sm:hidden gap-8">
          {navLists.map((nav) => (
            <a
              key={nav}
              href="#"
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <button aria-label="Search">
            <img src={searchImg} alt="Search" width={18} height={18} />
          </button>
          <button aria-label="Shopping Bag">
            <img src={bagImg} alt="Bag" width={18} height={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
