import React from 'react';

const Service = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Services</h1>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Web Development</h2>
          <p style={styles.sectionText}>
            We offer cutting-edge web development services to help you build a strong online presence. Our team of experts specializes in creating responsive, user-friendly websites tailored to your business needs.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Mobile App Development</h2>
          <p style={styles.sectionText}>
            Our mobile app development services ensure that your business reaches users on their smartphones. We develop high-quality, cross-platform mobile applications that deliver exceptional user experiences.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Digital Marketing</h2>
          <p style={styles.sectionText}>
            Enhance your brand’s visibility with our digital marketing solutions. From SEO and content marketing to social media management, we provide strategies to boost your online presence and drive engagement.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Consulting Services</h2>
          <p style={styles.sectionText}>
            Our consulting services offer strategic insights and solutions to help you achieve your business goals. Whether you need guidance on technology, business strategy, or operational improvements, our experts are here to help.
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
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  header: {
    backgroundColor: '#ffeb3b', // Bright yellow background
    color: '#333',
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
};

export default Service;
