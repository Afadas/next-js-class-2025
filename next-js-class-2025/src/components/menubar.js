import Link from 'next/link';

export default function Menubar() {
  return (
    <nav className="nav-menu flex flex-col space-y-4 items-center fixed left-2 top-52 transform z-10">
      <div className="gradient-bg p-6 rounded-lg nav-button cursor-pointer w-64">
        <Link href="/">
          <h2 className="text-2xl font-semibold text-gray-200">my Project</h2>
        </Link>
      </div>
      <div className="gradient-bg p-6 rounded-lg nav-button cursor-pointer w-64">
        <Link href="/about">
          <h2 className="text-2xl font-semibold text-gray-200">About me</h2>
        </Link>
      </div>
      <div className="gradient-bg p-6 rounded-lg nav-button cursor-pointer w-64">
        <Link href="/contact">
          <h2 className="text-2xl font-semibold text-gray-200">Contact</h2>
        </Link>
      </div>
    </nav>
  );
}