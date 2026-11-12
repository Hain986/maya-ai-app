const conversations = [
  { sender: 'Maya', text: 'Hey, I am Maya. Ready to help with your next idea?' },
  { sender: 'You', text: 'Can you help me build my AI app?' },
  { sender: 'Maya', text: 'Absolutely. We can design the interface, add voice, and connect AI features.' }
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-icon">M</div>
          <div>
            <p className="eyebrow">AI COMPANION</p>
            <h1>Maya</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Chat</button>
          <button className="nav-item">Voice</button>
          <button className="nav-item">Memory</button>
        </nav>

        <div className="status-card">
          <span className="dot" />
          <div>
            <strong>Online</strong>
            <p>Ready for conversation</p>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">FUTURE AI</p>
            <h2>Maya 3D AI</h2>
          </div>
          <button className="primary-btn">Launch Session</button>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow accent">PERSONAL AI</p>
            <h3>Build your digital companion with voice, empathy, and intelligence.</h3>
            <div className="cta-row">
              <button className="primary-btn">Start Chat</button>
              <button className="secondary-btn">View Profile</button>
            </div>
          </div>

          <div className="avatar-stage">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="scene-wrap">
              <MayaScene />
            </div>
          </div>
        </section>

        <section className="chat-card">
          <div className="chat-header">
            <span className="chip">Live</span>
            <strong>Conversation</strong>
          </div>

          <div className="chat-box">
            {conversations.map((entry, index) => (
              <div key={index} className={entry.sender === 'You' ? 'bubble you' : 'bubble maya'}>
                <span>{entry.sender}</span>
                <p>{entry.text}</p>
              </div>
            ))}
          </div>

          <div className="composer">
            <input type="text" placeholder="Ask Maya anything..." />
            <button className="primary-btn small">Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}
