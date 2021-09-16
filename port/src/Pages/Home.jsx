import {  withStyles } from '@material-ui/core'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BigBox from '../Components/BigBox/Big'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'


import style from '../Pages/Homes.module.css'

import { ScrollingProvider, Section } from 'react-scroll-section'


const styles = {
  about__me: {
    padding: '6vw',
   borderBottom:"1px solid black",
   

    '& h2': {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bolder',
      fontSize: '34px',
      marginBottom: '10px',
    },
    textAlign: 'center',
    backgroundColor: '  #ffffff;',
  },

  p__img__container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius:'7px',
    boxShadow:  '3px 3px 10px black',
    border: '2px solid black',
    
    '& p': {
      lineHeight: '1.8rem',
      fontSize: '23px',
      margin: '20px',
    },
    '& img': {
      width: '250px',
       height: '250px',
       borderRadius:"50%"

      
    },
    '@media (max-width:780px)': {
      flexDirection: 'column-reverse',
    },
  },
  project__container: {
    padding: '6vw',
    textAlign: 'center',
    
    backgroundColor: '#ffff;',

  

    '& h2': {
      fontSize: '25px',
    },

    '& p': {
      margin: '20px 0 10px',
      fontSize: '17px',
    },
  },
  project__card__content: {
    borderBottomLeftRadius: '10px',
   
    borderBottomRightRadius: '10px',
    backgroundColor: '#ECF0F1',
    padding: '1vw',
  },
  img__container: {
    backgroundColor: 'white',
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    
    '& img': {
      height: '100%',

   
    },
  },
  project__tech__tools: {
    display: 'flex',
    flexWrap: 'wrap',

    '& div': {
      width: '40px',
      margin: '10px 10px 0 0',
    },
    '& img': {
      width: '100%',
    },
  },
  project__tech__info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > div': {
      margin: '10px 0',
    },
  },
  project__card__container: {
    display: 'grid',
    color: 'black',
    
    textAlign: 'left',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '2vw',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    '& img': {
     // borderTopLeftRadius: '10px',
      
      //borderTopRightRadius: '10px',
      width: '100%',
    },
    '@media (max-width:1020px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width:780px)': {
      gridTemplateColumns: '1fr',
    },
  },

  techImgContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    border: '3px solid black',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      margin: '20px 20px 0 0',
    },
  },

  menuButton: {
    backgroundColor: 'white',
    marginRight: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    border: '0.01em solid black',
    boxShadow: ' 0px 1px 1px black ',
    font: '30%',
    color: 'inherit',

    padding: ' 10px 10px',

    transition: '0.2s all ease-in',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  btnText: {
    marginLeft: '4px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  resumeBtn: {
    width: '200px',
  },
  orange: {
    backgroundColor: 'orange',
    color: 'black',
    boxShadow: 'unset',
  },
  techContainer: {
    
    textAlign: 'center',
    padding: '0 6vw',
    borderBottom:"1px solid black",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  
    '& h2':{
      
      color: 'black',
      fontWeight: 'bolder',
      fontSize: '34px',
    }
  },
  experince: {
    padding: '40px 6vw',
    borderTop:"1px solid black",
    justifyContent: 'center',
    backgroundColor: '#ECF0F1;',

    '& div':{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',

    }

    
   
  },
  project__card:{

    border: '2px solid black',
    borderRadius:'5px',
    boxShadow:  '7px 7px 15px black',
            

  color: 'black',

  },

  contactMe: {
    
    minHeight: '10px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
    '& h2': {
      fontWeight: 'bolder',
      color: 'var(--white)',
      marginBottom: '2px',
    },
  },
  contactBtnContainer: {
    display: 'flex',
    marginBottom: '25px',
    '@media (max-width:780px)': {
      flexDirection: 'column',
      '& button': {
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
}

function Home({ classes }) {
  const goTo = (url) => {
    console.log(url)
    window.open(url, '_blank')
  }

  return (
    <ScrollingProvider>
      <Navbar />

      <BigBox />
      <Fade bottom>
        <Section id='about' className={classes.about__me}>
          <h2 style={{marginBottom:"5vh",textDecoration:'underline'}}>About Me</h2>
          <div className={classes.p__img__container}>
            <p>
            Hi My name is Dhruvasurya K N, I am well trained in JavaScript, MERN stack and Data Structure & 
            Algorithms. I am a collaborative team player dedicated to execute goal-oriented projects. I am 
            currently seeking an opportunity to use my skills and dedication on creating exciting and unique 
             products as a Full Stack Web Developer in a reputed company.    
            </p>
          
          </div>

          
        </Section>
      </Fade>
      <Fade left>
        <Section id="skills" className={classes.techContainer}>
          <h2 style={{marginBottom:"5vh",textDecoration:'underline'}}>Tools and Technologies</h2>
          <div className={style.tools}>
            <div >
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
            />
            <h4>React</h4>
            </div>
            <div>
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
            />
            <h4>HTML 5</h4>
            </div>
            <div>
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
            />
            <h4>JavaScript</h4>
            </div>
            <div>
            <img
              alt='tech-pic'
              height='100'
              src='https://material-ui.com/static/logo.png'
            />
            <h4>Material UI</h4>
            </div>
            <div>
            <img
              alt='tech-pic'
              height='100'
              src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
            />
            <h4>CSS</h4>
            </div>
            <div>
            <img
              alt='tech-pic'
              height='100'
              width='100'
              src={process.env.PUBLIC_URL + '/images/redux.png'}
            />
            <h4>Redux</h4>
          </div>
          <div>
            <img
              alt='tech-pic'
              width='100'
              height='100'
              src={process.env.PUBLIC_URL + '/images/node.png'}
            />
            <h4>Node JS</h4>
        </div>
        
          </div>
        </Section>
      </Fade>

      <Section id='projects' className={classes.project__container}>
        <Fade bottom>
          <h2 style={{fontSize:"34px",textDecoration:'underline'}}>Projects</h2>
          <p></p>
        </Fade>
        {/* First Project */}
        <div className={classes.project__card__container}>
        
          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img
                src={process.env.PUBLIC_URL + '/images/shine.gif'}
                alt=''
              />
            </div>

            <div className={classes.project__card__content}>
              <h2>Shine Website</h2>
              <p>
              Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry. The popularity of the portal is evident from the fact that it has crossed 3.90 crore candidate landmark and has more than 3 lakh latest job vacancies from leading companies on site.
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => goTo('https://nitishvrma.github.io/Shine_Clone/')}
                    className={classNames(classes.menuButton)}
                  >
                    Demo
                  </button>

                  <button
                    onClick={() =>
                      goTo('https://github.com/Somesh-Kumar-Yadav/Shine-Clone')
                    }
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img
                src={process.env.PUBLIC_URL + '/images/travel.gif'}
                alt=''
              />
            </div>

            <div className={classes.project__card__content}>
              <h2>Travel Guru Website</h2>
              <p>
             
            Travelguru is India's leading travel website, offering you the best prices on flights, hotels and holiday packages across India and the world. Travelguru makes planning and buying a holiday or a business trip easy and convenient.Travelguru's current product offering consists of airline tickets, hotel rooms, vacation packages and cruises.They will shortly be expanding services to car rentals. 
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => goTo('https://travelguru-clone.herokuapp.com/')}
                    className={classNames(classes.menuButton)}
                  >
                   Demo
                  </button>

                  <button
                    onClick={() =>
                      goTo('https://github.com/bharadwaj-bhat/Travel_Guru')
                    }
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
         

          <div className={classes.project__card}>
            <div className={classes.img__container}>
              <img
                src={process.env.PUBLIC_URL + '/images/plural.gif'}
                alt=''
              />
            </div>

            <div className={classes.project__card__content}>
              <h2>Pluralsight Website</h2>
              <p>
             
              Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website. Technology teams are only as successful as their skills are relevant. Pluralsight Skills gives you the most effective path to building business-critical skills.
              </p>
              <div className={classes.project__tech__info}>
                <h3>Technologies Used</h3>
                <div className={classes.project__tech__tools}>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
                    />
                  </div>
                  <div>
                    <img
                      alt='tech-pic'
                      height='40'
                      src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
                    />
                  </div>
                 
                </div>
                <div>
                  <button
                    onClick={() => goTo('https://rohitkumar0427.github.io/pluralWebsite/')}
                    className={classNames(classes.menuButton)}
                  >
                   Demo
                  </button>

                  <button
                    onClick={() =>
                      goTo('https://github.com/rohitkumar0427/pluralWebsite.git')
                    }
                    className={classes.menuButton}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>



         
          {/* Last */}
        </div>
      </Section>

      <Fade left>
      
        <section className={classes.experince}>
        <h2 style={{textDecoration:"underline",backgroundColor:"#ECF0F1",textAlign:"center"}}>My Overall Statistics</h2>
         <div>
          <div className='circle small'>
            <h2>100+ Hours</h2>
            <p>Soft Skills Training</p>
          </div>
          <div className='circle small'>
            <h2>1200+ Hours</h2>
            <p>Full Stack Coding</p>
          </div>
          <div className='circle small'>
            <h2>1200+ Hours</h2>
            <p>Data structures and Algorithms</p>
          </div>
          </div>
        </section>
      </Fade>

      <Section id='contact' className={classes.contactMe}>
        <h2 style={{color:"white",marginBottom:"3.5vh",textDecoration:"underline"}}>Contact Me</h2>
        <div className={classes.contactBtnContainer}>
        

          <button
            onClick={() => goTo('https://www.linkedin.com/in/dhruvasurya-kn')}
            className={classNames(classes.menuButton, classes.flex)}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 25 25'
              fill='#4a4a4a'
              xmlns='http://www.w3.org/2000/svg'
            >
              {' '}
              <path d='M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM7.41562 21.3031H3.70625V9.37187H7.41562V21.3031ZM5.5625 7.74063C5.13727 7.74063 4.72159 7.61453 4.36802 7.37828C4.01446 7.14204 3.73889 6.80625 3.57616 6.41339C3.41343 6.02053 3.37085 5.58824 3.45381 5.17118C3.53677 4.75412 3.74154 4.37103 4.04222 4.07035C4.3429 3.76966 4.726 3.56489 5.14306 3.48194C5.56012 3.39898 5.99241 3.44156 6.38527 3.60428C6.77813 3.76701 7.11391 4.04258 7.35016 4.39615C7.5864 4.74971 7.7125 5.1654 7.7125 5.59062C7.70937 6.77812 6.74688 7.74063 5.5625 7.74063ZM21.3031 21.3031H17.5969V15.5C17.5969 14.1156 17.5719 12.3375 15.6688 12.3375C13.7406 12.3375 13.4438 13.8438 13.4438 15.4V21.3031H9.74063V9.37187H13.2969V11.0031H13.3469C13.8406 10.0656 15.05 9.075 16.8563 9.075C20.6125 9.075 21.3031 11.5469 21.3031 14.7594V21.3031Z'></path>{' '}
            </svg>

            <span className={classes.btnText}>LinkedIn</span>
          </button>
          <button
            onClick={() => goTo('https://twitter.com/DhruvasuryaK')}
            className={classNames(classes.menuButton, classes.flex)}
          >
            <svg
              className='svg-icon'
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='#4A4A4A'
              xmlns='http://www.w3.org/2000/svg'
            >
              {' '}
              <path d='M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM18.5073 9.42243C18.5156 9.55357 18.5156 9.69029 18.5156 9.82422C18.5156 13.9202 15.3962 18.6384 9.69587 18.6384C7.93806 18.6384 6.30859 18.1278 4.93583 17.2489C5.18694 17.2768 5.4269 17.2879 5.68359 17.2879C7.13449 17.2879 8.46819 16.7969 9.53125 15.9654C8.16964 15.9375 7.02567 15.0446 6.63504 13.817C7.11216 13.8867 7.54185 13.8867 8.03292 13.7612C7.33183 13.6187 6.70166 13.238 6.24949 12.6835C5.79731 12.1291 5.55102 11.4353 5.55246 10.7199V10.6808C5.96261 10.9124 6.44531 11.0547 6.95033 11.0742C6.52579 10.7913 6.17762 10.408 5.93669 9.95823C5.69577 9.50851 5.56954 9.00628 5.5692 8.49609C5.5692 7.91853 5.71987 7.39118 5.99051 6.93359C6.7687 7.89156 7.73976 8.67506 8.84058 9.23316C9.9414 9.79126 11.1473 10.1115 12.38 10.173C11.942 8.06641 13.5156 6.36161 15.4074 6.36161C16.3002 6.36161 17.1038 6.73549 17.6702 7.33817C18.3705 7.20703 19.0402 6.94475 19.6373 6.59319C19.4057 7.31027 18.9202 7.91574 18.2757 8.29799C18.9007 8.23103 19.5033 8.05804 20.0614 7.81529C19.6401 8.43471 19.1127 8.98438 18.5073 9.42243V9.42243Z'></path>{' '}
            </svg>

            <span className={classes.btnText}>Twitter</span>
          </button>
          <button
            onClick={() => goTo('https://github.com/dhruva-surya')}
            className={classNames(classes.menuButton, classes.flex)}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 25 25'
              fill='#4a4a4a'
              xmlns='http://www.w3.org/2000/svg'
            >
              {' '}
              <path d='M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z'></path>{' '}
            </svg>

            <span className={classes.btnText}>Github</span>
          </button>

          <button className={classNames(classes.menuButton, classes.flex,classes.btnText)}
          >
           
           koligesurya@gmail.com
          
          </button>
          <button className={classNames(classes.menuButton, classes.flex,classes.btnText)}
  
         >
           +918660380591
         </button>

        </div>
      </Section>
    </ScrollingProvider>
  )
}

export default withStyles(styles)(Home)

