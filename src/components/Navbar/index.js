import './index.css'

const Navbar = () => (
    <nav>
      <div class="menu-icon">
        <img class="image" src="images/MEDEXOS.png" alt="logo" />
      </div>
      <div class="search-box">
        <form action="search.php" method="get">
            <input type="text" name="search" maxlength="60" placeholder="Search-Keywords/Phrases" />
        </form>
      </div>
      <div class="navbar">
        <ul id="nav">
          <a href="/"><li>Home</li></a>
          <a href="/"><li>Doctors</li></a>
          <a href="/"><li>Services</li></a>
          <a href="/"><li>Blogs</li></a>
          <li><button class="btn">Create Your Account</button></li>
        </ul>
      </div>        
    </nav>
)

export default Navbar
