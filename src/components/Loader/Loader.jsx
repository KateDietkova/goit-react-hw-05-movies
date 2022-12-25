import { BallTriangle } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#f58a2c"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </Box>
  );
};
