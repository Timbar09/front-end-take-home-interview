import './Form.css';

export default function Form() {
  return (
    <div className="container">
      <div className="form__notice--alert">
        <p className="form__notice--alert__text">
          Success! You have submitted 5 pending referrals. You will be notified
          once they&apos;ve been approved.
        </p>
      </div>
    </div>
  );
}
