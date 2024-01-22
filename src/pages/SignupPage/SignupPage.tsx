import { Box } from '@mui/material'
import MainCard from 'components/Cards/MainCard/MainCard'
import CustomStepper from 'components/CustomStepper/CustomStepper'
import { PagesTitles } from 'config/enums/pages.enum'
import InscriptionForm from 'features/Auth/InscriptionForm/InscriptionForm'
import useScroll from 'hooks/useScroll'
import useRequestNewCard from 'pages/SignupPage/useSignup'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from 'redux/hooks'
import { setTitle } from 'redux/slices/pageSlice'

// ANCHOR DONE!!
function SignupPage() {
  const { activeStep, isStepsCompleted, onIdentity, stepsRecord, cardRequest } =
    useRequestNewCard(9)

  const dispatch = useAppDispatch()
  useScroll(activeStep)

  useEffect(() => {
    dispatch(setTitle(PagesTitles.SIGNUP_1))
  }, [])
  const formMethods = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  })
  const STEPS = [
    <InscriptionForm
      key={1}
      stepsRecord={stepsRecord}
      onNextStep={onIdentity}
      cardRequest={cardRequest}
    />,

    <h1>here step 2 !</h1>,
  ]

  useScroll(activeStep)
  return (
    <CustomStepper
      activeStep={activeStep}
      isCompleted={isStepsCompleted}
      maxSteps={STEPS.length}
      showSteps={true}
    >
      <FormProvider {...formMethods}>
        <MainCard

        //TODO get the error if exists
        // error={error && getErrorTitleAndMessage(error)}
        >
          {isStepsCompleted ? <Box>Done!!</Box> : <>{STEPS[activeStep - 1]}</>}
        </MainCard>
      </FormProvider>
    </CustomStepper>
  )
}

export default SignupPage
