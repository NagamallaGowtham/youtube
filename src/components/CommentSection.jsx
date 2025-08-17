import { useSelector } from "react-redux"
import EachComment from "./EachComment"

const CommentSection = () => {
    const comments = useSelector(store => store.comments.videoComments)
  return (
    <div className="all-comments-section mt-5">
        {comments?.map(comment => <EachComment key={comment.etag} comment={comment} />)}
        <div id="sentinel"></div>
    </div>
  )
}

export default CommentSection