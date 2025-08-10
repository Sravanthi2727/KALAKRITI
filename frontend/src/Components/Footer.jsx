



import React from 'react';
import { Palette, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const styles = {
    footer: { backgroundColor: '#1f2937', color: 'white', padding: '64px 16px' },
    maxWidth: { maxWidth: '1200px', margin: '0 auto' },
    footerGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', marginBottom: '32px' },
    logo: { display: 'flex', alignItems: 'center', gap: '12px' },
    logoIcon: { width: '40px', height: '40px', background: 'linear-gradient(to right, #d97706, #ea580c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    logoText: { fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' },
    footerText: { color: '#9ca3af', marginBottom: '24px', lineHeight: '1.6' },
    footerTitle: { fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '16px' },
    footerLinks: { display: 'flex', flexDirection: 'column', gap: '12px' },
    footerLink: { color: '#9ca3af', textDecoration: 'none' },
    socialGrid: { display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' },
    socialLink: { width: '40px', height: '40px', backgroundColor: '#374151', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' },
    socialText: { color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' },
    footerBottom: { borderTop: '1px solid #374151', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    footerBottomLinks: { display: 'flex', gap: '24px' },
    footerBottomLink: { color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.maxWidth}>
        <div style={styles.footerGrid}>
          
          {/* Left Column */}
          <div>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <Palette size={24} color="white" />
              </div>
              <span style={styles.logoText}>Kalakriti</span>
            </div>
            <p style={styles.footerText}>
              Dedicated to preserving and celebrating the rich heritage of Indian traditional arts through dance, painting, and cultural education.
            </p>
            
           

            <div style={{ marginBottom: '16px' }}>
              <h3 style={styles.footerTitle}>Quick Links</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: '8px'
              }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/aboutus" },
                  { label: "Traditional Dances", href: "/arts/dances" },
                  { label: "Paintings", href: "/arts/gallery" },
                  { label: "Artists", href: "/artists" },
                  { label: "Contact", href: "/contactus" },
                ].map(link => (
                  <a key={link.href} href={link.href} style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '14px',
                    whiteSpace: 'nowrap'
                  }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={styles.footerTitle}>Follow Us</h3>
            <p style={styles.footerText}>
              Stay connected with us for the latest updates on traditional arts, exhibitions, and cultural events.
            </p>
            
            <div style={styles.socialGrid}>
              <a 
                href="https://facebook.com/kalakritiarts" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                title="@kalakritiarts"
              >
                <Facebook size={20} color="white" />
              </a>
              <a 
                href="https://instagram.com/kalakriti_heritage" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                title="@kalakriti_heritage"
              >
                <Instagram size={20} color="white" />
              </a>
              <a 
                href="https://youtube.com/@kalakrititraditionalarts" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                title="@kalakrititraditionalarts"
              >
                <Youtube size={20} color="white" />
              </a>
              <a 
                href="https://twitter.com/kalakriti_arts" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                title="@kalakriti_arts"
              >
                <Twitter size={20} color="white" />
              </a>
            </div>

            <div style={styles.socialText}>
              <p style={{marginBottom: '8px'}}>
                <strong style={{color: '#cbd5e1'}}>Facebook:</strong> @kalakritiarts
              </p>
              <p style={{marginBottom: '8px'}}>
                <strong style={{color: '#cbd5e1'}}>Instagram:</strong> @kalakriti_heritage
              </p>
              <p style={{marginBottom: '8px'}}>
                <strong style={{color: '#cbd5e1'}}>YouTube:</strong> @kalakrititraditionalarts
              </p>
              <p style={{marginBottom: '0'}}>
                <strong style={{color: '#cbd5e1'}}>Twitter:</strong> @kalakriti_arts
              </p>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p style={{ color: '#9ca3af', marginBottom: '0' }}>
            &copy; 2025 Kalakriti. All rights reserved.
          </p>
          <div style={styles.footerBottomLinks}>
            <a href="#privacy" style={styles.footerBottomLink}>Privacy Policy</a>
            <a href="#terms" style={styles.footerBottomLink}>Terms of Service</a>
            <a href="#accessibility" style={styles.footerBottomLink}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}