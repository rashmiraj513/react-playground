import './App.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

const App = () => {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img className='avatar' src='../rashmi.jpg' alt='Rashmi Raj' />;
};

const Intro = () => {
  return (
    <>
      <h1>Rashmi Raj</h1>
      <p>
        Intern at Intel. Persuing Masters from IIT Patna in Computer Science and
        Engineering
      </p>
    </>
  );
};

const SkillList = () => {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  return (
    <div className='skill' style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {/* These are mutually exclusive blocks. Only one will be true in each case. */}
        {skillObj.level === 'beginner' && '👶'}
        {skillObj.level === 'intermediate' && '👍'}
        {skillObj.level === 'advanced' && '💪'}
      </span>
    </div>
  );
};

export default App;
