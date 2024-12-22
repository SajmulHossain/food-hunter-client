import googleIcon from '../assets/googleLogo.png'

const GoogleSignIn = () => {
  return (
    <div>
      <p className="flex gap-2 items-center btn bg-green-200">
        <img className="h-6" src={googleIcon} alt="google icon" />
        <span>Continue With Google</span>
      </p>
    </div>
  );
};

export default GoogleSignIn;