import { useState } from "react";
import Complete from "./pages/Complete";

export default function App() {
  const [mail, setMail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [spanVisibility, setSpanVisibility] = useState('none');
  const [showComplete, setShowComplete] = useState(false);

  function handleMailChange(event) {
    const inputValue = event.target.value;
    setMail(inputValue);
    setIsInvalid(!inputValue.includes('@gmail.com'));
    setSpanVisibility('none');
  }

  function handleSubscribeClick() {
    setButtonClicked(true);

    if (mail.includes('@gmail.com')) {

      document.querySelector('.box').style.display = 'none';

      setShowComplete(true);
      
    } else {
      setSpanVisibility('inline');
    }
  }

  return (
    <>
    <div className="box">

      <div className="leftSide">

        <h1>Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <div className="checks">

          <p><img src="src/assets/img/check-21px.svg" alt="check" /><span>Product discovery and building what matters</span></p>
          <p><img src="src/assets/img/check-21px.svg" alt="check" /><span>Measuring to ensure updates are a success</span></p>
          <p><img src="src/assets/img/check-21px.svg" alt="check" /><span>And much more!</span></p>

        </div>

        <div className="form">
          <h5>Email address <span style={{ display: spanVisibility }}>Valid email required</span></h5>
          <form action="">
            <input
              type="text"
              onChange={handleMailChange}
              placeholder="email@company.com"
              style={{
                borderColor: isInvalid && buttonClicked ? 'red' : '',
                backgroundColor: !mail.includes('@gmail.com') && buttonClicked ? '#FFe8e6' : '',
              }}
            />
            <button type="button" onClick={handleSubscribeClick}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>

      </div>

      <div className="img"></div>

    </div>
      {showComplete && <Complete email={mail}/>} {/* Complete bileşeni göster */}
      </>
  );
}
