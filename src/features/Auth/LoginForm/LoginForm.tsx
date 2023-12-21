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
import { LoginFormData } from 'features/Auth/LoginForm/LoginForm.type'
import useErrorAlert from 'hooks/useErrorAlert'
import useSuccessAlert from 'hooks/useSuccessAlert'
import { useState } from 'react'
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg'

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'redux/hooks'
import { persistData } from 'utils/helpers'
import { getRememberMeFromLocalStorage } from 'utils/service/storage.service'
import { getErrorMessage } from './LoginForm.helpers'
import { loginFormConfig } from 'features/Auth/LoginForm/LoginForm.constants'
import CustomTooltip from 'components/Tooltips/CustomTooltip/CustomTooltip'

function LoginForm() {
  const methods = useForm()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = methods
  const passwordFormMethods = useForm<LoginFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  })
  const [stayConnected, setStayConnected] = useState<boolean>(
    getRememberMeFromLocalStorage()
  )

  const { showOrSetFieldError } = useErrorAlert()
  const { showSuccess } = useSuccessAlert()
  const formMethods = useForm<LoginFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  })

  const onSubmit: SubmitHandler<LoginFormData> = async (values) => {
    const loginData = {
      email: values.email,
      password: values.password,
    }

    try {
      console.log('loginData', loginData)
    } catch (error) {
      showOrSetFieldError(
        error,
        (fieldName, errorMessage) =>
          formMethods.setError(fieldName as 'password' | 'email', {
            message: errorMessage,
          }),
        getErrorMessage
      )
    }
  }
  return (
    <FormProvider {...formMethods}>
      <RootStyle onSubmit={formMethods.handleSubmit(onSubmit)}>
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
                    <BoxStyle>
                      <InfoIcon />
                    </BoxStyle>
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
                  onChange={() => setStayConnected(!stayConnected)}
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
