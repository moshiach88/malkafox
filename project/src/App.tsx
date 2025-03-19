import React, { useState } from 'react';
import { Instagram, Youtube, Rocket, Globe2, Twitch, Heart, CreditCard, Copy, Check } from 'lucide-react';

function App() {
  const [copiedCard, setCopiedCard] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  const handleCopy = async (text: string, type: 'card' | string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'card') {
        setCopiedCard(true);
        setTimeout(() => setCopiedCard(false), 2000);
      } else {
        setCopiedWallet(type);
        setTimeout(() => setCopiedWallet(null), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const cryptoWallets = [
    { name: 'USDT (TRC20)', address: 'TLoGhx61FeoiYMDvw2PqY46dck3dVH85gY' },
    { name: 'ETH (ERC20)', address: '0xaf628835D02DDDf16CCE5fE8dE77115931e6572B' },
    { name: 'SOL (SPL)', address: '2iFW2Sj1Zsa86sHPSDWcJmJrBkizTbMX49USsGu4CpXh' },
    { name: 'TON (TON)', address: 'UQCqZ_S6dRjPKg8qrQREaHD2 OKCIn6LsXWvXViGjhx6cNuKq' },
    { name: 'BTC (BTC)', address: 'bc1q4cxh3ley9ypa53k3cyn5 jl8a7kh2ftekf6dfs9' },
    { name: 'DOGE (DOGE)', address: 'DEw7rLE1ozTGdtEystjmkjxxEr6ToGQgPo' },
    { name: 'LTC (LTC)', address: 'ltc1q2fm87rpvxrvja8jhum8x 040t6gjg34u3xsvkcn' },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-12 px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://i.imgur.com/e51EyjY.png)' }}
    >
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <img 
          src="https://i.imgur.com/UiO8ejx.png" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
        <span className="text-white">Malka</span>
        <span className="text-purple-200">Fox</span>
      </h1>

      {/* Description */}
      <p className="text-white/90 text-center mb-12 text-lg">
        Найдите меня в социальных сетях<br />
        <span className="text-white/70">Find me on social media</span>
      </p>

      {/* Social Links */}
      <div className="w-full max-w-md space-y-3 mb-8">
        <a 
          href="https://t.me/+E77uZyHrKNdmNDIy" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Instagram className="w-6 h-6 mr-4" />
          <span className="font-medium">Telegram</span>
        </a>

        <a 
          href="https://fansly.com/malkafox" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Heart className="w-6 h-6 mr-4" />
          <span className="font-medium">Fansly</span>
        </a>

        <a 
          href="https://www.youtube.com/@MalkaFox" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Youtube className="w-6 h-6 mr-4" />
          <span className="font-medium">YouTube</span>
        </a>

        <a 
          href="https://boosty.to/malkafox" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Rocket className="w-6 h-6 mr-4" />
          <span className="font-medium">Boosty</span>
        </a>

        <a 
          href="https://kick.com/malkafox" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Globe2 className="w-6 h-6 mr-4" />
          <span className="font-medium">Kick</span>
        </a>

        <a 
          href="https://www.twitch.tv/malkafox/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-black/30 hover:bg-black/40 transition-all duration-300 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg transform hover:translate-x-1"
        >
          <Twitch className="w-6 h-6 mr-4" />
          <span className="font-medium">Twitch</span>
        </a>
      </div>

      {/* Support Section */}
      <h2 className="text-2xl font-bold text-white mb-4">
        Поддержать / Support
      </h2>
      <div className="w-full max-w-md space-y-3">
        <a 
          href="https://www.donationalerts.com/r/malkafox"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center bg-black/30 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg hover:bg-black/40 transition-all duration-300"
        >
          <Globe2 className="w-6 h-6 mr-4" />
          <span className="font-medium">DonationAlerts</span>
        </a>

        {/* Payment Information */}
        <button 
          className="w-full flex items-center justify-between bg-black/30 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg hover:bg-black/40 transition-all duration-300"
          onClick={() => handleCopy("2204 3187 8828 6816", 'card')}
        >
          <div className="flex items-center">
            <CreditCard className="w-6 h-6 mr-4" />
            <span className="font-medium">Яндекс PAY</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">2204 3187 8828 6816</span>
            {copiedCard ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </div>
        </button>

        {/* Crypto Wallets */}
        {cryptoWallets.map((wallet) => (
          <button 
            key={wallet.name}
            className="w-full flex items-center justify-between bg-black/30 p-4 rounded-xl text-white backdrop-blur-sm shadow-lg hover:bg-black/40 transition-all duration-300"
            onClick={() => handleCopy(wallet.address, wallet.name)}
          >
            <div className="flex items-center">
              <CreditCard className="w-6 h-6 mr-4" />
              <span className="font-medium">{wallet.name}</span>
            </div>
            <div className="flex items-center flex-shrink-0">
              <span className="mr-2 text-xs font-mono tracking-tight break-all">{wallet.address}</span>
              {copiedWallet === wallet.name ? (
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              ) : (
                <Copy className="w-4 h-4 flex-shrink-0" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;