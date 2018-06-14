import React from 'react';
import Logo from './1200x600.gif';
import {Link} from 'react-router-dom';
// import bg1 from '../../assets/bg-img1.jpg';
// import bg2 from '../../assets/bg-img2.jpg';
// import bg0 from '../../assets/bg-img0.jpg';
// import Dan from '../../assets/dan.png';
// import Ed from '../../assets/ed.png';
// import Hector from '../../assets/hector.png';
// import Jesus from '../../assets/jesus.png';
import Info1 from './info1.png';
import Info2 from './info2.png';
import Info3 from './info3a.png';
import './_home.scss';
import { Parallax, Background } from 'react-parallax';
import ThreeAcross from '../three-across';

export default class Home extends React.Component {
  render() {
    return(
      <div className="container">

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={Logo}
          bgImageAlt="the dog"
          strength={200}
        >
          {/* <p className='h1headinga'>Toni Arakaki</p>
          <p className='h1headingb'>Okinawa Style</p> */}
          {/* <img className='center logosize' src={Logo}/> */}
          <div style={{ height: '40em' }} />
        </Parallax>

        <div
          style={{ height: '6em',
            textAlign: 'center',
            paddingLeft: '2em',
            paddingRight: '2em',
            paddingBottom: '2em',
          }}>
          <strong style={{
            lineHeight: '60px',
            fontSize: '3em',
            paddingBottom: '0.5em',
          }}> Mission Statment </strong>
          <br />
          <span style={{
            lineHeight: '20px',
          }}>
          Provide everyone with secure access to the internet

Create a transparent, free market for consumers to monetize their browsing behavior

Help small business know who, when, where, and how to advertise to potential customers
          </span>
        </div>

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={'http://www.landscapeandurbanism.com/wp-content/uploads/2013/11/seattle-skyline-picture.jpg'}
          bgImageAlt="the dog"
          strength={200}
        >
          {/* <p className='h1headinga'>Toni Arakaki</p>
          <p className='h1headingb'>Okinawa Style</p> */}
          {/* <img className='center logosize' src={Logo}/> */}
          <div style={{ height: '40em' }} />
        </Parallax>

        {/* <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={bg1}
          bgImageAlt="the dog"
          strength={200}
          >
          Blur transition from min to max
          <div style={{ height: '800px' }} />
          </Parallax>
          <ThreeAcross
          imgOne={Ed}
          imgTwo={Dan}
          imgThree={Hector}
          />
          <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={bg2}
          bgImageAlt="the dog"
          strength={200}
          >
          Blur transition from min to max
          <div style={{ height: '800px' }} />
        </Parallax> */}
        <ThreeAcross
          imgOne={Info1}
          imgTwo={Info2}
          imgThree={Info3}
        />

        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={'https://i.pinimg.com/originals/f7/a8/f0/f7a8f0cf7d4755e6b148379121dc6600.jpg'}
          bgImageAlt="the dog"
          strength={200}
        >
          <h1 className="par-button"><Link className="h1headinga" to={'/sign-up'}>Sign Up</Link></h1>
          {/* <img className='center logosize' src={Logo}/> */}
          <div style={{ height: '20em' }} />
        </Parallax>

      </div>
    );
  }
}
