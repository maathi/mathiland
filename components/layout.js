import Link from "next/link"

export default function Layout({ post }) {
  return (
    <div className="card">
      <b>{post.title}</b>
      <p>{post.date}</p>
      <Link href={"/posts/" + post.slug}>visit</Link>
    </div>
  )
}
