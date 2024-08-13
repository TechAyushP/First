import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, purus at vehicula pharetra, eros magna bibendum felis,
            id lacinia justo lorem ac odio. Vivamus tincidunt orci nec tortor
            venenatis, non commodo nisl sagittis.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <div style={styles.teamContainer}>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>John Doe</h3>
              <p style={styles.teamRole}>CEO & Founder</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>Jane Smith</h3>
              <p style={styles.teamRole}>CTO</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                style={styles.teamImage}
              />
              <h3 style={styles.teamName}>Alice Johnson</h3>
              <p style={styles.teamRole}>Marketing Manager</p>
            </div>
          </div>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.sectionText}>
            Feel free to reach out to us at contact@ourwebsite.com or call us at
            (123) 456-7890. We are always here to assist you with any inquiries
            you may have.
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50', // Green background
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: '20px',
    margin: 0,
    fontSize: '24px',
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
  },
  section: {
    margin: '20px 0',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  sectionText: {
    fontSize: '16px',
    color: '#666',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  teamMember: {
    flex: '1',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  teamImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  teamName: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '5px',
  },
  teamRole: {
    fontSize: '14px',
    color: '#666',
  },
};

export default About;
