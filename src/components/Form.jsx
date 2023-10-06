import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

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

      <div className="form__container">
        <header className="form__header">
          <span className="form__header--color">1</span>
          <h3 className="form__header--name">New Referral</h3>
        </header>

        <form action="#" className="form__content">
          <Box sx={{ padding: '2rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Full Name*"
                  variant="standard"
                  sx={{ width: '100%' }}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Last Name*"
                  variant="standard"
                  sx={{ width: '100%' }}
                />
              </Box>
            </Box>
          </Box>
        </form>
      </div>
    </div>
  );
}
