import { Box } from '@mui/material'
import MainCard from 'components/Cards/MainCard/MainCard'
import CustomStepper from 'components/CustomStepper/CustomStepper'
import InfoUserForms from 'features/Auth/InscriptionForm/InfoUserForm/InfoUserForm'
import InscriptionForm from 'features/Auth/InscriptionForm/InscriptionForm'
import { INPUTS_INSCRIPTION_FORM } from 'features/Auth/InscriptionForm/InscriptionForm.constants'
import useFormGroup from 'hooks/useFormGroup'
import useScroll from 'hooks/useScroll'
import Home from 'pages/Home/Home'
import LoginPage from 'pages/LoginPage'
import { StepsRecord } from 'pages/SignupPage/SignupPage.type'
import useSignup from 'pages/SignupPage/useSignup'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { formTypes } from 'types/interfaces/FormTypes/GenericForm'
import CardRequest from 'types/models/CardRequest/CardRequest'
import { getErrorTitleAndMessage } from 'utils/service/error.service'

function SignupPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [isStepsCompleted, setIsStepsCompleted] = useState(false)
  const [stepsRecord, setStepsRecord] = useState<StepsRecord>({})
  const [submitCount, setSubmitCount] = useState(0)
  const [cardRequest, setCardRequest] = useState<CardRequest>()
  const stepsLength = 9
  const {
    forms,
    onChange,
    checkDependency,
    formsValues,
    validForms,
    setValidForms,
  } = useFormGroup(INPUTS_INSCRIPTION_FORM(stepsRecord))
  const onNext = () => {
    if (activeStep < stepsLength) {
      setActiveStep(activeStep + 1)
    } else {
      setIsStepsCompleted(true)
    }
  }
  const onPrevious = () => {
    if (activeStep > 1) {
      setIsStepsCompleted(false)
      setActiveStep(activeStep - 1)
    }
  }
  const onIdentity = (
    newStepsRecord: StepsRecord,
    newCardRequest?: CardRequest
  ) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    setCardRequest({ ...cardRequest, ...newCardRequest })
    setActiveStep(activeStep + 1)

    onNext()
  }
  const onFormation = (newStepsRecord: StepsRecord) => {
    setStepsRecord({ ...stepsRecord, ...newStepsRecord })
    onNext()
  }
  const handleFormData = (data: any) => {
    setStepsRecord((prevData) => ({ ...prevData, ...data }))
  }
  const onSubmit = () => {
    console.log('in the submit function!')
    setActiveStep(activeStep + 1)

    setSubmitCount(submitCount + 1)
    console.log('activeStep', activeStep)
    onNext()
  }
  // const {
  //   activeStep,
  //   isStepsCompleted,
  //   onFormation,
  //   onIdentity,
  //   onNext,
  //   onPrevious,
  //   handleFormData,
  //   stepsRecord,
  //   forms,
  //   onSubmit,
  //   cardRequest,
  // } = useSignup(9)

  const STEPS = [
    <InscriptionForm
      key={1}
      stepsRecord={stepsRecord}
      onNextStep={() => {
        console.log('helo!')

        setActiveStep(2)
      }}
      cardRequest={cardRequest}
    />,

    <h1>here step 2 !</h1>,
  ]

  const formMethods = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  })
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
