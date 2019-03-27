// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateAsitente = `subscription OnCreateAsitente {
  onCreateAsitente {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onUpdateAsitente = `subscription OnUpdateAsitente {
  onUpdateAsitente {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onDeleteAsitente = `subscription OnDeleteAsitente {
  onDeleteAsitente {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onCreateClase = `subscription OnCreateClase {
  onCreateClase {
    id
    NombreClase
    Ponente
  }
}
`;
export const onUpdateClase = `subscription OnUpdateClase {
  onUpdateClase {
    id
    NombreClase
    Ponente
  }
}
`;
export const onDeleteClase = `subscription OnDeleteClase {
  onDeleteClase {
    id
    NombreClase
    Ponente
  }
}
`;
