/**
* test scenario for ThreadReducer
*
* - ThreadReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by ADD_THREAD action
*  - should return the threads with the toggled like thread when given by TOGGLE_UP_VOTE_THREAD
* action
*  - should return the threads with the toggled like thread when given by TOGGLE_DOWN_VOTE_THREAD
* action
*  - should return the threads with the toggled like thread when given by
* TOGGLE_NEUTRALIZE_THREAD_VOTE action
*/

import { describe, it, expect } from 'vitest';
import ThreadReducer from './reducer';
import { ActionType } from './action';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrage
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('Should return the threads when given by RECEIVE_THREADS action', () => {
    // arrage
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Title 1',
            body: 'Thread Body 1',
            category: 'threadCategori1',
            createdAt: '2024-05-14T10:06:54.477Z',
            ownerId: 'user-EoDesxIVAOW3BX1M',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 'thread-2',
            title: 'Thread Title 2',
            body: 'Thread Body 2',
            category: 'threadCategori2',
            createdAt: '2024-05-14T10:06:54.477Z',
            ownerId: 'user-EoDesxIVAOW3BX1M',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('Should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrage
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Title 1',
        body: 'Thread Body 1',
        category: 'threadCategori1',
        createdAt: '2024-05-14T10:06:54.477Z',
        ownerId: 'user-EoDesxIVAOW3BX1M',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Title 2',
          body: 'Thread Body 2',
          category: 'threadCategori2',
          createdAt: '2024-05-14T10:06:54.477Z',
          ownerId: 'user-EoDesxIVAOW3BX1M',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('Should return the threads with the toggled vote up thread when given by TOGGLE_UP_VOTE_THREAD action', () => {
    // arrage
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Title 1',
        body: 'Thread Body 1',
        category: 'threadCategori1',
        createdAt: '2024-05-14T10:06:54.477Z',
        ownerId: 'user-EoDesxIVAOW3BX1M',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('Should return the threads with the toggled vote down thread when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // arrage
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Title 1',
        body: 'Thread Body 1',
        category: 'threadCategori1',
        createdAt: '2024-05-14T10:06:54.477Z',
        ownerId: 'user-EoDesxIVAOW3BX1M',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('Should return the threads with the toggled vote neutral thread when given by TOGGLE_NEUTRALIZE_THREAD_VOTE action', () => {
    // arrage
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Title 1',
        body: 'Thread Body 1',
        category: 'threadCategori1',
        createdAt: '2024-05-14T10:06:54.477Z',
        ownerId: 'user-EoDesxIVAOW3BX1M',
        totalComments: 0,
        upVotesBy: ['user-1'],
        downVotesBy: ['user-1'],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_NEUTRALIZE_THREAD_VOTE,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = ThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
