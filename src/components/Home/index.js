import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <>
    <Navbar />
    <div>
        <div class="Image">
            <img class="phone" src="images/phone.png" alt="phone" />
        </div>
        <div class="Body">
            <p class="heading">YOUR FAVOURITE CLINIC ON YOUR PHONE</p>
        </div>
        <div class="para">
            <p class="body">Search hospitals in your location<br />Find availability of Doctors,Oxygen Beds and other necessary facilities<br />Send requests to your hospitals according to your requirements<br />Save time, money and avoid standing in queues. </p>
        </div>
        <div class="Button">
            <button class="email">Email Address</button>
            <button class="password">Password</button>
            <button class="login">Login</button>
        </div>
        <div class="Image2">
            <img src="images/mahila.png" alt="doctor" />
        </div>
        <div class="location">
            <form action="search.php" method="get">
                <input class="locbt" type="text" name="search" maxlength="60" placeholder="Search for your location or hospital" />
            </form>
            <button class="searchloc">Search Location</button>
        </div>

        <div class="paragraph">
            <p>SEE THE AVAILABILITY FOR OFFLINE CONSULTANCIES FOR ANY HEALTH CONCERNS</p>
        </div>
        <div class="rec1">
            <img class="box1" src="images/1.png" alt="Urology" />
        </div>
        <div class="rec2">
            <img  class="box2" src="images/2.png" alt="Baby Health" />
        </div>
        <div class="rec3">
            <img  class="box3" src="images/3.png" alt="Psychiatry" />
        </div>
        <div class="rec4">
            <img  class="box4" src="images/4.png" alt="Deramtology" />
        </div>
        <div class="rec5">
            <img  class="box5" src="images/5.png" alt="Infectious Diseases" />
        </div>
        <div class="rec6">
            <img  class="box6" src="images/6.png" alt="Infectious Diseases" />
        </div>
        <div class="searchbutton">
            <button class="search">Search For More</button>
        </div>
    </div>
  </>
)

export default Home
