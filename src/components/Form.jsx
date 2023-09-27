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

      <h2 className="form__title">Referral Patients</h2>
      <p className="form__description">
        You can add up to five patients at a time
      </p>
    </div>
  );
}
