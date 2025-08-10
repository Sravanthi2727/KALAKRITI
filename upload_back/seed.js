
//import { connectLocalDB, localConnection } from "./config/localMongo.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
//await connectLocalDB();
import Listing from "./models/Listing.js"; // adjust the path if needed
import Event from "./models/Event.js";

//await connectLocalDB();
//await mongoose.connect("mongodb://localhost:27017/artist");
// Connect to local MongoDB
dotenv.config();
await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


await Listing.deleteMany({});
await Event.deleteMany({});

await Listing.insertMany([
  {
    title: "Raja Ravi Varma",
    description:
      "Considered the father of modern Indian art, Raja Ravi Varma was a celebrated painter known for his fusion of European academic art with Indian sensibilities and mythology.",
    image: {
      filename: "raja_ravi_varma.jpg",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ravivarma1b.jpg",
    },
    price: ["50000", "100000", "250000"],
    images_description: ["Portrait of a Lady", "Shakuntala", "Hamsa Damayanti"],
    images: [
      "https://img.artpal.com/22103/1-15-2-21-10-2-31m.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Raja_Ravi_Varma%2C_Sakunthala_Pathralekhan.jpg/2560px-Raja_Ravi_Varma%2C_Sakunthala_Pathralekhan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Hansa_damayanti.jpg",
    ],
  },
  {
    title: "M.F. Husain",
    description:
      "Maqbool Fida Husain was one of India's most celebrated and internationally recognized artists, known for his vibrant, narrative paintings in a modified Cubist style.",
    image: {
      filename: "mf_husain.jpg",
      url: "https://indiearts.in/wp-content/uploads/2020/04/M-F-Husain.jpg",
    },
    price: ["1000000", "2500000", "5000000"],
    images_description: ["Bharat Mata", "Horses Series", "Gaja Gamini"],
    images: [
      "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2011/09/16/Incoming/Pictures/746488_Wallpaper2.jpg",
      "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-e3cotj64593uceqfrc57d9cdr4-20180802002243.Medi.jpeg",
      "https://www.tallengestore.com/cdn/shop/products/Gaja_Gamini_dc9f326a-b3dd-4774-aec1-f81b2afc8bf1.jpg?v=1536403279",
    ],
  },
  {
    title: "Jamini Roy",
    description:
      "Pioneer of modern Indian art who rejected Western academic styles and developed a unique style inspired by Bengali folk art and Kalighat paintings.",
    image: {
      filename: "jamini_roy.jpg",
      url: "https://upload.wikimedia.org/wikipedia/en/d/d8/Jaminiroy.jpg",
    },
    price: ["200000", "500000", "1000000"],
    images_description: [
      "Mother and Child",
      "Dancing Woman",
      "Krishna and Radha",
    ],
    images: [
      "https://www.tallengestore.com/cdn/shop/products/Untitled_Mother_and_Child_7a4099a6-0eb1-4d3e-a6f8-ee8735b6c27a.jpg?v=1514035188",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Jamini_Roy_-_Dancing_Woman_-_Google_Art_Project.jpg",
      "https://www.tallengestore.com/cdn/shop/products/Radha_Krishna_-_Jamini_Roy_-_Indian_Painting_376db041-0119-4b9f-b501-f2d0ecf755be.jpg?v=1570132820",
    ],
  },
  {
    title: "Amrita Sher-Gil",
    description:
      "Often called India's Frida Kahlo, Sher-Gil was a pioneer of modern Indian art who blended Western techniques with Indian themes in her evocative paintings.",
    image: {
      filename: "amrita_shergil.jpg",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Amrita_Sher-Gil_2.jpg",
    },
    price: ["5000000", "10000000", "20000000"],
    images_description: ["Self Portrait", "Three Girls", "In The Ladies Enclosure"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDeg-doQiVOvkvr_6TbAxmMjsf7s835sNkw&s",
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Amrita_Sher-Gil_Group_of_Three_Girls.jpg",
      "https://images.livemint.com/img/2021/07/14/original/Lot_13_1626241684035.jpeg",
    ],
  },
  {
    title: "Tyeb Mehta",
    description:
      "One of India's most celebrated modern artists, known for his distinctive style and powerful imagery, particularly his diagonal compositions and falling figures.",
    image: {
      filename: "tyeb_mehta.jpg",
      url: "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0399/usr/images/artists/group_images_override/items/ee/ee959534c8d84fb992adf4ca925fe372/tyeb-mehta.jpg",
    },
    price: ["2000000", "5000000", "10000000"],
    images_description: ["Kali", "Falling Figure", "Mahishasura"],
    images: [
      "https://static.toiimg.com/photo/4727764.cms?imgsize=23578",
      "https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/vadehraart/images/view/4cf8dc6cdc9d188331761245a95c9812j/vadehraartgallery-tyeb-mehta-falling-figure-2001.jpg",
      "https://www.lokvani.com/lokvani/a_images/y2007/4054mahisasura.jpg",
    ],
  },
  {
    title: "S.H. Raza",
    description:
      "Syed Haider Raza was a renowned Indian painter who lived and worked in France, known for his geometric abstract works with the 'bindu' (dot) as a central motif.",
    image: {
      filename: "sh_raza.jpg",
      url: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/23/Pictures/shalini-friday-artist-february-arijit-residence-weekend_06124e20-50b9-11e6-85e3-522dd231fa74.jpg",
    },
    price: ["1500000", "3000000", "6000000"],
    images_description: ["Bindu Series", "Saurashtra", "Prakriti"],
    images: [
      "https://indiearts.in/wp-content/uploads/2016/02/BINDU-100X-100CM-ACRYLIC-ON-CANVAS-1999.jpg",
      "https://shop.vadehraart.com/cdn/shop/products/19a_1200x1200.jpg?v=1591786800",
      "https://shop.vadehraart.com/cdn/shop/products/2a_1200x1200.jpg?v=1591783489",
    ],
  },
  {
    title: "Nandalal Bose",
    description:
      "A pioneer of modern Indian art and a key figure of Contextual Modernism, Bose was known for his Indian style of painting and his contributions to Indian art education.",
    image: {
      filename: "nandalal_bose.jpg",
      url: "https://artiana.com/images/Creators/Artist/131204794313350000.jpg",
    },
    price: ["300000", "700000", "1500000"],
    images_description: ["Sati", "Dandi March", "Krishna and Radha"],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcyBuUwP3bGHweJpTjFq3whkXChBysVDOHg&s",
      "https://www.jiomart.com/images/product/original/rvi7p42nvu/decor-adventures-mahatmas-dandi-march-by-nandlal-bose-wall-painting-14-x-18-inch-product-images-orvi7p42nvu-p596654550-0-202212302216.jpg?im=Resize=(420,420)",
      "https://www.tallengestore.com/cdn/shop/products/Radha_Krishna_-_Nandalal_Bose_-_Bengal_School_Indian_Painting_b97689d0-f6ae-4b7a-afc4-0c1d6343b914.jpg?v=1570154605",
    ],
  },
  {
    title: "Rabindranath Tagore",
    description:
      "Nobel laureate poet who was also an accomplished painter, known for his distinctive style that was untrained but highly imaginative and expressive.",
    image: {
      filename: "rabindranath_tagore.jpg",
      url: "https://www.tallengestore.com/cdn/shop/products/Portrait_Of_Gurudev_Rabindranath_Tagore_b268bfbc-a5f0-4cce-bb4b-5cad323c8220_large.jpg?v=1569048051",
    },
    price: ["400000", "900000", "1800000"],
    images_description: ["Self Portrait", "Dancing Woman", "Mystic Landscape"],
    images: [
      "https://www.tallengestore.com/cdn/shop/products/Untitled_self_portrait_1934.jpg?v=1513765600",
      "https://lh3.googleusercontent.com/ci/AL18g_T7-gmJ13YmWzxnk-rDfLjWHTesfMZ8fpc7i2iL_OqJ9CQLVsS4319_4HbAyHc-4VaL2yymIwo=s1200",
      "https://lh3.googleusercontent.com/ci/AL18g_QU6pgE-NsYy0IlnYnrClYk6lOvDE46HdAaiAO3dFA83yX5Cvz6WpNB62PZH-kTjJqwaW54tGk=s1200",
    ],
  },
  {
    title: "F.N. Souza",
    description:
      "Founding member of the Progressive Artists' Group of Bombay, known for his bold, expressive style that often dealt with themes of religion and eroticism.",
    image: {
      filename: "fn_souza.jpg",
      url: "https://images.livemint.com/img/2024/03/23/original/souza_1711174336984.jpg",
    },
    price: ["800000", "1500000", "3000000"],
    images_description: [
      "Crucifixion",
      "Head of a Portuguese Navigator",
      "Landscape",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckw8hdP7eZ4fJWg_2Le_46snGfxeW2jUYwA&s",
      "https://image.invaluable.com/housePhotos/plakasauctions/12/754812/H22864-L348968318.jpg",
      "https://artiana.com/images/Lots/132982055027386755.jpg",
    ],
  },
  {
    title: "Vasudeo S. Gaitonde",
    description:
      "Considered India's foremost abstract painter, Gaitonde's meditative, non-representational works reflect his Zen philosophy and meticulous technique.",
    image: {
      filename: "vs_gaitonde.jpg",
      url: "https://galleriavsb.com/wp-content/uploads/2025/01/20231164deaa8267e2421d853925f550a97aa3-e1735977446550.png",
    },
    price: ["2500000", "5000000", "10000000"],
    images_description: ["Untitled", "Abstract Composition", "Yellow Forms"],
    images: [
      "https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FW9KIFZLd3PaszAZp5-saCw%2Fnormalized.jpg&width=668",
      "https://www.tallengestore.com/cdn/shop/products/Abstract-Blue-VasudeoSGaitonde_e7471734-068d-407d-91c8-d18916cdb70f.jpg?v=1609940341",
      "https://cdn.shopify.com/s/files/1/0807/1548/1432/files/1622646122I1jGd.jpg?v=1750059214",
    ],
  },
  {
    title: "K.G. Subramanyan",
    description:
      "Modernist artist known for his versatile practice across painting, sculpture, murals and writing, blending folk traditions with modernist approaches.",
    image: {
      filename: "kg_subramanyan.jpg",
      url: "https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/Artist-KG-Subramanyan--1924-2016---HT-Photo-_1718692631192.jpg",
    },
    price: ["300000", "600000", "1200000"],
    images_description: [
      "Terracotta Relief",
      "Reverse Painting",
      "Mythic Narrative",
    ],
    images: [
      "https://www.documenta14.de/images/Subramanyan_02.png,846",
      "https://mediacloud.saffronart.com/auctions/2019/septlive/kgsub_1909live_40810_big.jpg",
      "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2016/10/2.jpg",
    ],
  },
  {
    title: "Bharti Kher",
    description:
      "Contemporary artist known for her innovative use of bindis in her artworks, exploring themes of identity, gender, and mythology.",
    image: {
      filename: "bharti_kher.jpg",
      url: "https://s3.perrotin.com/d:autox325/artiste/39_1865@2x.jpg",
    },
    price: ["500000", "1000000", "2000000"],
    images_description: [
      "The Skin Speaks a Language Not Its Own",
      "An Absence of Assignable Cause",
      "Warrior with Cloak and Shield",
    ],
    images: [
      "https://s3.perrotin.com/d:800xauto/details/photo/bharti_kher-14793_121386@2x.jpg",
      "https://assets.yesstud.io/naturemorte/cache/naturemorte-6646-q80-h250-rz3-b75.jpg",
      "https://images.squarespace-cdn.com/content/v1/589aba9de58c626130b70946/1556710970693-DMR6IBZQA8C0K7DI2WVC/DSC01609+2.JPG?format=1500w",
    ],
  },
  {
    title: "Jogen Chowdhury",
    description:
      "Contemporary Bengali artist known for his distinctive figurative style that blends realism with distortion and surreal elements.",
    image: {
      filename: "jogen_chowdhury.jpg",
      url: "https://thepunchmagazine.com/admin/articles/795/Jogencover-large.jpg",
    },
    price: ["400000", "800000", "1600000"],
    images_description: ["Face", "Couple", "Woman - Exposing her Teeth"],
    images: [
      "https://artiana.com/images/Lots/133468730781572560.jpg",
      "https://www.artzolo.com/cdn/shop/files/couple-34-jogen-chowdhury.jpg?v=1728740560",
      "https://artiana.com/images/Lots/131097553978130000.jpg",
    ],
  },
  {
    title: "Arpita Singh",
    description:
      "Contemporary female artist known for her narrative paintings that blend personal memories with social commentary, often featuring vibrant colors and textual elements.",
    image: {
      filename: "arpita_singh.jpg",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/The_Chairman%2C_Lalit_Kala_Akademi%2C_Ministry_of_Culture%2C_Shri_K.K._Chakravarty_conferring_the_fellowship_on_eminent_artist_Arpita_Singh%2C_at_a_function%2C_in_New_Delhi_on_October_10%2C_2014_%28cropped%29.jpg",
    },
    price: ["600000", "1200000", "2400000"],
    images_description: [
      "Woman with Ducks",
      "Memory Jars",
      "Cityscape with Figures",
    ],
    images: [
      "https://media.mutualart.com/Images//2015_07/14/13/130651571/f3d84b7a-087c-4c07-aa67-171aea38f0eb.Jpeg",
      "https://mediacloud.saffronart.com/auctions/2013/autumnauc/arpitas_13autumn_10906_big.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWinIMWPAD9a2Q5dz0xSHVea0tBUChTdq1g&s",
    ],
  },
  {
    title: "Ram Kumar",
    description:
      "Abstract painter known for his landscapes that evolved from figurative to completely abstract, reflecting both physical and metaphysical spaces.",
    image: {
      filename: "ram_kumar.jpg",
      url: "https://d197irk3q85upd.cloudfront.net/catalog/product/r/a/ram_kumar5.jpg",
    },
    price: ["700000", "1400000", "2800000"],
    images_description: [
      "Varanasi Series",
      "Abstract Landscape",
      "Cloud Shadows",
    ],
    images: [
      "https://thecurators.art/cdn/shop/products/RAKUSR03-1_93a6a967-f59c-4044-bf13-d3b9a37b61e8.jpg?v=1623953287",
      "https://theartofindia.in/cdn/shop/products/ramkumar-art_480x.jpg?v=1648988597",
      "https://d7hftxdivxxvm.cloudfront.net/?height=475&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FUKJQBDhTRjBdIrAt21A0ew%2Fmain.jpg&width=800",
    ],
  }
  
]);


