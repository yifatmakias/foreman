import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import ImpersonateIcon from './ImpersonateIcon';

const fixtures = {
  'should render': {
    stopImpersonationUrl: '/stop_impersonation',
    stopImpersonating: () => {},
  },
};

describe('ImpersonateIcon', () =>
  testComponentSnapshotsWithFixtures(ImpersonateIcon, fixtures));
