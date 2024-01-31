import { Stack } from '@mui/material';

import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <InfinitySpin color="orange" />
      </Stack>
    </div>
  );
};

export default Loader;