await Event.insertMany([
  {
    event_title:
      "KalaSutra: Traditional Art Revival Workshop",
    artist_name: "Savitri Mahapatra – Pattachitra Master Artisan, Odisha",
    description:
      " A 3-day immersive workshop focused on reviving lesser-known traditional Indian art forms like Pattachitra, Madhubani, and Gond art.",
    organized_by: "Indira National Centre for Folk Arts & Crafts (INCFAC)",
    banner: "https://dirumsbucket.blob.core.windows.net/dirumsbucket/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/Indian%20Tribal%20And%20Folk%20Art%20Paintings...Banner.png",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "10:00 AM - 6:00 PM",
    location: "National Gallery of Modern Art, New Delhi",
    activity:
      "Guided painting session where attendees can try miniature painting techniques",
    status: "Completed",
    images: [
      "https://www.bridgebharat.com/cdn/shop/files/Gond-banner.png?v=1701878250",
      "https://www.memeraki.com/cdn/shop/files/Majestic-Valour-The-Pattachitra-Painting-of-Goddess-Durga-on-a-canvas-by-Apindra-Swain-2_1024x.jpg?v=1725471749",
    ],
        testimonials: [
      {
        name: "Priya Sharma",
        comment: "The workshop felt like a soulful journey into India’s cultural roots!",
        rating: 5,
       name: "Aarav G.",
        comment: "The hands-on sessions with real village artisans were incredibly grounding. I now understand the stories behind the strokes.",
        rating: 4.5,
       name: "Ritu S.",
        comment: "I came as a curious participant and left as a patron of traditional Indian art.",
        rating: 5,

      },
    ],
    artist_bio:
      "Savitri is a 4th-generation Pattachitra artist from Raghurajpur, Odisha. Her intricate mythological scrolls have been exhibited in Japan and the UK. She's also a National Handicraft Award winner.",
  },
  {
    event_title: "NrityaSangam: Classical Dance Confluence",
    artist_name: "Guru Meenal Deshpande – Kathak Exponent, Lucknow Gharana",
    description:
      "A 2-day dance showcase and workshop featuring Bharatnatyam, Kathak, Odissi, and Mohiniyattam.",
    organized_by: "Kalakshetra Foundation in collaboration with SPIC MACAY",
    banner: "https://utsav.gov.in/public/event_category_banner/1656592649.png",
    event_date: {
      start:new Date("March 14, 2025"),
      end : new Date("March 15,2025")
    },
    event_time: "2:00 PM - 5:00 PM",
    location: "Kalakshetra Foundation, Chennai",
    activity: "Performances, movement therapy, lecture demos",
    status: "Completed",
    images: [
      "https://springofrhythm.com/wp-content/uploads/2021/11/kathak-dance.jpg",
      "https://media.assettype.com/TNIE%2Fimport%2F2023%2F12%2F5%2Foriginal%2FMohiniyattam_Odissi.jpg?w=480&auto=format%2Ccompress&fit=max",
    ],
    testimonials: [
      {
        name: "Ramesh T.",
        comment: "Every movement had meaning—life-changing!",
        rating: 4,
        name: "Latika P.",
        comment: "Watching all four dance forms side-by-side was a masterclass in Indian culture",
        rating: 4.5,
        name: "Kabir.",
        comment: "The therapeutic aspect of classical dance was an eye-opener. Even my mother joined the mudra workshop!",
        rating: 4.8,

      },
    ],
    artist_bio:
      "With over 30 years of performance and teaching, Guru Meenal is known for her expressive abhinaya and rhythmic footwork. She has trained under Pt. Birju Maharaj and conducts global residencies.",
  },
  {
    event_title: "Shilp Utsav: Handicraft & Artisan Fair",
    artist_name: "Rajbir Singh Chandel – Terracotta Artisan, Haryana",
    description:
      " A week-long craft fair celebrating handmade Indian heritage—pottery, wood carving, weaving, and metalwork.",
    organized_by: "Ministry of Textiles, Govt. of India & Craft India Collective",
    banner: "https://itokri.com/cdn/shop/articles/BeFunky-collage_3_2d7f3d2e-1740-4a3c-ab85-6f531174998a.jpg?v=1737984690",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "11:00 AM - 8:00 PM",
    location: "Dilli Haat",
    activity: "Live demos, pottery wheel, storytelling by artisans",
    status: "Completed",
    images: [
      "https://itokri.com/cdn/shop/articles/header6_1_bf61afaa-180c-4ea9-a2fb-be108b9ca401.jpg?v=1738050867",
      "https://nishantverma.in/wp-content/uploads/2024/12/The-Importance-of-Textiles-and-Handicrafts-in-Ancient-India-1024x505.jpg",
    ],
    testimonials: [
      {
        name: "Simran",
        comment:
          "I ended up buying six handmade pieces—couldn’t resist the craftsmanship. The artisans were so welcoming!",
        rating: 4.8,
       name: "Farhan A.",
        comment:
          "Kids loved the pottery—it was beautiful to watch",
        rating: 4.5,
        name: "Tanya",
        comment:
          "It felt like walking through a living museum where you could touch, try, and take home a piece of tradition.",
        rating: 4.9,

      },
    ],
    artist_bio:
      "Rajbir specializes in traditional terracotta toy-making and large clay murals. His work draws from the Harappan legacy and he's trained over 200 students across North India..",
  },
  {
    event_title: "RagaDeep: Indian Classical Music Retreat",
    artist_name: "Vidwan Ravi Subramanian – Carnatic Veena Maestro, Chennai",
    description:
      "A spiritual and educational retreat dedicated to Hindustani and Carnatic music traditions.",
    organized_by: "SPIC MACAY & Indian Music Conservatory Trust",
    banner: "https://thumbs.dreamstime.com/b/indian-musical-instruments-27159451.jpg",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "7:30 AM - 9:00 PM",
    location: "Spic Macay Gurukul, Rishikesh",
    activity: "Baithaks, masterclasses, instrument showcases",
    status: "Upcoming",
    price: "₹1200",
    artist_bio:
      "A disciple of the great S. Balachander, Vidwan Ravi is celebrated for his improvisational flair and meditative performances. He also runs a gurukulam for underprivileged music learners.",
  },
  {
    event_title: "Lokrang: Folk Arts & Theatre Festival",
    artist_name: "Shyamala Basavanna – Yakshagana Performer, Karnataka",
    description:
      "A vibrant 4-day festival of Indian folk theatre, puppetry, storytelling, and dance.",
    organized_by: "National School of Drama (NSD) & Maharashtra Natya Parishad",
    banner: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/11/28/Incoming/Pictures/1291206_Wallpaper2.jpg",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "1 PM - 9:00 PM",
    location: "Ravindra Natya Mandir, Mumbai",
    activity: "Performances (Bihu, Yakshagana, Nautanki), puppet-making, kids’ theatre",
    status: "Upcoming",
    price: "1500",
    artist_bio:
      "A disciple of the great S. Balachander, Vidwan Ravi is celebrated for his improvisational flair and meditative performances. He also runs a gurukulam for underprivileged music learners.",
  },
  {
    event_title: "TatvaArt: Natural Dye & Eco-Craft Workshop",
    artist_name: "Ayesha Noorani – Natural Dye Specialist, Gujarat",
    description:
      "A sustainability-focused event on natural dyes and eco-friendly traditional crafts.",
    organized_by: "Khadi India & CraftGreen Foundation",
    banner: "https://itokri.com/cdn/shop/articles/juana-gutierrez-contreras-reds-720x405_1.jpg?v=1692874517",    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "9:30 AM - 4:00 PM",
    location: "Visva-Bharati Campus, Shantiniketan, West Bengal",
    activity:
      "Indigo dyeing, block printing, talks on natural pigments",
    status: "Upcoming",
    price: "₹1500",

    artist_bio:
      "Ayesha has revived the Ajrakh natural dye techniques and works with Kutch artisan clusters. Her sustainable fashion line has featured at Lakmé Fashion Week.",
  },
  {
    event_title: "BhavaRang: Emotional Expression through Indian Art",
    artist_name: "Anirudh Kashyap – Theatre Artist & Rasa Theorist, Delhi",
    description:
      "A curated experience on exploring Rasa theory and expression in Indian performing arts.",
    organized_by: "Indian Council for Cultural Relations (ICCR) & Natyashastra Labs",
    banner: "https://hinduismtoday.b-cdn.net/wp-content/uploads/2020/04/f0038-01-e1586034358856.jpg",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "10:00 AM - 5:30 PM",
    location: "India Habitat Centre, New Delhi",
    activity: "Rasa painting, expression training, lectures on Natya Shastra",
    status: "Upcoming",
    price: "₹800",
    artist_bio:
      "Trained in both Natya Shastra and modern acting techniques, Anirudh merges classical Indian emotions with contemporary storytelling. He's also a certified expressive arts therapist.",
  },
  {
    event_title: "Akaar: Sculpture and Temple Architecture Workshop",
    artist_name: "Murugan Ilango – Stone Sculptor & Temple Architect, Tamil Nadu",
    description:
      "A hands-on sculpture and architecture camp focusing on South Indian temples and stone art.",
    organized_by: "Archaeological Survey of India (ASI) & Tamil Nadu School of Sculpture",
    banner: "https://static.vecteezy.com/system/resources/previews/038/568/848/non_2x/sculptures-on-adinath-jain-temple-khajuraho-photo.jpg",
        event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "8:00 AM - 5:00 PM",
    location: "Shore Temple Complex, Mahabalipuram, Tamil Nadu",
    activity: "Stone carving, architecture history, miniature temple building",
    status: "Upcoming",
    price: "₹1000",
    artist_bio:
      "Murugan is from a lineage of sthapathis and has contributed to temple restorations in Cambodia and Tamil Nadu. His carvings blend geometry, spirituality, and precision.",
  },
  {
    event_title: "KathaKriti: Storytelling Traditions of India",
    artist_name: "Faizan Ali Khan – Dastango, Urdu Scholar, Lucknow",
    description:
      "A celebration of storytelling—featuring Kavad, Harikatha, Baul, and Dastangoi traditions.",
    organized_by: "Sahitya Kala Parishad & Indian Oral Traditions Collective",
    banner: "https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/hi/img/article/2025-07/11/full/1752229469-2284.jpg&w=&h=&outtype=webp",
    event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "12:00 PM - 5:00 PM",
    location: "Jawahar Kala Kendra, Jaipur",
    activity: "Storytelling shows, narration workshops, Kavad painting for kids",
    status: "Upcoming",
    price: "free",
    artist_bio:
      "Faizan revives classical Dastangoi with modern themes and has performed at international literature festivals. He also translates forgotten Dastans into Hindi and English.",
  },
  {
    event_title: "Rangrez: Traditional Textile & Embroidery Showcase",
    artist_name: "Balvinder Kaur Sandhu – Phulkari Embroiderer, Punjab",
    description:
      "A textile art event that brings together artisans of Phulkari, Chikankari, Kutch embroidery, and more",
    organized_by: "Textiles Ministry of India & Centre for Embroidered Heritage (CEH)",
    banner: "https://i.cdn.newsbytesapp.com/images/l99420230925111556.jpeg",
        event_date: {
      start:new Date("June 15, 2025"),
      end : new Date("June 18,2025")
    },
    event_time: "10:30 AM - 6:30 PM",
    location: "Textile Museum, Ahmedabad",
    activity: "Embroidery demos, textile map, saree styling sessions",
    status: "Upcoming",
    price: "1700",
    artist_bio:
      "Balvinder specializes in vibrant bridal phulkaris and incorporates oral histories into her stitchwork. She trains village women through her NGO, Rangla Punjab.",
  },
  
]); 

console.log("✅ Sample artists added!");
await mongoose.disconnect();
//mongoose.disconnect();
// await localConnection.close();
