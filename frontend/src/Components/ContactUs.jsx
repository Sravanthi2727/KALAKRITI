import React, { useState } from 'react';
import { Menu, X, Palette, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif'
  },
  navbar: {
    backgroundColor: '#1e293b',
    position: 'sticky',
    top: 0,
    zIndex: 50
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to right, #d97706, #ea580c)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fbbf24'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  },
  navLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  activeNavLink: {
    color: '#fbbf24',
    borderBottom: '2px solid #fbbf24'
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    cursor: 'pointer'
  },
  mobileMenu: {
    backgroundColor: '#374151',
    display: 'block'
  },
  mobileNavLink: {
    display: 'block',
    padding: '8px 12px',
    color: '#cbd5e1',
    textDecoration: 'none'
  },
  pageTitle: {
    padding: '96px 16px',
    textAlign: 'center'
  },
  titleContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  mainTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '32px'
  },
  titleGradient: {
    background: 'linear-gradient(to right, #d97706, #ea580c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '20px',
    color: '#4b5563'
  },
  contactSection: {
    padding: '64px 16px'
  },
  contactContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  contactInfo: {
    padding: '0',
    marginBottom: '48px'
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '32px'
  },
  contactDescription: {
    color: '#4b5563',
    marginBottom: '32px',
    fontSize: '18px',
    lineHeight: '1.6'
  },
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  },
  contactIcon: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(to right, #d97706, #ea580c)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  contactItemTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  },
  contactItemText: {
    color: '#4b5563',
    lineHeight: '1.5'
  },
  formContainer: {
    background: 'linear-gradient(135deg, #fef7ed, #fef2f2)',
    padding: '32px',
    borderRadius: '16px'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '24px'
  },
  formGroup: {
    marginBottom: '24px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  },
  submitButton: {
    width: '100%',
    background: 'linear-gradient(to right, #d97706, #ea580c)',
    color: 'white',
    padding: '16px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  whySection: {
    padding: '64px 16px',
    backgroundColor: '#f9fafb'
  },
  whyContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px'
  },
  whyCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  whyCardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px'
  },
  whyCardText: {
    color: '#4b5563',
    lineHeight: '1.5'
  },
  faqSection: {
    padding: '64px 16px'
  },
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  faqItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  faqItem: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px'
  },
  faqQuestion: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px'
  },
  faqAnswer: {
    color: '#4b5563',
    lineHeight: '1.5'
  },
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '64px 16px'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  footerContent: {
    display: 'block'
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px'
  },
  footerDescription: {
    color: '#9ca3af',
    marginBottom: '24px',
    lineHeight: '1.6'
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  footerBottom: {
    borderTop: '1px solid #374151',
    paddingTop: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerBottomLinks: {
    display: 'flex',
    gap: '24px'
  },
  responsive: {
    '@media (max-width: 768px)': {
      navLinks: { display: 'none' },
      formGrid: { gridTemplateColumns: '1fr' },
      whyGrid: { gridTemplateColumns: '1fr' },
      footerBottom: { flexDirection: 'column', gap: '16px' },
      mainTitle: { fontSize: '36px' }
    }
  }
};

export default function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const { firstName, lastName, email, subject, message } = formData;

  if (!firstName || !lastName || !email || !subject || !message) {
    alert("Please fill in all required fields before submitting.");
    return;
  }

  // If all fields are filled
  alert('Thank you for your message! We will get back to you soon.');

  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
};


  return (
      <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div style={styles.container}>
    {/* Page Title */}
      <section style={styles.pageTitle}>
        <div style={styles.titleContainer}>
          <h1 style={styles.mainTitle}>
            Contact <span style={styles.titleGradient}>Us</span>
          </h1>
          <p style={styles.subtitle}>
            Get in touch with us to learn more about Indian traditional arts, collaborate with artists, or join our cultural community.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section style={styles.contactSection}>
        <div style={styles.contactContainer}>
          
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h2 style={styles.sectionTitle}>Get in Touch</h2>
            <p style={styles.contactDescription}>
              We'd love to hear from you! Whether you're an art enthusiast, a traditional artist, or simply curious about Indian cultural heritage, feel free to reach out.
            </p>
            
            <div style={styles.contactItems}>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactItemTitle}>Visit Us</h3>
                  <p style={styles.contactItemText}>
                    Cultural Arts Center<br />
                    123 Heritage Lane<br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactItemTitle}>Call Us</h3>
                  <p style={styles.contactItemText}>+91 11 2345 6789</p>
                  <p style={styles.contactItemText}>+91 98765 43210</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactItemTitle}>Email Us</h3>
                  <p style={styles.contactItemText}>info@kalakriti.org</p>
                  <p style={styles.contactItemText}>arts@kalakriti.org</p>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>
                  <Clock size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactItemTitle}>Office Hours</h3>
                  <p style={styles.contactItemText}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.sectionTitle}>Send us a Message</h2>
            
            <div>
              <div style={styles.formGrid}>
                <div>
                  <label htmlFor="firstName" style={styles.label}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={styles.label}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={styles.input}
                    required
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.label}>
                  Subject *
                </label>
                {/* <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                > */}
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                >
                  <option value=""disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Artist Collaboration</option>
                  <option value="workshop">Workshop Information</option>
                  <option value="exhibition">Exhibition Inquiry</option>
                  <option value="classes">Art Classes</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Tell us about your interest in traditional Indian arts..."
                  required
                />
              </div>
              
              <button
                onClick={handleSubmit}
                style={styles.submitButton}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section style={styles.whySection}>
        <div style={styles.whyContainer}>
          <h2 style={styles.sectionTitle}>Why Reach Out to Us?</h2>
          
          <div style={styles.whyGrid}>
            <div style={styles.whyCard}>
              <h3 style={styles.whyCardTitle}>Learn Traditional Arts</h3>
              <p style={styles.whyCardText}>
                Discover workshops, classes, and learning opportunities in classical Indian dance forms and traditional painting techniques.
              </p>
            </div>
            
            <div style={styles.whyCard}>
              <h3 style={styles.whyCardTitle}>Artist Collaborations</h3>
              <p style={styles.whyCardText}>
                Connect with master artists, join cultural events, or showcase your own traditional art skills with our community.
              </p>
            </div>
            
            <div style={styles.whyCard}>
              <h3 style={styles.whyCardTitle}>Cultural Events</h3>
              <p style={styles.whyCardText}>
                Stay updated on exhibitions, performances, and cultural celebrations that bring traditional Indian arts to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.faqContainer}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', marginBottom: '48px' }}>Frequently Asked Questions</h2>
          
          <div style={styles.faqItems}>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Do you offer art classes for beginners?</h3>
              <p style={styles.faqAnswer}>
                Yes! We offer beginner-friendly classes in various traditional Indian art forms including Bharatanatyam, Kathak, Madhubani painting, and more.
              </p>
            </div>
            
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>How can I showcase my traditional art?</h3>
              <p style={styles.faqAnswer}>
                We welcome artists to share their work through our exhibitions and online gallery. Contact us with your portfolio and we'll guide you through the process.
              </p>
            </div>
            
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Do you organize cultural events?</h3>
              <p style={styles.faqAnswer}>
                Absolutely! We regularly organize exhibitions, dance performances, art workshops, and cultural festivals celebrating Indian traditional arts.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
    </motion.div>
  );
}