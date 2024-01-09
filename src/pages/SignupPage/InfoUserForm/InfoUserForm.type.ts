import { StepsRecord } from 'pages/SignupPage/SignupPage.type'

export interface InfoUserProps {
  oldStepsRecord: StepsRecord
  onNextStep: (newStepsRecord: StepsRecord) => void
  onPreviousStep: () => void
}
