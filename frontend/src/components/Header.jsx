import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="fixed w-full z-50 glass-nav">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      <div className="flex-shrink-0 flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald/10 border border-emerald/30 flex items-center justify-center">
          <div className="w-3 h-3 bg-emerald rounded-sm"></div>
        </div>
        <Link to="/" className="ont-mono text-xl tracking-tight font-bold text-white">
          OMNI<span className="text-emerald">NILE</span>
        </Link>
        
      </div>

      <div className="block md:flex ml-10 items-baseline space-x-8">
        <Link to="/protocol" className="text-white hover:text-emerald transition-colors text-sm font-medium">
            Protocol
          </Link>
        <a href="#infrastructure" className="text-white hover:text-emerald transition-colors text-sm font-medium">Infrastructure</a>
        <Link to="/platforms" className="text-white hover:text-emerald transition-colors text-sm font-medium">Platforms</Link>
        <Link to="/about" className="text-white hover:text-emerald transition-colors text-sm font-medium">About</Link>

        {/* <a href="#platforms" className="text-white hover:text-emerald transition-colors text-sm font-medium">Platforms</a> */}
        <a href="#governance" className="text-white hover:text-emerald transition-colors text-sm font-medium">Governance</a>
      </div>

      <div className="hidden md:block">
        <Link
              to="/partnership" className="font-mono text-xs border border-emerald/50 px-5 py-2 hover:bg-emerald/10 transition-all text-emerald uppercase tracking-wider">
          Enterprise Access
        </Link>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header