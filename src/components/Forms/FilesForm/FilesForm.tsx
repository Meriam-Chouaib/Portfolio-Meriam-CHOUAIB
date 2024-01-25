import { Box, Stack, Typography } from '@mui/material'
import AddButton from 'components/Buttons/AddButton/AddButton'
import FileInfo from 'components/Common/FileInfo/FileInfo'
import InfoTooltip from 'components/Forms/Common/InfoTooltip/InfoTooltip'
import {
  MAX_FILES_COUNT,
  MIN_FILES_COUNT,
} from 'components/Forms/FilesForm/FilesForm.constants'
import { FilesListStyle } from 'components/Forms/FilesForm/FilesForm.style'
import { FilesFormProps } from 'components/Forms/FilesForm/FilesForm.type'
import FileInput from 'components/Inputs/FileInput/FileInput'
import { GlobalVariables } from 'config/constant/global.variables'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fileSizeToMb } from 'utils/helpers/files.helpers'

function FilesForm({
  inputName,
  files,
  labels,
  message,
  filesMaxSize,
  filesTypes,
  description,
  maxFilesCount,
  hideFileDescription,
  onChange,
}: FilesFormProps) {
  const filesLength = files.length ? files.length : 0
  const [filesCount, setFilesCount] = useState(
    maxFilesCount && maxFilesCount < MAX_FILES_COUNT
      ? maxFilesCount
      : filesLength || MAX_FILES_COUNT
  )
  const { t } = useTranslation()
  const incrementFilesCount = () => {
    if (filesCount + 1 <= MAX_FILES_COUNT) {
      setFilesCount(filesCount + 1)
    }
  }
  const renderFiles = () => {
    const fileInputs: ReactElement[] = []
    for (let i = MIN_FILES_COUNT - 1; i < filesCount; i++) {
      fileInputs.push(
        <FileInput
          key={i}
          name={`${inputName}-${i}`}
          value={files[i] ? files[i] : null}
          acceptedTypes={filesTypes || GlobalVariables.File.DefaultAcceptType}
          fileMaxSize={filesMaxSize || 0}
          label={labels && labels[i] ? labels[i] : undefined}
          onChange={(file: File | null) => {
            onChange(file, i)
          }}
        />
      )
      return fileInputs
    }
  }
  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <Typography sx={{ margin: 0 }}>{t(message)}</Typography>
        {description && (
          <Box>
            <InfoTooltip text={description} />
          </Box>
        )}
      </Stack>
      {!hideFileDescription && (
        <FileInfo
          imageMaxSize={fileSizeToMb(filesMaxSize || 0) as string}
          imageTypes={filesTypes}
        />
      )}
      <FilesListStyle
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 3, md: 5 }}
        alignItems='center'
      >
        {renderFiles()}
        {!maxFilesCount &&
          filesCount < GlobalVariables.File.maxFileListCount && (
            <AddButton
              onClick={incrementFilesCount}
              label='identity.add_document'
            ></AddButton>
          )}
      </FilesListStyle>
    </Stack>
  )
}

export default FilesForm
