import "../styles/Crew.css";

function Crew() {
  return (
    <section className="page">
      <div className="crew-wrapper">

        {/* TOP QUOTE – NOW IN CORRECT PLACE */}
        <p className="crew-quote-top">
          “ SEC's strength is each individual member, and the strength of each member is SEC. ”
        </p>

        {/* SECRETARIAT PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">The Secretariat</h2>

          <div className="crew-grid">
            {[...Array(29)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Secretariat Member"
                  />
                </div>

                <h3>Name</h3>
                <p className="crew-meta">Role</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “Learning, growing, and discovering confidence at SOA
                  EnglishCafe.”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">Tech Team</h2>

          <div className="crew-grid">
            {[...Array(43)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Tech Team Member"
                  />
                </div>

                <h3>Name</h3>
                <p className="crew-meta">Tech Team (Frontend/Backend)</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “This place shaped my communication and confidence forever.”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT PANEL */}
        <section className="crew-panel">
          <h2 className="panel-title">Content Team</h2>

          <div className="crew-grid">
            {[...Array(9)].map((_, i) => (
              <div className="crew-card" key={i}>
                <div className="crew-img">
                  <img
                    src="/images/profile-placeholder.png"
                    alt="Content Team Member"
                  />
                </div>

                <h3>Name</h3>
                <p className="crew-meta">Content Team</p>

                <div className="divider"></div>

                <p className="crew-quote">
                  “Building the backbone that powers SOA EnglishCafe.”
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}

export default Crew;
