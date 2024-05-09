import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadCommentInput from '../components/ThreadCommentInput';
import DetailThreadItem from '../components/DetailThreadItem';
import ThreadCommentList from '../components/ThreadCommentList';
import {
  asyncAddThreadComment,
  asyncReceiveThreadDetail,
  asynctoggleDownVoteCommentDetailThread,
  asynctoggleDownVoteDetailThread,
  asynctoggleNeutralVoteCommentDetailThread,
  asynctoggleNeutralVoteDetailThread,
  asynctoggleUpVoteCommentDetailThread,
  asynctoggleUpVoteDetailThread,
} from '../states/threadDetail/action';

function DetailThreadPage() {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onThreadUpVote = (threadId) => {
    dispatch(asynctoggleUpVoteDetailThread(threadId));
  };

  const onThreadDownVote = (threadId) => {
    dispatch(asynctoggleDownVoteDetailThread(threadId));
  };

  const onThreadNeutralVote = (threadId) => {
    dispatch(asynctoggleNeutralVoteDetailThread(threadId));
  };

  const onAddComment = (content) => {
    dispatch(asyncAddThreadComment({ content, id }));
  };

  const onCommentUpVote = (commentId, threadId) => {
    dispatch(asynctoggleUpVoteCommentDetailThread({ commentId, threadId }));
  };

  const onCommentDownVote = (commentId, threadId) => {
    dispatch(asynctoggleDownVoteCommentDetailThread({ commentId, threadId }));
  };

  const onCommentNeutralVote = (commentId, threadId) => {
    dispatch(asynctoggleNeutralVoteCommentDetailThread({ commentId, threadId }));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="w-full h-screen py-16">
      <div className="flex flex-col rounded-lg bg-white p-2">
        <DetailThreadItem
          {...detailThread}
          authUser={authUser}
          like={onThreadUpVote}
          dislike={onThreadDownVote}
          neutral={onThreadNeutralVote}
        />
        <ThreadCommentInput AddComment={onAddComment} />
        <ThreadCommentList
          comments={detailThread.comments}
          authUser={authUser}
          like={(commentId) => onCommentUpVote(commentId, detailThread.id)}
          dislike={(commentId) => onCommentDownVote(commentId, detailThread.id)}
          neutral={(commentId) => onCommentNeutralVote(commentId, detailThread.id)}

        />
      </div>
    </section>
  );
}

export default DetailThreadPage;
