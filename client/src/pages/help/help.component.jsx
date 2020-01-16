import React, { useEffect } from 'react';
//import { createStructuredSelector } from 'reselect';

import InfoComponent from '../../components/info/info.component';
import { HelpPageContainer } from './help.styles';

//import { connect } from 'react-redux';
//import { selectCallCenterList } from '../../redux/call-center/call-center.selectors';
//import { getCallCenterStart } from '../../redux/call-center/call-center.actions';

const HelpPage = ({ getCallCenter, callCenter, currentUser }) => {
  /*useEffect(() => {
    getCallCenter({ personTag: currentUser.personTag });
  }, [getCallCenter, currentUser]);
*/
  const infoHelp = {
    title: 'YOU NEED HELP?',
    description: 'Description of Help',
  };

  return (
    <HelpPageContainer>
      <InfoComponent {...infoHelp} />
    </HelpPageContainer>
  );
};

/*const mapDispatchToProps = dispatch => ({
  getCallCenter: personTag => dispatch(getCallCenterStart(personTag)),
});

const mapStateToProps = createStructuredSelector({
  callCenter: selectCallCenterList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpPage);
*/

export default HelpPage;
