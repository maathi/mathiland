import { getPostBySlug, getAllPosts } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

export default function Poop({ post }) {
  return (
    <>
      <h1>welcome back</h1> <p>{post.title}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
