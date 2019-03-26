// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateAsitente = `subscription OnCreateAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onCreateAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onUpdateAsitente = `subscription OnUpdateAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onUpdateAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onDeleteAsitente = `subscription OnDeleteAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onDeleteAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onCreateClase = `subscription OnCreateClase($id: ID, $NombreClase: String, $Ponente: String) {
  onCreateClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
export const onUpdateClase = `subscription OnUpdateClase($id: ID, $NombreClase: String, $Ponente: String) {
  onUpdateClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
export const onDeleteClase = `subscription OnDeleteClase($id: ID, $NombreClase: String, $Ponente: String) {
  onDeleteClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
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
