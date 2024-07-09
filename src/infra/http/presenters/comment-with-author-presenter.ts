import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-autor'

export class CommentWithAuthorPresenter {
  static toHTTP(commentWithAutor: CommentWithAuthor) {
    return {
      commentId: commentWithAutor.commentId.toString(),
      authorId: commentWithAutor.authorId.toString(),
      authorName: commentWithAutor.author,
      content: commentWithAutor.content,
      createdAt: commentWithAutor.createdAt,
      updatedAt: commentWithAutor.updatedAt,
    }
  }
}
