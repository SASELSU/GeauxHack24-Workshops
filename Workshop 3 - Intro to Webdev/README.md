
---

# Intro to Web Development Workshop

Welcome to the **Intro to Web Development Workshop**! In this session, we’ll cover the basics of HTML, CSS, and JavaScript, providing you with the skills to build a simple, interactive profile card as a mini-project. This `README` summarizes the main points and code examples for each section.

---

## 1. Introduction to Web Development

Web development is the process of creating and maintaining websites, split into **front-end** (client-side) and **back-end** (server-side) development. We’ll focus on front-end development, which includes:

- **HTML**: Defines the structure of web pages.
- **CSS**: Styles the appearance of web pages.
- **JavaScript**: Adds interactivity and functionality to web pages.

**How the Web Works**:
- **Client-Server Model**: Clients (browsers) request content from servers, which send HTML, CSS, and JavaScript files to be rendered by the browser.
- **Request-Response Cycle**: Understanding this process helps in developing web applications effectively.

---

## 2. HTML: Structuring the Web

HTML (HyperText Markup Language) is the foundation of web structure, using tags to define elements on a page.

### Basic Syntax
- **Tags**: Elements like `<p>`, `<a>`, `<img>`, `<ul>`, `<h1>`, and `<div>` create content and structure.
- **Attributes**: Provide additional information to elements (e.g., `src` for images, `href` for links).

### Example Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Bio Page</title>
</head>
<body>
  <h1>Welcome to My Bio Page</h1>
  <section>
    <h2>About Me</h2>
    <p>Hello! My name is Alex, and I'm learning web development.</p>
  </section>
</body>
</html>
```

---

## 3. CSS: Styling the Web

CSS (Cascading Style Sheets) styles HTML content by defining colors, fonts, layouts, and spacing.

### Adding CSS
- **Inline CSS**: Directly within an HTML tag (`<p style="color: blue;">`).
- **Internal CSS**: Inside a `<style>` tag in the `<head>`.
- **External CSS**: In a separate file (best practice).

### Example
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
h1 {
  color: darkblue;
}
```

### Box Model
- **Content**: The text or images inside an element.
- **Padding**: Space between content and border.
- **Border**: Outlines the padding.
- **Margin**: Space outside the border separating elements.

---

## 4. JavaScript: Adding Interactivity

JavaScript enables interactivity on web pages by allowing you to respond to user actions and manipulate HTML content dynamically.

### JavaScript Basics
- **Variables**: Store data (`let name = "Alex";`).
- **Functions**: Reusable blocks of code (`function greet() { alert("Hello"); }`).
- **Events**: User actions like clicks (`addEventListener("click", function)`).

### DOM Manipulation
- **Selecting Elements**: `document.getElementById("example")`
- **Changing Content**: `element.textContent = "New Text"`
- **Creating Elements**: `document.createElement("p")`

### Example
```javascript
document.getElementById("button").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## Mini-Project: Building a Simple Profile Card

In this project, we’ll combine HTML, CSS, and JavaScript to create an interactive profile card.

### HTML Structure
```html
<div class="profile-card">
  <img src="profile-photo.jpg" alt="Profile Photo">
  <h2>Alex Johnson</h2>
  <p>Web Developer</p>
  <button id="toggle-info-btn">Show More</button>
  <div id="extra-info" style="display: none;">
    <p>Additional Info Here</p>
  </div>
</div>
```

### CSS Styling
```css
.profile-card {
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### JavaScript Interactivity
```javascript
const toggleButton = document.getElementById("toggle-info-btn");
const extraInfo = document.getElementById("extra-info");

toggleButton.addEventListener("click", function() {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    toggleButton.textContent = "Show Less";
  } else {
    extraInfo.style.display = "none";
    toggleButton.textContent = "Show More";
  }
});
```
---
## Additional Resources for Further Learning

Here are some recommended resources to help you dive deeper into HTML, CSS, JavaScript, and APIs for integrating data into your web projects.

### HTML, CSS, and JavaScript Basics
- **[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)**: Comprehensive tutorials and references on HTML, CSS, JavaScript, and web development fundamentals.
- **[FreeCodeCamp](https://www.freecodecamp.org/learn)**: Free online courses with interactive coding exercises on web development, JavaScript, and more.
- **[W3Schools](https://www.w3schools.com/)**: Beginner-friendly tutorials and examples on web technologies including HTML, CSS, and JavaScript.

### Learning APIs and Data Integration
- **[MDN Web Docs: Using APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)**: A beginner’s guide to using and integrating APIs into web applications with JavaScript.
- **[RapidAPI](https://rapidapi.com/)**: A hub for discovering and connecting to APIs, with tutorials and examples on how to use popular APIs.
- **[Postman Learning Center](https://learning.postman.com/)**: Resources for using Postman to test and interact with APIs, including tutorials for beginners on HTTP requests and APIs.
- **[RESTful API Tutorial](https://restfulapi.net/)**: A guide to understanding RESTful API concepts, principles, and usage for integrating with various web services.

### Advanced Web Development Topics
- **[JavaScript.info](https://javascript.info/)**: In-depth tutorials on JavaScript and advanced front-end topics, ideal for building a strong foundation in JavaScript.
- **[CSS-Tricks](https://css-tricks.com/)**: Tips, tricks, and tutorials on CSS and front-end development, including layout, animations, and responsive design.
- **[Frontend Masters](https://frontendmasters.com/)**: Premium courses covering web development, including advanced JavaScript, front-end frameworks, and API integration.

---

## Final Notes

This workshop introduces core web development skills, guiding you to create and style HTML documents, apply CSS for design, and use JavaScript for interactivity. By the end, you’ll have a working, interactive profile card as a foundation for future projects!

Happy coding! 🎉

---