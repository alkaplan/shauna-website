# Shauna Holiman Portfolio Website

A beautiful, modern portfolio website showcasing art, music, and creative projects.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The website will open at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

## Adding Your Content

### Adding Images to Galleries

1. **Place your images** in the `src/assets/images/` folder
2. **Update the image arrays** in the respective page files:
   - Recent Art Work: `src/pages/RecentArtWork.js`
   - Collaborations: `src/pages/Collaborations.js`
   - Older Paintings: `src/pages/OlderPaintings.js`
   - Stained Glass: `src/pages/StainedGlass.js`

**Example:** To add images to Recent Art Work:
```javascript
const sampleImages = [
  {
    src: '/assets/images/your-artwork-1.jpg',
    alt: 'Description of artwork',
    caption: 'Optional caption for the artwork'
  },
  {
    src: '/assets/images/your-artwork-2.jpg',
    alt: 'Description of second artwork',
    caption: 'Another caption'
  }
];
```

### Adding Music Content

1. **Upload audio files** to `src/assets/audio/`
2. **Upload documents** to `src/assets/documents/`
3. **Create dedicated pages** for Bijou and New Growth collections
4. **Add audio players** and document links as needed

### Updating Contact Information

Edit `src/pages/AboutContact.js` to add:
- Your email address
- Phone number
- Location
- Social media links
- Any additional contact information

### Replacing Photos in About Section

1. **Add your photos** to `src/assets/images/`
2. **Update the image sources** in `src/pages/AboutContact.js`:
   - Replace the Rijksmuseum photo placeholder
   - Replace the still life artwork placeholder

## Website Structure

The website follows this navigation structure:

```
Home
├── Art Galleries
│   ├── Recent Art Work (Miniatures, Others)
│   ├── Collaborations (Santoleri Mural, Piano As Art)
│   ├── Older Paintings (Paintings, Portraits)
│   └── Stained Glass
├── Music Galleries
│   ├── Bijou (3 documents, 3 MP3s)
│   ├── New Growth (1 document, 4 audio pieces)
│   └── Future Collections
├── Other Projects
│   ├── Neil's Bar (1 film)
│   ├── Fun in the Kitchen (Flip-books, Recipes)
│   ├── French Project (Flip-books)
│   └── Future Projects
└── About/Contact
    ├── Photo story
    ├── Still life artwork
    └── Contact information
```

## Design Features

- **Black header** with elegant navigation
- **Dark theme** with sophisticated color palette
- **Snell Roundhand font** for the main title
- **Optima font** for navigation and body text
- **Responsive design** that works on all devices
- **Gallery layouts** with navigation arrows
- **Sidebar navigation** for easy browsing

## File Organization

```
src/
├── components/
│   ├── Header.js           # Main navigation header
│   ├── GalleryLayout.js    # Reusable gallery layout
│   └── ImageGallery.js     # Image display with navigation
├── pages/
│   ├── Home.js             # Homepage
│   ├── ArtGalleries.js     # Art galleries hub
│   ├── RecentArtWork.js    # Recent artwork page
│   ├── Collaborations.js   # Collaborative works
│   ├── OlderPaintings.js   # Older paintings
│   ├── StainedGlass.js     # Stained glass works
│   ├── MusicGalleries.js   # Music hub
│   ├── OtherProjects.js    # Other projects hub
│   └── AboutContact.js     # About and contact page
├── assets/
│   ├── images/             # Place your artwork images here
│   ├── audio/              # Place your music files here
│   └── documents/          # Place PDFs and documents here
├── App.js                  # Main application component
└── App.css                 # Main stylesheet
```

## Customization Tips

### Changing Colors
Edit the CSS variables in `src/App.css`:
- Background: `#333333`
- Header: `#000000` 
- Sidebar: `#4a4a4a`

### Adding New Gallery Sections
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.js`
3. Update navigation links in relevant components

### Adding Interactive Features
- Audio players for music sections
- Video players for project documentation
- Image zoom functionality
- Contact forms

## Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/shauna-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

## Support

For technical questions or updates, refer to:
- React documentation: [https://reactjs.org/](https://reactjs.org/)
- React Router: [https://reactrouter.com/](https://reactrouter.com/)

## License

This portfolio website is created specifically for Shauna Holiman's artistic work.
