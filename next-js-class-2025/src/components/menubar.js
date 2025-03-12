import Link from 'next/link';
export default function Menubar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
    </div>
  );
}