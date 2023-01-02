import { useQuery, gql } from '@apollo/client';

import { Container, Row, Col } from 'react-bootstrap';

import PostCard from './PostCard.jsx';

const POST_QUERY = gql`
    query {
        posts: allPosts {
            id
            body
            user {
                id
                username
            }
            likesCount
            commentsCount
        }
    }
`;

function Home() {

    const { data: postsData, error: postsError } = useQuery(POST_QUERY);

    if(postsError) {
        // console.log(postsError);
        return <h1>{postsError.message}</h1>
    }

    if(postsData) {
        // console.log(postsData.posts);
    }

    return (
        <div className="home">
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Posts...</h1>
                </Row>
                
                {postsData && 
                    postsData.posts.map((p) => (
                        <Row className='justify-content-md-center'>
                            <Col>
                                <PostCard props={ p } />
                             </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

export default Home;


