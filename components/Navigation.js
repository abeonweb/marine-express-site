import Link from "next/link"
import { links } from "../data"

export default function Navigation() {
    return (
        <header>
            <h1 className="navTitle">MENL</h1>
            <nav>
                <ul>
                    {
                        links.map(({ name, path }, i) => <li key={i}><Link href={path}>{name}</Link></li>)
                }
                </ul>
            </nav>
        </header>
    )
}