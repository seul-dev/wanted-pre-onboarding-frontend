import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/router/PrivateRoute';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/todo' element={<PrivateRoute />}>
            <Route path='/todo' element={<Todo />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
