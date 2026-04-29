import { NavLink, Outlet } from 'react-router';

export default function ProfileLayout() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex-1 text-center p-4 text-sm ${
      isActive ? 'border-b-2 border-black font-semibold' : 'text-gray-500'
    }`;

  return (
    <div>
      <div className="flex justify-center items-center">
        <NavLink to="/profile/posts/grid" className={navLinkClass}>
          Posts
        </NavLink>
        <NavLink to="/profile/reels/grid" className={navLinkClass}>
          Reels
        </NavLink>
        <NavLink to="/profile/tagged/grid" className={navLinkClass}>
          Tagged
        </NavLink>
        <NavLink to="/profile/highlights" className={navLinkClass}>
          Highlights
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
