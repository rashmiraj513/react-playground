import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import './App.css';

const createRandomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: `${faker.hacker.phrase()}`,
  };
};

const App = () => {
  const [isFakeDark, setIsFakeDark] = useState(false);
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleClearPosts = () => {
    setPosts([]);
  };

  const handleAddPost = (post) => {
    setPosts((posts) => [post, ...posts]);
  };

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
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
      />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
};

const Header = ({ searchQuery, setSearchQuery, posts, onClearPosts }) => {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

const SearchPosts = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type='text'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  );
};

const Results = ({ posts }) => {
  return <p>🚀 {posts.length} atomic posts found</p>;
};

const Main = ({ posts, onAddPost }) => {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Post posts={posts} />
    </main>
  );
};

const FormAddPost = ({ onAddPost }) => {
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

const Post = ({ posts }) => {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
};

const List = ({ posts }) => {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; by the Atomic Blog ✌️.</p>
    </footer>
  );
};

const Archive = ({ onAddPost }) => {
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
