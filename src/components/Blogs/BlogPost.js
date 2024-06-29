import React from "react";
import { useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const theme = {
  text_primary: "#333",
  text_secondary: "#666",
  background: "#F4F4F4",
  accent: "#007BFF",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${theme.background};
`;

const Header = styled.header`
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  height: 4rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11rem;
  @media (max-width: 786px) {
    padding: 0;
  }
`;

const HeaderLeft = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const HeaderRight = styled.div`
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 786px) {
    display: none;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PostWrapper = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 2rem;
`;

const PostTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
  text-align: center;
`;

const PostMeta = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.text_secondary};
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  gap: 0.8rem;

  & > div:not(:last-child)::after {
    content: "·";
    margin-left: 0.8rem;
  }
`;

const PostContent = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.text_secondary};
  line-height: 1.6;
  text-align: justify;

  p,
  ul {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;

const PostImg = styled.img`
  border-radius: 2px;
  border-color: #ffffff;
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 1rem;
`;

const DownloadButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 15rem;
  left: 0;
  width: 3rem;
  height: 100%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  @media (max-width: 786px) {
    padding-left: 10px;
    width: 1rem;
  }
`;

const SocialIcon = styled.a`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text_primary};
  &:hover {
    color: #ffc470;
  }
`;

const blogPosts = [
  {
    id: 1,
    img: "https://i.ytimg.com/vi/8VGoj8mrMnY/maxresdefault.jpg",
    title: "Learning in public",
    content:
      "<h2>Introduction:</h2><p>In a world driven by innovation and technological advancement, the pursuit of knowledge has become essential. Traditional learning methods, which often confine us to learning in isolation, can limit our potential and restrict opportunities for collaboration, feedback, and community engagement. In contrast, learning in public offers a valuable alternative. This newsletter explores the concept of learning in public.</p><h2>Content:</h2><p>Learning in public involves creating content, making it accessible to others, and sharing your learning journey with the community. It's not just about acquiring knowledge for yourself but also about contributing to a community that might find your insights helpful.</p><p>Why Should We Practice Learning in Public?</p><ul><li><strong>Knowledge Sharing:</strong> By sharing your journey, you can provide valuable insights and resources to the community. Your experiences might help someone overcome a challenge they are facing.</li><li><strong>Feedback and Growth:</strong> Posting about your projects and learnings can help you receive feedback from experts and peers. This feedback is invaluable and can further develop your skills and improve your work.</li><li><strong>Building Credibility:</strong> Consistently sharing your work demonstrates your dedication and expertise. Over time, this builds credibility and can open doors to new opportunities.</li><li><strong>Networking:</strong> Learning in public helps you connect with experienced individuals in your field. These connections can lead to collaborations, mentorships, and career opportunities.</li></ul><p>How to Practice Learning in Public?</p><p><ul><li><strong>Active on Social Media:</strong> Engage with communities on different platforms such as Twitter and LinkedIn. Share your learnings, projects, and resources.</li><li><strong>Create Content:</strong> Experiment with different formats like blogs, videos, live streams, or code repositories. Choose the medium that suits you best.</li><li><strong>Document Your Journey:</strong> Keep a record of your progress, challenges, and achievements. This not only helps you track your growth but also serves as inspiration for others.</li></ul><p>Remember, sharing your work is not about bragging; it's about contributing to the collective knowledge and inspiring others on their own learning journeys.</p><h2>Embrace the Power of Learning in Public</h2><p>As you embark on your journey of learning in public, embrace the opportunities it brings for growth, connection, and impact. By sharing your knowledge and experiences, you will grow and empower others to do the same.</p><h2>What's New</h2><p><strong>Container Runtime Interface streaming explained:</strong> Sascha Grunert delves into the intricacies of the Kubernetes Container Runtime Interface (CRI), focusing on the functionality and history of three key Remote Procedure Calls (RPCs).</p><p><strong>Apple signs deal with OpenAI:</strong> An interesting read about Apple's decision to partner with OpenAI for AI functionality in iOS 18, after earlier discussions with Google and OpenAI.</p><p><strong>Google scrambles to manually remove weird AI answers in search:</strong> This blog discusses the rollout of Google's new AI product, which has generated attention for producing unusual and sometimes concerning responses to user queries.</p><h2>",
    author: "Mayuresh Khole",
    date: "Jan 3, 2024",
  },
  {
    id: 2,
    img: "https://miro.medium.com/v2/resize:fit:1026/1*maGZm-lKWnn1uPRYec2RRw.jpeg",
    title: "Mongodb VS Firebase",
    content:
      "<h2>Introduction:</h2><p>Choosing the right database is crucial for the success of any application. With numerous options available, each offering unique features and capabilities, developers must carefully evaluate their requirements to make an informed decision. MongoDB and Firebase are two popular choices, each with its strengths and weaknesses.</p><h2>Content:</h2><p>Database Structure:</p><ul><li>MongoDB is a NoSQL database that stores data in JSON-like documents. This flexibility allows developers to store and retrieve complex data structures easily. Firebase, on the other hand, uses a real-time database that stores data as JSON and synchronizes changes in real-time across all connected clients.</li><li>Data Querying and Manipulation:</li><li>Both MongoDB and Firebase provide powerful querying and manipulation capabilities. MongoDB supports complex queries, indexes, and aggregation pipelines, making it suitable for applications with diverse data requirements. Firebase offers a simple and intuitive API for querying data, making it ideal for real-time applications that require instant updates.</li><li>Scalability and Performance:</li><li>MongoDB and Firebase are both designed to scale horizontally, allowing applications to handle increasing loads by adding more servers or resources. MongoDB's sharding capabilities enable distribution of data across multiple servers, while Firebase's real-time synchronization ensures consistent performance across all connected clients.</li><li>Community and Support:</li><li>Both MongoDB and Firebase have large and active communities that contribute to ongoing development and support. MongoDB offers comprehensive documentation, tutorials, and community forums, making it easy for developers to find solutions and resources. Firebase provides extensive documentation, code samples, and support through Stack Overflow and Google Developer Groups.</li><li>Security and Compliance:</li><li>MongoDB and Firebase offer robust security features, including authentication, authorization, and encryption. MongoDB allows developers to implement fine-grained access control and auditing, ensuring data protection and compliance with industry regulations. Firebase provides built-in authentication and security rules that allow developers to control access to data and resources based on user roles and permissions.</li><li>Integration and Ecosystem:</li><li>MongoDB and Firebase integrate seamlessly with popular frameworks, libraries, and development tools, making it easy for developers to build and deploy applications. MongoDB's ecosystem includes drivers for various programming languages, ODM libraries, and third-party integrations. Firebase offers SDKs for web, mobile, and server-side development, along with plugins for analytics, messaging, and hosting services.</li></ul><p>Conclusion:</p><p>Choosing between MongoDB and Firebase depends on the specific requirements of your application, such as data structure complexity, real-time updates, scalability, and developer experience. MongoDB is well-suited for applications with complex data models and diverse querying needs, while Firebase is ideal for real-time applications that require seamless synchronization and simplicity. By evaluating these factors and considering your project goals, you can select the database that best meets your needs and supports the growth of your application.</p><p>Whether you choose MongoDB or Firebase, both databases offer powerful features and capabilities that can enhance the performance, scalability, and functionality of your application. By leveraging their strengths and understanding their differences, you can build robust and efficient applications that meet the demands of today's digital landscape.</p><h2>",
    author: "Mayuresh Khole",
    date: "March 24, 2024",
  },
  {
    id: 3,
    img: "https://miro.medium.com/v2/resize:fit:1026/1*maGZm-lKWnn1uPRYec2RRw.jpeg",
    title: "Mongodb VS Firebase",
    content:
      "<h2>Introduction:</h2><p>Choosing the right database is crucial for the success of any application. With numerous options available, each offering unique features and capabilities, developers must carefully evaluate their requirements to make an informed decision. MongoDB and Firebase are two popular choices, each with its strengths and weaknesses.</p><h2>Content:</h2><p>Database Structure:</p><ul><li>MongoDB is a NoSQL database that stores data in JSON-like documents. This flexibility allows developers to store and retrieve complex data structures easily. Firebase, on the other hand, uses a real-time database that stores data as JSON and synchronizes changes in real-time across all connected clients.</li><li>Data Querying and Manipulation:</li><li>Both MongoDB and Firebase provide powerful querying and manipulation capabilities. MongoDB supports complex queries, indexes, and aggregation pipelines, making it suitable for applications with diverse data requirements. Firebase offers a simple and intuitive API for querying data, making it ideal for real-time applications that require instant updates.</li><li>Scalability and Performance:</li><li>MongoDB and Firebase are both designed to scale horizontally, allowing applications to handle increasing loads by adding more servers or resources. MongoDB's sharding capabilities enable distribution of data across multiple servers, while Firebase's real-time synchronization ensures consistent performance across all connected clients.</li><li>Community and Support:</li><li>Both MongoDB and Firebase have large and active communities that contribute to ongoing development and support. MongoDB offers comprehensive documentation, tutorials, and community forums, making it easy for developers to find solutions and resources. Firebase provides extensive documentation, code samples, and support through Stack Overflow and Google Developer Groups.</li><li>Security and Compliance:</li><li>MongoDB and Firebase offer robust security features, including authentication, authorization, and encryption. MongoDB allows developers to implement fine-grained access control and auditing, ensuring data protection and compliance with industry regulations. Firebase provides built-in authentication and security rules that allow developers to control access to data and resources based on user roles and permissions.</li><li>Integration and Ecosystem:</li><li>MongoDB and Firebase integrate seamlessly with popular frameworks, libraries, and development tools, making it easy for developers to build and deploy applications. MongoDB's ecosystem includes drivers for various programming languages, ODM libraries, and third-party integrations. Firebase offers SDKs for web, mobile, and server-side development, along with plugins for analytics, messaging, and hosting services.</li></ul><p>Conclusion:</p><p>Choosing between MongoDB and Firebase depends on the specific requirements of your application, such as data structure complexity, real-time updates, scalability, and developer experience. MongoDB is well-suited for applications with complex data models and diverse querying needs, while Firebase is ideal for real-time applications that require seamless synchronization and simplicity. By evaluating these factors and considering your project goals, you can select the database that best meets your needs and supports the growth of your application.</p><p>Whether you choose MongoDB or Firebase, both databases offer powerful features and capabilities that can enhance the performance, scalability, and functionality of your application. By leveraging their strengths and understanding their differences, you can build robust and efficient applications that meet the demands of today's digital landscape.</p><h2>",
    author: "Mayuresh Khole",
    date: "March 24, 2024",
  },
  {
    id: 4,
    img: "https://miro.medium.com/v2/resize:fit:1026/1*maGZm-lKWnn1uPRYec2RRw.jpeg",
    title: "Mongodb VS Firebase",
    content:
      "<h2>Introduction:</h2><p>Choosing the right database is crucial for the success of any application. With numerous options available, each offering unique features and capabilities, developers must carefully evaluate their requirements to make an informed decision. MongoDB and Firebase are two popular choices, each with its strengths and weaknesses.</p><h2>Content:</h2><p>Database Structure:</p><ul><li>MongoDB is a NoSQL database that stores data in JSON-like documents. This flexibility allows developers to store and retrieve complex data structures easily. Firebase, on the other hand, uses a real-time database that stores data as JSON and synchronizes changes in real-time across all connected clients.</li><li>Data Querying and Manipulation:</li><li>Both MongoDB and Firebase provide powerful querying and manipulation capabilities. MongoDB supports complex queries, indexes, and aggregation pipelines, making it suitable for applications with diverse data requirements. Firebase offers a simple and intuitive API for querying data, making it ideal for real-time applications that require instant updates.</li><li>Scalability and Performance:</li><li>MongoDB and Firebase are both designed to scale horizontally, allowing applications to handle increasing loads by adding more servers or resources. MongoDB's sharding capabilities enable distribution of data across multiple servers, while Firebase's real-time synchronization ensures consistent performance across all connected clients.</li><li>Community and Support:</li><li>Both MongoDB and Firebase have large and active communities that contribute to ongoing development and support. MongoDB offers comprehensive documentation, tutorials, and community forums, making it easy for developers to find solutions and resources. Firebase provides extensive documentation, code samples, and support through Stack Overflow and Google Developer Groups.</li><li>Security and Compliance:</li><li>MongoDB and Firebase offer robust security features, including authentication, authorization, and encryption. MongoDB allows developers to implement fine-grained access control and auditing, ensuring data protection and compliance with industry regulations. Firebase provides built-in authentication and security rules that allow developers to control access to data and resources based on user roles and permissions.</li><li>Integration and Ecosystem:</li><li>MongoDB and Firebase integrate seamlessly with popular frameworks, libraries, and development tools, making it easy for developers to build and deploy applications. MongoDB's ecosystem includes drivers for various programming languages, ODM libraries, and third-party integrations. Firebase offers SDKs for web, mobile, and server-side development, along with plugins for analytics, messaging, and hosting services.</li></ul><p>Conclusion:</p><p>Choosing between MongoDB and Firebase depends on the specific requirements of your application, such as data structure complexity, real-time updates, scalability, and developer experience. MongoDB is well-suited for applications with complex data models and diverse querying needs, while Firebase is ideal for real-time applications that require seamless synchronization and simplicity. By evaluating these factors and considering your project goals, you can select the database that best meets your needs and supports the growth of your application.</p><p>Whether you choose MongoDB or Firebase, both databases offer powerful features and capabilities that can enhance the performance, scalability, and functionality of your application. By leveraging their strengths and understanding their differences, you can build robust and efficient applications that meet the demands of today's digital landscape.</p><h2>",
    author: "Mayuresh Khole",
    date: "March 24, 2024",
  },
];

const BlogPost = () => {
  let { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  const handleDownloadPDF = () => {
    const input = document.getElementById("post-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgHeight = (canvas.height * 208) / canvas.width;
      pdf.addImage(imgData, 0, 0, 208, imgHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <HeaderLeft>My Blog</HeaderLeft>
          <HeaderRight>
            <SocialIcon href="https://twitter.com/mayuresh-khole/" target="_blank">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/mayuresh-khole/" target="_blank">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/MayureshKhole/" target="_blank">
              <FaGithub />
            </SocialIcon>
          </HeaderRight>
        </Header>
        <Sidebar>
          <SocialIcon href="https://twitter.com/mayuresh-khole/" target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/mayuresh-khole/" target="_blank">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/MayureshKhole/" target="_blank">
            <FaGithub />
          </SocialIcon>
        </Sidebar>
        <PostContainer>
          <PostWrapper>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <div>{post.author}</div>
              <div>{post.date}</div>
            </PostMeta>
            <PostContent id="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            <DownloadButton onClick={handleDownloadPDF}>Download PDF</DownloadButton>
          </PostWrapper>
        </PostContainer>
        <Footer>
          <div>© 2024 My Blog. All rights reserved.</div>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default BlogPost;
