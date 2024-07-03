import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const BlogCard = styled.div`
  width: 300px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin: 10px 0;
  text-align: center;
`;

const PostSummary = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

function Blogs() {
  const posts = [
    {
      id: 1,
      img: "https://as1.ftcdn.net/v2/jpg/06/39/62/90/1000_F_639629017_YjfnLtEGhYsnXr9GlyXf6dXwLVmVdaRW.jpg",
      title: "New Services Launch: Enhance Your IT Infrastructure",
      summary:
        "Discover our latest services designed to boost your IT infrastructure's performance and security.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/powtoon-dev/image/fetch/w_864,h_486,f_auto,q_auto/https://library.powtoon.co/templates/v5/thumbs/pt737-Customer_success_story1920x1080_yqYV3sE.jpg",
      title: "Client Success Story: Transforming Businesses with Technology",
      summary:
        "Learn how our solutions have driven real transformation and success for businesses like yours.",
    },
    {
      id: 3,
      img: "https://imageio.forbes.com/specials-images/imageserve/636e02ab7ac0267c6861196d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      title: "Cybersecurity Trends 2024: Protecting Your Business in the Digital Age",
      summary:
        "Stay informed about the latest cybersecurity threats and strategies to safeguard your business.",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCC9Pqq17xbDg5GJpedRs2OwU5yFbP0_9s6iILevdQ5vDM-NQt3OXp0ycOtCn1HfYIyg&usqp=CAU",
      title: "Future of AI in Business: Harnessing AI for Competitive Advantage",
      summary:
        "Explore how AI is reshaping industries and learn how your business can leverage AI technologies.",
    },
  ];

  return (
    <BlogContainer id="blogs">
      <BlogWrapper>
        <BlogTitle>Startup Blogs</BlogTitle>
        <Desc>
          Explore our startup's insights and stay updated with the latest trends and solutions in IT services.
        </Desc>
        <br />
        <CardContainer>
          {posts.map((post) => (
            <BlogCard key={post.id}>
              <PostImg src={post.img} alt="Blog Post Image" />
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
