import { useLocation } from 'react-router-dom';
import googleIcon from '../assets/googleLogo.png'
import useAuth from '../hooks/useAuth';
import toast from '../utils/toast'

const GoogleSignIn = () => {
  const {pathname} = useLocation();
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
    .then(() => {
      toast('success', `${pathname === 'login' ? 'Logged in Successfully' : 'Signed in Successfully'}`)
    })
    .catch(({code}) => {
      toast('error', code)
    })
  }

  return (
    <div>
      <button type='button' onClick={handleSignInWithGoogle} className="flex w-full hover:bg-green-300 gap-2 items-center btn bg-green-200">
        <img className="h-6" src={googleIcon} alt="google icon" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default GoogleSignIn;