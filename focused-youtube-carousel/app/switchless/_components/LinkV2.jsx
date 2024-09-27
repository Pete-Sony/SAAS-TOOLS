import { Link as JoyLink } from '@mui/joy'
import NextLink from 'next/link'

export default function Link({ href, sx={},target = '_self', onClick= () => {},Component = null, children }) {
  if (Component) {
    return (
      <NextLink href={href} target={target} passHref>
        <Component
          onClick={(e) => {
            if (onClick) {
              onClick(e);
            }
          }}
          {...(Object.keys(sx).length > 0 && { sx })}
        >
          {children}
        </Component>
      </NextLink>
    )
  }

  return (
      <JoyLink
        color="neutral"
        component={NextLink}
        underline="none"
        target={target}
        href={href}
        sx={{
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "none" },
          ...(Object.keys(sx).length > 0 ? sx : {})
        }}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
      >
        {children}
      </JoyLink>
  )
}
