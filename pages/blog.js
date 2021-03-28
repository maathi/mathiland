import { getAllPosts } from "../lib/api"
import Layout from "../components/layout"
import Quote from "../components/quotes"
import Menu from "../components/menu"

export default function Blog({ posts }) {
  return (
    <div>
      <Quote></Quote>
      <Menu></Menu>
      {posts.map((p) => (
        <Layout post={p}></Layout>
      ))}
    </div>
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
