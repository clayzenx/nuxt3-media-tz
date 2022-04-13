interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

interface IPost {
  userId: number,
  title: string,
  body: string,
  comments: IComment[]
}
