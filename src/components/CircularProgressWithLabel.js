import { CircularProgress, Typography, Box } from '@mui/material';

export const CircularProgressWithLabel = (props) => {
  const { progress } = props;
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        background: 'transparent',
      }}
    >
      <CircularProgress
        size={120}
        disableShrink={true}
        value={progress}
        variant="determinate"
        thickness={5}
        color="secondary"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" component="div" color="pink">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
