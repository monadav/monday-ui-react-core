/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Doc = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4 3.5519C4 2.71275 4.68398 2.02878 5.52313 2.02878H11.9704C12.1287 2.02878 12.283 2.09092 12.3951 2.20302L16.0772 5.88508C16.1825 5.99039 16.2551 6.14357 16.2551 6.30975V16.5057C16.2551 17.3448 15.5711 18.0288 14.732 18.0288H5.52313C4.68398 18.0288 4 17.3448 4 16.5057V3.5519ZM5.52313 3.22661C5.34564 3.22661 5.20153 3.37072 5.20153 3.54821V16.502C5.20153 16.6794 5.34564 16.8236 5.52313 16.8236H14.732C14.9095 16.8236 15.0536 16.6794 15.0536 16.502V6.91236H12.8909C12.0518 6.91236 11.3678 6.22838 11.3678 5.38924V3.22661H5.52313ZM12.5656 4.07226V5.38554C12.5656 5.56302 12.7098 5.70714 12.8872 5.70714H14.2005L12.5656 4.07226ZM6.85279 8.59895C6.85279 8.30313 7.07946 8.05781 7.36507 8.05781H12.8919C13.1775 8.05781 13.4041 8.30313 13.4041 8.59895C13.4041 8.89477 13.1775 9.14009 12.8919 9.14009H7.36507C7.07946 9.14009 6.85279 8.89477 6.85279 8.59895ZM7.36507 10.6912C7.07946 10.6912 6.85279 10.9365 6.85279 11.2323C6.85279 11.5281 7.07946 11.7735 7.36507 11.7735H12.8919C13.1775 11.7735 13.4041 11.5281 13.4041 11.2323C13.4041 10.9365 13.1775 10.6912 12.8919 10.6912H7.36507ZM6.85279 13.8657C6.85279 13.5749 7.05486 13.3246 7.32026 13.3246H10.6486C10.9109 13.3246 11.1127 13.5752 11.1127 13.8657C11.1127 14.1565 10.9106 14.4068 10.6452 14.4068H7.32026C7.05486 14.4068 6.85279 14.1565 6.85279 13.8657Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Doc.displayName = 'Doc';
Doc.propTypes = {
  size: PropTypes.string
}
export default Doc;
/* tslint:enable */
/* eslint-enable */
