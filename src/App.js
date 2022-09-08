import './App.css';
import Home from './components/Home';
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import IssueConversation from './components/Issue-Conversation';
import IssueTypeSelection from './components/Issue-Type-Selection';
import NewIssue from './components/New-Issue';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="issue-conversation" element={<IssueConversation />} />
        <Route path="issue-type-select" element={<IssueTypeSelection />} />
        <Route path="new-issue" element={<NewIssue />} />
      </Routes>
    </div>
  );
}

export default App;
