import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Home Page</h1>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Welcome to Our Website!</h2>
          <p style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula mauris nec nisi consectetur, quis volutpat mi dapibus.
            Cras feugiat libero eu diam tempor, sed cursus nulla posuere.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Featured Articles</h2>
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Article 1</h3>
              <p style={styles.cardText}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Article 2</h3>
              <p style={styles.cardText}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Article 3</h3>
              <p style={styles.cardText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
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
    backgroundColor: '#f9f9f9', // Light background color for the page
    padding: '20px',
  },
  header: {
    backgroundColor: '#ff6f61', // Soft pink background
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
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  card: {
    flex: '1',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Home;
