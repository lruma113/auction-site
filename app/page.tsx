'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🎯 捕夢網盤子競標網</h1>
      <p style={{ marginTop: '1rem' }}>請前往 <Link href="/admin" style={{ color: 'blue' }}>/admin</Link> 上架商品。</p>
    </main>
  );
}
