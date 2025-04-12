import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="hidden md:block w-64 bg-purple-900 text-white p-4" >
            <ul className="space-y-4">
                <li><Link href="/">Bienvenido</Link></li>
                <li><Link href="/about">Quiénes somos</Link></li>
                <li><Link href="/contact">Contáctanos</Link></li>

            </ul>

        </aside >
    )

}