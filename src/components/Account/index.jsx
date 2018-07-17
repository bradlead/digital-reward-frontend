import React from 'react';
import axios from 'axios';
import './style.scss';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      account: {
        description: '',
      },
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/account')
    .then((response) => {
      this.setState({ account: response.data[0].account });
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <div className="monzo-accounts">
          <h1>
            {this.state.account.description}'s Rewards
          </h1>
        </div>
      </div>
    );
  }
}

export default Account;
