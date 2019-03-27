// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getAsitente = `query GetAsitente($id: ID!) {
  getAsitente(id: $id) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const listAsitentes = `query ListAsitentes(
  $filter: ModelAsitenteFilterInput
  $limit: Int
  $nextToken: String
) {
  listAsitentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      NombreGafete
      NombreCertificado
      Clases
    }
    nextToken
  }
}
`;
export const getClase = `query GetClase($id: ID!) {
  getClase(id: $id) {
    id
    NombreClase
    Ponente
  }
}
`;
export const listClases = `query ListClases(
  $filter: ModelClaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listClases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      NombreClase
      Ponente
    }
    nextToken
  }
}
`;
