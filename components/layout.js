import Link from "next/link"

export default function Layout({ post }) {
  return (
    <div
      style={{
        border: "1px solid red",
        borderRadius: "12px",
        margin: "1rem 4rem",
        padding: "3rem",
      }}
    >
      <b>{post.title}</b>
      <p>{post.date}</p>
      <Link href={"/posts/" + post.slug}>visit</Link>
    </div>
  )
}
