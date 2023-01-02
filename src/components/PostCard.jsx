import Card from 'react-bootstrap/Card';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

import '../styles/PostCard.css';

function PostCard( { props } ) {

    const { body, user: { id: userId, username: username }, likesCount, commentsCount } = props;

    return (
        <Card className="post_card">
            <Card.Header>{username}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {body}
                    {' '}
                </p>
                <footer className="blockquote-footer">
                    {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
                    likes: {likesCount} commntes: {commentsCount}
                </footer>
                </blockquote>
            </Card.Body>
    </Card>
    );
}

export default PostCard;