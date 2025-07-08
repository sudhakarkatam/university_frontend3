import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleLoginButton() {
  const handleSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    try {
      const res = await axios.post('http://localhost:8080/api/auth/google', {
        token: idToken
      });

      // Save your app-specific token (JWT from backend)
      localStorage.setItem("token", res.data.token);
      alert('✅ Logged in via Google!');
    } catch (err) {
      console.error(err);
      alert('❌ Google Login failed.');
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        alert('Google Login Failed');
      }}
    />
  );
}

export default GoogleLoginButton;
