import './App.css';


function App() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pet Adoption USM</title>
    {/*- link to css -*/}
    <link rel="stylesheet" href="css/style.css" />
    {/*- box icons -*/}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
    <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-image: url(meow.png);\n        }\n    " }} />
    {/*- navbar -*/}
    <header>
      <div className="nav container">
        {/*- logo -*/}
        <a href="index.html" className="logo"><i className="bx bx-home" />PAWS CENTER</a>
        {/*- menu bar -*/}
        <input type="checkbox" name id="menu" />
        <label for="menu">
 <i class="bx bx-menu" id="menu-icon"></i>
</label>
        {/*- nav list -*/}
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#inform">Information</a></li>
          <li><a href="#adopt">Adoption</a></li>
        </ul>
        {/*- log in button -*/}
        <a href="login.html" className="btn">Log In</a>
      </div>
    </header>
    {/*- home -*/}
    <section className="home container" id="home">
      <div className="home-text">
        <h1>
          Find your pet friend <br /> Perfect Pet for your <br /> live.
        </h1>
        <a href="sign-up.html" className="btn">Sign Up</a>
      </div>
    </section>
    {/*--About section -*/}
    <section className="about container" id="about">
      <div className="about-img">
        <video controls src="img/video.mp4" width="500" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>We provide the best pets for you!</h2>
        <p>Pet Adoption Website is Malaysia animal adoption portal. we bringing together dogs , cats,and other animals available to adopt from rescues across Malaysia.</p>
        <p>We will give the best and healty pet for you.</p>
      </div>
    </section>

    {/* New Team Members Section */}
      <section className="team-members-container">
          {/* Team Member 1 */}
          <div className="team-member">
            <img src="img/ain.jpg" alt="Team Member 1" />
            <h3>AIN NABIHAH BINTI MAHAMAD CHAH PARI</h3>
            <p>Chief Marketing Officer (CMO)</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img src="img/hayfa.jpg" alt="Team Member 2" />
            <h3>ALEEYA HAYFA BINTI OSMAN</h3>
            <p>Chief Operating Officer (COO)</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <img src="img/tur.jpg" alt="Team Member 3" />
            <h3>AINUL MARDHIAH BINTI ABDUL MUTALIP</h3>
            <p>Chief Technology Officer (CTO)</p>
          </div>
        
            {/* Team Member 4 */}
          <div className="team-member">
            <img src="img/ilya.jpg" alt="Team Member 3" />
            <h3>WAN ILYA TASNIM BINTI WAN ALI</h3>
            <p>Chief Financial Officer (CFO)</p>
          </div>

           {/* Team Member 5 */}
           <div className="team-member">
            <img src="img/wan.jpg" alt="Team Member 3" />
            <h3>WAN NURMAISARAH BINTI WAN MUSLIM</h3>
            <p>Chief Executive Officer (CEO)</p>
          </div>
        </section>

    {/* information section */}
    <section className="inform container" id="inform">
      {/*-box 1-*/}
    
      {/*-box 2-*/}
      <div className="box">
        <i className="bx bxs-dog" />
        <h3>VISION</h3>
            <p>Our vision at Paws Center is to be a beacon of hope for animals in need and a trusted resource for individuals seeking to enrich their lives through pet adoption.</p>
            <p>Every pet is treated with dignity, where no animal is left behind, and where the joy of companionship extends to every household.</p>
            <p>Our vision is to create a lasting impact, one adoption at a time, and to inspire others to join us in building a more compassionate and humane society</p>
      </div>
      {/*-box 3-*/}
      <div className="box">
        <i className="bx bx-home-heart" />
        <h3>MISSION</h3>
            <p>At Paws Center, our mission is to create loving connections between animals in need and compassionate individuals or families seeking lifelong companionship. </p>
            <p>We are dedicated to providing a safe, caring environment for abandoned or homeless pets, working tirelessly to match each animal with a loving home. </p>
            <p> Through our passion and dedication, we aim to build a community where every pet finds a forever home filled with love and care.</p>
      </div>
    </section>
    {/*Our adopt*/}
    <section className="adopt container" id="adopt">
      <div className="heading">
        <span>We need You</span>
        <h2>MEOW WOOF</h2>
        <p> find you pets</p>
      </div>
      <div className="adopt-cont container">
        {/*box Dog*/}
        <div className="box">
          <img src="img/dog.jpg" alt="" />
          <h3>KAREN</h3>
          <div className="content">
            <div className="text">
              <h3>BullDog , Male</h3>
              <p>DOG</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 2 months </span></i>
            </div>
          </div>
        </div>
        {/*box Cat*/}
        <div className="box">
          <img src="img/cat.jpg" alt="" />
          <h3>OYEN AND CITAM</h3>
          <div className="content">
            <div className="text">
              <h3>ShortHair , Female</h3>
              <p>CAT</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 5 months </span></i>
            </div>
          </div>
        </div>
        {/*box Bird*/}
        <div className="box">
          <img src="img/bird.jpg" alt="" />
          <h3>PEEKOK</h3>
          <div className="content">
            <div className="text">
              <h3>Ostrich , Female</h3>
              <p>BIRD</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 1 year </span></i>
            </div>
          </div>
        </div>
        {/*box Hamster*/}
        <div className="box">
          <img src="img/hams.jpg" alt="" />
          <h3>PEACH</h3>
          <div className="content">
            <div className="text">
              <h3>Syrian , Male</h3>
              <p>Hamster</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 2 year 1 months </span></i>
            </div>
          </div>
        </div>
        {/*box Rabbit*/}
        <div className="box">
          <img src="img/rab.jpg" alt="" />
          <h3>CARROT</h3>
          <div className="content">
            <div className="text">
              <h3>Dutch , Male</h3>
              <p>RABBIT</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 5 months </span></i>
            </div>
          </div>
        </div>
        {/*box Tortoise*/}
        <div className="box">
          <img src="img/tur.jpg" alt="" />
          <h3>TATA</h3>
          <div className="content">
            <div className="text">
              <h3>Musk , Unknown</h3>
              <p>TORTOISE</p>
            </div>
            <div className="icon">
              <i className="bx bx-calendar-heart"><span> 5 years </span></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*- email -*/}
    <section className="email container">
      <h2>Have Question in Mind? <br /> Let Us Help you</h2>
      <form action>
        <input type="email" name id="email-box" placeholder="yourmail@gmail.com" required />
        <input type="submit" defaultValue="send" className="btn" />
      </form>
    </section>
    {/*-footer -*/}
    <section className="footer">
      <div className="footer-container container">
        <h2>PAWS CENTER</h2>
        <div class="footer-box">
                <h3>Location</h3>
                <a href="#">School of Computer Science</a>
                <a href="#">University Sains Malaysia</a>
                <a href="#">11800, penang, Malaysia</a>
        </div>
        <div className="footer-box">
          <h3>CONTACT </h3>
          <a href="#">+60 3-12345678</a>
          <a href="#">(pawscentera@gmail.com)</a>
          <div className="social">
            <a href="#"><i className="bx bxl-facebook" /></a>
            <a href="#"><i className="bx bxl-twitter" /></a>
            <a href="#"><i className="bx bxl-instagram" /></a>
          </div>
        </div>
      </div>
    </section>
    {/*- coppyright -*/}
    <div className="copyright">
      <p>© USM CS student All Right Reserved</p>
    </div>
  </div>
  
  );
}

export default App;
