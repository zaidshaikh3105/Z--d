import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import "aos/dist/aos.css";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import {
  GitHub,
  LinkedIn,
  Mail,
  PersonOutline,
  PhotoOutlined,
  WhatsApp,
  WorkOutline,
} from "@mui/icons-material";
import Aos from "aos";
import SimpleImageSlider from "react-simple-image-slider";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";

////////////////////////////////////////////////////////////////////////////////

//Profile image
const ProfileImage = () => (
  <CardMedia
    component="img"
    style={{}}
    src="src\Images\undraw_feeling_proud_qne1.svg"
    alt="Your Name"
  />
);
const images = [
  "https://github.com/zaidshaikh3105/Z--d/blob/main/src/Images/mongodb-icon-1.svg",
  "src/Images/react-2.svg",
  "src/Images/icons8-express-js.svg",
  "src/Images/nodejs-1.svg",
];
const img = ["src/Images/flutter-logo.svg", "src/Images/azure-2.svg"];
// ABout Me
const AboutMe = () => (
  <div data-aos="zoom-in">
    <Container>
      {/* <CardMedia component="img" src="src\Images\undraw_profile_re_4a55.svg" /> */}
      <Typography variant="h2" margin={1}>
        Greetings!!!
      </Typography>
      <Typography variant="h3">
        I am Zaid Shaikh, a passionate React.js and Flutter developer with a
        focus on integrating web and mobile experiences with ease.
      </Typography>
      <Typography variant="h6">
        Equipped with a Masters degree in Computer Science from the renowned
        University of Mumbai,I have a good understanding as well as proficiency
        with React.js |Material-UI | |Express.js|Node.js|Flutter|Microsoft Azure
      </Typography>
      <div
        style={{
          //  marginRight: "50px",
          //s marginBottom: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((src, index) => (
          <CardMedia
            key={index}
            component="img"
            style={{ height: "100px", width: "auto", marginRight: "50px" }}
            src={src}
            alt="Your Name"
          />
        ))}
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          {img.map((src, index) => (
            <CardMedia
              key={index}
              component="img"
              style={{ height: "80px", width: "auto", marginRight: "50px" }}
              src={src}
              alt="Your Name"
            />
          ))}
        </Container>
      </div>
    </Container>
  </div>
);
// Exp
const exp = [
  {
    title: "Web Developer  ",
    Company: "Freelancer",
    duration: "March 2023 - Present",
    desc: "passionate React.js and Flutter developer with a focus on integrating web and mobile experiences with ease.",
  },
  {
    title: "System Associate",
    Company: "Cognizant",
    duration: "Oct 2021 - Mar 2023 ",
    desc: "Worked as a System Associate in an application support team, ensuring smooth operation and maintenance of software applications within the organization",
  },
  {
    title: "Flutter Developer",
    Company: "Outrix Wave",
    duration: "Jun 2021 - Aug 2021",
    desc: "Worked as anFlutter Dev for the app Trix Book. This project is online free books for readers. As part of the project, I have done internal communication with team, worked on app designing and functioning.",
  },
];
const Experience = () => (
  <div data-aos="zoom-out">
    {exp.map((element, index) => (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        contentStyle={{ background: "", color: "", padding: "10px" }} // Adjust padding as needed
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={element.duration}
        iconStyle={{ background: "", color: "" }}
        //icon={<WorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.Company}
        </h4>
        <p>{element.desc}</p>
      </VerticalTimelineElement>
    ))}
  </div>
);
// Skills
const skillsData = [
  { skill: "React.js", value: 80, color: "info" },
  { skill: "MongoDb", value: 60, color: "success" },
  { skill: "Node.js", value: 70, color: "Light" },
  { skill: "Flutter", value: 50, color: "danger" },
  { skill: "Azure", value: 75, color: "secondary" },
];

