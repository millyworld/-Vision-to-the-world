import Link from 'next/link';

{[
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Wildlife", href: "/wildlife" },
  { name: "Culture", href: "/culture" },
  { name: "Stories", href: "/stories" },
  { name: "Reviews", href: "/reviews" },
  { name: "Plan Safari", href: "/plan-safari" },
].map((link) => (
  <Link key={link.name} href={link.href} className="text-gray-700 hover:text-black">
    {link.name}
  </Link>
))}
