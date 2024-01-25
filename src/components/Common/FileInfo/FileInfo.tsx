import { Stack } from '@mui/material';
import { GlobalVariables } from 'config/constant';
import { useTranslation } from 'react-i18next';
import { InfoMessageStyle } from './FileInfo.style';
import { FileInfoProps } from './FileInfo.type';

function FileInfo({ imageMaxSize, imageTypes }: FileInfoProps) {
  const { t } = useTranslation();
  return (
    <Stack>
      <InfoMessageStyle variant="body2">
        {t('common.file.accepted_file_types')} :{' '}
        {imageTypes?.map((type) => type).join(', ') || GlobalVariables.File.DefaultType}
      </InfoMessageStyle>
      <InfoMessageStyle variant="body2">
        {t('common.file.max_size')} : {imageMaxSize || GlobalVariables.File.DefaultMaxSizeInMb}{' '}
        {t('common.file.mb')}
      </InfoMessageStyle>
    </Stack>
  );
}

export default FileInfo;
