

import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";
import "./Gallery.css";

const categories = [
  "Tanjor Arts",
  "Folk Paintings",
  "Kishangarh Paintings",
  "Madhubani Paintings",
  "South Indian Paintings",
  "Pichwai Art",
  "Kalamkari Paintings"

];

// Updated imageData with name & description
const imageData = {

  "Tanjor Arts": [
    {
      url: "https://in.all.biz/img/in/catalog/549619.jpeg",
      name: "Tanjor Krishna",
      description: "Traditional Tanjore painting of Lord Krishna with intricate gold work.",
    },
    {
      url: "https://indianfolkart.org/wp-content/uploads/2021/02/WhatsApp-Image-2021-01-28-at-8.17.54-PM.jpeg",
      name: "Ganesha Tanjore",
      description: "Depiction of Lord Ganesha in vibrant South Indian style.",
    },
        {
      url: "https://www.memeraki.com/cdn/shop/files/A-Peacock-Tanjore-Art-by-Sanjay-Tandekar-2_800x.jpg?v=1726336317",
      name: "Peacock",
      description: "A beautifully painted peacock in Tanjore.",
    },
    {
      url: "https://i.pinimg.com/736x/8c/d2/7a/8cd27a724b990142620547359e3d43f0.jpg",
      name: "Maa Durga",
      description: "Maa Durga depicted in vibrant Indian colours.",
    },
        {
      url: "https://i.pinimg.com/1200x/e1/9e/2c/e19e2cae3d312dc2e599c5c78bf6b8d8.jpg",
      name: "Mysterious God",
       description: "A mysterious yet extravagant painting of god.",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/6/318667922/GV/PF/YP/30597499/komatha-tanjore-painting.JPG",
      name: "Tanjore Cow",
      description: "Painting that fits your home.",
    },
        {
      url: "https://i.pinimg.com/736x/f6/91/9e/f6919eb3ec38eb6d691ea4f8a23fb231.jpg",
      name: "Tanjor Maa",
      description: "",
    },
    {
      url: "https://5.imimg.com/data5/JW/NY/RT/ANDROID-10130716/product-jpeg.jpg",
      name: "Sita-Ram",
      description: "A painting of Ram-Sita getting married.",
    },
        {
      url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg",
      name: "Venkateshwar",
      description: "Venkateshwara painting form Tamil Nadu archives.",
    },
    {
      url: "https://i.pinimg.com/736x/f8/58/33/f858336a802c683cd9491889c0b288b0.jpg",
      name: "Krishna",
      description: "Depiction of Lord Krishna in Indian Tanjore style.",
    },
        {
      url: "https://i.pinimg.com/736x/a7/69/91/a7699129c729e03035425dd2babbadc0.jpg",
      name: "Radha-Krishna",
      description: "The divine couple Radha and Krishna.",
    },
      {
      url: "https://i.pinimg.com/736x/a7/4b/ed/a74bed323c2725ed9ef6fb7e168cd020.jpg",
      name: "Ganesha Tanjore",
      description: "Depiction of Lord Ganesha in traditional way.",
    },
  ],

  "Folk Paintings": [
    {
      url: "https://i.pinimg.com/736x/c0/57/bb/c057bbb7d0d8dda81125372ec660f108.jpg",
      name: "Maa Durga",
      description: "Folk Painting of maa durga",
    },
    {
      url: "https://i.pinimg.com/736x/e2/2d/33/e22d339245b44bb70493faa99791b668.jpg",
      name: "Lord Ganesha",
      description: "Madhubani inspired Lord Ganesha.",
    },
    {
      url: "https://i.pinimg.com/1200x/0f/81/1f/0f811f06a8e5c916b57847ffe6053e51.jpg",
      name: "Jagannath",
      description: "Indian Pattachitra FolK Art",
    },
    {
      url: "https://i.pinimg.com/1200x/c0/6e/55/c06e55b96b8f6b79bf3a8c35c006d253.jpg",
      name: "Bangladeshi Folk Art",
      description: "",
    },
        {
      url: "https://i.pinimg.com/736x/f2/49/dc/f249dcbffa519391a501d02b6040eaf2.jpg",
      name: "Warli Painting",
      description: "Indian Tribal Art",
    },
    {
      url: "https://i.pinimg.com/736x/20/c7/9e/20c79e840848c8de89661890fc9a5519.jpg",
      name: "Ladies",
      description: "Bengali,Jamini Roy Painting",
    },
        {
      url: "https://i.pinimg.com/736x/8a/b3/ae/8ab3ae9390d2e17669b5109d7e5d6b32.jpg",
      name: "Sun",
      description: "Madhubani Sun Painting",
    },
    {
      url: "https://www.dafenvillageonline.com/images/lv/FLK-04067.jpg",
      name: "Indian Folk Art",
      description: "Oil Folk Art Painting",
    },
        {
      url: "https://i.pinimg.com/736x/80/43/7d/80437dbb1db4473ec56ebc5dbcad5e79.jpg",
      name: "Male Portrait",
      description: "Neo Bengal Folk Art Male Portrait",
    },
    {
      url: "https://i.pinimg.com/1200x/f9/10/75/f91075a44cafd9d553a817bf78c80e75.jpg",
      name: "A Bride",
      description: "Rajasthani Folk Painting",
    },
        {
      url: "https://i.pinimg.com/1200x/25/1b/d2/251bd260036cac4455bab8cf1813b616.jpg",
      name: "Lord Buddha",
      description: "Beautiful madhubani art of Lord Buddha",
    },
    {
      url: "https://i.pinimg.com/1200x/47/e7/3e/47e73ef69a7a121a77e14dac9ec84748.jpg",
      name: "Kalpvriksha",
      description: "",
    },
        {
      url: "https://i.pinimg.com/1200x/f3/5d/8d/f35d8d0aeee33a7dd44221490de174b7.jpg",
      name: "Warli Painting",
      description: "",
    },
    {
      url: "https://i.pinimg.com/736x/fb/56/95/fb5695ec0f85f6144e5356d376f2d930.jpg",
      name: "Shrinath Ji",
      description: "Shrinath Ji Pichwai Painting",
    },
        {
      url: "https://i.pinimg.com/1200x/33/c5/53/33c553c07c5d026bd24e420577a892d5.jpg",
      name: "",
      description: "Painting by Varsha Kharatmal",
    },
    {
      url: "",
      name: "",
      description: "",
    },


  ],
  "Kishangarh Paintings": [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/10/4_Radha_%28Bani_Thani%29%2C_Kishangarh%2C_ca._1750%2C_National_Museum_New_Delhi.jpg",
      name: "Bani Thani",
      description: "Kishangarh miniature from c. 1750, at the National Museum.",
    },
    {
      url: "https://cdn.britannica.com/73/26073-050-0538CC7F/Radha-Krishna-terrace-painting-Indian-style-Kishangarh-1760.jpg",
      name: "Kishangarh Couple",
      description: "Rajasthani, Mughal and Miniature.",
    },
        {
      url: "https://tokenz.com/cdn/shop/products/109b_496f1fa6-0e62-4206-a439-56daf9daa6d4_1024x1024.jpg?v=1633074696",
      name: "Intricate Kishangarh Painting",
      description: "",
    },
    {
      url: "https://s3.eu-west-2.amazonaws.com/catterfly/catterfly/images/2021/09/c76d5927-7488-445b-a662-f30d378b7f73.jpeg",
      name: "Lady dancing",
      description: "Kishangarh Miniature Painting.",
    },
        {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmx5EXi-QHBvzPog7Xv7dFlrSURpfNyEFHB_xB7wGpHgGofmwFW47r3m4vE8GnZoAMFb-SfmG8selqNEBN9EiZyzu_NiQbosifYqu-VQ8r91NYUQEFWoV_UkuykFM3f1dndIz8P7Ri5o0/s1600/kishangarh-painting-ET45_l.jpg",
      name: "",
      description: "A painting by ajmer tourism",
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIeMrtsQlT0Hmtfjjlclb_RwZJcAeQEMmis6x3WmgyjJUWmBvZ06zLVrXrEwcQrrOKr_Zwo2OO-6CweO4Wm-nAJM3vxZgfnUm9has4yTtEK33Ca_K2gBiSlewDgBC2UO-p9a7Ycg/w1200-h630-p-k-no-nu/kishnagarh_painting_Radha_Krishna.PNG",
      name: "Love",
      description: "Painting inspired by religion of love.",
    },
        {
      url: "https://www.tallengestore.com/cdn/shop/products/TheCourtesanBaniThani_MistressofMaharajahSavantSingh_Kishangarh_c1770-IndianPainting_fe679052-63e9-4b52-93d4-445a31a4ca5a_large.jpg?v=1677227031",
      name: "Courtesan Bani Thani",
      description: "Painting of the mistress of Maharaja Savant Singh.",
    },
    {
      url: "https://www.alphonsostories.com/AlphonSoStoriesImages/downloads/Kishangarh-miniature-paintings-03.jpg",
      name: "a dance visual",
      description: "A visual Odyssey in Bundi, Kota and Kishangarh.",
    },
        {
      url: "https://tokenz.com/cdn/shop/products/136a_d8c27752-14df-4f12-a808-ad2d00a30e90_1024x1024.jpg?v=1643457832",
      name: "Radha Krishna",
      description: "Alluring Radha-Krishna Kishangarh painting.",
    },
    {
      url: "https://static.toiimg.com/photo/70756613.cms",
      name: "",
      description: "Mona-Lisa like queen Bani Thani",
    },
        {
      url: "https://ofindianorigin.com/image/cache//data/Sep13/mughal_miniature/kishangarh-painting-on-old-stamp-papernbd-pntabv-sep13-04-2766-1600x1602.JPG.webp",
      name: "A war scene",
      description: "Kishangarh painting on old stamp-paper",
    },
    {
      url: "",
      name: "Vintage Portrait",
      description: "A serene oil painting capturing 19th-century nobility.",
    },
        {
      url: "https://tokenz.com/cdn/shop/products/52b_d4db045b-04c2-405b-b605-78e21d805ca0_1024x1024.jpg?v=1633075035",
      name: "Radha-Krishna",
      description: "Enchanted Radha-Krishna Kishangarh painting",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2025/1/482951816/TA/EY/TA/112872651/kishangarh-shaili-art.jpg",
      name: "Shaili Art",
      description: "Natural Kishangarh Shaili Art.",
    },
        {
      url: "https://www.dailyartmagazine.com/wp-content/uploads/2021/10/cropped-NC-FI.jpg",
      name: "School painting",
      description: "Nihal Chand and the Kishangarh School.",
    },
    {
      url: "https://www.tallengestore.com/cdn/shop/products/TheVilavalRagini-KishangarhSchoolc1780-IndianMiniaturePainting_1dd93b6d-6857-48a5-8dbf-5a9cf176f791.jpg?v=1640090520",
      name: "Vilaval Ragini",
      description: "A Kishangarh miniature painting.",
    },

  ],
  "Madhubani Paintings": [
  {
      url: "https://upload.wikimedia.org/wikipedia/commons/6/67/Madhubani_Mahavidyas.jpg",
      name: "Shiv - Parvati",
      description: "God Shiva-Parvati and the Mahavidyas",
    },
   {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mithila_Painting_at_Patna_Junction.jpg/1920px-Mithila_Painting_at_Patna_Junction.jpg",
      name: "Bharni and Tantrik Styles",
      description: "Mural at Patna Junction.",
    },
    {
      url: "https://i.pinimg.com/736x/ce/34/7c/ce347c8753e9b88076db7b14930b6184.jpg",
      name: "Bird Painting",
      description: "Two birds sitting on a branch.",
    },
    {
      url: "https://i.pinimg.com/736x/c0/f4/79/c0f479bd07ecb0b50da0d6a0d7c75c8f.jpg",
      name: "Radha Krishna",
      description: "Beautiful painting of radha krishna .",
    },
    {
      url: "https://i.pinimg.com/736x/ec/72/69/ec72692f65cb205283f4ee03494a4cb0.jpg",
      name: "A fish",
      description: "A serene painting capturing beauty of a fish.",
    },
    {
      url: "https://i.pinimg.com/736x/1f/77/be/1f77be7d0035866219b6f1f7010df0a5.jpg",
      name: "Blooming Lotus Harmony",
      description: "Three vibrant lotus flowers stand tall, surrounded by lush green leaves and framed by rich geometric borders.",
    },
    {
      url: "https://i.pinimg.com/1200x/e0/3f/a8/e03fa8d6224ee433dd5e1483949cdc06.jpg",
      name: "Gautam Buddha",
      description: "A serene view of Buddha meditating.",
    },
    {
      url: "https://i.pinimg.com/736x/fc/52/8c/fc528c1feb1dec7abddce02e8d4c3ef7.jpg",
      name: "Elephants",
      description: "Celebrating Nature.",
    },
    {
      url: "https://i.pinimg.com/736x/25/5c/e6/255ce6f21edd2aacf7762403b329474f.jpg",
      name: "Lord Ganesha",
      description: "The mysterious painting of Lord Ganesha.",
    },
    {
      url: "https://i.pinimg.com/1200x/89/fd/c1/89fdc16b9f9a143ee06862e701d76915.jpg",
      name: "Handmade Bird",
      description: "A Symbol of Freedom, Joy, and Hope.",
    },
    {
      url: "https://i.pinimg.com/1200x/7e/a7/43/7ea743dcd38b9a41c7073fb9035649a7.jpg",
      name: "Peacock Painting",
      description: "",
    },
    {
      url: "https://i.pinimg.com/736x/57/80/05/578005dacad0af66e071bcb0c3836cf2.jpg",
      name: "Indian Woman",
      description: "Rajasthani woman in madhubani painting.",
    },
    {
      url: "https://i.pinimg.com/736x/e5/53/6f/e5536fd5ce982c80117dcceace6af0c9.jpg",
      name: "Lady Portrait",
      description: "A serene painting capturing Indian lady.",
    },
],
  "South Indian Paintings": [
  {
      url: "https://i.pinimg.com/736x/3e/7b/0e/3e7b0eb058617e81567406843d563edb.jpg",
      name: "Kathakali Theyyam Painting",
      description: "Kerala Home Decor.",
    },
    {
      url: "https://i.pinimg.com/736x/83/1e/be/831ebe971b69dc9962006efc9fd887be.jpg",
      name: "Painting if Dancing Gopi",
      description: "A painting by Jamini Roy.",
    },
    {
      url: "https://i.pinimg.com/736x/7f/e6/af/7fe6af1f470dcda6e2cccb73a6d0885b.jpg",
      name: "Nostalgic Grace",
      description: "Women in Sarees.",
    },
    {
      url: "https://i.pinimg.com/736x/cd/5d/45/cd5d45cc34dfd63aa43f69769557e09a.jpg",
      name: "Goddes Saraswati",
      description: "Goddess Saraswati pattachitra painting.",
    },
    {
      url: "https://i.pinimg.com/1200x/50/42/5b/50425b4cbdc1c494d6c0cba5b6c9a543.jpg",
      name: "Kathakali Painting",
      description: "Mallyalam wall art.",
    },
    {
      url: "https://i.pinimg.com/1200x/78/a9/71/78a9716bf2464a3132f59d404916757d.jpg",
      name: "Radha Krishna",
      description: "Radha Krishna kalamkari painting.",
    },
    {
      url: "https://i.pinimg.com/736x/a8/05/13/a80513c21aa6d3f9cb333591d0cb2b56.jpg",
      name: "Krishna",
      description: "Kerala Mural Painting.",
    },
    {
      url: "https://i.pinimg.com/1200x/9f/87/c5/9f87c5b5af94bba4c7926a3690c4d03d.jpg",
      name: "Theyyam painting",
      description: "Vibrant Indian Theyyam Painting.",
    },
    {
      url: "https://i.pinimg.com/736x/b9/95/af/b995af7efbcf106e2dd02a79947ceb82.jpg",
      name: "Folk art",
      description: "Indian folk art paintings.",
    },
    {
      url: "https://i.pinimg.com/736x/71/bd/34/71bd3468b8afea4a0cf1fecf7465126c.jpg",
      name: "Lord shiva",
      description: "Cosmic dance of lord Shiva.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoOmEEBDA3Q4efKJBUa9wkcLKApG7EU3gjw&s",
      name: "South Indian Girl",
      description: "Cultural serenity.",
    },
    {
      url: "https://i.pinimg.com/736x/d9/dc/0b/d9dc0be6a94619b69dfc61faf792beff.jpg",
      name: "Shakuntala looking back",
      description: "A painting by Raj Ravi Verma.",
    },
    {
      url: "https://i.pinimg.com/736x/7f/14/cd/7f14cd570fec10e15e564576770418b5.jpg",
      name: "Kerala Mural Painting",
      description: "A goddess in Kerala's Mural Painting.",
    },
    {
      url: "https://medias.artmajeur.com/standard/11464337_orginal.jpg?v=1739352529",
      name: "South Indian Lady",
      description: "South Indian Lady at temple.",
    },
    
],
  "Pichwai Art": [
   {
      url: "https://www.trulyearthy.com/cdn/shop/files/lotuspichwaipainting_3_1080x.jpg?v=1696840745",
      name: "Lotus",
      description: "Handmade Pichwai Painting",
    },
    {
      url: "https://www.imagineersstudio.com/products_image/aa20e7bcc268c8b241e877722cb6b014.jpg",
      name: "Lord Krishna",
      description: "Pichwai of Nathdwara",
    },
       {
      url: "https://www.bridgebharat.com/cdn/shop/files/BBP0012PCW00024.jpg?v=1734697874",
      name : "pichwai cow art",
      description : "painting by bridge bharat",
    },
    {
      url: "https://i.etsystatic.com/17804486/r/il/783781/2824455939/il_570xN.2824455939_gcrv.jpg",
      name: "Monochrome Pichwai",
      description: "A monchrome pichwai painting of Lord Krishna",
    },
       {
      url: "https://d2ma7w4w9grdob.cloudfront.net/media/9923-DSC_9531.JPG",
      name: "Radha-Krishna",
      description: "Radha-Krishna with peacocks and gopis",
    },
    {
      url: "https://indianfolkart.org/wp-content/uploads/2021/04/Pichwai-Minakshi-07.jpeg",
      name: "Tree of Life",
      description: "",
    },
       {
      url: "https://www.bridgebharat.com/cdn/shop/files/BBP0001PCW00069_4b038a83-fffc-4dcb-bf20-f9a1013ea822.jpg?v=1697191667",
      name: "",
      description: "A painting by Mahesh Vishnoi",
    },
    {
      url: "https://i.pinimg.com/1200x/f1/64/77/f16477ad4531c29071a00685ddc0b094.jpg",
      name: "Pond of Lotus",
      description: "Rajasthani Miniature Pichwai",
    },
       {
      url: "https://i.pinimg.com/736x/01/7e/da/017eda6f07a5fa87d61f1ee3809850a7.jpg",
      name: "Flower Vase",
      description: "Pichwai of beautiful flowers",
    },
    {
      url: "https://i.pinimg.com/1200x/75/29/1e/75291eaabfdf317849fbcefb80a6c954.jpg",
      name: "Lord Krishna",
      description: "Handpainted Lord Krishna in Pichwai",
    },
       {
      url: "https://i.pinimg.com/736x/da/cb/50/dacb50e15c51bebc53d9385b65bac5a1.jpg",
      name: "Lotus,Cow and Calf",
      description: "Pichwai Lotus, Cow and Calf",
    },
    {
      url: "https://i.pinimg.com/1200x/f1/59/05/f159054e4e5d29c70c42257a96a6ea78.jpg",
      name: "Radha-Krishna",
      description: "Beautiful wall decor",
    },
  ],
     
  "Kalamkari Paintings": [
    {
      url: "https://www.memeraki.com/cdn/shop/files/Radha-Krishna--Kalamkari-painting-by-Harinath.N-2_2400x.jpg?v=1725001128",
      name: "Radha-Krishna",
      description: "A painting by Harinath N.",
    },
    {
      url: "https://i.pinimg.com/736x/db/56/a6/db56a60feb8cfe770016af5b52901e49.jpg",
      name: "Tree of Life",
      description: "Kalamkari on a cloth",
    },
     {
      url: "https://i.pinimg.com/1200x/46/a9/fc/46a9fc6c8d8317cfb8472ae0b3b0d938.jpg",
      name: "Peacock",
      description: "A beautiful kalamkari peacock",
    },
    {
      url: "https://i.pinimg.com/736x/ed/33/f5/ed33f54fc0a3c42bf3856763df7983d7.jpg",
      name: "Krishna leela",
      description: "Lord Krishna with cows",
    },
     {
      url: "https://i.pinimg.com/736x/f2/56/4d/f2564d20895ec2aca21a87374d4a8a12.jpg",
      name: "Lord Hanuman",
      description: "Hanuman carrying parvat",
    },
    {
      url: "https://i.pinimg.com/736x/2e/cf/f5/2ecff5bcdbfac47c68026c7865fcceb4.jpg",
      name: "Magical Ganesha",
      description: "Lord Ganesha in in mysterious avtaar",
    },
     {
      url: "https://laasyaart.com/wp-content/uploads/2022/06/Kalamkari-blog-header.jpg",
      name: "Birds",
      description: "Serene beauty of nature",
    },
    {
      url: "https://i.pinimg.com/1200x/ff/33/8a/ff338ac3e2cfc772b86a78b868cf533a.jpg",
      name: "Shiv-Parvati",
      description: "Kalamkari of Shiv-Parvati",
    },
     {
      url: "https://www.southtourism.in/assets/images/destination/andhra/arts/kalamkari-paintings.webp",
      name: "An Elephant",
      description: "Kalamkari paintings in Andhra",
    },
    {
      url: "https://i.pinimg.com/736x/3e/5f/b0/3e5fb014a45700c1f2a9ee028d80a924.jpg",
      name: "Pattachitra Painting",
      description: "A painting in Orissa",
    },
     {
      url: "https://i.pinimg.com/736x/cf/3f/fb/cf3ffba5637a8e09794e2390e301192c.jpg",
      name: "Lord Krishna",
      description: "",
    },
    {
      url: "https://i.pinimg.com/736x/00/cb/30/00cb3049ed4d9a0d60a6471314759d90.jpg",
      name: "Karli India",
      description: "Karli India - Goddess Dancer ",
    },
     {
      url: "https://i.pinimg.com/736x/41/1d/26/411d262461ad71c80a69b6a46a4d9774.jpg",
      name: "A woman",
      description: "",
    },
    {
      url: "https://i.pinimg.com/1200x/18/63/13/186313d778ede590d53cc392ee2a9fab.jpg",
      name: "Maa Saraswati",
      description: "Sarawati in Kalamkari",
    },
     {
      url: "https://i.pinimg.com/736x/80/6d/39/806d39c244ddea96516ca7d41b5dd546.jpg",
      name: "Cheetah",
      description: "Serene scene of nature",
    },
],


};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tanjor Arts");
  const scrollRef = useRef();

  const handleDownload = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name || "artwork.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

      useEffect(() => {
    // Auto scroll on mount
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: 150, behavior: "smooth" });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 1000);
    }
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
      <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="gallery-container">
      {/* <h2 className="gallery-heading">Art Gallery</h2> */}
              <motion.h2
                className="section-title1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Art Gallery
              </motion.h2>

      {/* <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              category === selectedCategory ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

        <div className="scroll-wrapper">
          <div className="scroll-arrow">
            <ChevronRight className="animated-chevron" />
          </div>
          <div className="category-buttons" ref={scrollRef}>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  category === selectedCategory ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {imageData[selectedCategory]?.map((img, idx) => (
          <div key={idx} className="masonry-item">
            <div className="img-wrapper">
              <img src={img.url} alt={img.name} loading="lazy" />
              <button
                className="download-btn"
                onClick={() => handleDownload(img.url, img.name)}
              >
                Download
              </button>
            </div>
            <div className="img-details">
              <h4 className="img-name">{img.name}</h4>
              <p className="img-description">{img.description}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
    </motion.div>
  );
};

export default Gallery;
