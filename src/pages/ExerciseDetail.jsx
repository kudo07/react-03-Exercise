import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/FetchFromApi';
import { fetchFromApi1 } from '../utils/FetchFromApi1';
import { useParams } from 'react-router-dom';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchFromApi(`exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData);

      //
      const exerciseVideosData = await fetchFromApi1(
        `search?query=${exerciseDetailData.name}exercise`
      );
      setExerciseVideos(exerciseVideosData.contents);

      //
      const targetMuscleExercisesData = await fetchFromApi(
        `exercises/target/${exerciseDetailData.target}`
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      //
      const equipmentExercisesData = await fetchFromApi(
        `exercises/equipment/${exerciseDetailData.equipment}`
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  {
    console.log(exerciseDetail);
  }
  if (!exerciseDetail) return <div>No data</div>;
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
