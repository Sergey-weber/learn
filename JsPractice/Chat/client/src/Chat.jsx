import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useSubscription, useMutation, gql } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import {
  Container, Row, Col, FormInput, Button
} from 'shards-react';

const link = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const GET_MESSAGES = gql`
subscription {
  messages {
    id
    content
    user
  }
} 
`;

const POST_MESSAGE = gql`
mutation ($user: String!, $content: String!) {
  postMessage(user: $user, content: $content)
}
`;

const Messages = ({user}) => {
  const { data } = useSubscription(GET_MESSAGES);

  if(!data) {
    return null; 
  }

  return (
    <>
      {
        data.messages.map(({id, user: messageUser, content}) => (
          <div
            style={{
              display: 'flex',
              justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
              paddingBottom: '1em'
            }}
            key={id}
          >
            <div
              style={{
                background: user === messageUser ? '#58bf86' : '#e5e6ea',
              }}
            >{content}</div>
            <h2>{user}</h2>
          
          </div>
        ))
      }
    </>
  );
};

const Chat = () => {
  const [state, stateSet] = React.useState({
    user: 'Sergio',
    content: ''
  });
  const [ postMessage ] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if(state.content.length > 0) {
      postMessage({
        variables: state,
      })
    }

    stateSet({
      ...state, 
      content: ''
    })
  };

  return (
    <Container>
      <Messages user='Sergey' />
      <Row>
        <Col xs={2} style={{padding: 0}}>
          <FormInput
            label='User'
            value={state.user}
            onChange={(evt) => stateSet({
              ...state, 
              user: evt.target.value
            })}
          />
        </Col>
        <Col xs={8}>
        <FormInput
            label='Content'
            value={state.content}
            onChange={(evt) => stateSet({
              ...state, 
              content: evt.target.value
            })}
          />
        </Col>
        <Col xs={2}>
        <Button onClick={onSend}>
          Send
        </Button>
        </Col>
      </Row>
    </Container>
  )
};

export default () => (
  <ApolloProvider client={client}> 
    <Chat />
  </ApolloProvider>
);