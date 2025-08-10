const sampleEvents = [
  {
    event_title:
      "Mystical Brushstrokes: Traditional Indian Painting Exhibition",
    artist_name: "Rajesh Verma",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "National Art Council",
    banner: "https://itokri.com/cdn/shop/articles/25B_Feb_Tribal_Folk_Art.jpg",
    event_date: "2023-11-15",
    event_time: "10:00 AM - 6:00 PM",
    location: "National Gallery of Modern Art, New Delhi",
    activity:
      "Guided painting session where attendees can try miniature painting techniques",
    status: "Completed",
    images: [
      "https://example.com/images/event1-img1.jpg",
      "https://example.com/images/event1-img2.jpg",
    ],
    videos: ["https://example.com/videos/event1-highlights.mp4"],
    testimonials: [
      {
        name: "Priya Sharma",
        comment: "The miniature painting workshop was incredibly insightful!",
        rating: 5,
      },
    ],
    artist_bio:
      "Rajesh Verma is a Padma Shri awardee specializing in traditional Mughal and Rajput miniature paintings.",
  },
  {
    event_title: "Eternal Echoes: Japanese Sumi-e Ink Painting Demonstration",
    artist_name: "Yuki Tanaka",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Asian Art Foundation",
    banner: "https://example.com/images/sumie-banner.jpg",
    event_date: "2023-12-05",
    event_time: "2:00 PM - 5:00 PM",
    location: "International Convention Center, Mumbai",
    activity: "Interactive ink painting session with provided materials",
    status: "Completed",
    images: [
      "https://example.com/images/event2-img1.jpg",
      "https://example.com/images/event2-img2.jpg",
    ],
    videos: ["https://example.com/videos/sumie-demo.mp4"],
    testimonials: [
      {
        name: "Arun Patel",
        comment: "Master Tanaka's brushwork was mesmerizing to watch live",
        rating: 5,
      },
    ],
    artist_bio:
      "Yuki Tanaka is a 5th generation Sumi-e master from Kyoto, Japan.",
  },
  {
    event_title: "Colors of the Desert: Aboriginal Art Workshop",
    artist_name: "Marlu Jakamarra",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Indigenous Arts Australia",
    banner: "https://example.com/images/aboriginal-banner.jpg",
    event_date: "2024-01-20",
    event_time: "11:00 AM - 3:00 PM",
    location: "Sydney Opera House, Sydney",
    activity: "Dot painting workshop with traditional ochre pigments",
    status: "Completed",
    images: [
      "https://example.com/images/event3-img1.jpg",
      "https://example.com/images/event3-img2.jpg",
    ],
    videos: ["https://example.com/videos/aboriginal-workshop.mp4"],
    testimonials: [
      {
        name: "Sophie Williams",
        comment:
          "Learning the stories behind the dot paintings was unforgettable",
        rating: 4.5,
      },
    ],
    artist_bio:
      "Marlu Jakamarra is a senior custodian of Warlpiri cultural traditions.",
  },
  {
    event_title: "Celestial Strokes: Chinese Calligraphy Masterclass",
    artist_name: "Li Wei",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Confucius Institute",
    banner: "https://example.com/images/calligraphy-banner.jpg",
    event_date: "2024-08-12",
    event_time: "9:30 AM - 12:30 PM",
    location: "China Cultural Center, Bangalore",
    activity: "Beginner's calligraphy session with ink and brush sets provided",
    status: "Upcoming",
    price: "₹1200",
    artist_bio:
      "Li Wei is a renowned calligrapher from Beijing with 40 years of experience.",
  },
  {
    event_title: "Golden Threads: Persian Miniature Painting Exhibition",
    artist_name: "Farahani Alizadeh",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Middle Eastern Arts Society",
    banner: "https://example.com/images/persian-banner.jpg",
    event_date: "2024-09-05",
    event_time: "10:00 AM - 8:00 PM",
    location: "Taj Mahal Palace, Mumbai",
    activity: "Gold leaf application workshop for miniature paintings",
    status: "Upcoming",
    price: "Free",
    artist_bio:
      "Farahani Alizadeh is a contemporary master of the Isfahan school of miniature painting.",
  },
  {
    event_title: "Sacred Geometry: Islamic Tile Patterns Workshop",
    artist_name: "Yusuf El-Masri",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Islamic Arts Foundation",
    banner: "https://example.com/images/islamic-art-banner.jpg",
    event_date: "2024-10-18",
    event_time: "1:00 PM - 4:00 PM",
    location: "National Institute of Design, Ahmedabad",
    activity:
      "Hands-on geometric pattern creation with compass and straightedge",
    status: "Upcoming",
    price: "₹1500",

    artist_bio:
      "Yusuf El-Masri specializes in the recreation of historic Islamic architectural decorations.",
  },
  {
    event_title: "Divine Forms: South Indian Temple Sculpture Exhibition",
    artist_name: "Muthuvelar",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "DakshinaChitra Cultural Center",
    banner: "https://example.com/images/sculpture-banner.jpg",
    event_date: "2024-11-22",
    event_time: "9:00 AM - 7:00 PM",
    location: "Chennai Trade Center, Chennai",
    activity: "Clay modeling workshop for basic sculpture techniques",
    status: "Upcoming",
    price: "₹800",
    artist_bio:
      "Muthuvelar comes from a long line of sthapathis (temple sculptors) from Swamimalai.",
  },
  {
    event_title: "Whispers of Silk: Traditional Chinese Embroidery Display",
    artist_name: "Zhang Mei Ling",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Silk Road Cultural Exchange",
    banner: "https://example.com/images/embroidery-banner.jpg",
    event_date: "2025-01-08",
    event_time: "11:00 AM - 6:00 PM",
    location: "Kamal Mahal, Hyderabad",
    activity: "Basic embroidery stitches tutorial with silk threads",
    status: "Upcoming",
    price: "₹1000",
    artist_bio:
      "Zhang Mei Ling is a Suzhou embroidery master recognized as a national treasure in China.",
  },
  {
    event_title: "Eternal Lines: Greek Icon Painting Workshop",
    artist_name: "Dimitrios Papadopoulos",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "European Arts Collective",
    banner: "https://example.com/images/icon-banner.jpg",
    event_date: "2025-02-14",
    event_time: "10:00 AM - 4:00 PM",
    location: "St. George's Gallery, Goa",
    activity: "Egg tempera painting session with gold leaf application",
    status: "Upcoming",
    price: "₹2500",
    artist_bio:
      "Dimitrios comes from Mount Athos and practices the ancient tradition of Byzantine iconography.",
  },
  {
    event_title: "Living Traditions: Warli Tribal Art Festival",
    artist_name: "Various Artists",
    description:
      "sdtrfyguhijohbgvfcdxszaZdxfcgvhbjniuhygtfrdszazdxfcvbhjytgfrdzxcvbhjgfdxzsxcvgbhjhgfdxszcvbghjyutrewsadfghjuikjhbv",
    organized_by: "Tribal Arts Preservation Society",
    banner: "https://example.com/images/warli-banner.jpg",
    event_date: "2025-03-21",
    event_time: "10:00 AM - 9:00 PM",
    location: "Horniman Circle Gardens, Mumbai",
    activity: "Community wall painting and storytelling session",
    status: "Upcoming",
    price: "Free",
    artist_bio:
      "Featured artists include award-winning Warli artists from Maharashtra's tribal communities.",
  },
];
module.exports = { data: sampleEvents };