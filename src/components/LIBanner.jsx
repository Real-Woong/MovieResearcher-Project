import React, { useEffect, useState } from 'react';
import StyleBanner from './StyledBanner.js';
import { getProfile } from '../api/Account.js';

function Banner() {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const profile = await getProfile(token);
        setUserName(profile.name);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <StyleBanner>로딩 중...</StyleBanner>;
  }

  return <StyleBanner>{userName ? `${userName}님, 환영합니다` : '환영합니다'}</StyleBanner>;
}

export default Banner;
