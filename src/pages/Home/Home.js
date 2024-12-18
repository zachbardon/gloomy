import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CampaignList } from '../../components/CampaignList';
import { Cards } from '../../components/Cards';

import connectConfig from './connect';

class Home extends Component {
  login = event => {
    event.preventDefault();
    window.authManager.login();
  };

  render() {
    const { authenticated, campaign } = this.props;

    return (
      <div className="col-12">
        <h5>Gloomhaven Campaign Manager</h5>
        <div className="row">
          <div className="col-12 col-md-8">
            {authenticated && <CampaignList />}
            {!authenticated && (
              <p>
                <a href="#login" onClick={this.login}>
                  Log in
                </a>{' '}
                to get started.
              </p>
            )}
          </div>
          <div className="col-12 col-md-4">{authenticated && <Cards classes={campaign.classes} />}</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  campaign: PropTypes.object.isRequired,
};

Home.defaultProps = {};

export default connect(...connectConfig)(Home);
