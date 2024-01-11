import { Box } from '@mui/material'
import MainCard from 'components/Cards/MainCard/MainCard'
import CustomStepper from 'components/CustomStepper/CustomStepper'
import InfoUserForm from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm'
import InscriptionForm from 'features/Auth/InscriptionForm/InscriptionForm'
import Home from 'pages/Home'
import LoginPage from 'pages/LoginPage'
import useSignup from 'pages/SignupPage/useSignup'
import { FormProvider, useForm } from 'react-hook-form'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import { getErrorTitleAndMessage } from 'utils/service/error.service'

function SignupPage() {
  const {
    activeStep,
    isStepsCompleted,
    onFormation,
    onIdentity,
    onNext,
    onPrevious,
    handleFormData,
    stepsRecord,
  } = useSignup(9)
  const STEPS = [
    <InscriptionForm />,
    <LoginPage />,
    <Home />,
    <LoginPage />,
    <Home />,
    <LoginPage />,
  ]

  const formMethods = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  })

  return (
    <CustomStepper
      activeStep={activeStep}
      isCompleted={isStepsCompleted}
      maxSteps={STEPS.length}
      showSteps={true}
    >
      <FormProvider {...formMethods}>
        <MainCard

        //TODO get teh error if exists
        // error={error && getErrorTitleAndMessage(error)}
        >
          {isStepsCompleted ? (
            <Box>Done!!</Box>
          ) : (
            <>
              {STEPS[activeStep - 1]}
              <Box
                onClick={() => {
                  onNext()
                }}
              >
                next
              </Box>
            </>
          )}
        </MainCard>
      </FormProvider>
    </CustomStepper>
  )
}

export default SignupPage
