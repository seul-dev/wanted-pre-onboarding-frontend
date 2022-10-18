import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
