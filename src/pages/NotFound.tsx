import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Page not found!</div>
      <Button onClick={() => navigate(-1)} type='button' disabled={false}>
        돌아가기
      </Button>
    </>
  );
  //back to home 버튼
};

export default NotFound;
