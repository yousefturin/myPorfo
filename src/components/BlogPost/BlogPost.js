import React from 'react';
import './BlogPost.css'; // Import CSS module for styles
import { useParams } from 'react-router-dom';
import blogPosts from '../../constants/blogsPosts';

const BlogPost = () => {
    const { postId } = useParams();
    const blogContent = blogPosts.find(post => post.link === postId);

    // Function to render content based on type
    const renderContent = (item, index) => {
        switch (item.type) {
            case 'title':
                return <h1 className="title" key={index}>{item.content}</h1>;
            case 'header':
                return <h2 className="header" key={index}>{item.content}</h2>;
            case 'paragraph':
                return <p className="paragraph" key={index}>{renderParagraph(item.content)}</p>;
            case 'code':
                // Trim leading spaces to normalize indentation
                const normalizedCode = item.content.trim().replace(/^\s+/gm, '');
                return (
                    <div className='code-wrapper' key={index}>
                        <pre className="code"><code>{normalizedCode}</code></pre>
                    </div>
                );
            default:
                return null;
        }
    };
    // Function to render paragraph with bold text, links, and background text
    const renderParagraph = (content) => {
        const parts = content.split(/(\[.*?\]\(BOLD-TEXT\)|\[.*?\]\(LINK-TEXT,.*?\)|\[.*?\]\(BACKGROUND-TEXT\))/g);
        return parts.map((part, index) => {
            if (part.match(/\[.*?\]\(BOLD-TEXT\)/)) {
                const boldText = part.replace(/\[(.*?)\]\(BOLD-TEXT\)/, '$1');
                return <strong key={index}>{boldText}</strong>;
            }
            if (part.match(/\[.*?\]\(LINK-TEXT,.*?\)/)) {
                const linkText = part.match(/\[(.*?)\]\(LINK-TEXT,.*?\)/)[1];
                const linkHref = part.match(/\[.*?\]\(LINK-TEXT,(.*?)\)/)[1];
                return <a className='link-extracted' href={linkHref} key={index}>{linkText}</a>;
            }
            if (part.match(/\[.*?\]\(BACKGROUND-TEXT\)/)) {
                const backgroundText = part.replace(/\[(.*?)\]\(BACKGROUND-TEXT\)/, '$1');
                return <span className='span-extracted' key={index} >{backgroundText}</span>;
            }
            return part;
        });
    };
    // Function to calculate total word count
    const calculateWordCount = () => {
        return blogContent.content.reduce((total, item) => {
            if (item.type === 'paragraph' || item.type === 'header' || item.type === 'title') {
                return total + item.content.split(' ').length;
            }
            return total;
        }, 0);
    };

    // Calculate estimated reading time
    const wordCount = calculateWordCount();
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed of 200 words per minute

    const titleIndex = blogContent.content.findIndex(item => item.type === 'title');
    const dateIndex = blogContent.content.findIndex(item => item.type === 'date');
    const title = blogContent.content[titleIndex];
    const date = dateIndex !== -1 ? blogContent.content[dateIndex].content : null;
    const bodyContent = blogContent.content.slice(Math.max(titleIndex, dateIndex) + 1);
    const imageSrc = `${process.env.PUBLIC_URL}/blog-images/${blogContent.imageURL}`



    return (
        <div className="wrapper-blog-post">
            <div className="blogPost">
                {title && renderContent(title, titleIndex)}
                <hr className="first-divider" />
                <div className="wrapper-date-timeReading">
                    <p className="readingTime">{readingTime} min read</p>
                    <p className="readingTime">{date}</p>
                </div>
                <hr className="second-divider" />
                <div className="blog-inner-image-wrapper">
                    <img src={imageSrc} alt='hero' className='project-image' />
                </div>
                {bodyContent.map((item, index) => renderContent(item, index))}
                <hr className="second-divider" />
            </div>
        </div>
    );
};

export default BlogPost;
