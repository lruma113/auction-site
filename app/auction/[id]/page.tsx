export default function AuctionPage({ params }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>商品 {params.id}</h1>
      <p>這裡會顯示商品資訊與競標功能。</p>
    </main>
  );
}
