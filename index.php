<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Afshan Alam - Software Developer</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>

<!-- Body Section Starts -->
<body>
  <!-- Header Section -->
  <header class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark container">
      <a class="navbar-brand" href="#">Afshan Alam</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="text-center text-white text-strong d-flex align-items-center" style="background: url('hero-bg.jpg') no-repeat center center/cover; height: 100vh;">
    <div class="container">
      <h1 class="typewriter" id="hero-text"></h1>
      <h2>Software Developer</h2>
      <p>I love to build application to simplify life.</p>
      <a href="#projects" class="btn btn-primary">View My Work</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="bg-dark text-white py-5" 
  style="background: url('about-bg.jpg') no-repeat center center/cover"  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 text-center">
          <img src="profile.jpg" alt="Alex Doe" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-8">
          <h2>About Me</h2>
          <p>I'm a full-stack developer with over 5 years of experience in creating innovative web applications...</p>
          <a href="resume.pdf" class="btn btn-primary">Download Resume</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center">Skills</h2>
      <div class="row text-center">
        <div class="col-md-3"><div class="p-4 bg-white shadow rounded">HTML</div></div>
        <div class="col-md-3"><div class="p-4 bg-white shadow rounded">CSS</div></div>
        <div class="col-md-3"><div class="p-4 bg-white shadow rounded">JavaScript</div></div>
        <div class="col-md-3"><div class="p-4 bg-white shadow rounded">React</div></div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="container py-5"
  style="background: url('project-bg.jpg') no-repeat center center/cover" >
    <h2 class="text-center">Projects</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4 shadow-sm">
          <img src="project1.png" class="card-img-top" alt="Project 1">
          <div class="card-body">
            <h3 class="card-title">Portfolio Website</h3>
            <p class="card-text">A responsive portfolio website built with React and styled-components.</p>
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-secondary">Source Code</a>
          </div>
        </div>
      </div>
      <!-- Add more project cards here -->
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="bg-light py-5 text-center">
    <div class="container">
      <h2>Testimonials</h2>
      <div class="testimonial p-4 bg-white shadow rounded">
        <p>"Afshan's expertise in full-stack development transformed our project..."</p>
        <p>- Client Name</p>
      </div>
      <!-- Add more testimonials here -->
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="container py-5" 
  style="background: url('contact-bg.jpg') no-repeat center center/cover;" >
    <h2 class="text-center">Contact Me</h2>
    <form action="submit_form.php" method="POST" class="w-50 mx-auto">
      <div class="form-group">
        <input type="text" name="name" class="form-control" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <input type="email" name="email" class="form-control" placeholder="Your Email" required>
      </div>
      <div class="form-group">
        <textarea name="message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Send Message</button>
    </form>
    <div class="contact-info text-center mt-4">
      <p>Email: afshanalamengg@gmail.com</p>
      <p><a href="https://linkedin.com/in/afshan-alam" target="_blank">Linked</a></p>
      <p><a href="https://github.com/AfshanAlamEngg" target="_blank">Github</a></p>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-dark text-white text-center py-3">
    <p>© 2024 Afshan Alam. All rights reserved.</p>
    <div class="social-media">
      <a href="https://linkedin.com/in/afshan-alam" target="_blank" class="text-white mx-2">LinkedIn</a>
      <a href="https://github.com/AfshanAlamEngg" target="_blank" class="text-white mx-2">GitHub</a>
      <!-- <a href="#" class="text-white mx-2">Twitter</a> -->
    </div>
  </footer>

  <!-- External Javascripts Section -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</body>

  <!-- Body Section Ends -->
</html>
