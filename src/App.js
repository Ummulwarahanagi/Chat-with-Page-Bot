import React, { useState } from "react";
import "./App.css";
import ChatButton from "./components/ChatButton";
import ChatSidebar from "./components/ChatSidebar";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="app-container">

      {/* Page Header */}
      <header className="page-header">
        <h1>🌱 Sustainable Farming Insights</h1>
        <p>Understanding agriculture, climate impact, and future food security</p>
      </header>

      {/* MAIN CONTENT (AI WILL READ ONLY THIS DIV) */}
      <main id="mainContent" className="content-card">
        <section>
          <h2>What is Sustainable Farming?</h2>
          <p>
            Sustainable farming focuses on producing food while maintaining soil
            health, conserving natural resources, and minimizing environmental
            damage for future generations.
          </p>
        </section>

        <section>
          <h2>Impact of Climate Change</h2>
          <p>
            Climate change has significantly affected crop yields due to
            unpredictable weather patterns, prolonged droughts, floods, and
            rising temperatures.
          </p>
        </section>

        <section>
          <h2>Future Population Growth</h2>
          <p>
            The projected world population for 2050 is <strong>9.7 billion</strong>.
          </p>
        </section>

        <section>
          <h2>Why Sustainable Practices Matter</h2>
          <p>
            To meet future food demands while protecting the environment,
            sustainable agricultural practices must be widely adopted across
            the globe.
          </p>
        </section>
      </main>

      {/* Floating Chat Button */}
      <ChatButton onClick={() => setChatOpen(true)} />

      {/* Chat Sidebar */}
      <ChatSidebar
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2026 Sustainable Agriculture Initiative</p>
      </footer>

    </div>
  );
}

export default App;