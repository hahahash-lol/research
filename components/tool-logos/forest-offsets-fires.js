import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, red, background } = context.theme.colors

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      <style type='text/css'>
        {`
  .st0-of{fill:${background};}
  .st1-of{opacity:0.5;fill:${red};}
  .st2-of{opacity:0.5;fill:${primary};}
  .st3-of{fill:${red};}
`}
      </style>
      <rect x='0' className='st0-of' width='150' height='100' />
      <g>
        <path
          className='st1-of'
          d='M92.3,100c-30.5,0-61,0-91.6,0C0.1,100,0,99.9,0,99.3c0-21.5,0-43,0-64.5c1-0.2,2-0.1,2.8-0.7
    c0.6-0.4,1.1-0.9,1.7-1.3c0.6-0.5,1.2-0.7,2-0.5c1.2,0.2,2.3,0.1,3-1.2c0.4-0.8,0.9-1.5,1.6-2.1c0.5-0.4,0.6-1,0.6-1.6
    c0-0.6,0.2-1.1,0.7-1.6c0.4-0.4,1-0.7,1.3-1.4c0.3-0.9,0.6-1,1.4-0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.3,0.8,0.6-0.1,0.8
    c-0.1,0-0.1,0.1-0.2,0.2c-0.2,0.4,0,0.6,0.3,0.8c0.3,0.3,0.5,0.2,0.8,0c0.4-0.3,0.7-0.7,1.1,0c0.1,0.2,0.5,0.2,0.6,0.1
    c0.4-0.3,0.8-0.2,1.2-0.3c0.2,0,0.3,0,0.3-0.3c-0.2-0.6,0-1.1,0.5-1.4c0.6-0.4,1.2-0.8,2-0.2c0.5,0.4,1.8,0.3,2.3-0.1
    c0.5-0.5,1.1-0.7,1.7-1c0.2-0.1,0.4-0.2,0.6,0c0.5,0.4,1,0.3,1.5,0.3c0.5,0,0.9,0.1,1.3,0.4c0.6,0.5,1.4,0.7,2.2,0.6
    c0.6-0.1,0.7-0.1,0.4-0.7c-0.3-0.4-0.1-0.6,0.2-0.8c0.3-0.2,1.2,0.2,1.4,0.5c0.4,0.9,0.9,1.7,2.1,1.6c0.1,0,0.3,0,0.3,0.1
    c0.3,0.6,1,0.5,1.5,0.8c0.2,0.1,0.3,0,0.4-0.1c0.6-1,1.5-1.8,2.1-2.8c0.5-0.8,0.8-1.9,1.9-2.3c0.4-0.1,0.9-0.3,0.9-0.1
    c0.2,0.4,0.6,0.9,0.3,1.4c-0.3,0.6,0.2,1.7,0.8,1.8c0.8,0.1,1.7,0.1,2-0.6c0.6-1.3,1.3-0.8,2.1-0.5c0,0,0,0,0.1,0
    c0.6,0.2,0.7,0.5,0.3,1c-0.4,0.5-0.4,0.9,0.1,1.3c0.8,0.7,0.9,1.6,0.7,2.5c-0.2,0.7-0.4,1.3-0.6,2c-0.1,0.5-0.1,1,0,1.4
    c0.1,0.3,0.5,0.3,0.8,0.3c0.1,0,0.2,0.1,0.3,0.2c0.2,0.5,0.7,0.6,1.2,0.7c0.8,0.1,1.5,0.4,2.3,0.4c0.7,0,1.4-0.1,2.1,0
    c0.6,0.1,1.3,0.1,1.8-0.3c0.7-0.5,0.8,0.2,1,0.4c0.3,0.4,0.2,0.7-0.3,0.9c-0.7,0.3-1.1,0.9-0.9,1.5c0.3,1,0.2,1.2-0.9,1.5
    c-0.5,0.1-0.6,0.7-1,0.9c-0.1,0.1,0.4,0.5,0.6,0.7c0.3,0.2,0.7,0.1,1,0c1.2-0.3,1.7,0,2,1.3c0.3,1,0.4,2.1,0.8,3.1
    c0.5,1.2,1.5,1.8,2.4,2.5c0.4,0.3,0.9,0.4,1.3,0.8c0.1,0.1,0.2,0.3,0.5,0.2c0.8-0.5,0.9,0.1,1,0.6c0.1,0.5,0.2,0.9,0,1.4
    c-0.1,0.5-0.1,1,0,1.5c0.1,0.4,0.1,0.8,0.7,0.7c0.5-0.1,1-0.3,1.2-0.8c0.1-0.3,0-0.6,0.3-0.7c0.4-0.1,0.5,0.3,0.7,0.4
    c0.2,0.1,0.3,0.4,0.4,0.6c0.4,0.7,0.5,0.7,0.8,0c0.2-0.3,0.4-0.5,0.7-0.3c0.3,0.1,0.4,0.5,0.3,0.8c-0.4,0.6-0.4,1.5-0.8,2.1
    c-0.3,0.4,0,0.6,0.3,0.6c0.8,0,1.1,0.6,1.3,1.2c0.1,0.3,0.5,0.3,0.5,0.2c0.3-0.8,0.8-0.3,1.3-0.3c0.3,0,0.5,0.1,0.4,0.5
    c-0.2,0.7-0.2,1.4,0.5,2.1c0.5,0.5,0.9,1.1,0.9,1.8c0.2,0.3,0.4,0.7,0.3,1.1c-0.4,1-0.4,1,0.5,1.5c0.2,0.1,0.3,0.2,0.3,0.3
    c0.1,0.2,0.2,0.5-0.1,0.5c-0.4,0-0.7,0.4-1.1,0.5c-0.5,0.2-0.7,0.7-0.5,1.2c0.2,0.9,0.4,1.9-0.1,2.8c-0.1,0.1-0.1,0.2,0,0.3
    c1,0.2,1.1,1.1,1.5,1.8c0.1,0.3,0.4,0.5,0.6,0.5c1,0.1,2.1,0.4,3-0.3c0.2-0.2,0.5-0.3,0.7,0c0.4,0.9,1.2,1.2,2.1,1.4
    c0.2,0,0.4,0.2,0.6,0.3c0.2,0.1,0.5,0.2,0.7,0.2c0.3,0.1,0.4,0.3,0.2,0.6c-0.1,0.1-0.2,0.3,0,0.4c0.2,0.1,0.3,0,0.4-0.2
    c0.1-0.2,0.1-0.5,0.4-0.5c1.2,0.4,1.3,0.4,1.2,1.7c0,0.1,0,0.2,0,0.3c0.1,0.3,0,0.4-0.3,0.5c-0.5,0.2-0.9,1.2-0.4,1.5
    c0.7,0.4,0.8,0.9,0.7,1.5c0,0.3,0.1,0.6,0.3,0.9c0.3,0.5,0.3,1,0.3,1.6c-0.1,0.8-0.1,1.5-0.3,2.3c-0.1,0.5-0.1,1.1-0.7,1.3
    c-0.1,1.4,0,2.8-0.1,4.3c-0.2,0.7-0.3,1.4,0.3,2c0,0.3,0.1,0.4,0.4,0.5l0,0c0.1,0.1,0.1,0.1,0.2,0.2l0,0c0.3,0.9,0.8,1.8,1.4,2.5
    c0.2,0.2,0.5,0.4,0.7,0.7c0,0,0.1,0.1,0.1,0.1l0,0c0.4,0.9,0.9,1.8,1.9,2.2c0.3,0.8,0.7,1.5,1.3,2.1C91.8,97.3,92.6,98.4,92.3,100z
    '
        />
        <path
          className='st0-of'
          d='M117.2,0c10.8,0,21.5,0,32.3,0c0.5,0,0.6,0.1,0.6,0.6c0,32.9,0,65.9,0,98.8c0,0.5-0.1,0.6-0.6,0.6
    c-14.9,0-29.7,0-44.6,0c0-1.4-0.1-2.8-0.1-4.2c0-0.5-0.2-0.6-0.7-0.6c-1.6,0-3.3,0-4.9,0c-1,0-1,0-1-1.1c0-5.2,0.3-10.5,0.1-15.7
    c-0.4-7.8-0.2-15.6-0.3-23.4c0-0.7,0.2-0.9,0.9-0.8c0.8,0,1.6,0,2.5,0c5.3,0,10.6-0.1,15.9-0.1c0.9,0,0.9,0,0.9-0.9
    c0-3.8-0.1-7.6-0.1-11.5c0-1,0-1,1-1c5.6,0,11.2-0.1,16.8-0.1c0.7,0,0.9-0.2,0.8-0.9c0-1.7,0-3.4,0-5.1c0-0.6,0.2-0.8,0.8-0.8
    c1.7,0,3.4-0.1,5.1-0.1c0.5,0,0.7-0.1,0.7-0.6c0-1.8,0-3.7,0-5.5c0-0.4-0.1-0.6-0.6-0.6c-2.8,0.2-5.6,0.2-8.4,0.2
    c-0.3,0-0.6,0.1-0.8,0.3c-0.7,0.6-1.6,0.9-2.5,0.9c-0.6,0-1.1,0.2-1.6,0.5c-1.1,0.7-2.3,0.9-3.6,0.9c-0.3,0-0.9,0.1-0.9-0.3
    c0-0.5,0.5-0.3,0.8-0.3c1.4,0,2.7-0.2,4-0.9c0.4-0.2,0.8-0.3,1.3-0.3c0.6,0,1.2-0.1,1.9-0.6c-0.4,0-0.6,0-0.9,0c-2.6,0-5.3,0-7.9,0
    c-0.6,0-0.7-0.2-0.7-0.7c0-0.7,0-1.4-0.1-2c-0.1-0.6,0.1-0.8,0.8-0.8c1.8,0,3.6,0,5.4,0c0.5,0,0.7-0.2,0.6-0.7
    c-0.1-0.6,0-1.2-0.1-1.8c-0.1-0.7,0.2-0.9,0.8-0.9c0.6,0,1.3-0.1,1.9-0.1c0.5,0,0.7-0.2,0.7-0.7c0-1.7-0.1-3.5,0-5.2
    c0-0.5-0.2-0.7-0.7-0.6c-4.6,0.1-9.2,0.2-13.9,0.3c-0.7,0-0.9-0.2-0.9-0.9c0.1-3.7,0.1-7.3,0.1-11c0-0.6,0-1.2-0.6-1.6
    C117.3,0.4,117.1,0.3,117.2,0z M121.3,86.7c0,0-0.1,0-0.1,0c0-1.5,0-3,0-4.4c0-0.4-0.1-0.6-0.5-0.6c-1.7,0-3.5,0.1-5.2,0.1
    c-0.4,0-0.5,0.1-0.5,0.5c0,0.7,0,1.5,0,2.2c0,0.4,0.1,0.6,0.5,0.5c0.7,0,1.3,0,2,0c0.6,0,0.8,0.2,0.8,0.8c0,1.7,0,3.5,0,5.2
    c0,0.5,0.2,0.8,0.7,0.7c0.6,0,1.1,0,1.7,0c0.5,0,0.7-0.2,0.7-0.7C121.3,89.6,121.3,88.2,121.3,86.7z M113.7,77.1
    c0.3,0,0.5,0.2,0.7,0.3c0.1,0.1,0.3,0.2,0.4,0c0.1-0.2,0-0.3-0.2-0.4c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1-0.1-0.2-0.2-0.2-0.3
    c0-0.2,0.1-0.2,0.3-0.2c0.8,0.1,0.5-0.5,0.5-0.9c0.1-0.5-0.3-0.5-0.6-0.5c-1.7,0-3.4,0-5.2,0c-0.5,0-0.7,0.2-0.7,0.7
    c0,1.8,0,3.7,0,5.5c0,0.5,0.2,0.6,0.6,0.6c1.3,0,2.6,0,3.9,0c1.9,0,1.9,0,1.9-1.9c0-1.1,0-2-1.1-2.5
    C113.7,77.2,113.7,77.2,113.7,77.1z'
        />
        <path
          className='st0-of'
          d='M89.4,94.3c-1-0.4-1.5-1.3-1.9-2.2c1.5,0.7,3.1,1.3,3.9,2.9c0.2,0.4,0.5,0.6,1,0.7c1,0.1,2,0.2,3,0.2
    c0.5,0,1-0.2,1.6-0.4c0.2-0.1,0.3-0.2,0.2-0.4c-0.1-0.5-0.2-1.1-0.3-1.6c-0.3-0.8-0.6-1.5-0.5-2.4c0.1-0.5-0.2-0.9-0.5-1.2
    c-0.3-0.3-0.7-0.6-0.8-1.1c-0.2-0.9-1.4-2.2-2.3-2.4c-0.6-0.1-1.1-0.5-1.4-1c-0.3-0.5-0.4-1.1-0.1-1.6c0.5-0.7,0.7-1.4,0.1-2.2
    C91,81.3,91,81,91,80.7c0-0.2,0.1-0.5-0.1-0.7c-1.1-1.6-1.5-3.5-2.4-5.1c-0.9-1.8-1.8-3.6-3.7-4.6c-0.6-0.3-0.9-0.3-1.2,0.2
    c-0.3,0.1-0.3,0.3-0.4,0.5c-0.1,0.1-0.2,0.3-0.4,0.2c-0.2-0.1-0.1-0.3,0-0.4c0.3-0.3,0.1-0.4-0.2-0.6c0.1-0.5,0.2-1,0.7-1.1
    c0.5-0.2,0.4-0.4,0.3-0.7c-0.1-0.3-0.3-0.5-0.4-0.8c-0.2-0.5-0.4-1,0.2-1.4c0.3-0.2,0.4-0.6,0.1-1c-0.6-0.9-0.8-2-0.9-3
    c-0.1-0.6-0.3-0.8-0.9-1c-1.2-0.4-2.5,0.3-3.6-0.6c-0.1-0.1-0.4,0-0.6,0.1c-0.8,0.2-1.6,0.4-2.4,0.4c-0.1-0.2-0.2-0.3-0.3-0.3
    C73.9,60,73.9,60,74.3,59c1.5-0.2,3-0.5,4.5-0.2c0.2,0,0.4,0,0.6,0.2c0.4,0.7,1,0.9,1.7,0.9c0.2,0,0.5,0.2,0.6-0.1
    c0.1-0.2-0.1-0.4-0.3-0.5c-0.2-0.2-0.3-0.4-0.5-0.6c-0.3-0.4-0.6-0.8-0.8-1.2c-0.5-0.7-0.5-1.7-1.4-2.2c-0.3-0.1-0.2-0.5-0.3-0.8
    c0-0.2,0-0.5-0.3-0.4c-0.9,0.2-1.8,0.1-2.7,0.1c-0.4,0-0.5,0.2-0.5,0.5c0,0.7,0,1.3,0,2c0,0.9,0,1-1,1.1c-0.1-0.7-0.5-1.4-0.9-1.8
    c-0.7-0.6-0.7-1.3-0.5-2.1c0.1-0.4,0-0.5-0.4-0.5c-0.4,0-1-0.4-1.3,0.3c-0.1,0.1-0.4,0.2-0.5-0.2c-0.2-0.6-0.5-1.2-1.3-1.2
    c-0.3,0-0.6-0.2-0.3-0.6c0.4-0.6,0.4-1.4,0.8-2.1c0.2-0.2,0.1-0.6-0.3-0.8c-0.3-0.1-0.5,0-0.7,0.3c-0.4,0.6-0.5,0.6-0.8,0
    c-0.1-0.2-0.2-0.5-0.4-0.6c-0.2-0.2-0.4-0.5-0.7-0.4c-0.3,0.1-0.3,0.4-0.3,0.7c-0.2,0.6-0.6,0.7-1.2,0.8c-0.6,0.1-0.6-0.3-0.7-0.7
    c-0.1-0.5-0.1-1,0-1.5c0.1-0.5,0-0.9,0-1.4c-0.1-0.6-0.2-1.1-1-0.6c-0.2,0.2-0.4,0-0.5-0.2c-0.3-0.4-0.9-0.5-1.3-0.8
    c-0.9-0.6-1.9-1.3-2.4-2.5c-0.4-1-0.5-2.1-0.8-3.1c-0.3-1.2-0.7-1.6-2-1.3c-0.3,0.1-0.7,0.2-1,0c-0.3-0.2-0.7-0.6-0.6-0.7
    c0.4-0.3,0.5-0.8,1-0.9c1.1-0.3,1.2-0.5,0.9-1.5c-0.2-0.5,0.2-1.2,0.9-1.5c0.5-0.2,0.7-0.5,0.3-0.9c-0.2-0.3-0.3-1-1-0.4
    c-0.5,0.4-1.2,0.3-1.8,0.3c-0.7-0.1-1.4,0-2.1,0c-0.7,0-1.5-0.3-2.3-0.4c-0.5-0.1-1-0.2-1.2-0.7c0-0.1-0.2-0.2-0.3-0.2
    c-0.3-0.1-0.7-0.1-0.8-0.3c-0.1-0.4-0.1-0.9,0-1.4c0.2-0.7,0.4-1.3,0.6-2c0.2-0.9,0.1-1.8-0.7-2.5c-0.5-0.4-0.6-0.8-0.1-1.3
    c0.4-0.5,0.3-0.8-0.3-1c0,0,0,0-0.1,0c-0.8-0.4-1.5-0.9-2.1,0.5c-0.3,0.7-1.3,0.7-2,0.6c-0.7-0.1-1.2-1.2-0.8-1.8
    c0.3-0.5-0.1-1-0.3-1.4c-0.1-0.2-0.6-0.1-0.9,0.1c-1.1,0.4-1.4,1.5-1.9,2.3c-0.6,1-1.5,1.8-2.1,2.8c-0.1,0.2-0.2,0.2-0.4,0.1
    c-0.5-0.3-1.2-0.2-1.5-0.8c0-0.1-0.2-0.1-0.3-0.1c-1.2,0.2-1.7-0.7-2.1-1.6c-0.2-0.3-1.1-0.7-1.4-0.5c-0.3,0.2-0.5,0.4-0.2,0.8
    c0.4,0.6,0.3,0.6-0.4,0.7c-0.8,0.1-1.6-0.1-2.2-0.6c-0.4-0.3-0.8-0.4-1.3-0.4c-0.5,0-1.1,0.1-1.5-0.3c-0.2-0.2-0.4-0.1-0.6,0
    c-0.6,0.3-1.2,0.5-1.7,1c-0.4,0.4-1.7,0.5-2.3,0.1c-0.8-0.5-1.4-0.1-2,0.2c-0.5,0.3-0.7,0.8-0.5,1.4c0.1,0.3,0,0.3-0.3,0.3
    c-0.4,0-0.8-0.1-1.2,0.3c-0.1,0.1-0.5,0.1-0.6-0.1c-0.4-0.7-0.7-0.3-1.1,0c-0.2,0.2-0.5,0.4-0.8,0c-0.2-0.3-0.5-0.4-0.3-0.8
    c0-0.1,0.1-0.2,0.2-0.2c0.8-0.2,0.3-0.5,0.1-0.8c-0.1-0.1-0.3-0.2-0.4-0.3c-0.8-0.6-1.1-0.6-1.4,0.3c-0.2,0.7-0.8,0.9-1.3,1.4
    c-0.5,0.4-0.7,1-0.7,1.6c0,0.6-0.1,1.2-0.6,1.6c-0.7,0.6-1.2,1.3-1.6,2.1c-0.7,1.2-1.8,1.4-3,1.2c-0.8-0.2-1.4,0.1-2,0.5
    c-0.6,0.4-1.1,0.9-1.7,1.3C2,34.7,1,34.6,0,34.8C0,23.2,0,11.6,0,0c30.5,0,60.9,0,91.4,0c0.1,0.3,0.1,0.7,0.1,1c0,6,0,12,0,18
    c0,0.2,0,0.5,0,0.7c0,0.2,0,0.3,0.2,0.4c0.9,0.4,1,1.2,0.3,1.8c-0.4,0.4-0.6,0.8-0.6,1.4c0,5.6-0.1,11.1-0.1,16.7c0,1,0,1-1,1
    c-3.8,0-7.6,0-11.5-0.1c-0.7,0-0.8,0.2-0.8,0.8c0,3.4,0,6.7,0,10.1c0,0.7-0.1,1.3,0.7,1.7c0.3,0.1,0.3,0.5,0.3,0.8
    c0.1,0.4,0.2,0.8,0.7,1c0.3,0.1,0.5,0.5,0.6,0.9c0.3,1.1,1,1.9,1.7,2.8c0.6,0.6,1.5,1.1,1.3,2.4c-0.2,1.1,0.5,2.2,0.9,3.3
    c0.2,0.6,0.4,1.1,0,1.7c-0.3,0.4-0.3,0.8,0,1.2c0.1,0.2,0.2,0.4,0.3,0.6c0.1,1,0.7,1.6,1.6,2c0.9,0.4,1.6,1.1,1.9,2
    c0.2,0.4,0.4,0.8,0.7,1.2c0.6,0.8,1.1,1.8,1.4,2.7c0.4,1,0.7,2.1,1.3,3c0.4,0.6,0.6,1.1,0.6,1.8c0,0.2,0.1,0.4,0.2,0.6
    c0.5,0.9,0.3,1.7-0.3,2.5c-0.3,0.4-0.2,0.8,0.3,1.1c0.3,0.1,0.6,0.3,0.9,0.3c0.4,0,0.7,0.2,0.9,0.6c0.2,0.4,0.4,0.8,0.9,0.9
    c0.4,0.1,0.5,0.4,0.6,0.7c0.1,0.6,0.5,1.1,1,1.6c0.6,0.6,1,1.2,0.7,2.1c-0.1,0.2,0,0.4,0.1,0.6c0.5,0.9,0.7,1.8,0.7,2.8
    c0,0.2,0.1,0.5,0.2,0.7c0.6,0.5,0.6,1.2,0.6,1.9c0,0.9,0,1.9,0.2,2.8c-0.3,0-0.6,0-0.8,0c0-1.1,0-2.1,0-3.2c0-0.7-0.3-0.9-1-0.9
    c-0.6,0-1.1,0.3-1.7,0.2C94.3,96,93.3,96,92.4,96c-0.6,0-1-0.2-1.3-0.6c-0.2-0.2-0.4-0.6-0.6-0.9C90.2,94.1,89.9,93.8,89.4,94.3z'
        />
        <path
          className='st2-of'
          d='M98.8,100c-0.2-0.9-0.2-1.9-0.2-2.8c0-0.7,0-1.4-0.6-1.9c-0.2-0.2-0.2-0.4-0.2-0.7c-0.1-1-0.2-1.9-0.7-2.8
    c-0.1-0.2-0.1-0.4-0.1-0.6c0.3-0.9-0.1-1.5-0.7-2.1c-0.5-0.4-0.8-0.9-1-1.6c-0.1-0.3-0.2-0.6-0.6-0.7c-0.5-0.1-0.7-0.5-0.9-0.9
    c-0.2-0.4-0.5-0.6-0.9-0.6c-0.3,0-0.6-0.1-0.9-0.3c-0.5-0.3-0.6-0.7-0.3-1.1c0.5-0.8,0.8-1.6,0.3-2.5c-0.1-0.2-0.2-0.4-0.2-0.6
    c0-0.7-0.2-1.2-0.6-1.8c-0.6-0.9-0.9-2-1.3-3c-0.3-1-0.8-1.9-1.4-2.7c-0.3-0.4-0.5-0.8-0.7-1.2c-0.4-1-1-1.6-1.9-2
    c-0.9-0.4-1.4-1-1.6-2c0-0.2-0.2-0.4-0.3-0.6c-0.2-0.4-0.3-0.8,0-1.2c0.4-0.5,0.2-1,0-1.7c-0.4-1.1-1-2.2-0.9-3.3
    c0.2-1.3-0.7-1.7-1.3-2.4c-0.8-0.8-1.4-1.7-1.7-2.8c-0.1-0.4-0.3-0.7-0.6-0.9c-0.5-0.2-0.6-0.6-0.7-1c-0.1-0.3-0.1-0.6-0.3-0.8
    c-0.7-0.4-0.7-1.1-0.7-1.7c0-3.4,0-6.7,0-10.1c0-0.6,0.2-0.8,0.8-0.8C82.7,41,86.6,41,90.4,41c1,0,1,0,1-1c0-5.6,0.1-11.1,0.1-16.7
    c0-0.6,0.1-1,0.6-1.4c0.7-0.7,0.6-1.4-0.3-1.8c-0.2-0.1-0.2-0.2-0.2-0.4c0-0.2,0-0.5,0-0.7c0-6,0-12,0-18c0-0.3,0-0.7-0.1-1
    c3.9,0,7.8,0,11.7,0c0,0.3,0.4,0.5,0.2,0.7c-0.2,0.2-0.5,0.1-0.7,0c-0.2,0-0.5-0.1-0.6,0.2c0,0.3,0,0.7,0.4,0.7
    c0.7,0,0.9,0.5,1.2,1c0.4,0.8,0.9,1,1.7,0.7c0.3-0.1,0.6-0.2,0.9-0.1c0.6,0.2,1.1,0.4,1.8,0.2c0.3-0.1,0.7,0,1.1-0.2
    c0.3-0.1,0.6-0.1,0.9,0.1c0.4,0.4,0.7,0.8,1.1,1.1c0.1,0.1,0.2,0.4,0,0.4c-0.7,0.2-0.4,0.7-0.3,1.1c0.3,1,0.9,1.9,1.1,3
    c0,0.1,0.1,0.3,0.3,0.3c0.2,0,0.3-0.2,0.3-0.3c-0.1-0.7,0.2-1.4,0.1-2.2C112.4,5.2,113,4,114.1,3c0.7-0.6,1.4-1,1.7-1.9
    C115.6,1,115.3,1.2,115,1c-0.2-0.2-0.3-0.6-0.8-0.5c0.8,0.6,0.3,1-0.1,1.4c-0.1,0.1-0.3,0.2-0.4,0.3c-0.9,0.8-1.2,0.7-1.7-0.4
    c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.2-0.1-0.3-0.3-0.3c-0.9,0-1.4-0.7-2.1-1.1c2.5,0,5.1,0,7.6,0c-0.1,0.3,0.1,0.4,0.3,0.5
    c0.6,0.4,0.6,1,0.6,1.6c-0.1,3.7-0.1,7.3-0.1,11c0,0.7,0.2,0.9,0.9,0.9c4.6-0.1,9.2-0.2,13.9-0.3c0.5,0,0.7,0.2,0.7,0.6
    c-0.1,1.7,0,3.5,0,5.2c0,0.5-0.2,0.7-0.7,0.7c-0.6,0-1.3,0.1-1.9,0.1c-0.6,0-0.9,0.2-0.8,0.9c0.1,0.6,0,1.2,0.1,1.8
    c0,0.5-0.1,0.7-0.6,0.7c-1.8,0-3.6,0-5.4,0c-0.6,0-0.8,0.2-0.8,0.8c0.1,0.7,0.1,1.4,0.1,2c0,0.5,0.2,0.7,0.7,0.7c2.6,0,5.3,0,7.9,0
    c0.2,0,0.5,0,0.9,0c-0.7,0.5-1.3,0.5-1.9,0.6c-0.5,0-0.9,0.1-1.3,0.3c-1.2,0.7-2.6,0.9-4,0.9c-0.3,0-0.9-0.2-0.8,0.3
    c0,0.4,0.6,0.3,0.9,0.3c1.3-0.1,2.5-0.2,3.6-0.9c0.5-0.3,1-0.5,1.6-0.5c0.9,0,1.8-0.2,2.5-0.9c0.2-0.2,0.5-0.3,0.8-0.3
    c2.8,0,5.6,0.1,8.4-0.2c0.5,0,0.6,0.2,0.6,0.6c0,1.8,0,3.7,0,5.5c0,0.5-0.2,0.6-0.7,0.6c-1.7,0-3.4,0.1-5.1,0.1
    c-0.6,0-0.8,0.2-0.8,0.8c0,1.7,0,3.4,0,5.1c0,0.7-0.2,0.9-0.8,0.9c-5.6,0-11.2,0-16.8,0.1c-1,0-1,0-1,1c0,3.8,0.1,7.6,0.1,11.5
    c0,0.9,0,0.9-0.9,0.9c-5.3,0-10.6,0.1-15.9,0.1c-0.8,0-1.6,0-2.5,0c-0.6,0-0.9,0.2-0.9,0.8c0.1,7.8-0.1,15.6,0.3,23.4
    c0.2,5.2-0.1,10.5-0.1,15.7c0,1.1,0,1.1,1,1.1c1.6,0,3.3,0,4.9,0c0.5,0,0.7,0.1,0.7,0.6c0,1.4,0.1,2.8,0.1,4.2
    C102.8,100,100.8,100,98.8,100z M102.6,32c-0.6,0.1-0.8,0.6-0.9,1.1c-0.1,0.5,0.4,0.6,0.8,0.7c0.6,0.1,1.2,0.2,1.3,1
    c0,0.3,0.3,0.3,0.6,0.3c0.5,0,1-0.3,1.5-0.1c0.6,0.3,1.2,0.6,1.4,1.3c0.1,0.2,0.2,0.5,0.4,0.6c1,0.7,1.2,1.8,1.1,2.9
    c0,0.4-0.1,1,0.4,1.2c0.8,0.3,1.8,0.4,2.6,0.1c0.5-0.2,0.5,0,0.6,0.4c0.1,0.4,0.1,0.9,0.6,1.4c-0.3-0.9,0.4-0.9,1-1.2
    c-1.3-0.5-1.6-1.6-2.1-2.6c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.4,0-0.7-0.1-1.1c-0.2-1-0.2-2,0.8-2.8c0.5-0.4,0.5-0.9,0.4-1.6
    c-0.2,0.2-0.4,0.3-0.6,0.4c-0.3,0.2-0.4,0-0.6-0.2c-0.1-0.2-0.1-0.5-0.2-0.7c-0.1-0.2-0.2-0.2-0.3-0.1c-0.2,0.1-0.5,0.2-0.6,0.5
    c-0.1,0.3,0.2,0.4,0.4,0.5c0.2,0.1,0.4,0.2,0.4,0.4c-0.2,0.1-0.3,0-0.5-0.1c-0.8-0.2-1.3-0.8-2-1.2c-0.5-0.4-0.9-0.3-1.2,0.2
    c-0.2,0.4-0.5,0.4-0.9,0.3c-0.5-0.1-1.1-0.2-1.5,0c-0.5,0.2-0.8,0.1-1.2-0.3c-0.3-0.4-0.6-0.4-0.9,0c-0.2,0.3-0.5,0.2-0.6,0
    C102.7,32.9,102.3,32.5,102.6,32z M114.5,26.8c-0.4-0.3-0.4-0.8-0.8-1.2c-0.1-0.1-0.4-0.1-0.6,0c-0.2,0.1-0.3,0.4-0.1,0.6
    c0.2,0.2,0.3,0.5,0.5,0.8c0.2,0.2,0.5,0.3,0.8,0.2C114.4,27.1,114.5,27,114.5,26.8z M113,24.8c0-1-1-1.9-1.7-1.7
    c0.3,0.3,0.6,0.5,0.8,0.8C112.5,24.1,112.7,24.4,113,24.8z'
        />
        <path
          className='st0-of'
          d='M109.5,0c0.7,0.3,1.2,1.1,2.1,1.1c0.2,0,0.3,0.1,0.3,0.3c0,0.1,0.1,0.3,0.1,0.4c0.5,1.1,0.8,1.2,1.7,0.4
    c0.1-0.1,0.3-0.2,0.4-0.3c0.4-0.4,0.9-0.8,0.1-1.4c0.5-0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.5,0.1,0.8,0.1c-0.3,0.9-1,1.3-1.7,1.9
    c-1.1,1-1.8,2.2-1.6,3.8c0.1,0.7-0.2,1.4-0.1,2.2c0,0.1-0.1,0.3-0.3,0.3c-0.1,0-0.2-0.1-0.3-0.3c-0.2-1-0.8-2-1.1-3
    c-0.1-0.4-0.4-0.9,0.3-1.1c0.2-0.1,0.1-0.3,0-0.4c-0.3-0.4-0.7-0.8-1.1-1.1c-0.2-0.2-0.6-0.3-0.9-0.1c-0.4,0.1-0.8,0.1-1.1,0.2
    c-0.7,0.2-1.2,0.1-1.8-0.2c-0.3-0.1-0.6,0-0.9,0.1c-0.8,0.3-1.4,0.2-1.7-0.7c-0.2-0.6-0.5-1-1.2-1c-0.4,0-0.4-0.4-0.4-0.7
    c0-0.3,0.3-0.3,0.6-0.2c0.2,0.1,0.6,0.2,0.7,0c0.2-0.2-0.2-0.4-0.2-0.7c0.7,0,1.3,0,2,0c0.2,1,1.3,1.1,1.8,1.7
    c0.2,0.2,0.4,0.4,0.7,0.5c0.5,0.1,0.9-0.1,0.7-0.5c-0.3-0.7,0.1-1.2,0.3-1.7C109,0,109.2,0,109.5,0z'
        />
        <path
          className='st2-of'
          d='M89.4,94.3c0.5-0.5,0.9-0.2,1.1,0.3c0.2,0.3,0.4,0.6,0.6,0.9c0.4,0.3,0.8,0.6,1.3,0.6c0.9,0,1.8,0,2.7,0.2
    c0.6,0.1,1.1-0.2,1.7-0.2c0.7,0,1,0.2,1,0.9c0,1.1,0,2.1,0,3.2c-1.9,0-3.8,0-5.7,0c0.4-1.6-0.5-2.6-1.6-3.6
    C90,95.8,89.7,95.1,89.4,94.3z'
        />
        <path
          className='st3-of'
          d='M108.7,0c-0.2,0.6-0.6,1.1-0.3,1.7c0.2,0.4-0.2,0.6-0.7,0.5c-0.3-0.1-0.6-0.3-0.7-0.5
    c-0.6-0.6-1.7-0.7-1.8-1.7C106.3,0,107.5,0,108.7,0z'
        />
        <path
          className='st2-of'
          d='M83.7,70.4c0.4-0.5,0.7-0.5,1.2-0.2c1.9,1.1,2.7,2.8,3.7,4.6c0.9,1.7,1.2,3.6,2.4,5.1c0.2,0.2,0.1,0.5,0.1,0.7
    c-0.1,0.3,0,0.6,0.2,0.8c0.5,0.8,0.3,1.4-0.1,2.2c-0.3,0.5-0.2,1.1,0.1,1.6c0.3,0.5,0.8,0.9,1.4,1c0.9,0.2,2.1,1.5,2.3,2.4
    c0.1,0.5,0.5,0.8,0.8,1.1c0.4,0.3,0.6,0.7,0.5,1.2c-0.1,0.8,0.2,1.6,0.5,2.4c0.2,0.5,0.2,1.1,0.3,1.6c0,0.2,0,0.3-0.2,0.4
    c-0.5,0.1-1,0.4-1.6,0.4c-1,0-2-0.1-3-0.2c-0.5,0-0.8-0.3-1-0.7c-0.8-1.6-2.4-2.1-3.9-2.9c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1
    c-0.2-0.2-0.5-0.4-0.7-0.7c-0.3-1-0.6-1.9-1.4-2.5c0,0,0,0,0,0c0-0.1,0-0.2-0.2-0.2l0,0c0-0.3-0.1-0.4-0.4-0.5
    c-0.6-0.6-0.4-1.3-0.3-2c0.1,0,0.2-0.1,0.3-0.1c0.2,0,0.4,0.1,0.5-0.2c0-0.2-0.2-0.2-0.3-0.3c-0.4-0.1-0.2-0.4-0.3-0.6
    c-0.1-1,0.2-2.1-0.1-3.1c0.7-0.2,0.7-0.8,0.7-1.3c0.1-0.8,0.2-1.5,0.3-2.3c0.1-0.5,0.1-1.1-0.3-1.6c-0.2-0.3-0.3-0.5-0.3-0.9
    c0-0.6-0.1-1.2-0.7-1.5c-0.4-0.2-0.1-1.3,0.4-1.5c0.3-0.1,0.4-0.2,0.3-0.5c0-0.1,0-0.2,0-0.3C85,70.9,84.9,70.8,83.7,70.4z'
        />
        <path
          className='st2-of'
          d='M75.2,60.9c0.8,0,1.6-0.2,2.4-0.4c0.2-0.1,0.5-0.2,0.6-0.1c1.1,0.9,2.4,0.3,3.6,0.6c0.6,0.2,0.8,0.4,0.9,1
    c0.2,1,0.3,2.1,0.9,3c0.2,0.4,0.2,0.8-0.1,1c-0.6,0.5-0.4,0.9-0.2,1.4c0.1,0.3,0.3,0.5,0.4,0.8c0.1,0.3,0.2,0.6-0.3,0.7
    c-0.5,0.1-0.6,0.7-0.7,1.1c-0.3,0-0.5,0-0.7-0.2c-0.2-0.1-0.4-0.3-0.6-0.3c-0.9-0.2-1.7-0.5-2.1-1.4c-0.1-0.3-0.4-0.2-0.7,0
    c-0.9,0.6-2,0.3-3,0.3c-0.3,0-0.5-0.3-0.6-0.5c-0.4-0.7-0.5-1.6-1.5-1.8c-0.1,0-0.1-0.2,0-0.3c0.5-0.9,0.3-1.9,0.1-2.8
    c-0.1-0.5,0.1-1,0.5-1.2c0.4-0.2,0.6-0.5,1.1-0.5C75.4,61.3,75.2,61,75.2,60.9z'
        />
        <path
          className='st2-of'
          d='M74,58c0.9-0.1,1-0.1,1-1.1c0-0.7,0-1.3,0-2c0-0.3,0.1-0.5,0.5-0.5c0.9,0,1.8,0.1,2.7-0.1
    c0.3-0.1,0.3,0.2,0.3,0.4c0.1,0.3,0,0.6,0.3,0.8c0.9,0.4,1,1.5,1.4,2.2c0.3,0.4,0.5,0.8,0.8,1.2c0.2,0.2,0.4,0.4,0.5,0.6
    c0.1,0.2,0.3,0.4,0.3,0.5c-0.1,0.3-0.4,0.1-0.6,0.1c-0.7,0-1.3-0.2-1.7-0.9c-0.1-0.2-0.4-0.2-0.6-0.2c-1.5-0.3-3,0-4.5,0.2
    C74.4,58.6,74.2,58.3,74,58z'
        />
        <path
          className='st0-of'
          d='M84.4,81.9c0.3,1,0,2,0.1,3.1c0,0.2-0.1,0.5,0.3,0.6c0.1,0,0.4,0,0.3,0.3c0,0.3-0.3,0.1-0.5,0.2
    c-0.1,0-0.2,0.1-0.3,0.1C84.4,84.8,84.3,83.3,84.4,81.9z'
        />
        <path
          className='st0-of'
          d='M85.2,88.8c0.8,0.6,1.2,1.5,1.4,2.5C86,90.6,85.5,89.7,85.2,88.8z'
        />
        <path
          className='st0-of'
          d='M84.6,88.2c0.3,0,0.4,0.1,0.4,0.5C84.8,88.7,84.6,88.5,84.6,88.2z'
        />
        <path
          className='st0-of'
          d='M85,88.7c0.1,0,0.2,0.1,0.2,0.2C85.1,88.8,85.1,88.7,85,88.7z'
        />
        <path
          className='st0-of'
          d='M87.3,92c0,0,0.1,0.1,0.1,0.1C87.4,92,87.4,92,87.3,92z'
        />
        <path
          className='st2-of'
          d='M121.3,86.7c0,1.4,0,2.9,0,4.3c0,0.5-0.2,0.7-0.7,0.7c-0.6,0-1.1,0-1.7,0c-0.6,0-0.7-0.2-0.7-0.7
    c0-1.7,0-3.5,0-5.2c0-0.6-0.2-0.8-0.8-0.8c-0.7,0-1.3,0-2,0c-0.4,0-0.5-0.2-0.5-0.5c0-0.7,0-1.5,0-2.2c0-0.4,0.2-0.5,0.5-0.5
    c1.7,0,3.5-0.1,5.2-0.1c0.5,0,0.5,0.2,0.5,0.6c0,1.5,0,3,0,4.4C121.3,86.7,121.3,86.7,121.3,86.7z'
        />
        <path
          className='st2-of'
          d='M113.7,77.1c0,0.1,0,0.1,0,0.1c1.1,0.5,1.1,1.5,1.1,2.5c-0.1,1.9,0,1.9-1.9,1.9c-1.3,0-2.6,0-3.9,0
    c-0.5,0-0.6-0.2-0.6-0.6c0-1.8,0-3.7,0-5.5c0-0.5,0.2-0.7,0.7-0.7c1.7,0,3.4,0,5.2,0c0.3,0,0.7,0,0.6,0.5c-0.1,0.3,0.3,1-0.5,0.9
    c-0.2,0-0.3,0-0.3,0.2c0,0.2,0,0.3,0.2,0.3c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.2,0.3,0.2,0.4c-0.1,0.3-0.3,0.1-0.4,0
    C114.1,77.3,114,77.1,113.7,77.1z'
        />
        <path
          className='st0-of'
          d='M102.6,32c-0.3,0.5,0.1,0.8,0.2,1.2c0.1,0.2,0.4,0.3,0.6,0c0.3-0.4,0.6-0.3,0.9,0c0.3,0.4,0.6,0.5,1.2,0.3
    c0.4-0.2,1-0.1,1.5,0c0.4,0.1,0.7,0.1,0.9-0.3c0.3-0.5,0.7-0.6,1.2-0.2c0.6,0.5,1.2,1,2,1.2c0.2,0,0.3,0.1,0.5,0.1
    c0-0.3-0.3-0.3-0.4-0.4c-0.2-0.2-0.4-0.2-0.4-0.5c0.1-0.3,0.4-0.4,0.6-0.5c0.1-0.1,0.3-0.1,0.3,0.1c0.1,0.2,0.1,0.5,0.2,0.7
    c0.1,0.2,0.3,0.4,0.6,0.2c0.2-0.1,0.4-0.3,0.6-0.4c0.1,0.7,0.1,1.2-0.4,1.6c-1,0.7-0.9,1.7-0.8,2.8c0.1,0.4,0.1,0.7,0.1,1.1
    c0,0.2,0,0.4,0.1,0.5c0.6,0.9,0.9,2,2.1,2.6c-0.6,0.3-1.2,0.2-1,1.2c-0.5-0.5-0.5-1-0.6-1.4c-0.1-0.3-0.1-0.5-0.6-0.4
    c-0.9,0.3-1.8,0.1-2.6-0.1c-0.5-0.2-0.4-0.7-0.4-1.2c0.1-1.2-0.1-2.2-1.1-2.9c-0.2-0.2-0.4-0.4-0.4-0.6c-0.2-0.8-0.8-1.1-1.4-1.3
    c-0.5-0.2-1,0.2-1.5,0.1c-0.3,0-0.5,0-0.6-0.3c-0.1-0.8-0.7-0.9-1.3-1c-0.4-0.1-0.9-0.3-0.8-0.7C101.8,32.6,102,32.1,102.6,32z
     M109.2,33.7c-0.1,0-0.1,0.1-0.2,0.1c0.2,0.4,0.3,0.8,0.5,1.2c0.2,0.4,0.8,0.5,1.1,0.2c0.1-0.1,0.1-0.2,0-0.2
    C110.2,34.7,109.8,34,109.2,33.7z'
        />
        <path
          className='st0-of'
          d='M114.5,26.8c0,0.2-0.1,0.3-0.2,0.3c-0.3,0.1-0.6,0-0.8-0.2c-0.2-0.2-0.3-0.5-0.5-0.8c-0.2-0.2-0.1-0.4,0.1-0.6
    c0.2-0.1,0.5-0.1,0.6,0C114,26,114.1,26.5,114.5,26.8z'
        />
        <path
          className='st0-of'
          d='M113,24.8c-0.3-0.4-0.6-0.7-0.8-0.9c-0.3-0.3-0.5-0.5-0.8-0.8C112.1,22.9,113,23.8,113,24.8z'
        />
        <path
          className='st3-of'
          d='M109.2,33.7c0.6,0.3,1,0.9,1.5,1.3c0.1,0,0.1,0.2,0,0.2c-0.3,0.3-1,0.2-1.1-0.2c-0.2-0.4-0.4-0.8-0.5-1.2
    C109.1,33.8,109.1,33.8,109.2,33.7z'
        />
      </g>
    </svg>
  )
}

export default Logo
