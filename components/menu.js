import { useRouter } from "next/router"
import Link from "next/link"
import { FaHome, FaBook } from "react-icons/fa"

export default function Menu() {
  const router = useRouter()

  return (
    <ul id="menu">
      <Link href="/">
        <FaHome className={router.pathname === "/" ? "active" : ""} />
      </Link>
      <Link href="/blog">
        <FaBook className={router.pathname === "/blog" ? "active" : ""} />
      </Link>
    </ul>
  )
}
