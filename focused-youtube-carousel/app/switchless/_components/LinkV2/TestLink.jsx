import Link from '@mui/joy/Link';

export default function TestLink() {
  return (
    <Link
      href="/"
      sx={{
        position: 'relative',
        display: 'inline-block',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'red',
          transform: 'scaleX(0)',
          transformOrigin: 'right',
          transition: 'transform 0.3s ease',
        },
        '&:hover': {
          color: 'darkred',
          '&::before': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(255, 0, 0, 0.3)',
        },
      }}
    >
     Click on me
    </Link>
  );
}
