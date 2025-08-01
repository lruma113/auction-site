'use client';
import { useEffect, useState } from 'react';

const endTime = new Date().getTime() + 1000 * 60 * 5;

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(endTime - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🎉 競標活動進行中</h1>
      <p style={{ marginTop: '1rem' }}>請在下方填寫暱稱與競標金額：</p>
      <form style={{ marginTop: '1rem' }}>
        <input placeholder="你的暱稱" required style={{ marginRight: '1rem' }} />
        <input type="number" placeholder="競標金額" required />
        <button type="submit" style={{ marginLeft: '1rem' }}>提交</button>
      </form>
      <p style={{ marginTop: '2rem' }}>⏳ 剩餘時間：{minutes} 分 {seconds} 秒</p>
    </main>
  );
}