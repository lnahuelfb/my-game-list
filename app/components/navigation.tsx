import Link from "next/link";
import Links from "@/interfaces/links";
import styles from './navigation.module.css'

const links: Links[] = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Games',
  route: '/games'
}]

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {
            links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} >
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header >
  )
}