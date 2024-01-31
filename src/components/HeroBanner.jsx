import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

import banner from '../assets/images/banner.jpg';
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography>
        Sweat, Smile, <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            background: '#FF2625',
            padding: '15px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'azure',
            borderRadius: '4px',
          }}
        >
          Explore Excercises
        </a>
        <Typography
          fontWeight={600}
          color="#000000"
          sx={{
            marginLeft: '270px',
            top: '-600px',
            position: 'relative',
            opacity: '0.1',
            display: { lg: 'block', xs: 'none' },
            fontSize: '170px',
          }}
        >
          FITNESS
        </Typography>
        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{
            top: '-35px',
            position: 'relative',
            opacity: '0.1',
            display: { lg: 'block', xs: 'none' },
            fontSize: '200px',
          }}
        >
          Exercise
        </Typography>
      </Stack>
      <img src={banner} alt="alt-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
