import CustomTooltip from 'components/Common/CustomTooltip/CustomTooltip';
import { generateId } from 'utils/helpers/math.helpers';
import { InfoIconStyle } from './InfoTooltip.style';

function InfoTooltip({ text, color }: { text: string; color?: string }) {
  return <CustomTooltip text={text} element={<InfoIconStyle id={generateId()} color={color} />} />;
}

export default InfoTooltip;
