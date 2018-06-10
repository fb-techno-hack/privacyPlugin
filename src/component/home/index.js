import React from 'react';
import Logo from './1200x600.gif';
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
            fontSize: '2em',
            paddingBottom: '0.5em',
          }}> Hyperledger Supply Chain </strong> 
          <br />
          <span>
  I've been researching this myself for the last few weeks. The short answer to your question is that Hyperledger is fundamentally superior to ethereum for this use case.
  With ethereum, you are not in control of your network. Every update, every state change of an asset will cost you money. Furthermore, the status of your supply chain (assuming you're using ethereum to asset track) will be completely public which for many companies is inexcusable. And lastly, if there was a mistake or a problem with your supply chain, you would not have the power to easily amend the problem. With ethereum, you do not control your infrastructure.
  Hyperledger on the other hand is a private ledger system with a robust framework for crafting transactions. Since it's private, your data will not be public and you do not have to depend on mining to update your network. IBM released their findings on using Hyperledger for supply chain, and they suggest using a model dubbed "Proof-of-existance" which would work much better than PoW since transactions could be backed by something that proves that the state change occured (shipping or financial documents). Not to mention updating your state of the supply chain would not cost anything. That alone would invalidate the ethereum candidate.
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
          {/* <p className='h1headinga'>Toni Arakaki</p>
          <p className='h1headingb'>Okinawa Style</p> */}
          {/* <img className='center logosize' src={Logo}/> */}
          <div style={{ height: '40em' }} />
        </Parallax> 

      </div>
    );
  }
}