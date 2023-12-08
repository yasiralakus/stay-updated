export default function Complete( {email} ) {


    return (
        <div className="completeBox">

            <img src="src/assets/img/check-64px.svg" alt="check img" />

            <h2>Thanks for subscribing!</h2>

            <p>A confirmation email has been sent to <b>{email}.</b>  Please open it and click the button inside to confirm your subscription.</p>

            <button>Dismiss message</button>

        </div>
    )
}