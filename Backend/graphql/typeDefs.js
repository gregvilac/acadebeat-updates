const typeDefs = `#graphql
  type Query {
    recentPosts: [Post!]!
    post(id: ID!): Post!
    languages: [Language!]!
    teacher(id: ID!): [Teacher!]!
  }
  type Post {
    id: ID!
    featuredImagePath: String!
    imageCredit: String!
    title: String!
    subtitle: String!
    overview: String!
    background: String!
    date: String!
    author: Teacher!
    category: String!
    language: Language!
    level: String!
    content: String!
  }
  type Language {
    id: ID!
    name: String!
    code: String!
    neural: Boolean!
    targetQuote: String!
    targetQuoteMarks: String
    nativeQuote: String!
    rtl: Boolean!
  }
  type Teacher {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    imagePath: String!
    bio: String!
    posts: [Post]
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    imagePath: String!
    bio: String!
    likedPosts: [Post]
    native: [Language!]!
    target: [Language!]!
  }
  input createStudentInput {
  firstName: String!
  }
  type Mutation {
  createStudent(input: createStudentInput): Student}
`;

export default typeDefs;