const Skills = () => (
  <div data-aos="zoom-in">
    <div style={{ margin: "20px", padding: "20px" }}>
      <div>
        {skillsData.map((skill, index) => (
          <div key={index} style={{ margin: "30px 0" }}>
            <Typography variant="subtitle1" style={{ marginBottom: "5px" }}>
              {skill.skill}
            </Typography>
            <ProgressBar
              variant={skill.color}
              now={skill.value}
              style={{ height: "20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

//Projects
const Projects = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    {/* Projects content */}
  </Container>
  //Contact
);
const Contact = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    {/* Projects content */}
  </Container>
);
//Clicks
const clicks = [
  "src/Images/clicks_3.jpg",
  "src/Images/clicks_1.jpg",
  "src/Images/clicks_2.jpg",
  "src/Images/clicks_4.jpg",
  "src/Images/clicks_5.jpg",
  "src/Images/clicks_6.jpg",
];
const Clicks = () => (
  <Container
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px",
      flexWrap: "wrap",
    }}
  >
    <SimpleImageSlider
      width={650}
      height={650}
      images={clicks}
      showNavs={true}
      scale={"fit"}
    />
  </Container>
);
const handleTabChange = (event, newValue) => {
  switch (newValue) {
    case 0:
      window.open("https://linkedin.com/in/zaids31", "_blank");
      break;
    case 1:
      window.open("https://github.com/zaidshaikh3105", "_blank");
      break;
    case 2:
      window.open("mailto:zaidshaikh740@gmail.com", "_blank");
      break;
    case 3:
      window.open("https://wa.me/9320613695", "_blank");
      break;
    case 4:
      window.open(
        "https://drive.google.com/file/d/1G-RaA_ZEsJYv94EzXvjEqrQO0-Y9VN-t/view?usp=drive_link",
        "_blank"
      );
      break;
    default:
      break;
  }
};
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [tabValue, setTabValue] = useState(0);

  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #003973, #E5E5BE)",
          height: "100vh", // Full height of the screen
          width: "100vw", // Full width of the screen
          margin: "auto",
          padding: "20px",
          borderRadius: "10px", // Adjust the radius as needed
        }}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            borderRadius: "100",
            borderColor: "black",
            borderStyle: "solid", // Specify the border style (optional)
            borderWidth: "2px",
            height: "800px", // Full height of the screen
            width: "1500px", // Full width of the screen
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <CardContent>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                >
                  <ProfileImage />
                  <Paper
                    sx={{
                      backgroundColor: "transparent",
                      borderRadius: "100",
                      borderColor: "black",
                      borderStyle: "solid", // Specify the border style (optional)
                      borderWidth: "1px",
                      display: "flex",
                      justifyContent: "center", // Center horizontally
                      alignItems: "center",
                      height: "80px",
                    }}
                  >
                    <Tabs
                      onChange={handleTabChange}
                      aria-label="icon tabs example"
                    >
                      <Tab icon={<LinkedIn />} />
                      <Tab icon={<GitHub />} />
                      <Tab icon={<Mail />} />
                      <Tab icon={<WhatsApp />} />
                      <Tab icon={<SimCardDownloadOutlinedIcon />} />
                    </Tabs>
                  </Paper>
                </div>
              </CardContent>
            </Grid>

            <Grid item xs={12} md={6}>
              <CardContent>
                <Paper
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "100",
                    borderColor: "black",
                    borderStyle: "solid", // Specify the border style (optional)
                    borderWidth: "1px",
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                    alignItems: "center",
                  }}
                >
                  <Tabs
                    value={tabValue}
                    onChange={(event, newValue) => setTabValue(newValue)}
                    textColor="lack"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#6C63FF",
                      },
                    }}
                  >
                    <Tab
                      label="About Me"
                      icon={<PersonOutline />}
                      component={Link}
                      to="/"
                    />
                    <Tab
                      label="Experience"
                      icon={<WorkOutline />}
                      component={Link}
                      to="/experience"
                    />
                    <Tab
                      label="Skills"
                      icon={<CodeIcon />}
                      component={Link}
                      to="/skills"
                    />
                    <Tab
                      label="Projects"
                      icon={<CodeIcon />}
                      component={Link}
                      to="/projects"
                    />
                    {/* <Tab
                      label="contact"
                      icon={<EmailOutlined />}
                      component={Link}
                      to="/contact"
                    /> */}
                    <Tab
                      label="Clicks"
                      icon={<PhotoOutlined />}
                      component={Link}
                      to="/clicks"
                    />
                  </Tabs>
                </Paper>
                <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/clicks" element={<Clicks />} />
                </Routes>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Router>
  );
};
export default App;
