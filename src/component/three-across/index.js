import React from 'react';
import './_three-across.scss';



export default class ThreeAcross extends React.Component {
  render() {
    return(
      <section className="container-three-across">   
        <div className="narrow">
          <p className='infoheading'>Safe -- Secure -- Open Source</p>
          <div className='box'>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgOne}/>
              <p>Traceability one step back, one step up what, where and when disparate methods</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgTwo}/>
              <p>Transparency entire, interconnected view what, where and when how it’s produced other attributes</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgThree}/>
              <p>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner.</p>
            </div>
          </div>
        </div>

        <div className="wide">
          <p className='infoheading'>Safe -- Secure -- Open Source</p>
          <div className='box'>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgOne}/>
              <p>Traceability one step back, one step up what, where and when disparate methods</p>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgTwo}/>
              <div className='boxtext'><p>Transparency entire, interconnected view what, where and when how it’s produced other attributes</p></div>
            </div>
            <div className='boximg'>
              <img className='infoimg' src={this.props.imgThree}/>
              <div className='boxtext'><p>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner. Complex mathematical functions create secure and definitive records of who owns what, when.</p></div>
            </div>
          </div>
        </div>

        
      </section>
    );
  }
}