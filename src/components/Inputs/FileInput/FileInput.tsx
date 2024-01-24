import { Box, Stack, Typography } from '@mui/material'
import {
  FileBoxStyle,
  PDFIconStyle,
  FileNameStyle,
  FileSizeStyle,
  DeleteIconStyle,
  HiddenInput,
  UploadIconStyle,
} from 'components/Inputs/FileInput/FileInput.style'
import { FileInputProps } from 'components/Inputs/FileInput/FileInput.type'
import { GlobalVariables } from 'config/constant'
import { ChangeEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fileSizeToMb } from 'utils/helpers/files.helpers'
import { validateFileSizeAndType } from 'utils/validators/file.validators'

function FileInput({
  name,
  value,
  multiple,
  acceptedTypes,
  fileMaxSize,
  label,
  onChange,
}: FileInputProps) {
  const [isNotValid, setIsNotValid] = useState(false)
  const [uploadedDocuments, setUploadedDocuments] = useState<File[] | []>(
    value ? [value] : []
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useTranslation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFileSizeAndType(file, fileMaxSize, acceptedTypes)) {
        setUploadedDocuments([...uploadedDocuments, file])
        onChange(file)
        setIsNotValid(false)
      } else {
        setIsNotValid(true)
      }
    }
  }
  const handleDeleteDocument = (index: number) => {
    const updatedDocuments = [...uploadedDocuments]
    updatedDocuments.splice(index, 1)
    setUploadedDocuments(updatedDocuments)
  }
  const onButtonClick = () => {
    inputRef?.current?.click()
  }
  return (
    <>
      <Box>
        {uploadedDocuments.length > 0 ? (
          uploadedDocuments.map((document, index) => (
            <Stack
              direction='row'
              spacing={2}
              key={index}
              sx={{ marginBottom: 2 }}
            >
              <FileBoxStyle>
                <Stack
                  direction={'row'}
                  spacing={1.5}
                  sx={{ alignItems: 'center' }}
                >
                  <PDFIconStyle />
                  <Stack>
                    <FileNameStyle variant='body2'>
                      {document.name}
                    </FileNameStyle>
                    <FileSizeStyle variant='body2'>
                      {fileSizeToMb(document.size, 2)} {t('common.file.mb')}
                    </FileSizeStyle>
                  </Stack>
                </Stack>
              </FileBoxStyle>
              <Box sx={{ paddingTop: 1.5 }} height='100%'>
                <DeleteIconStyle onClick={() => handleDeleteDocument(index)} />
              </Box>
            </Stack>
          ))
        ) : (
          <Stack direction={'row'} spacing={2} sx={{ cursor: 'pointer' }}>
            <HiddenInput
              ref={inputRef}
              name={name}
              type={GlobalVariables.File.DefaultType}
              accept={
                acceptedTypes?.map((type) => type).join(', ') ||
                GlobalVariables.File.DefaultAccept
              }
              multiple={Boolean(multiple)}
              onChange={handleChange}
            />
            <UploadIconStyle />
            <Typography
              onClick={onButtonClick}
              color={isNotValid ? 'error' : 'primary'}
            >
              {isNotValid
                ? t('common.file.invalid')
                : label
                ? t(label)
                : t('common.file.upload_file')}
            </Typography>
          </Stack>
        )}
      </Box>
    </>
  )
}

export default FileInput
