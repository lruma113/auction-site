'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    alert('（示意）商品已送出：\n' + title);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>📦 新增商品</h1>
      <input placeholder="商品標題" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <textarea placeholder="商品介紹" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
      <input placeholder="圖片網址" value={image} onChange={(e) => setImage(e.target.value)} /><br />
      <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} /><br />
      <button onClick={handleSubmit}>新增商品</button>
    </main>
  );
}
