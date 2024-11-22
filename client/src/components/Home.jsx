import {  Container,Carousel, Button,  Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Schemes from "./Schemes.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1.jsx";



// Footer
function Footer() {
  const footerStyles = {
    container: {
      backgroundColor: "#006f78", // Teal background
      color: "#ffffff",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
    },
    column: {
      flex: 1,
      minWidth: "150px",
    },
    heading: {
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    contactColumn: {
      textAlign: "center",
    },
    contactIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      margin: "10px 0",
    },
    icon: {
      fontSize: "24px",
      color: "#ffffff",
      cursor: "pointer",
    },
    button: {
      backgroundColor: "#00c6d0",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "14px",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#008c8e",
    },
    supportTiming: {
      marginTop: "15px",
      fontSize: "14px",
    },
    bottomSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "30px",
      borderTop: "1px dashed #ffffff",
      paddingTop: "20px",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
    },
    legalLinks: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <footer style={footerStyles.container}>
      {/* Top Section */}
      <div style={footerStyles.topSection}>
        <div style={footerStyles.column}>
          <h4 style={footerStyles.heading}>We Help With</h4>
          <ul style={footerStyles.list}>
            <li style={footerStyles.listItem}>Relationship Counselling</li>
            <li style={footerStyles.listItem}>Stress Anxiety Depression</li>
            <li style={footerStyles.listItem}>Confidence</li>
            <li style={footerStyles.listItem}>Trauma</li>
            <li style={footerStyles.listItem}>LGBTQ+</li>
            <li style={footerStyles.listItem}>Lifestyle Issues+</li>
            <li style={footerStyles.listItem}>Managing Workplace</li>
            <li style={footerStyles.listItem}>Women Centric Challenges</li>
            <li style={footerStyles.listItem}>Indians Living Abroad</li>
            <li style={footerStyles.listItem}>ADHD</li>
            <li style={footerStyles.listItem}>Parenting</li>
            <li style={footerStyles.listItem}>Psychiatric Support</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h4 style={footerStyles.heading}>Self Help</h4>
          <ul style={footerStyles.list}>
            <li style={footerStyles.listItem}>Articles</li>
            <li style={footerStyles.listItem}>14 Days Program</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h4 style={footerStyles.heading}>For Business</h4>
          <ul style={footerStyles.list}>
            <li style={footerStyles.listItem}>Corporates</li>
            <li style={footerStyles.listItem}>Institutions</li>
            <li style={footerStyles.listItem}>Strategic Partners</li>
          </ul>
        </div>

        <div style={footerStyles.column}>
          <h4 style={footerStyles.heading}>Assessments</h4>
          <ul style={footerStyles.list}>
            <li style={footerStyles.listItem}>Am I stressed</li>
            <li style={footerStyles.listItem}>Am I Sad Or Depressed?</li>
            <li style={footerStyles.listItem}>How am I sleeping?</li>
            <li style={footerStyles.listItem}>Am I Anxious?</li>
          </ul>
        </div>

        <div style={{ ...footerStyles.column, ...footerStyles.contactColumn }}>
          <h4 style={footerStyles.heading}>Contact</h4>
          <div style={footerStyles.contactIcons}>
            <i className="fas fa-phone" style={footerStyles.icon}></i>
            <i className="fas fa-comment-alt" style={footerStyles.icon}></i>
            <i className="fas fa-envelope" style={footerStyles.icon}></i>
          </div>
          <button style={footerStyles.button}>Book Session</button>
          <p style={footerStyles.supportTiming}>
            Mon - Sat: 9:00AM - 1:00AM IST <br />
            Sun: 10:00AM - 7:00PM IST
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={footerStyles.bottomSection}>
        <div style={footerStyles.socialIcons}>
          <i className="fab fa-facebook" style={footerStyles.icon}></i>
          <i className="fab fa-instagram" style={footerStyles.icon}></i>
          <i className="fab fa-linkedin" style={footerStyles.icon}></i>
          <i className="fab fa-twitter" style={footerStyles.icon}></i>
          <i className="fab fa-youtube" style={footerStyles.icon}></i>
        </div>
        <p>Copyright © 2023 Virzen Wellness Private Limited</p>
        <div style={footerStyles.legalLinks}>
          <a href="#" style={footerStyles.link}>
            Privacy Policy
          </a>
          <a href="#" style={footerStyles.link}>
            Terms & Conditions
          </a>
          <a href="#" style={footerStyles.link}>
            Refund & Cancellation Policy
          </a>
          <a href="#" style={footerStyles.link}>
            FAQ
          </a>
          <a href="#" style={footerStyles.link}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}


// Zen Talk Health care services

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Number of cards visible at the same time
  slidesToScroll: 1, // Scroll 1 card at a time
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const cardsData = [
  {
    title: "1-1 Therapy Session",
    text: "Our team of dedicated and trained counselors offer compassionate one-on-one therapy through video, call, and chat modes.",
  },
  {
    title: "1-1 Psychiatric Session",
    text: "Consult our licensed psychiatrist, with verified credentials of MBBS & MD. Your mental health is in expert hands.",
  },
  {
    title: "Free Assessment",
    text: "Gain swift and reliable insights into your current state of mind through scientifically proven mental health assessments.",
  },
  {
    title: "Self Help Program",
    text: "CBT & Positive Psychology based self-help tools drawing from years of research & numerous therapy sessions. Ideal for clients not ready for 1-1 support or for aiding the growth journey.",
  },
  {
    title: "Happiness Program",
    text: "Two-week online program designed to equip you with emotional wellness tools through exercises and reflections. Cultivate your own happiness journey while enhancing your mental health.",
  },
  {
    title: "Articles & Stories",
    text: "Our in-house psychologists craft rich and impactful content to offer clients seeking information or support in their therapy journey.",
  },
];

function CardsSlider() {
  return (
    <Container>
      {/* Top Headings */}
      <div className="text-center mb-4">
        <h1>ZenTalk Mental Healthcare Services</h1>
        {/* <h2>Your Journey Starts Here</h2> */}
      </div>

      {/* Slider for Cards */}
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card
              style={{
                width: "18rem", // Fixed card width
                height: "300px", // Fixed card height for consistency
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "0 auto", // Center-align cards in their container
              }}
              className="mb-4"
            >
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </Card.Title>
                <Card.Text
                  style={{
                    flexGrow: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {card.text}
                </Card.Text>
                <Button variant="primary">Lets Start!</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}





// Therapy is as good as your therapist
const TherapySection = () => {
  const styles = {
    section: {
      backgroundColor: '#f9fdfc',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2rem',
      color: '#000',
      marginBottom: '20px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center-align content horizontally
      gap: '20px',
      padding: '0 40px', // Extra space on the left and right
    },
    textSection: {
      maxWidth: '800px', // Limit the text width for better readability
      textAlign: 'justify', // Align text for a clean and professional look
    },
    subheading: {
      fontSize: '1.2rem',
      color: '#00a19c',
      marginTop: '10px',
      textAlign: 'center', // Keep subheadings centered
    },
    paragraph: {
      fontSize: '1rem',
      color: '#333',
      lineHeight: '1.8', // Increase line height for better readability
      marginTop: '10px',
    },
    highlight: {
      fontWeight: 'bold',
      color: '#00a19c',
    },
  };

  return (
    <div style={styles.section}>
      <h1 style={styles.heading}>Therapy Is As Good As Your Therapist</h1>
      <div style={styles.content}>
        <div style={styles.textSection}>
          <h2 style={styles.subheading}>
            Qualified & Trained Psychologists & Licensed Psychiatrists Only
          </h2>
          <p style={styles.paragraph}>
            All our online counsellors & psychologists hold a Master’s Degree in Psychology and undergo over{' '}
            <span style={styles.highlight}>400+ hours</span> of rigorous training and supervision. With expertise in
            various psychotherapeutic techniques, they have assisted{' '}
            <span style={styles.highlight}>5 Lac+ clients</span> in dealing with the toughest life challenges and
            thriving in both personal and professional spaces. All our psychiatrists hold an MBBS qualification and
            degree in MD.
          </p>
          <h2 style={styles.subheading}>Choose Your Mental Health Expert</h2>
          <p style={styles.paragraph}>
            We believe in providing autonomy to the client by offering our online counsellor and psychiatrist profiles,
            highlighting their counselling expertise, language support, approach, and passion so that you can pick the
            best therapist or psychiatrist according to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};





// How Online therapy helps

const OnlineTherapy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>How Online Therapy Helps</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p>
            The first and foremost purpose of online therapy is to give you a <span style={styles.highlight}>safe space for disclosure</span>. 
            In your online therapy journey, you will know what an uninterrupted conversation feels like. 
            Its easier to open up because you feel not judged but understood.
          </p>
          <p>
            Further, online counselling helps <span style={styles.highlight}>identify triggers</span> for your emotions and allows you to 
            <span style={styles.highlight}> discover your deep-rooted concerns</span>. With trusted counselor guidance and practical tools, 
            <span style={styles.highlight}> you will feel better, happier, and stronger at every step</span>.
          </p>
          <p>
            You can improve relationships, build confidence, overcome peer pressure, cope with stress, beat anxiety, and outgrow depression. 
            It will empower you with skill sets to <span style={styles.highlight}>become the best version of yourself</span>.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="./girl.png"
            alt="Meditation Illustration"
            style={styles.image}
          />
        </div>
      </div>
      <button style={styles.button} >Start Therapy</button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8fdf9',
  },
  title: {
    fontSize: '2rem',
    color: '#000',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  text: {
    maxWidth: '600px',
    textAlign: 'left',
    lineHeight: '1.6',
    color: '#555',
  },
  highlight: {
    color: '#16c79a',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    width: '200px',
    height: 'auto',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#16c79a',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


// Why ZenTalk

function WhyBetterLyf() {
  return (
    <section
      className="why-betterlyf"
      style={{
        background: "linear-gradient(51deg, rgb(210, 255, 252) -1%, rgb(255, 233, 226) 101%)",
        padding: "2rem 0",
      }}
    >
      <h3 className="text-center mb-4">Why ZenTalk ?</h3>
      <Container>
        <p className="text-center mb-5">
          ZenTalk will be providing the best online therapy, counselling, and psychiatric services to Indians.
          Our online counsellors, mental health experts, and psychiatrists are multilingual
          and provide confidential counseling online.
        </p>

        <div className="d-flex flex-wrap justify-content-between align-items-start">
          {/* Left Section */}
          <div className="why-left d-flex flex-wrap">
            {[
              {
                imgSrc: "./confidencial.png",
                alt: "Confidential and Secure",
                text: "100% Confidential  \n& Secure",
              },
              {
                imgSrc: "./TIme.jpg",
                alt: "Lifetime Validity",
                text: "Lifetime Validity \nOn Sessions",
              },
              // {
              //   imgSrc: "/images/imgwebp/2.webp",
              //   alt: "Refund Policy",
              //   text: "30 Days  \nRefund Policy",
              // },
              {
                imgSrc: "./therapy.jpg",
                alt: "Experienced Therapists",
                text: "Experienced Therapist  \nMin 500 Session Hrs",
              },
              {
                imgSrc: "./calendar.jpg",
                alt: "Sessions Delivered",
                text: "1k+ \n Recorded Sessions",
              },
              {
                imgSrc: "./globe.jpg",
                alt: "Multi-Lingual Support",
                text: "Multi Lingual Support \n10+ Languages",
              },
            ].map((item, index) => (
              <div className="therapist-box text-center m-3" key={index} style={{ width: "200px" }}>
                <div className="img-container mb-3">
                  <img src={item.imgSrc} alt={item.alt} className="img-fluid" />
                </div>
                <h6>{item.text.split("\n").map((line, i) => (<div key={i}>{line}</div>))}</h6>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="why-right">
            <img
              src="/images/computerswebp.webp"
              alt="ZenTalk"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <Button style={{ backgroundColor: 'rgb(150, 148, 255)', color: '#fff', border: 'none' }}  href="#startTherapy">
            Start Therapy
          </Button>
        </div>
      </Container>
    </section>
  );
}



// Carousel
function CarouselFadeExample() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="./Carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color:"black" }}>Find Peace of Mind</h3>
          <p style={{ color: "black" }}>Connect with the right professionals, whenever you need help.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Carousel2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "rgb(255, 230, 169)" }}>Self Help Tools</h3>
          <p style={{ color: "rgb(255, 230, 169)" }}>Explore our tools designed to empower your mental well-being.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./Carousel3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color:"black" }}>Personalized Counseling</h3>
          <p style={{ color:"black" }}>Talk to certified experts and get the help you need, when you need it.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// Features Section
// function Features() {
//   return (
//     <Container className="features-section mt-5">
//       <h2 className="text-center mb-4">Our Services</h2>
//       <Row>
//         {/* Feature 1 */}
//         <Col md={4} className="d-flex justify-content-center mb-4">
//           <Card style={{ width: "18rem" }} className="text-center">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/150"
//               alt="Counseling Icon"
//             />
//             <Card.Body>
//               <Card.Title>Online Counseling</Card.Title>
//               <Card.Text>
//                 Speak with certified experts to improve your mental well-being.
//               </Card.Text>
//               <Button variant="primary" href="#counseling">Learn More</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Feature 2 */}
//         <Col md={4} className="d-flex justify-content-center mb-4">
//           <Card style={{ width: "18rem" }} className="text-center">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/150"
//               alt="Self Help Icon"
//             />
//             <Card.Body>
//               <Card.Title>Self Help Tools</Card.Title>
//               <Card.Text>
//                 Access guides, exercises, and resources to help yourself.
//               </Card.Text>
//               <Button variant="primary" href="#selfhelp">Discover Tools</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Feature 3 */}
//         <Col md={4} className="d-flex justify-content-center mb-4">
//           <Card style={{ width: "18rem" }} className="text-center">
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/150"
//               alt="Workshops Icon"
//             />
//             <Card.Body>
//               <Card.Title>Workshops & Seminars</Card.Title>
//               <Card.Text>
//                 Participate in interactive workshops and group therapy sessions.
//               </Card.Text>
//               <Button variant="primary" href="#workshops">Join Now</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// Main App Component
function App() {
  const navigate=useNavigate();
  return (
    <div>
      
      <Navbar1/>
      {/* Add the Controlled Carousel here */}
      <CarouselFadeExample/>
     

      {/* Add the Features Section here */}
      {/* <Features /> */}

      {/* Why Zen Talk */}
      <WhyBetterLyf />

      {/* What Improves with Therapy*/}
      <Schemes />
      

      {/*How Online therapy helps  */}
      <OnlineTherapy />

      {/* Therapy is as good as your therapist */}
      <TherapySection />

      <br></br>

      {/* // Zen Talk HEalth care services */}
      <CardsSlider />

      {/* Footer */}
      <Footer />
     
    </div>
  );
}

export default App;
