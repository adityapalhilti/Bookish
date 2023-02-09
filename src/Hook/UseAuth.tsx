import { useEffect } from 'react';

const useAuth = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
    }
  }, []);
};

export default useAuth;
