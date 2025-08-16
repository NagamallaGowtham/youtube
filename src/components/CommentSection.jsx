import { useSelector } from "react-redux"
import EachComment from "./EachComment"

const CommentSection = () => {
    const comments = useSelector(store => store.comments.videoComments)
  return (
    <div className="mt-5">
        {comments?.map(comment => <EachComment key={comment.id} comment={comment} />)}
    </div>
  )
}

export default CommentSection