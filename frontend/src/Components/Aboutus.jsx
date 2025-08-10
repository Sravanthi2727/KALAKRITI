import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const s = {
    container: { minHeight: "100vh", backgroundColor: "white" },
    nav: { backgroundColor: "#1e293b", position: "sticky", top: 0, zIndex: 50 },
    navInner: { maxWidth: "1200px", margin: "0 auto", padding: "0 16px" },
    navFlex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
    },
    logo: { display: "flex", alignItems: "center", gap: "12px" },
    logoIcon: {
      width: "40px",
      height: "40px",
      background: "linear-gradient(to right, #d97706, #ea580c)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoText: { fontSize: "24px", fontWeight: "bold", color: "#fbbf24" },
    desktopMenu: {
      display: window.innerWidth > 768 ? "flex" : "none",
      alignItems: "center",
      gap: "32px",
    },
    navLink: { color: "#cbd5e1", textDecoration: "none" },
    activeLink: {
      color: "#fbbf24",
      borderBottom: "2px solid #f59e0b",
      textDecoration: "none",
    },
    mobileBtn: {
      display: window.innerWidth <= 768 ? "block" : "none",
      background: "none",
      border: "none",
      color: "#cbd5e1",
      cursor: "pointer",
    },
    mobileMenu: { backgroundColor: "#374151" },
    mobileLink: {
      display: "block",
      padding: "8px 12px",
      color: "#cbd5e1",
      textDecoration: "none",
    },
    section: { padding: "64px 16px" },
    sectionLarge: { padding: "96px 16px", textAlign: "center" },
    maxWidth: { maxWidth: "900px", margin: "0 auto" },
    title: {
      fontSize: "60px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "32px",
    },
    gradient: {
      background: "linear-gradient(to right, #d97706, #ea580c)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: { fontSize: "20px", color: "#4b5563" },
    h2: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "48px",
      textAlign: "center",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px",
    },
    missionItem: { textAlign: "center" },
    missionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "12px",
    },
    text: { color: "#4b5563" },
    lightBg: { background: "linear-gradient(to right, #fef7ed, #fef2f2)" },
    cardGrid: { display: "flex", flexDirection: "column", gap: "32px" },
    card: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "24px",
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "12px",
    },
    button: {
      display: "inline-block",
      background: "linear-gradient(to right, #d97706, #ea580c)",
      color: "white",
      padding: "8px 24px",
      borderRadius: "8px",
      fontWeight: "600",
      textDecoration: "none",
    },
    storyText: { display: "flex", flexDirection: "column", gap: "24px" },
    storyP: { fontSize: "18px", lineHeight: "1.7", color: "#4b5563" },
    ctaBg: { background: "linear-gradient(to right, #d97706, #ea580c)" },
    ctaTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "white",
      marginBottom: "24px",
    },
    ctaText: { fontSize: "20px", color: "#fbbf24", marginBottom: "32px" },
    ctaButtons: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "center",
    },
    ctaBtn1: {
      backgroundColor: "white",
      color: "#d97706",
      padding: "12px 32px",
      borderRadius: "8px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
    },
    ctaBtn2: {
      backgroundColor: "transparent",
      color: "white",
      padding: "12px 32px",
      borderRadius: "8px",
      fontWeight: "600",
      border: "2px solid white",
      cursor: "pointer",
      textDecoration: "none",
    },
    footer: {
      backgroundColor: "#1f2937",
      color: "white",
      padding: "64px 16px",
    },
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "48px",
      marginBottom: "32px",
    },
    footerText: { color: "#9ca3af", marginBottom: "24px", lineHeight: "1.6" },
    footerTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "white",
      marginBottom: "16px",
    },
    footerLinks: { display: "flex", flexDirection: "column", gap: "12px" },
    footerLink: { color: "#9ca3af", textDecoration: "none" },
    socialGrid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      marginBottom: "24px",
    },
    socialLink: {
      width: "40px",
      height: "40px",
      backgroundColor: "#374151",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    },
    socialText: { color: "#9ca3af", fontSize: "14px", lineHeight: "1.6" },
    footerBottom: {
      borderTop: "1px solid #374151",
      paddingTop: "32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerBottomLinks: { display: "flex", gap: "24px" },
    footerBottomLink: {
      color: "#9ca3af",
      textDecoration: "none",
      fontSize: "14px",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div style={s.container}>
        {/* Title */}
        <section style={s.sectionLarge}>
          <div style={s.maxWidth}>
            <h1 style={s.title}>
              About <span style={s.gradient}>Kalakriti</span>
            </h1>
            <p style={s.subtitle}>
              Preserving and celebrating the rich heritage of Indian traditional
              arts through dance, paintings, and the stories of incredible
              artists who keep our culture alive.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={s.section}>
          <div style={{ ...s.maxWidth, textAlign: "center" }}>
            <h2 style={s.h2}>Our Mission</h2>
            <div style={s.grid3}>
              <div style={s.missionItem}>
                <h3 style={s.missionTitle}>Preserve Heritage</h3>
                <p style={s.text}>
                  We are dedicated to preserving the timeless beauty of Indian
                  traditional arts for future generations.
                </p>
              </div>
              <div style={s.missionItem}>
                <h3 style={s.missionTitle}>Connect Communities</h3>
                <p style={s.text}>
                  Building bridges between artists, enthusiasts, and communities
                  to foster appreciation for our cultural treasures.
                </p>
              </div>
              <div style={s.missionItem}>
                <h3 style={s.missionTitle}>Inspire Excellence</h3>
                <p style={s.text}>
                  Showcasing the excellence of traditional Indian arts and
                  inspiring new generations to embrace these beautiful art
                  forms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Celebrate */}
        <section style={{ ...s.section, ...s.lightBg }}>
          <div style={s.maxWidth}>
            <h2 style={s.h2}>What We Celebrate</h2>
            <div style={s.cardGrid}>
              <div style={s.card}>
                <h3 style={s.cardTitle}>Traditional Dances</h3>
                <p style={{ ...s.text, marginBottom: "16px" }}>
                  Explore the graceful movements and rich stories behind
                  classical Indian dance forms like Bharatanatyam, Kathak,
                  Odissi, and more.
                </p>
                <a href="/arts/dances" style={s.button}>
                  Explore Dances
                </a>
              </div>
              <div style={s.card}>
                <h3 style={s.cardTitle}>Traditional Paintings</h3>
                <p style={{ ...s.text, marginBottom: "16px" }}>
                  Immerse yourself in the vibrant colors and intricate details
                  of traditional painting styles like Madhubani, Warli, Tanjore,
                  and more.
                </p>
                <a href="/arts/gallery" style={s.button}>
                  Explore Art Gallery
                </a>
                {/* <Link style={s.button} to="/arts/gallery">Explore Art Gallery</Link> */}
              </div>
              <div style={s.card}>
                <h3 style={s.cardTitle}>Master Artists</h3>
                <p style={{ ...s.text, marginBottom: "16px" }}>
                  Meet the passionate artists who dedicate their lives to
                  preserving and sharing these beautiful traditions with the
                  world.
                </p>
                <a href="/events/upcoming" style={s.button}>
                  Meet Artists
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={s.section}>
          <div style={s.maxWidth}>
            <h2 style={s.h2}>Our Story</h2>
            <div style={s.storyText}>
              <p style={s.storyP}>
                Kalakriti was born from a deep love and respect for India's
                magnificent traditional arts. In a rapidly modernizing world, we
                recognized the urgent need to preserve, celebrate, and share the
                timeless beauty of our cultural heritage.
              </p>
              <p style={s.storyP}>
                Our journey began with a simple yet profound belief: that
                traditional arts are not just performances or paintings, but
                living expressions of our ancestors' wisdom, spirituality, and
                creativity.
              </p>
              <p style={s.storyP}>
                Today, Kalakriti serves as a bridge between the past and
                present, connecting art enthusiasts with the rich tapestry of
                Indian traditional arts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ ...s.section, ...s.ctaBg, textAlign: "center" }}>
          <div style={s.maxWidth}>
            <h2 style={s.ctaTitle}>Join Our Cultural Journey</h2>
            <p style={s.ctaText}>
              Discover the beauty of traditional Indian arts and become part of
              a community that cherishes our rich cultural heritage.
            </p>
            <div style={s.ctaButtons}>
              {/* <button style={s.ctaBtn1}>Explore Our Collection</button> */}
              <a href="/arts/gallery" style={s.ctaBtn1}>
                Explor our Gallery
              </a>
              <a href="/artists" style={s.ctaBtn2}>
                Connect with Artist
              </a>
              {/* <button style={s.ctaBtn2}>Connect with Artists</button> */}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
