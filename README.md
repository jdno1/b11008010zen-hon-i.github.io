<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Portfolio</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<body>
  <nav>
    <div class="container">
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section id="home">
    <div class="container">
      <img src="attached_assets/IMG_4760.jpg" alt="Profile Photo" class="profile-photo">
      <div>
        <h2>Hello, I am <span class="highlight">Jian Hongyi</span></h2>
        <p>Data Analyst / Project Manager</p>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <p>Hello, my name is Jian Hongyi. I am currently a junior at National Taiwan University of Science and Technology,
        majoring in Business Administration. I am expected to graduate in 2025. I am deeply interested in data analysis,
        operations, and marketing, and I have extensive practical experience.</p>

      <div class="skills">
        <h3>Skills</h3>
        <div class="skill">Python</div>
        <div class="skill">Excel</div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <h2>Projects</h2>
      <div class="project-grid">
        <div class="project">
          <img src="https://via.placeholder.com/300" alt="Project 1">
          <h3>Project 1</h3>
          <p>Project description</p>
        </div>
        <div class="project">
          <img src="https://via.placeholder.com/300" alt="Project 2">
          <h3>Project 2</h3>
          <p>Project description</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2>Contact</h2>
      <ul>
        <li>Phone: 0934427905</li>
        <li>Email: <a href="mailto:eason123520@gmail.com">eason123520@gmail.com</a></li>
      </ul>
      <div class="social-links">
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </section>

  <script src="script.js"></script>
</body>

</html>
