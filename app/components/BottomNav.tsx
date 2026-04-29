import { NavLink } from 'react-router';

const iconClass = 'w-6 h-6';

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function ReelsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125.375-3.375H6m0 0a1.125 1.125 0 0 0-1.125-1.125H4.5a1.125 1.125 0 0 0-1.125 1.125M6 18.375V7.875A1.125 1.125 0 0 1 7.125 6.75H12m0 0V3.375m0 3.375a1.125 1.125 0 0 1 1.125-1.125h2.25M12 6.75l4.5-3.375m0 0a1.125 1.125 0 0 1 1.125 1.125v2.25m-5.625-3.375 5.625 3.375M21 10.5v7.875A1.125 1.125 0 0 1 19.875 19.5h-1.5"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

const navClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex flex-col items-center justify-center flex-1 ${isActive ? 'text-black' : 'text-gray-400'}`;

export function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t">
      <div className="flex h-full max-w-lg mx-auto">
        <NavLink to="/home" className={navClass} aria-label="Home">
          <HomeIcon />
        </NavLink>
        <div className="inline-flex flex-col items-center justify-center flex-1 text-gray-400">
          <SearchIcon />
        </div>
        <NavLink to="/create" className={navClass} aria-label="Create post">
          <PlusIcon />
        </NavLink>
        <NavLink
          to="/profile/reels/grid"
          className={navClass}
          aria-label="Reels"
        >
          <ReelsIcon />
        </NavLink>
        <NavLink to="/profile" className={navClass} aria-label="Profile">
          <ProfileIcon />
        </NavLink>
      </div>
    </footer>
  );
}
