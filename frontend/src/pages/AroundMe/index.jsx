import React, { useState } from 'react';
import './AroundMe.css';

const Blog = () => {
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  const blogs = [
    {
      title: "Welcome To Our Travel Blog",
      excerpt: "Welcome to India for Beginners, a travel blog dedicated to helping you explore the wonders of India! As a seasoned traveler and one of the pioneers in the travel blogging world, I am thrilled to embark on this new journey with you…",
      content: "Welcome to India for Beginners, a travel blog dedicated to helping you explore the wonders of India! As a seasoned traveler and one of the pioneers in the travel blogging world, I am thrilled to embark on this new journey with you. India is a land of immense diversity, rich history, vibrant culture, and breathtaking landscapes. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from the bustling streets of Delhi to the serene backwaters of Kerala, there is something for everyone in this incredible country.Through this blog, I aim to provide you with valuable insights, practical tips, and inspiring stories to make your journey through India an unforgettable experience. Whether you're a first-time visitor or a seasoned traveler looking for hidden gems, India has countless treasures waiting to be discovered.Join me as we unravel the mysteries of ancient temples, sample mouthwatering street food, navigate chaotic markets, and immerse ourselves in the warmth and hospitality of the Indian people. From practical advice on transportation and accommodation to cultural etiquette and off-the-beaten-path destinations, India for Beginners will be your ultimate guide to exploring this fascinating land.So, pack your bags, open your mind, and get ready for an adventure of a lifetime. Let's embark on this journey together and discover the magic of India one blog post at a time!."
    },
    {
      title: "Shopping Tours In Jaipur And Delhi",
      excerpt: "India is a shopper’s paradise. Markets, malls, and bazaars burst with beautiful merchandise, much of it handmade, unique, and culturally significant. Visiting markets in India is a cultural activity that is also fun and can be a great way to get to know local neighbourhoods. I love shopping in India and especially in Jaipur and…",
      content: "India is a shopper’s paradise. Markets, malls, and bazaars burst with beautiful merchandise, much of it handmade, unique, and culturally significant. Visiting markets in India is a cultural activity that is also fun and can be a great way to get to know local neighbourhoods. I love shopping in India and especially in Jaipur and especially in Jaipur, the Pink City of India. Jaipur is renowned for its rich cultural heritage and vibrant markets, making it a haven for shoppers seeking unique and authentic treasures.One of the most iconic shopping destinations in Jaipur is the Johari Bazaar, where you can immerse yourself in the dazzling array of traditional Rajasthani jewelry, including intricately designed Kundan, Meenakari, and Thewa pieces. The bustling atmosphere and the gleaming displays of precious stones will leave you enchanted.For those fascinated by textiles and fabrics, Bapu Bazaar is a must-visit. Here, you can browse through a kaleidoscope of colors and patterns, from vibrant Bandhani sarees to exquisitely embroidered fabrics. Don't forget to bargain with the friendly vendors to snag the best deals!If you're in search of unique handicrafts and home decor items, head to the colorful lanes of Tripolia Bazaar. From intricately carved wooden artifacts to traditional Rajasthani artwork, this market is a treasure trove for art lovers and collectors alike.For a glimpse into the rich cultural heritage of Rajasthan, make sure to explore the local markets near the iconic Hawa Mahal. Here, you'll find an eclectic mix of Rajasthani handicrafts, puppets, and traditional attire, perfect for capturing the essence of Jaipur's vibrant culture.No shopping spree in Jaipur would be complete without a visit to Chandpole Bazaar, where you can shop for authentic Rajasthani souvenirs and home decor items. Whether you're looking for hand-painted pottery, marble sculptures, or intricately designed brassware, you'll find it all here amidst the bustling lanes of this historic market.So, whether you're a seasoned shopper or a novice explorer, Jaipur offers an unforgettable shopping experience that is sure to leave you captivated and inspired. Come, indulge in the magic of Jaipur's markets, and take home a piece of Rajasthan's rich cultural heritage!."
    },
    {
      title: "A Place Of Transformation, Part 2",
      excerpt: "There are three symbolic animals that you encounter in India and they are often depicted in the miniature paintings you find in Rajasthan…",
      content: "There are three symbolic animals that you encounter in India and they are often depicted in the miniature paintings you find in Rajasthan.The first important animal is the elephant. This is where Agra comes in. It is known for one of the greatest wonders of the world: the Taj Mahal. But in addition to this overwhelming and iridescent architectural symbol of a man’s love for a woman, there is the Wildlife SOS elephant rescue centre. Here they rescue elephants that have been misused as tourist attractions or made to do brutal physical work. In India, elephants have always symbolized good luck and are often a welcome symbol. (Think trunk up!) ."
    },
    {
      title: "The Basics About Travel In India",
      excerpt: "There’s a lot to learn about travel in India, from what to wear, to how to book trains, to preventing Delhi belly. There is nowhere like India. Even if you’ve travelled extensively in Asia, India is different. There is a steep learning curve to travel in India, a lot you need to learn, until you…",
      content: "There’s a lot to learn about travel in India, from what to wear, to how to book trains, to preventing Delhi belly. There is nowhere like India. Even if you’ve travelled extensively in Asia, India is different. There is a steep learning curve to travel in India, a lot you need to learn, until you become familiar with its unique rhythms and intricacies. From the bustling streets of Delhi to the serene backwaters of Kerala, India offers a diverse tapestry of experiences that can both enchant and challenge travelers. It's a journey of discovery that requires an open mind, patience, and a willingness to adapt. As you immerse yourself in the vibrant colors, rich history, and diverse cultures of India, you'll gradually unlock its mysteries and find yourself embracing its beauty and chaos in equal measure."
    },
    {
      title: ">Tips For Women Travellers",
      excerpt: "Travel in India is not for everyone. But if you do feel called to India, I wouldn’t hesitate. I would, however, prepare, do research, and practise “safe travel strategies.” In some ways, India is like the Mount Everest of travel. It is often seen as the most challenging, and ultimately most rewarding, place to travel…",
      content: "Travel in India is not for everyone. But if you do feel called to India, I wouldn’t hesitate. I would, however, prepare, do research, and practise “safe travel strategies.” In some ways, India is like the Mount Everest of travel. It is often seen as the most challenging, and ultimately most rewarding, place to travel.Indeed, traveling in India can be an incredibly rewarding experience, akin to conquering Mount Everest in the world of travel. However, just as climbing Everest requires thorough preparation and caution, so does navigating the complexities of India. It's essential to approach your journey with careful planning, extensive research, and a commitment to practicing safe travel strategies.While India's vibrant culture, stunning landscapes, and spiritual richness can captivate the adventurous soul, its unique challenges can also test even the most seasoned travelers. From navigating chaotic streets to dealing with cultural differences and health concerns, being well-prepared is key to ensuring a positive and fulfilling travel experience.By arming yourself with knowledge, embracing the unknown, and staying mindful of your surroundings, you can embark on a transformative journey through India's diverse tapestry of experiences. And in the end, the challenges you overcome and the memories you create will undoubtedly make the journey worthwhile, leaving you with a deeper appreciation for the beauty and complexity of this remarkable country."
    },
    {
      title: "Spring: Tigers",
      excerpt: "Spring is a great time to visit India, especially for wildlife viewing and tiger spotting…",
      content: "Spring is a great time to visit India, especially for wildlife viewing and tiger spotting.During this time, the weather is generally pleasant, with warmer temperatures and less rainfall, making it ideal for outdoor activities and wildlife viewing.Several national parks and wildlife sanctuaries across India, such as Ranthambore National Park, Bandhavgarh National Park, and Kanha National Park, are renowned for their tiger populations. In spring, vegetation tends to be less dense, increasing the chances of spotting these magnificent creatures as they roam their natural habitats.Moreover, spring marks the mating season for many animals, including tigers, leading to increased wildlife activity and potential sightings. Birdwatching enthusiasts will also find spring to be a rewarding time, with migratory birds returning to India and nesting in various regions across the country.However, it's essential to note that spring is also a popular tourist season in India, so it's advisable to book accommodations and safari tours well in advance to secure your spot. Additionally, as with any wildlife viewing experience, patience and respect for the natural environment are key to maximizing your chances of unforgettable encounters with India's diverse wildlife."
    },
    {
      title: "Winter: Beaches",
      excerpt: "During winter, India’s tropical beaches are the place to be! Head to Goa, Kerala or other beautiful beaches found along India’s very long coastline…",
      content: 'During winter, India’s tropical beaches are the place to be! Head to Goa, Kerala or other beautiful beaches found along India’s very long coastlinestretching along the Arabian Sea, the Indian Ocean, and the Bay of Bengal, India boasts an array of stunning beach destinations that attract travelers from around the world.Goa, known for its vibrant nightlife, Portuguese-influenced architecture, and pristine beaches, is a top winter destination in India. Whether you seek relaxation on secluded shores or water sports and beach parties, Goa offers something for everyone.Kerala, often referred to as Gods Own Country is another popular choice for winter beach getaways. Its serene backwaters, palm-fringed beaches, and lush greenery create a tranquil setting for rejuvenation and exploration. From the tranquil shores of Varkala to the picturesque beaches of Kovalam, Keralas coastline beckons travelers seeking a peaceful retreat.In addition to Goa and Kerala, India is dotted with numerous other beach destinations, each offering its own unique charm and allure. From the pristine sands of Andaman and Nicobar Islands to the cultural richness of Puducherrys beaches theres no shortage of options for beach lovers in India during the winter months.Whether youre seeking sun-kissed relaxation, water sports adventures, or cultural immersion, Indias tropical beaches provide the perfect backdrop for unforgettable winter vacations.'
    },
    {
      title: "Ellora And Ajanta Caves",
      excerpt: "Imagine discovering hidden caves in the middle of nowhere that contain priceless artworks from a thousand years ago? In Central India you can actually find one such spot — and you do not want to miss it…",
      content: "Imagine discovering hidden caves in the middle of nowhere that contain priceless artworks from a thousand years ago? In Central India you can actually find one such spot — and you do not want to miss it.One such treasure trove is the Ajanta Caves, located in the state of Maharashtra.The Ajanta Caves, a UNESCO World Heritage Site, are a series of rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. These caves, nestled in a horseshoe-shaped gorge along the Waghora River, contain exquisite sculptures, frescoes, and architectural marvels that depict scenes from the life of Buddha, Jataka tales, and various mythological narratives.What makes the Ajanta Caves truly remarkable is the level of craftsmanship and artistry displayed in its intricate carvings and vibrant murals. The caves served as a sanctuary for Buddhist monks and pilgrims, providing a serene space for meditation and worship.Exploring the Ajanta Caves is like stepping back in time to a bygone era of artistic and spiritual flourishing. As you wander through the dimly lit chambers and marvel at the skillful craftsmanship of ancient artisans, you can't help but feel awestruck by the sheer beauty and grandeur of these hidden caves in the middle of nowhere.Visiting the Ajanta Caves is not only a journey through India's rich cultural heritage but also an opportunity to connect with the profound spirituality and artistic legacy of ancient times. It's an experience that will leave a lasting impression on anyone fortunate enough to discover this extraordinary site in the heart of Central India."
    },
    {
      title: "Kumbalgarh Fort",
      excerpt: "Kumbalgarh Fort is India’s second largest fort — and one of the world’s largest fort complexes. Kumbalgarh is a UNESCO World Heritage site near Udaipur, Rajasthan and a must-visit while in North India…",
      content: "Kumbalgarh Fort is India’s second largest fort — and one of the world’s largest fort complexes. Kumbalgarh is a UNESCO World Heritage site near Udaipur, Rajasthan and a must-visit while in North India.Indeed, Kumbhalgarh Fort stands as a testament to Rajasthan's rich history and architectural grandeur. Situated near Udaipur, Rajasthan, Kumbhalgarh Fort is renowned as India's second-largest fort complex and one of the largest in the world. Its impressive walls stretch over 36 kilometers, making it one of the most formidable defensive structures in Indian history.Designated as a UNESCO World Heritage Site, Kumbhalgarh Fort offers visitors a glimpse into Rajasthan's royal past and the region's military prowess. Built in the 15th century by Rana Kumbha of the Mewar Kingdom, the fort served as a strategic stronghold protecting the kingdom from invasions.Exploring Kumbhalgarh Fort is a journey through centuries of history, with its intricate architecture, sprawling courtyards, and magnificent palaces offering insights into the opulent lifestyle of Rajasthan's rulers. The fort's towering walls, adorned with intricate carvings and bastions, provide panoramic views of the surrounding Aravalli hills and the picturesque countryside.Visitors to Kumbhalgarh can marvel at its impressive temples, including the Badal Mahal (Palace of Clouds), dedicated to Lord Shiva, and the Neelkanth Mahadev Temple, adorned with intricate sculptures and ornate carvings.For history enthusiasts, Kumbhalgarh Fort offers a fascinating glimpse into Rajasthan's royal heritage and the architectural marvels of medieval India. Whether you're exploring the fort's labyrinthine passages, admiring its stunning architecture, or soaking in the breathtaking views, a visit to Kumbhalgarh is an unforgettable experience that should not be missed while exploring North India."
    },
    {
      title: "Kumaon, Uttarakhand",
      excerpt: "Kumaon is a hilly region of the northern Indian state of Uttarakhand. The name Kumaon conjures up vivid images of tranquil hill stations, mountain lakes, towering Himalayan peaks, and thick forests that are the preserve of the majestic Bengal tiger…",
      content: "Kumaon is a hilly region of the northern Indian state of Uttarakhand. The name Kumaon conjures up vivid images of tranquil hill stations, mountain lakes, towering Himalayan peaks, and thick forests that are the preserve of the majestic Bengal tiger.The mention of Kumaon evokes images of idyllic hill stations such as Nainital, Almora, and Ranikhet, each offering a perfect escape from the hustle and bustle of city life. Visitors can immerse themselves in the tranquility of these hill retreats, surrounded by lush greenery, charming colonial architecture, and panoramic views of the snow-capped Himalayas.Kumaon is also dotted with stunning mountain lakes, including the famous Nainital Lake, Bhimtal Lake, and Sattal, offering opportunities for boating, picnicking, and leisurely strolls along the waterfront.For adventure seekers and nature enthusiasts, Kumaon's rugged terrain provides ample opportunities for trekking, hiking, and wildlife spotting. The region is home to several national parks and wildlife sanctuaries, such as Jim Corbett National Park and Nanda Devi National Park, where visitors can catch glimpses of elusive wildlife species, including the Bengal tiger, leopards, and Himalayan black bears.Whether you're seeking a peaceful retreat amidst nature's bounty, an adrenaline-pumping adventure in the wilderness, or simply a respite from the sweltering heat of the plains, Kumaon has something to offer for every traveler. With its enchanting landscapes, rich biodiversity, and serene ambiance, Kumaon truly captures the essence of the Himalayan experience and remains a cherished destination for visitors seeking solace and serenity amidst the mountains." 
    },
  ];

  const handleReadMore = (index) => {
    setSelectedBlogIndex(index);
  };

  const handleBack = () => {
    setSelectedBlogIndex(null);
  };

  return (
    <div className="tour-page">
      <h3 id="title-blog">Blogs</h3>
      {selectedBlogIndex === null ? (
        <div className="grid-container">
          {blogs.map((blog, index) => (
            <div className="grid-item" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button onClick={() => handleReadMore(index)}>Read More...</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-content">
          <h3>{blogs[selectedBlogIndex].title}</h3>
          <p>{blogs[selectedBlogIndex].content}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
