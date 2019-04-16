import React, { useState } from 'react';
import styled from 'styled-components';
// takes a type of error or success

const MessageWrapper = styled.div`
  background: lightcoral;
  padding: 0.5em 1em;
  border-left: 5px solid red;
  border-right: 3px solid red;
  margin: 1em 0;
  position: relative;
  button {
    position: absolute;
    right: 5px;
    margin-top: -0.4em;
    height: 30px;
    width: 30px;
    border: none;
    background: rgba(255,255,255,0.4);
    font-weight: bold;
  }
  &.success {
    background: lightgreen;
    border-left: 5px solid green;
    border-right: 3px solid green;
  }
  &.closed {
    display: none;
  }
`;

export const Message = ({ type, children, error }) => {
  const [messageClass, setMessageClass] = useState(type);
  const display = children || error.message.replace(`GraphQL error: `, ``);

  return (
    <MessageWrapper className={messageClass}>
      {display}
      <button
        type="button"
        onClick={() => setMessageClass(`closed`)}
      >
        ✕
      </button>
    </MessageWrapper>
  );
};
