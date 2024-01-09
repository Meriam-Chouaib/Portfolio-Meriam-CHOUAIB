import { Box, styled, Typography } from '@mui/material'
import { GlobalFonts } from 'config/constant/fonts.config'
import { GlobalVariables } from 'config/constant'

export const CircleStyle = styled(Box)(
  ({ isLast }: { isLast?: boolean }) =>
    ({ theme }) => ({
      height: 32,
      width: 32,
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[400],
      [theme.breakpoints.down('sm')]: {
        borderRadius: isLast ? '0% 50% 50% 0%' : '0%',
        width: isLast ? 32 : '8vw',
      },
    })
)

export const ActiveCircleStyle = styled(Box)(
  ({ isFirst, isLast }: { isFirst?: boolean; isLast?: boolean }) =>
    ({ theme }) => ({
      height: 32,
      width: 32,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.grey[50],
      [theme.breakpoints.down('sm')]: {
        marginRight: isLast ? 0 : -16,
        zIndex: 3,
        borderRadius: isFirst ? '50%' : '0% 50% 50% 0%',
      },
    })
)

export const CheckedCircleStyle = styled(Box)(
  ({ isFirst, isLast }: { isFirst?: boolean; isLast?: boolean }) =>
    ({ theme }) => ({
      height: 32,
      width: 32,
      borderRadius: '50%',
      backgroundColor: theme.palette.success.main,
      color: theme.palette.grey[50],
      [theme.breakpoints.down('sm')]: {
        borderRadius: isFirst || isLast ? '50%' : '0%',
        width: isFirst || isLast ? 32 : '8vw',
        marginRight: isFirst ? -16 : 0,
        marginLeft: isLast ? -16 : 0,
        zIndex: 4,
      },
    })
)

export const BarStyle = styled(Box)(
  ({ isLast }: { isLast?: boolean }) =>
    ({ theme }) => ({
      width: '2.5vw',
      height: 4,
      backgroundColor: theme.palette.grey[200],
      [theme.breakpoints.down('sm')]: {
        height: 32,
        width: isLast ? 8 : 4,
      },
    })
)

export const ActiveBarStyle = styled(Box)(
  ({ active }: { active?: string }) =>
    ({ theme }) => ({
      width: '2.5vw',
      height: 4,
      backgroundColor: theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        height: 32,
        width: active === GlobalVariables.TRUE ? 8 : 4,
      },
    })
)

export const CheckedBarStyle = styled(Box)(
  ({ isLast }: { isLast?: boolean }) =>
    ({ theme }) => ({
      width: '2.5vw',
      height: 4,
      backgroundColor: theme.palette.success.main,
      [theme.breakpoints.down('sm')]: {
        height: 32,
        width: isLast ? 8 : 4,
      },
    })
)

export const StepNumberStyle = styled(Typography)(
  ({ active }: { active?: string }) =>
    ({ theme }) => ({
      fontSize: 18,
      fontFamily: GlobalFonts.FONT_PRIMARY_700,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        display: active !== GlobalVariables.TRUE ? 'none' : 'block',
      },
    })
)

export const ActiveStepNumberStyle = styled(Typography)({
  fontSize: 18,
  fontFamily: GlobalFonts.FONT_PRIMARY_700,
  fontWeight: 700,
})
