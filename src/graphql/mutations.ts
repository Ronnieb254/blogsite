import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    token
    user {
      avatar
      blogs {
        id
      }
      email
      fullName
      id
      createdAt
      isActive
      isAdmin
      updatedAt
    }
    success
    message
  }
}
`;

export const REGISTER_MUTATION = gql`
mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    token
    user {
      email
      createdAt
      blogs {
        id
      }
      fullName
      id
      isActive
      isAdmin
      updatedAt
      avatar
    }
    success
    message
  }
}
`;

export const CREATE_BLOG_POST_MUTATION = gql`
mutation CreateBlog($input: BlogInput!) {
  createBlog(input: $input) {
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
    authorId
    author {
      id
      fullName
      email
    }
  }
}
`;
//deleteBlog(id: ID!): Boolean
export const DELETE_BLOG_POST_MUTATION = gql`
mutation DeleteBlog($deleteBlogId: ID!) {
  deleteBlog(id: $deleteBlogId) {
    id
    success
    message
  }
}
`;

export const UPDATE_BLOG_POST_MUTATION = gql`
mutation UpdateBlog($updateBlogId: ID!, $input: BlogInput!) {
  updateBlog(id: $updateBlogId, input: $input) {
    id
  }
}
`;
//subscribeToNewsletter(email: String!): Boolean
export const SUBSCRIBE_NEWSLETTER_MUTATION = gql`
mutation Subscribe($input: SubscriberInput!) {
  subscribe(input: $input) {
    id
    message
    success
  }
}
`;
export const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContact($input: ContactInput!) {
  createContact(input: $input) {
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