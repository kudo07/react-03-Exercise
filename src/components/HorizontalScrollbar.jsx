import { Box, Button, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => (
  <Splide
    options={{
      type: 'slide',
      perPage: 4,
      breakpoints: {
        600: {
          perPage: 1,
        },
        // drag: true, // Enable drag and scroll with the mouse.
        // wheel: true,
      },
    }}
  >
    {data.map((item) => (
      <SplideSlide key={item.id || item}>
        <Box itemId={item.id || item} title={item.id || item} m="0 40px">
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      </SplideSlide>
    ))}
  </Splide>
);

export default HorizontalScrollbar;
