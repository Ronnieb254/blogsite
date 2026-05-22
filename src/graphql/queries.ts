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

/* ===================== QUERIES ===================== */

export const GET_CONTACTS = gql`
  query Contacts($unreadOnly: Boolean, $limit: Int) {
    contacts(unreadOnly: $unreadOnly, limit: $limit) {
      id
      name
      email
      phone
      subject
      message
      isRead
      createdAt
    }
  }
`;

export const GET_CONTACT = gql`
  query Contact($contactId: ID!) {
    contact(id: $contactId) {
      id
      name
      email
      phone
      subject
      message
      isRead
      createdAt
    }
  }
`;
