// Centralized portfolio image imports for production reliability
// This replaces import.meta.glob() which fails in Netlify builds

// Bathroom Grand Highland
import bathroom1 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0089.JPG';
import bathroom2 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0090.JPG';
import bathroom3 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0091.JPG';
import bathroom4 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0092.JPG';
import bathroom5 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0093.JPG';
import bathroom6 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0094.JPG';
import bathroom7 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0095.JPG';
import bathroom8 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0096.JPG';
import bathroom9 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0097.JPG';
import bathroom10 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0098.JPG';
import bathroom11 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0099.JPG';
import bathroom12 from '../assets/Portfolio/Bathroom_GrandHighland/IMG_0100.JPG';

// Full Home Robina
import robina1 from '../assets/Portfolio/FullHome_Robina/1(a).jpg';
import robina2 from '../assets/Portfolio/FullHome_Robina/2 (1).jpg';
import robina3 from '../assets/Portfolio/FullHome_Robina/3 (1).jpg';
import robina4 from '../assets/Portfolio/FullHome_Robina/5 (1).jpg';
import robina5 from '../assets/Portfolio/FullHome_Robina/7.jpg';
import robina6 from '../assets/Portfolio/FullHome_Robina/8.jpg';
import robina7 from '../assets/Portfolio/FullHome_Robina/9.jpg';
import robina8 from '../assets/Portfolio/FullHome_Robina/10.jpg';
import robina9 from '../assets/Portfolio/FullHome_Robina/11.jpg';
import robina10 from '../assets/Portfolio/FullHome_Robina/12.jpg';
import robina11 from '../assets/Portfolio/FullHome_Robina/15.jpg';
import robina12 from '../assets/Portfolio/FullHome_Robina/17.jpg';
import robina13 from '../assets/Portfolio/FullHome_Robina/20.jpg';
import robina14 from '../assets/Portfolio/FullHome_Robina/21.jpg';
import robina15 from '../assets/Portfolio/FullHome_Robina/23.jpg';
import robina16 from '../assets/Portfolio/FullHome_Robina/28.jpg';
import robina17 from '../assets/Portfolio/FullHome_Robina/29.jpg';
import robina18 from '../assets/Portfolio/FullHome_Robina/30.jpg';
import robina19 from '../assets/Portfolio/FullHome_Robina/33.jpg';
import robina20 from '../assets/Portfolio/FullHome_Robina/37.jpg';
import robina21 from '../assets/Portfolio/FullHome_Robina/39.jpg';
import robina22 from '../assets/Portfolio/FullHome_Robina/43 (a).jpg';

// Kitchen Burning Oak
import burningoak1 from '../assets/Portfolio/Kitchen_BurningOak/IMG_6736.jpg';
import burningoak2 from '../assets/Portfolio/Kitchen_BurningOak/IMG_6738.jpg';

// Kitchen Dan Leckie
import danleckie1 from '../assets/Portfolio/Kitchen_DanLekcie/IMG_9931.JPG';
import danleckie2 from '../assets/Portfolio/Kitchen_DanLekcie/IMG_9932.JPG';
import danleckie3 from '../assets/Portfolio/Kitchen_DanLekcie/IMG_9934.JPG';
import danleckie4 from '../assets/Portfolio/Kitchen_DanLekcie/IMG_9936.JPG';

// Media Wall Thorold
import thorold1 from '../assets/Portfolio/MediaWall_Thorold/IMG_0149.jpg';
import thorold2 from '../assets/Portfolio/MediaWall_Thorold/IMG_0154.jpg';
import thorold3 from '../assets/Portfolio/MediaWall_Thorold/IMG_0155.jpg';
import thorold4 from '../assets/Portfolio/MediaWall_Thorold/IMG_0156.jpg';
import thorold5 from '../assets/Portfolio/MediaWall_Thorold/IMG_0157.jpg';

