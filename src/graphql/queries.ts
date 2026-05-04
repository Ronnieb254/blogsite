import { gql } from "@apollo/client";

export const BLOGS_QUERY = gql`
  query Blogs($offset: Int, $limit: Int, $publishedOnly: Boolean) {
    blogs(offset: $offset, limit: $limit, publishedOnly: $publishedOnly) {
      id
      title
      slug
      content
      excerpt
      featuredImage
      metaTitle
      metaDescription
      published
      publishedAt
      createdAt
      updatedAt
      tags
      author {
        email
        fullName
        id
        avatar
      }
      authorId
    }
  }
`;