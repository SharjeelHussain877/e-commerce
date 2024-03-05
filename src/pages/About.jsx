import React from "react";
import { Footer, Navbar } from "../components";
import { NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import underline from "../assets/images/underline.png";
import line from "../assets/images/line.png";
import aboutusGirl from "../assets/images/about-girl.png";
import aboutusGirl1 from "../assets/images/about-girl1.png";
import teacher1 from "../assets/images/teacher1.png";
import teacher2 from "../assets/images/teacher2.png";
import tools from "../assets/images/tools.png";
import trusted from "../assets/images/Trusted.png";
import personalized from "../assets/images/personalized.png";

function About() {
  const primaryColor = { backgroundColor: "#f3f25b" };
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <>
      <Navbar />
      <div className="aboutus-hero">
        <h1>About US</h1>
        <Container maxWidth="sm">
          <p>
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom.
          </p>
        </Container>

        <Button
          variant="contained"
          size="large"
          style={{ ...primaryColor, color: "#000" }}
        >
          See More
        </Button>
      </div>
      <Container
        maxWidth="fluid"
        style={{ textAlign: "center", padding: "20px 0" }}
      >
        <h1 style={{ fontFamily: "serif" }}>
          Preparing Students to Achieve Success
        </h1>
        <img src={underline} width="283px" />
      </Container>

      <Grid container>
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Developing Confident and Successful Learners</h1>
          <img src={line} alt="" />
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            See More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <img src={aboutusGirl} width="400px" alt="" />
        </Grid>
      </Grid>
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Developing Confident and Successful Learners</h1>
          <img src={line} alt="" />
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            See More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <img src={aboutusGirl1} width="400px" alt="" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Developing Confident and Successful Learners</h1>
          <img src={line} alt="" />
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            See More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <img src={aboutusGirl} width="400px" alt="" />
        </Grid>
      </Grid>

      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "2.4em",
          }}
        >
          Teachers
        </h1>
        <img src={underline} width="283px" />
      </div>
      <Grid container spacing={3} direction="row" justifyContent="center">
        <Grid item xs={12} md={3}>
          <img
            width="100%"
            height="400px"
            style={{ objectFit: "contain" }}
            src={teacher2}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={teacher1} alt="" />
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            width="100%"
            height="400px"
            style={{ objectFit: "contain" }}
            src={teacher2}
            alt=""
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "2.4em",
          }}
        >
          Why it's Work
        </h1>
        <img src={underline} width="283px" />
      </div>
      <Grid container>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }} gap={4}>
          <img src={personalized} width="50%" alt="" />
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Roboto Medium",
              paddingBottom: "10px",
            }}
          >
            Personalized Learning
          </h5>
          <Container
            maxWidth="sm"
            style={{
              fontFamily: "Roboto Medium",
            }}
          >
            Students practice at their own pace, first filling in gaps in their
            understanding and then accelerating their learning.
          </Container>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }} gap={4}>
          <img src={trusted} width="50%" alt="" />
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Roboto Medium",
              paddingBottom: "10px",
            }}
          >
            Trusted Content
          </h5>
          <Container
            maxWidth="sm"
            style={{
              fontFamily: "Roboto Medium",
            }}
          >
            Created by experts, library of trusted practice and lessons covers
            math, science, and more. Always free for learners and teachers.
          </Container>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }} gap={4}>
          <img src={tools} width="50%" alt="" />
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Roboto Medium",
              paddingBottom: "10px",
            }}
          >
            Tools to empower teachers
          </h5>
          <Container
            maxWidth="sm"
            style={{
              fontFamily: "Roboto Medium",
            }}
          >
            Teachers can identify gaps in their students’ understanding, tailor
            instruction, and meet the needs of every student.
          </Container>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default About;