// Image map by path for easy lookup
export const portfolioImageMap: Record<string, any> = {
  // Bathroom Grand Highland
  'Portfolio/Bathroom_GrandHighland/IMG_0089.JPG': bathroom1,
  'Portfolio/Bathroom_GrandHighland/IMG_0090.JPG': bathroom2,
  'Portfolio/Bathroom_GrandHighland/IMG_0091.JPG': bathroom3,
  'Portfolio/Bathroom_GrandHighland/IMG_0092.JPG': bathroom4,
  'Portfolio/Bathroom_GrandHighland/IMG_0093.JPG': bathroom5,
  'Portfolio/Bathroom_GrandHighland/IMG_0094.JPG': bathroom6,
  'Portfolio/Bathroom_GrandHighland/IMG_0095.JPG': bathroom7,
  'Portfolio/Bathroom_GrandHighland/IMG_0096.JPG': bathroom8,
  'Portfolio/Bathroom_GrandHighland/IMG_0097.JPG': bathroom9,
  'Portfolio/Bathroom_GrandHighland/IMG_0098.JPG': bathroom10,
  'Portfolio/Bathroom_GrandHighland/IMG_0099.JPG': bathroom11,
  'Portfolio/Bathroom_GrandHighland/IMG_0100.JPG': bathroom12,

  // Full Home Robina
  'Portfolio/FullHome_Robina/1(a).jpg': robina1,
  'Portfolio/FullHome_Robina/2 (1).jpg': robina2,
  'Portfolio/FullHome_Robina/3 (1).jpg': robina3,
  'Portfolio/FullHome_Robina/5 (1).jpg': robina4,
  'Portfolio/FullHome_Robina/7.jpg': robina5,
  'Portfolio/FullHome_Robina/8.jpg': robina6,
  'Portfolio/FullHome_Robina/9.jpg': robina7,
  'Portfolio/FullHome_Robina/10.jpg': robina8,
  'Portfolio/FullHome_Robina/11.jpg': robina9,
  'Portfolio/FullHome_Robina/12.jpg': robina10,
  'Portfolio/FullHome_Robina/15.jpg': robina11,
  'Portfolio/FullHome_Robina/17.jpg': robina12,
  'Portfolio/FullHome_Robina/20.jpg': robina13,
  'Portfolio/FullHome_Robina/21.jpg': robina14,
  'Portfolio/FullHome_Robina/23.jpg': robina15,
  'Portfolio/FullHome_Robina/28.jpg': robina16,
  'Portfolio/FullHome_Robina/29.jpg': robina17,
  'Portfolio/FullHome_Robina/30.jpg': robina18,
  'Portfolio/FullHome_Robina/33.jpg': robina19,
  'Portfolio/FullHome_Robina/37.jpg': robina20,
  'Portfolio/FullHome_Robina/39.jpg': robina21,
  'Portfolio/FullHome_Robina/43 (a).jpg': robina22,

  // Kitchen Burning Oak
  'Portfolio/Kitchen_BurningOak/IMG_6736.jpg': burningoak1,
  'Portfolio/Kitchen_BurningOak/IMG_6738.jpg': burningoak2,

  // Kitchen Dan Leckie
  'Portfolio/Kitchen_DanLekcie/IMG_9931.JPG': danleckie1,
  'Portfolio/Kitchen_DanLekcie/IMG_9932.JPG': danleckie2,
  'Portfolio/Kitchen_DanLekcie/IMG_9934.JPG': danleckie3,
  'Portfolio/Kitchen_DanLekcie/IMG_9936.JPG': danleckie4,

  // Media Wall Thorold
  'Portfolio/MediaWall_Thorold/IMG_0149.jpg': thorold1,
  'Portfolio/MediaWall_Thorold/IMG_0154.jpg': thorold2,
  'Portfolio/MediaWall_Thorold/IMG_0155.jpg': thorold3,
  'Portfolio/MediaWall_Thorold/IMG_0156.jpg': thorold4,
  'Portfolio/MediaWall_Thorold/IMG_0157.jpg': thorold5,
};

// Featured images by project slug (for portfolio index)
export const featuredImages: Record<string, any> = {
  'bathroom-grand-highland': bathroom1,
  'fullhome-robina': robina1,
  'kitchen-burning-oak': burningoak1,
  'kitchen-dan-leckie': danleckie1,
  'mediawall-thorold': thorold1,
};
