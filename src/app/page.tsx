'use client';

import { useState } from 'react';

interface Collection {
  id: string;
  name: string;
  symb
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

ol: string;
  totalVolume: string;
  royaltyRate: number;
  totalRoyalties: string;
  sales: number;
  floorPrice: string;
}

interface RoyaltyPayment {
  id: string;
  collection: string;
  amount: string;
  marketplace: string;
  timestamp: string;
  txHash: string;
}

const collections: Collection[] = [
  { id: '1', name: 'Bored Ape Yacht Club', symbol: 'BAYC', totalVolume: '$2.4B', royaltyRate: 2.5, totalRoyalties: '$60M', sales: 45000, floorPrice: '28 ETH' },
  { id: '2', name: 'CryptoPunks', symbol: 'PUNK', totalVolume: '$1.8B', royaltyRate: 0, totalRoyalties: '$0', sales: 32000, floorPrice: '52 ETH' },
  { id: '3', name: 'Azuki', symbol: 'AZUKI', totalVolume: '$890M', royaltyRate: 5, totalRoyalties: '$44.5M', sales: 28000, floorPrice: '8 ETH' },
  { id: '4', name: 'Pudgy Penguins', symbol: 'PPG', totalVolume: '$450M', royaltyRate: 5, totalRoyalties: '$22.5M', sales: 18000, floorPrice: '12 ETH' },
  { id: '5', name: 'Doodles', symbol: 'DOODLE', totalVolume: '$320M', royaltyRate: 5, totalRoyalties: '$16M', sales: 12000, floorPrice: '4 ETH' },
  { id: '6', name: 'CloneX', symbol: 'CLONEX', totalVolume: '$680M', royaltyRate: 5, totalRoyalties: '$34M', sales: 22000, floorPrice: '2.5 ETH' },
];

const recentPayments: RoyaltyPayment[] = [
  { id: '1', collection: 'BAYC', amount: '$12,500', marketplace: 'OpenSea', timestamp: '2 min ago', txHash: '0x1234...5678' },
  { id: '2', collection: 'Azuki', amount: '$8,200', marketplace: 'Blur', timestamp: '5 min ago', txHash: '0xabcd...efgh' },
  { id: '3', collection: 'PPG', amount: '$3,400', marketplace: 'Magic Eden', timestamp: '12 min ago', txHash: '0x9876...4321' },
  { id: '4', collection: 'Doodles', amount: '$1,850', marketplace: 'OpenSea', timestamp: '18 min ago', txHash: '0xffff...eeee' },
  { id: '5', collection: 'CloneX', amount: '$5,600', marketplace: 'Blur', timestamp: '25 min ago', txHash: '0x1111...2222' },
];

export default function Home() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const totalRoyalties = collections.reduce((sum, c) => {
    const num = parseFloat(c.totalRoyalties.replace(/[$M]/g, '')) || 0;
    return sum + num;
  }, 0);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-violet-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">NFT Royalties</h1>
          <p className="text-gray-400 mt-2">Track creator royalties across collections and marketplaces</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-violet-400 p-4 text-center">
            <div className="text-3xl font-black text-violet-400">${totalRoyalties.toFixed(1)}M</div>
            <div className="text-sm text-gray-400">Total Royalties</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$6.5B</div>
            <div className="text-sm text-gray-400">Total Volume</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.2%</div>
            <div className="text-sm text-gray-400">Avg Royalty Rate</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">157K</div>
            <div className="text-sm text-gray-400">Total Sales</div>
          </div>
        </section>

        {/* Collections Table */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Top Collections by Royalties</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Collection</th>
                  <th className="text-right py-3">Volume</th>
                  <th className="text-right py-3">Royalty %</th>
                  <th className="text-right py-3">Total Royalties</th>
                  <th className="text-right py-3">Sales</th>
                  <th className="text-right py-3">Floor</th>
                </tr>
              </thead>
              <tbody>
                {collections.map((collection) => (
                  <tr
                    key={collection.id}
                    onClick={() => setSelectedCollection(collection)}
                    className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                      selectedCollection?.id === collection.id ? 'bg-violet-900/20' : ''
                    }`}
                  >
                    <td className="py-3">
                      <span className="font-bold text-violet-400">{collection.name}</span>
                      <span className="text-gray-500 ml-2">{collection.symbol}</span>
                    </td>
                    <td className="py-3 text-right font-bold">{collection.totalVolume}</td>
                    <td className="py-3 text-right">
                      <span className={`px-2 py-1 text-xs font-bold ${
                        collection.royaltyRate > 0 ? 'bg-green-900 text-green-400' : 'bg-gray-800 text-gray-500'
                      }`}>
                        {collection.royaltyRate}%
                      </span>
                    </td>
                    <td className="py-3 text-right text-green-400 font-bold">{collection.totalRoyalties}</td>
                    <td className="py-3 text-right">{collection.sales.toLocaleString()}</td>
                    <td className="py-3 text-right">{collection.floorPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Selected Collection Details */}
        {selectedCollection && (
          <section className="bg-gray-900 border-4 border-violet-400 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-black text-violet-400">{selectedCollection.name}</h2>
                <p className="text-gray-400">{selectedCollection.symbol}</p>
              </div>
              <button
                onClick={() => setSelectedCollection(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Total Volume</div>
                <div className="text-2xl font-bold">{selectedCollection.totalVolume}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Royalty Rate</div>
                <div className="text-2xl font-bold text-violet-400">{selectedCollection.royaltyRate}%</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Total Royalties</div>
                <div className="text-2xl font-bold text-green-400">{selectedCollection.totalRoyalties}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Floor Price</div>
                <div className="text-2xl font-bold">{selectedCollection.floorPrice}</div>
              </div>
            </div>

            <div className="p-4 bg-yellow-900/30 border border-yellow-600 text-sm">
              <div className="font-bold text-yellow-400 mb-1">⚠️ Royalty Enforcement</div>
              <div className="text-gray-400">
                {selectedCollection.royaltyRate > 0 
                  ? 'This collection enforces royalties on-chain. Creators receive payment on every secondary sale.'
                  : 'This collection does not enforce royalties. Consider voluntary tipping.'}
              </div>
            </div>
          </section>
        )}

        {/* Recent Payments */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Recent Royalty Payments</h2>
          <div className="space-y-3">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="p-4 bg-gray-800 border border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold text-violet-400">{payment.collection}</div>
                    <div className="text-sm text-gray-400">{payment.marketplace}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-400">{payment.amount}</div>
                  <div className="text-xs text-gray-500">{payment.timestamp}</div>
                </div>
                <div className="text-right">
                  <a href="#" className="text-xs text-violet-400 hover:underline">{payment.txHash}</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How NFT Royalties Work</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-violet-400 mb-2">Creator Sets %</h3>
              <p className="text-xs text-gray-400">Define royalty rate (0-10%)</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">NFT Sold</h3>
              <p className="text-xs text-gray-400">Secondary sale on marketplace</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Royalty Paid</h3>
              <p className="text-xs text-gray-400">Creator receives % automatically</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Perpetual</h3>
              <p className="text-xs text-gray-400">Royalties on every resale forever</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-violet-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
