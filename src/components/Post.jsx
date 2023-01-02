import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { Row, Col, Container } from 'react-bootstrap';

import PostCard from './PostCard.jsx';

function Post() {

  const { id } = useParams();

  const { data: postData, error: postError } = useQuery(POST_QUERY, { variables: { id: id }});


  if(postError) {
    return <h1>{postError.message}</h1>
  }

  if(postData) {
      console.log(postData);
  }
  return (
    <div className="post" >
          <Container>
            <Row>
              Post
            </Row>
            <Row>
              <Col>
              {postData && 
                <PostCard props={postData.post}/>
              }
              </Col>
            </Row>
          </Container>
    </div>
  )
}

const POST_QUERY = gql`
  query($id: ID!) {
    post: post(id: $id) {
      id
      user {
        username
      }
      body
      commentsCount
      likesCount
    }
  }
`;

export default Post;