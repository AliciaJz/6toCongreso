// eslint-disable
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createAsistente = `mutation CreateAsistente($input: CreateAsistenteInput!) {
  createAsistente(input: $input) {
    id
    NombreGafete
    NombreCertificado
    Clases
    Categoria
  }
}
`;
export const updateAsistente = `mutation UpdateAsistente($input: UpdateAsistenteInput!) {
  updateAsistente(input: $input) {
    id
    NombreGafete
    NombreCertificado
    Clases
    Categoria
  }
}
`;
export const deleteAsistente = `mutation DeleteAsistente($input: DeleteAsistenteInput!) {
  deleteAsistente(input: $input) {
    id
    NombreGafete
    NombreCertificado
    Clases
    Categoria
  }
}
`;
export const createClase = `mutation CreateClase($input: CreateClaseInput!) {
  createClase(input: $input) {
    id
    NombreClase
    Ponente
    Asistentes {
      id
      NombreGafete
      NombreCertificado
      Clases
      Categoria
    }
  }
}
`;
export const updateClase = `mutation UpdateClase($input: UpdateClaseInput!) {
  updateClase(input: $input) {
    id
    NombreClase
    Ponente
    Asistentes {
      id
      NombreGafete
      NombreCertificado
      Clases
      Categoria
    }
  }
}
`;
export const deleteClase = `mutation DeleteClase($input: DeleteClaseInput!) {
  deleteClase(input: $input) {
    id
    NombreClase
    Ponente
    Asistentes {
      id
      NombreGafete
      NombreCertificado
      Clases
      Categoria
    }
  }
}
`;
