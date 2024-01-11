import { Icon } from '@mui/material'

function Check({ id, active }: { id: string; active?: boolean }) {
  return (
    <Icon sx={{ display: { xs: active ? 'block' : 'none', sm: 'block' } }}>
      <svg
        width='25'
        height='24'
        viewBox='0 0 25 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <mask
          id={id}
          maskUnits='userSpaceOnUse'
          x='4'
          y='5'
          width='17'
          height='14'
          mask-type='alpha'
        >
          <path
            d='M9.29506 15.875L5.82506 12.405C5.63823 12.2178 5.38458 12.1125 5.12006 12.1125C4.85554 12.1125 4.60189 12.2178 4.41506 12.405C4.02506 12.795 4.02506 13.425 4.41506 13.815L8.59506 17.995C8.98506 18.385 9.61506 18.385 10.0051 17.995L20.5851 7.41501C20.9751 7.02501 20.9751 6.39501 20.5851 6.00501C20.3982 5.81776 20.1446 5.71252 19.8801 5.71252C19.6155 5.71252 19.3619 5.81776 19.1751 6.00501L9.29506 15.875Z'
            fill='black'
          />
        </mask>
        <g mask={`url(#${id})`}>
          <rect x='0.5' width='24' height='24' fill='white' />
        </g>
      </svg>
    </Icon>
  )
}

export default Check
