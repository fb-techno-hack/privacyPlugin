import React from 'react';
import './_three-across.scss';



export default class ThreeAcross extends React.Component {
  render() {
    return(
      <section className="container-three-across">
        <div className="narrow">
          <p className='infoheading'>Opt-In – Turn On – Cash Out</p>
          <div className='box'>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgOne}/>
              <p className="messge">It's your data and information.  You should have control over who gets your data, what they are allowed to know, and be compensated if they do.</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgTwo}/>
              <p className="messge">Take control of your data history.  Your browsing behavior helps create more precise user group, but only when you have the app turned on</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgThree}/>
              <p className="messge">Monetize your data.  When someone wants to advertise to your user group, you should be compensated for helping create more profitable ad campaigns</p>
            </div>
          </div>
        </div>

        <div className="wide">
          <p className='infoheading'>Opt-In  –  Turn On  –  Cash Out</p>
          <div className='box'>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgOne}/>
              <p className="messge">It's your data and information.  You should have control over who gets your data, what they are allowed to know, and be compensated if they do.</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgTwo}/>
              <div className='boxtext'><p className="messge">Take control of your data history.  Your browsing behavior helps create more precise user group, but only when you have the app turned on</p></div>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgThree}/>
              <div className='boxtext'><p className="messge">Monetize your data.  When someone wants to advertise to your user group, you should be compensated for helping create more profitable ad campaigns</p></div>
            </div>
          </div>
        </div>


      </section>
    );
  }
}
