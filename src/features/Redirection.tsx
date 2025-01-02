'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Redirection = () => {
  const router = useRouter();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}kakaoLogin`, { code })
        .then((res) => {
          console.log(res.data);

          localStorage.setItem('userName', res.data.user_name);
          router.push('/Home');
        })
        .catch((err) => console.error('로그인 에러:', err));
    }
  }, [router]);

  return <div>로그인 중입니다. 잠시만 기다려 주세요...</div>;
};

export default Redirection;
