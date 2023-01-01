import { useQuery, gql } from '@apollo/client';

const POST_QUERY = gql`
    query {
        posts: allPosts {
            id
            body
            user {
                username
            }
        }
    }
`;

function Home() {

    const { data, error } = useQuery(POST_QUERY);

    if(error) {
        return <h1>{error.message}</h1>
    }

    if(data) {
        console.log(data);
    }

    return (
        <div className='home'>
            {
                data && data.posts.map((p, i)=>{
                    return (
                        <div>
                            <h2>Post {i+1}</h2>
                            <p>id: </p>{p.id}
                            <p>posted by: </p>{p.user.username}
                            <p>body: </p>{p.body}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;