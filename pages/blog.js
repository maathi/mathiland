import { getAllPosts } from "../lib/api"

export default function Blog({ posts }) {
  return (
    <h2>
      {posts.map((p) => (
        <li key={p.date}>{p.title}</li>
      ))}
    </h2>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug"])

  return {
    props: {
      posts,
    },
  }
}
