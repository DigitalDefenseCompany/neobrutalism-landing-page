import Link from 'next/link'

export default function Sidebar({ links }: { links: { href: string; text: string }[] }) {
  return (
    <div className="sidebar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
