import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import AuthCustomLoadingButton from 'components/CustomButtons/AuthCustomLoadingButton/AuthCustomLoadingButton'
import GenericInput from 'components/CustomInputs/GenericInput/GenericInput'
import { RouterPaths } from 'config/constant'
import {
  BoxStyle,
  CheckboxRootStyle,
  CheckedBoxStyle,
  CheckedRootStyle,
  RootStyle,
  TypographyStyle,
} from 'features/Auth/LoginForm/LoginForm.style'

import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { loginFormConfig } from 'features/Auth/LoginForm/LoginForm.constants'
import CustomTooltip from 'components/Tooltips/CustomTooltip/CustomTooltip'
import useLogin from 'features/Auth/LoginForm/useLogin'
import { useNavigate } from 'react-router'

function LoginForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    stayConnected,
    handleStayConnectedChange,
    handleSubmit,
    formMethods,
  } = useLogin()

  return (
    <FormProvider {...formMethods}>
      <RootStyle onSubmit={handleSubmit}>
        <Stack spacing={2.375} justifyContent='center'>
          <GenericInput inputObject={loginFormConfig.email} />
          <GenericInput inputObject={loginFormConfig.password} />
          <Stack direction='row' alignItems={'center'}>
            <FormControlLabel
              label={
                <Stack direction='row' alignItems={'center'} spacing={0.5}>
                  <Typography variant='body1'>
                    {t('auth.stay_connected')}
                  </Typography>
                  <CustomTooltip
                    title={t('product.link_product_to_session_description')}
                  >
                    <BoxStyle>{/* <InfoIcon /> */}</BoxStyle>
                  </CustomTooltip>
                </Stack>
              }
              control={
                <Checkbox
                  icon={<CheckboxRootStyle />}
                  checkedIcon={
                    <CheckedRootStyle>
                      <CheckedBoxStyle />
                    </CheckedRootStyle>
                  }
                  size='small'
                  defaultChecked={stayConnected}
                  onChange={handleStayConnectedChange}
                />
              }
            />
          </Stack>
        </Stack>

        <Stack alignItems={'center'} paddingTop='29px' spacing={2.375}>
          <AuthCustomLoadingButton
            sx={{ width: { sm: '40%', xs: '70%' }, minWidth: '201px' }}
            // isLoading={isLoading}
            isLoading={false}
            type='submit'
          >
            {t('auth.connection')}
          </AuthCustomLoadingButton>
          <TypographyStyle
            variant='body1'
            onClick={() => navigate(RouterPaths.AuthPaths.forgetPasswordPath)}
          >
            {t('auth.forget_password')}
          </TypographyStyle>
        </Stack>
      </RootStyle>
    </FormProvider>
  )
}

export default LoginForm
