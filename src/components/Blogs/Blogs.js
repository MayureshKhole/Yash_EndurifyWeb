import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { CardContainer } from '../Projects/ProjectsStyle';

const BlogContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

const BlogWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1rem;
`;

const BlogTitle = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const BlogCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostImg = styled.img`
  max-width: 100%;
  height: auto;
  padding: 2rem;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  color: black;
`;

const PostSummary = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Blogs() {
  const posts = [
    { id: 1, img: "https://miro.medium.com/v2/resize:fit:1400/0*lW3KmU7rgbXBZCRx.png", title: "Understanding React Hooks", summary: "Dive deep into how React Hooks can make your components more readable and modular." },
    { id: 2, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQWRd2JwYqKCH4MP9zF8T4yBj2OLI54qi-4jDdSwuWTrP4Mj_5RrrcTB1u-Hup47jeyqdub6WEQsuOwVJxU1hGfd2tpv0JYo3H58dVV3JplACn4kFRegkVxl0awT9VvMvcqJc7TMl4si4lNTZEdLvL05z5WZ3BlhpmiB7EQA0ib9A2rPZKcHoOITGQ6Q/w640-h360/react%20css%20style.jpg", title: "Styling in React", summary: "Explore various ways to style React components using CSS-in-JS, CSS Modules, and more." },
    { id: 1, img: "https://miro.medium.com/v2/resize:fit:1400/0*lW3KmU7rgbXBZCRx.png", title: "Understanding React Hooks", summary: "Dive deep into how React Hooks can make your components more readable and modular." },

    { id: 1, img: "https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg", title: "Understanding React Hooks", summary: "Dive deep into how React Hooks can make your components more readable and modular." },
    { id: 2, img: "https://innovance.com.tr/wp-content/uploads/2022/07/styling.png", title: "Styling in React", summary: "Explore various ways to style React components using CSS-in-JS, CSS Modules, and more." },
    { id: 1, img: "https://miro.medium.com/v2/resize:fit:1166/1*bqtyARlwzJtp9XTWjM3quQ.png", title: "Understanding React Hooks", summary: "Dive deep into how React Hooks can make your components more readable and modular." },
  ];

  return (
    <BlogContainer id='blogs'>
      <BlogWrapper>
        <BlogTitle>Blogs</BlogTitle>
        <Desc>Feel free to checkout my blogs! Browse through for interesting reads. Stay updated with the latest insights!</Desc>
        <CardContainer>
        {posts.map(post => (
          <BlogCard key={post.id}>
            <PostImg src={post.img} alt="Blog Post Image"/>
            <PostTitle>{post.title}</PostTitle>
            <PostSummary>{post.summary}</PostSummary>
            <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
          </BlogCard>
        ))}
        </CardContainer>
      </BlogWrapper>
    </BlogContainer>
  );
}

export default Blogs;
