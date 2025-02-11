import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../assets/googleLogo.png'
import useAuth from '../hooks/useAuth';
import toast from '../utils/toast'

const GoogleSignIn = () => {
  const {pathname, state} = useLocation();
  const { signInWithGoogle, setLoading, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(({user}) => {
      setUser(user);
      navigate(state || '/');
      setLoading(false);
      toast('success', `${pathname === 'login' ? 'Logged in Successfully' : 'Signed in Successfully'}`)
    })
    .catch(({code}) => {
      toast('error', code);
      setLoading(false);
    })
  }

  return (
    <div>
      <button type='button' onClick={handleSignInWithGoogle} className="flex w-full hover:bg-green-300 gap-2 items-center btn bg-green-200 dark:bg-green-800">
        <img className="h-6" src={googleIcon} alt="google icon" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default GoogleSignIn;