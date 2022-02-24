import { Box } from 'theme-ui'
import { Button, LinkGroup } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import Date from './date'

const Highlight = ({
  id,
  href,
  title,
  date,
  summary,
  color,
  links,
  logo,
  sx,
}) => {
  return (
    <Box
      sx={{
        pt: [4, 4, 0, 0],
        pb: [4, 4, 3, 4],
        mb: [0, 0, 6, 7],
        pl: [4, 5, 5, 6],
        ml: [-4, -5, -5, -6],
        borderLeft: ({ colors }) => [
          'none',
          'none',
          `solid 1px ${colors.muted}`,
          `solid 1px ${colors.muted}`,
        ],
        ...sx,
      }}
    >
      <Date date={date} sx={{ mb: [3, 3, 2] }} />
      <Box
        sx={{
          mb: ['15px', '14px', '15px', '15px'],
          ml: ['-1px'],
        }}
      >
        <Button
          href={href || `research/${id}`}
          tracking
          suffix={
            <RotatingArrow
              color={color}
              sx={{ width: [20, 20, 26, 36], height: [20, 20, 26, 36] }}
            />
          }
          size='md'
          sx={{
            lineHeight: 'heading',
            fontFamily: 'heading',
            fontSize: [4, 4, 5, 6],
          }}
        >
          {title}
        </Button>
      </Box>

      <Box
        sx={{
          mt: [2],
          mb: [1],
          fontSize: [2, 2, 2, 3],
          lineHeight: 1.35,
        }}
      >
        {summary}
      </Box>
      <Box
        sx={{
          mt: ['12px'],
          fontSize: [2, 2, 2, 3],
          userSelect: 'none',
        }}
      >
        <Box sx={{ mb: [-1] }}>
          <LinkGroup
            inverted
            tracking
            members={links}
            spacing={[4, 4, 4, 5]}
            sx={{ mt: '14px', mb: '2px' }}
          />
        </Box>
      </Box>
      {logo}
    </Box>
  )
}

export default Highlight
