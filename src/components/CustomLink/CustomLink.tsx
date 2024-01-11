import { useTranslation } from 'react-i18next';
import { RootStyle } from './CustomLink.style';
import { CustomLinkProps } from './CustomLink.type';

function CustomLink({ link }: CustomLinkProps) {
  const { label, href, underline } = link;
  const { t } = useTranslation();
  return (
    <RootStyle underline={underline} href={href}>
      {t(label)}
    </RootStyle>
  );
}

export default CustomLink;
