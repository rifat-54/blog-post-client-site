import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  laselSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  laselSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link className="hover:underline" href="/development">
          Development
        </Link>
        <Link className="hover:underline" href="/testing">
          Testing
        </Link>
        <Link className="hover:underline" href="/marketing">
          Marketing
        </Link>
        <Link className="hover:underline" href="/marketing/settings">
          Settings
        </Link>
        <Link className="hover:underline" href="/sales">
          Sales
        </Link>
      </nav>

      <div className="flex">
        {marketingSlot}
        {laselSlot}
      </div>

      {children}
    </div>
  );
}