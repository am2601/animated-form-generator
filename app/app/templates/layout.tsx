import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100">
      <header className="pl-6 py-4 absolute top-0 w-full hidden sm:block">
        <Link href="/app" className="text-lg font-semibold text-gray-900">
          <code className="bg-white px-2 py-1 rounded-md text-lg font-mono border border-gray-300">
          <span className="text-blue-600 underline">{"<a href='/'>"}</span>Animated Form Generator<span className="text-blue-600 underline">{"</a>"}</span>
          </code>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
