import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { PostProvider, usePosts } from './PostContext';
import Test from './Test';
import './App.css';

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: `${faker.hacker.phrase()}`,
  };
};

const App = () => {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('fake-dark-mode');
  }, [isFakeDark]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className='btn-fake-dark-mode'
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
};

const Header = () => {
  const { onClearPosts } = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      type='text'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  );
};

const Results = () => {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
};

const Main = () => {
  const { posts, onAddPost } = usePosts();
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Post posts={posts} />
    </main>
  );
};

const FormAddPost = () => {
  const { onAddPost } = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Post Title'
      />
      <input
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Post Body'
      />
      <button>Add Post</button>
    </form>
  );
};

const Post = () => {
  const { posts } = usePosts();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
};

const List = () => {
  const { posts } = usePosts();
  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; by the Atomic Blog ✌️.</p>
    </footer>
  );
};

const Archive = () => {
  const { onAddPost } = usePosts();
  const [posts] = useState(
    Array.from({ length: 100 }, () => createRandomPost())
  );
  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post Archive</h2>
      <button onClick={() => setShowArchive((showArchive) => !showArchive)}>
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </button>
      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default App;
