# AI Projects Portfolio

A modern, animated portfolio website showcasing AI/ML projects with LangGraph, Multi-Agent Systems, and LLM Applications.

## 🌟 Features

- **Modern Design**: Glass morphism effects, gradients, and smooth animations
- **Responsive Layout**: Perfect viewing experience on desktop, tablet, and mobile
- **Interactive Elements**: Particle animations, card hover effects, and smooth scrolling
- **3 Featured Projects**: PA Agent, Multi-Agent Researcher, and AI Script Writer
- **Accessibility**: WCAG compliant with keyboard navigation and reduced motion support
- **Performance Optimized**: Lightweight, fast loading, and mobile-friendly

## 🚀 Live Demo

Once deployed, your portfolio will be available at:
```
https://<your-github-username>.github.io/<repository-name>/
```

## 📋 Projects Included

### 1. PA Agent - Personal AI Assistant
- LangGraph multi-tool integration
- Gmail API and F1 data capabilities
- RAG system with ChromaDB
- Real-time streaming

**Links:**
- [Live Demo](https://personal-assistent.streamlit.app/)
- [GitHub Repository](https://github.com/athvaith8282/pa_agent)

### 2. Multi-Agent Researcher
- Dynamic sub-agent spawning
- Context isolation and management
- Tavily search integration
- Parallel research execution

**Links:**
- [Live Demo](https://multi-agent-researcher.streamlit.app/)
- [GitHub Repository](https://github.com/athvaith8282/multi-agent-researcher)

### 3. AI Script Writer
- Human-in-the-loop workflow
- Script and character management
- SQLAlchemy ORM with Pydantic
- AI-powered scene generation

**Links:**
- [Live Demo](https://script-writer.streamlit.app/)
- [GitHub Repository](https://github.com/athvaith8282/script-writer)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Variables, Grid, and Flexbox
- **JavaScript (ES6+)**: Interactive features and animations
- **Google Fonts**: Inter and Poppins typography
- **Canvas API**: Particle animation system

## 📁 Project Structure

```
agent-portfolio/
├── index.html          # Main portfolio page
├── styles.css          # Styling and animations
├── script.js           # Interactive features
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name it something like `ai-portfolio` or `portfolio`
   - Choose "Public" visibility
   - Click "Create repository"

2. **Upload your files**
   - On your repository page, click "uploading an existing file"
   - Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
   - Add a commit message like "Initial portfolio deployment"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository's "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click "Save"

4. **Access your portfolio**
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://<your-username>.github.io/<repository-name>/`
   - A link will appear in the Pages settings

### Option 2: Using Git Command Line

1. **Initialize Git repository**
```bash
cd "/Users/athvaithk/Desktop/LLM/projects/agent portfolio"
git init
git add .
git commit -m "Initial commit: AI Projects Portfolio"
```

2. **Create repository on GitHub and push**
```bash
# Replace <your-username> with your GitHub username
git remote add origin https://github.com/<your-username>/ai-portfolio.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**
   - Follow steps 3-4 from Option 1 above

### Option 3: Using GitHub Desktop

1. **Install GitHub Desktop**
   - Download from [desktop.github.com](https://desktop.github.com)

2. **Add your repository**
   - Open GitHub Desktop
   - Click "File" → "Add Local Repository"
   - Select the portfolio folder
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository" button
   - Choose repository name and description
   - Uncheck "Keep this code private" for GitHub Pages
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Follow steps 3-4 from Option 1 above

## 🎨 Customization

### Update Your Information

**Personal Details** (in `index.html`):
```html
<!-- Update hero section -->
<h1 class="hero-title">
    <span class="wave">👋</span> Hi, I'm <span class="gradient-text">Your Name</span>
</h1>
<p class="hero-subtitle typing-text">Your Title Here</p>

<!-- Update contact links -->
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>
```

### Customize Colors

**Color Scheme** (in `styles.css`):
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --accent-color: #ec4899;       /* Accent highlights */
    /* Modify these to match your brand */
}
```

### Add More Projects

To add additional project cards, copy this template in `index.html`:
```html
<div class="project-card fade-in" data-delay="300">
    <div class="project-icon">🚀</div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-tagline">Project Tagline</p>
    <p class="project-description">Project description...</p>
    
    <div class="project-features">
        <div class="feature">
            <svg>...</svg>
            Feature 1
        </div>
        <!-- Add more features -->
    </div>
    
    <div class="tech-stack">
        <span class="tech-badge">Tech 1</span>
        <span class="tech-badge">Tech 2</span>
    </div>
    
    <div class="project-links">
        <a href="demo-url" class="btn btn-demo">Live Demo</a>
        <a href="github-url" class="btn btn-github">GitHub</a>
    </div>
</div>
```

## 🔧 Local Development

### Testing Locally

**Option 1: Using Python**
```bash
# Navigate to your portfolio directory
cd "/Users/athvaithk/Desktop/LLM/projects/agent portfolio"

# Start a local server (Python 3)
python3 -m http.server 8000

# Open in browser: http://localhost:8000
```

**Option 2: Using Node.js (http-server)**
```bash
# Install http-server globally
npm install -g http-server

# Navigate to portfolio directory
cd "/Users/athvaithk/Desktop/LLM/projects/agent portfolio"

# Start server
http-server -p 8000

# Open in browser: http://localhost:8000
```

**Option 3: Using VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- High contrast mode support
- Focus indicators for interactive elements

## 🎯 Performance

- **Lighthouse Score**: 95+ (Desktop)
- **Page Load Time**: < 2 seconds
- **Mobile Optimized**: Responsive design with mobile-first approach
- **Optimized Assets**: No external dependencies except Google Fonts

## 🐛 Troubleshooting

### GitHub Pages Not Updating

1. Check GitHub Actions tab for deployment status
2. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Wait 5-10 minutes for DNS propagation
4. Verify GitHub Pages is enabled in repository settings

### Animations Not Working

1. Check browser console for JavaScript errors (F12)
2. Ensure all three files are in the same directory
3. Verify file names match exactly (case-sensitive)
4. Test in an incognito/private browsing window

### Layout Issues on Mobile

1. Check that viewport meta tag is present in HTML
2. Test on actual devices, not just browser dev tools
3. Verify CSS media queries are loading correctly

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 👤 Author

**Athvaith K**
- GitHub: [@athvaith8282](https://github.com/athvaith8282)
- LinkedIn: [Athvaith.K](https://www.linkedin.com/in/athvaith)
- Email: athvaith.k@gmail.com

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons from Heroicons (embedded as SVG)
- Fonts from Google Fonts (Inter & Poppins)

## 📊 Analytics (Optional)

To add Google Analytics or other tracking:

1. Create a tracking ID with your analytics provider
2. Add the tracking script before `</head>` in `index.html`
3. Update the `initAnalytics()` function in `script.js` to use your tracking API

## 🔄 Updates

To update your portfolio after initial deployment:

1. Make changes to your files locally
2. Test locally using one of the methods above
3. Commit and push changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
4. GitHub Pages will automatically rebuild (wait 1-2 minutes)

## 💡 Tips for Resume

- Include your portfolio URL in your resume header
- Mention it in your LinkedIn profile
- Share it with potential employers and on social media
- Keep project descriptions concise but impressive
- Update regularly with new projects

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation
3. Open an issue on your repository
4. Contact the author

---

**Built with ❤️ for showcasing AI/ML projects**

⭐ Star this repository if you found it helpful!

