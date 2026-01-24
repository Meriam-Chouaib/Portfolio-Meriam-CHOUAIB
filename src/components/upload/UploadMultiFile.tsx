import { Box, Stack, Typography, IconButton, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

interface UploadMultiFileProps {
  files: File[]
  onDrop?: (files: File[]) => void
  onRemove: (file: File) => void
  onRemoveAll: () => void
  accept?: string
  error?: boolean
  helperText?: React.ReactNode
  showPreview?: boolean
  isEdit?: boolean
}

export default function UploadMultiFile({
  files = [],
  onDrop,
  onRemove,
  onRemoveAll,
  accept,
  error,
  helperText,
  showPreview = true,
}: UploadMultiFileProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    onDrop?.(Array.from(event.target.files))
  }

  return (
    <Box>
      <Button
        component='label'
        variant='outlined'
        startIcon={<CloudUploadIcon />}
        color={error ? 'error' : 'primary'}
      >
        Upload files
        <input
          hidden
          multiple
          type='file'
          accept={accept}
          onChange={handleChange}
        />
      </Button>

      {files.length > 0 && (
        <Stack spacing={1} mt={2}>
          {files.map((file) => (
            <Box
              key={file.name}
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              p={1}
              border='1px solid'
              borderColor='divider'
              borderRadius={1}
            >
              <Typography variant='body2' noWrap>
                {file.name}
              </Typography>

              <IconButton size='small' onClick={() => onRemove(file)}>
                <CloseIcon fontSize='small' />
              </IconButton>
            </Box>
          ))}

          <Button size='small' color='error' onClick={onRemoveAll}>
            Remove all
          </Button>
        </Stack>
      )}

      {helperText}
    </Box>
  )
}
export { default as UploadMultiFile } from './UploadMultiFile'
