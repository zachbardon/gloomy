import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Perk from './Perk';
import perkDialog from './perkDialog';

class PerkList extends Component {
  addPerk = perk => {
    this.props.onClick(perkDialog(perk))();
  };

  render() {
    const { readonly, character } = this.props;

    const perks = character.class.perks.reduce((dict, perk) => {
      if (!dict[perk.id]) {
        dict[perk.id] = {
          ...perk,
          count: 0,
          checks: character.perks.filter(p => p.id === perk.id).length,
        };
      }
      dict[perk.id].count++;
      return dict;
    }, {});

    const perkIndex = ({ id }) => character.class.perks.findIndex(p => p.id === id);
    const sortPerks = (a, b) => perkIndex(a) - perkIndex(b);

    return (
      <div>
        {Object.values(perks)
          .sort(sortPerks)
          .map(p => <Perk key={p.id} perk={p} perkUp={character.perkUp} onClick={this.addPerk} readonly={readonly} />)}
      </div>
    );
  }
}

PerkList.propTypes = {
  character: PropTypes.object.isRequired,
};

PerkList.defaultProps = {};

export default PerkList;
