import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRAL_VOTE_COMMENT: 'TOGGLE_NEUTRAL_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentDetailThreadActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentDetailThreadActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralVoteCommentDetailThreadActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asynctoggleUpVoteDetailThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleVoteUpThread({ threadId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asynctoggleDownVoteDetailThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleVoteDownThread({ threadId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asynctoggleNeutralVoteDetailThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleVoteNeutralThread({ threadId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddThreadComment({ content }) {
  return async (dispatch, getState) => {
    const { detailThread } = getState();
    try {
      const comment = await api.createComment({ content, threadId: detailThread.id });
      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asynctoggleUpVoteCommentDetailThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteCommentDetailThreadActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.toggleVoteUpComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asynctoggleDownVoteCommentDetailThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteCommentDetailThreadActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.toggleVoteDownComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

function asynctoggleNeutralVoteCommentDetailThread({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleNeutralVoteCommentDetailThreadActionCreator({ commentId, userId: authUser.id }),
    );
    try {
      await api.toggleVoteNeutralComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteDetailThreadActionCreator,
  toggleDownVoteDetailThreadActionCreator,
  toggleNeutralVoteDetailThreadActionCreator,
  addThreadCommentActionCreator,
  toggleUpVoteCommentDetailThreadActionCreator,
  toggleDownVoteCommentDetailThreadActionCreator,
  toggleNeutralVoteCommentDetailThreadActionCreator,
  asyncReceiveThreadDetail,
  asynctoggleUpVoteDetailThread,
  asynctoggleDownVoteDetailThread,
  asynctoggleNeutralVoteDetailThread,
  asyncAddThreadComment,
  asynctoggleUpVoteCommentDetailThread,
  asynctoggleDownVoteCommentDetailThread,
  asynctoggleNeutralVoteCommentDetailThread,
};
