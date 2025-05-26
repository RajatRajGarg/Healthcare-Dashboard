const Sidebar = () => (
  <aside className="sidebar">
    <h3>General</h3>
    <ul>
      {['Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics', 'Tests', 'Chat', 'Support', 'Setting'].map(item => (
        <li key={item}><i className="fa fa-angle-right"></i> {item}</li>
      ))}
    </ul>
  </aside>
);

const Header = () => (
  <header className="header">
    <div className="logo">Healthcare.</div>
    <input type="text" className="search-bar" placeholder="Search..." />
    <div className="profile">
      <i className="fa fa-bell"></i>
      <span><img src="https://i.pravatar.cc/30" alt="User" style={{ borderRadius: '50%' }} /> Dr. Smith</span>
      <button>+ Add</button>
    </div>
  </header>
);

const AnatomySection = () => (
  <div className="card">
    <h3>Anatomy Overview</h3>
    <img src="https://img.freepik.com/free-vector/human-body-systems-muscular-skeletal-systems-internal-organs-parts-educative-anatomy-flashcards-poster-vector-illustration-full-length-isolated-image-diagram-man-male_107791-15703.jpg"
    alt="Human Body Anatomy"
    style={{ width: '100%', borderRadius: '8px' }}
    />

    <div className="health-indicator"><span>Heart</span><span className="status-healthy">Healthy</span></div>
    <div className="health-indicator"><span>Lungs</span><span className="status-issue">Issue</span></div>
    <div className="health-indicator"><span>Teeth</span><span className="status-healthy">Healthy</span></div>
    <div className="health-indicator"><span>Bone</span><span className="status-healthy">Healthy</span></div>
  </div>
);

const CalendarView = () => (
  <div className="card">
    <h3>October 2021</h3>
    <div className="calendar-grid">
      {[...Array(28)].map((_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
    <div className="appointment-card">
      <div>Dentist</div>
      <div>09:00</div>
    </div>
    <div className="appointment-card">
      <div>Physiotherapy</div>
      <div>13:00</div>
    </div>
  </div>
);

const ActivityFeed = () => (
  <div className="card">
    <h3>Activity</h3>
    <p>3 appointments on this week</p>
    <div className="bar-chart">
      <div className="bar small"></div>
      <div className="bar medium"></div>
      <div className="bar large"></div>
      <div className="bar small"></div>
      <div className="bar medium"></div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="card">
    <h3>Patient Stats</h3>
    <div className="stats-grid">
      <div className="stat-box"><div className="value">128</div><div className="label">Patients</div></div>
      <div className="stat-box"><div className="value">16</div><div className="label">Appointments Today</div></div>
      <div className="stat-box"><div className="value">12</div><div className="label">Pending Reports</div></div>
      <div className="stat-box"><div className="value">4</div><div className="label">Alerts</div></div>
    </div>
  </div>
);

const ReportsSection = () => (
  <div className="card">
    <h3>Medical Reports</h3>
    <div className="report-item">
      <i className="fa fa-file-alt"></i>
      <div><div className="report-title">Cardiology Report</div><div className="report-date">22 May 2025</div></div>
    </div>
    <div className="report-item">
      <i className="fa fa-file-alt"></i>
      <div><div className="report-title">X-Ray Result</div><div className="report-date">20 May 2025</div></div>
    </div>
    <div className="report-item">
      <i className="fa fa-file-alt"></i>
      <div><div className="report-title">Lab Tests</div><div className="report-date">18 May 2025</div></div>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    © 2025 Healthcare Dashboard. All rights reserved.
  </div>
);

const Dashboard = () => (
  <main className="main-content">
    <div className="dashboard-content">
      <AnatomySection />
      <CalendarView />
      <ActivityFeed />
      <StatsSection />
      <ReportsSection />
    </div>
    <Footer />
  </main>
);

const App = () => (
  <>
    <Sidebar />
    <Header />
    <Dashboard />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
