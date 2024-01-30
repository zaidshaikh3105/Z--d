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
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";

////////////////////////////////////////////////////////////////////////////////

//Profile image

const images = [
  "./mongodb-icon-1.svg",
  "./react-2.svg",
  "./icons8-express-js.svg",
  "./nodejs-1.svg",
];
const img = ["./flutter-logo.svg", "./azure-2.svg"];
// ABout Me
const AboutMe = () => (
  <div data-aos="zoom-out">
    <Container
      sx={{
        padding: "20px",
        "@media (max-width: 600px)": {
          padding: "10px",
        },
      }}
    >
      <Typography variant="h3" margin={1}>
        Greetings!!!
      </Typography>
      <Typography variant="h4">
        I am Zaid Shaikh, a passionate React.js and Flutter developer with a
        focus on integrating web and mobile experiences with ease.
      </Typography>
      <Typography variant="h5">
        Equipped with a Masters degree in Computer Science from the renowned
        University of Mumbai,I have a good understanding as well as proficiency
        with React.js |Material-UI | |Express.js|Node.js|Flutter|Microsoft Azure
      </Typography>
      <div
        style={{
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
            style={{
              height: "100px",
              width: "auto",
              marginRight: "40px",
              marginBottom: "20px",
            }}
            src={src}
            alt="image loading "
          />
        ))}
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // margin: "20px",
          }}
        >
          {img.map((src, index) => (
            <CardMedia
              key={index}
              component="img"
              style={{
                height: "90px",
                width: "auto",
                marginRight: "40px",
                //marginBottom: "10px",
              }}
              src={src}
              alt="image loading"
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
        contentStyle={{
          background: "",
          color: "",
          padding: "10px",
          "@media (max-width: 600px)": {
            padding: "5px",
          },
        }}
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
    <div
      style={{
        margin: "20px",
        padding: "20px",
        "@media (max-width: 600px)": {
          margin: "10px",
          padding: "10px",
        },
      }}
    >
      <div>
        {skillsData.map((skill, index) => (
          <div key={index} style={{ margin: "30px 0" }}>
            <Typography variant="h5" style={{ marginBottom: "5px" }}>
              {skill.skill}
            </Typography>
            <ProgressBar
              variant={skill.color}
              now={skill.value}
              style={{ height: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

//Projects
const Projects = () => (
  <div data-aos="zoom-out">
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
  </div>
);

//Clicks
const clicks = [
  { img: "./clicks_3.jpg" },
  { img: "./clicks_1.jpg" },
  { img: "./clicks_2.jpg" },
  { img: "./clicks_4.jpg" },
  { img: "./clicks_5.jpg" },
  { img: "./clicks_6.jpg" },
];

const Clicks = () => (
  <div
    data-aos="zoom-out"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    {clicks.map((click, index) => (
      <img
        key={index}
        src={click.img}
        alt={`Click ${index + 1}`}
        style={{
          width: "30%",
          height: "300px",
          margin: "5px",
          padding: "2px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    ))}
  </div>
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
        "https://drive.google.com/file/d/1bk4mKgnSfKd7X7a9RIUAyu8J7papVydH/view?usp=drive_link",
        "_blank"
      );
      break;
    default:
      break;
  }
};

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    Aos.init();
    const path = window.location.pathname;
    const tabIndex = [
      "/",
      "/experience",
      "/skills",
      "/projects",
      "/clicks",
    ].indexOf(path);

    setTabValue(tabIndex !== -1 ? tabIndex : 0);
  }, []);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    const paths = ["/", "/experience", "/skills", "/projects", "/clicks"];
    window.history.pushState(null, "", paths[newValue]);
  };

  return (
    <Router>
      <CssBaseline />
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right, #003973, #E5E5BE)",
          width: "100vw",
          padding: "10px",
          boxSizing: "border-box",
          overflowX: "hidden",
          "@media (max-width: 960px)": {
            width: "90vw",
          },
          "@media (max-width: 600px)": {
            width: "80vw",
          },
          "@media (max-width: 400px)": {
            width: "70vw",
          },
        }}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            borderRadius: 1,
            borderColor: "black",
            borderStyle: "solid",
            height: "auto",
            width: "1500px",
            "@media (max-width: 1600px)": {
              width: "80%",
            },
            "@media (max-width: 1200px)": {
              width: "90%",
            },
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardContent>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                >
                  <CardMedia
                    component="img"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      padding: "10px",
                    }}
                    src="./undraw_feeling_proud_qne1.svg"
                    alt="Image"
                  />
                  <Paper
                    sx={{
                      backgroundColor: "transparent",
                      borderRadius: "100",
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Tabs
                      variant="scrollable"
                      scrollButtons="auto"
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
                    borderStyle: "solid",
                    borderWidth: "1px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    textColor="lack"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#6C63FF",
                      },
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
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
                  <Route path="/clicks" element={<Clicks />} />
                </Routes>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </body>
    </Router>
  );
};
export default App;
