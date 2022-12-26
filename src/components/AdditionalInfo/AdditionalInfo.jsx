import {
  AdditionalInfoWrapper,
  AdditionalInfoList,
  AdditionalInfoTitle,
  AdditionalItem,
} from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <AdditionalInfoWrapper>
      <AdditionalInfoTitle>Additional infomation</AdditionalInfoTitle>
      <AdditionalInfoList>
        <li>
          <AdditionalItem to="cast">
            Cast
          </AdditionalItem>
        </li>
        <li>
          <AdditionalItem to="reviews">Reviews</AdditionalItem>
        </li>
      </AdditionalInfoList>
    </AdditionalInfoWrapper>
  );
};
