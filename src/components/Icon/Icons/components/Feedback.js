/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Feedback = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.18727 17.8022C2.303 17.9285 2.46081 17.9916 2.62914 17.9916C2.72383 17.9916 2.81852 17.9705 2.90268 17.939L6.83745 16.0663C7.74224 16.5818 8.76276 16.8974 9.79379 16.9921C10.9511 17.0973 12.1189 16.9395 13.2025 16.5187C14.2756 16.0978 15.2646 15.4245 16.0431 14.5723C16.8217 13.7096 17.4003 12.6786 17.7159 11.5634C18.0316 10.4482 18.0842 9.25934 17.8738 8.12309C17.6633 6.98685 17.1794 5.90321 16.485 4.97738C15.7906 4.05155 14.8753 3.29406 13.8338 2.77854C12.8027 2.27354 11.6455 2 10.4987 2H10.4776C9.14151 2 7.82641 2.35771 6.67964 3.03104C5.52236 3.70437 4.57549 4.6828 3.9232 5.85061C3.27091 7.01841 2.94477 8.34403 2.98685 9.68017C3.00789 10.9006 3.34456 12.0894 3.93372 13.152L2.06102 17.0868C1.94529 17.3288 1.9979 17.6234 2.18727 17.8022ZM7.32141 4.11468C8.2788 3.55708 9.37296 3.26249 10.4776 3.26249H10.4987C11.4561 3.26249 12.4135 3.48343 13.2551 3.90426C14.1073 4.32509 14.8753 4.95634 15.454 5.72436C16.0326 6.49237 16.4324 7.39716 16.6113 8.34403C16.7901 9.2909 16.748 10.2799 16.485 11.2057C16.222 12.1315 15.7486 13.0047 15.0963 13.7096C14.444 14.425 13.6234 14.9826 12.7291 15.3298C11.8348 15.677 10.8564 15.8138 9.899 15.7191C8.94161 15.6244 8.00526 15.3088 7.18464 14.8038C7.00579 14.6881 6.77433 14.6775 6.58496 14.7722L3.95476 16.0242L5.20673 13.394C5.30142 13.1941 5.2909 12.9627 5.17517 12.7838C4.58601 11.8474 4.27038 10.7638 4.23882 9.64861C4.21778 8.5334 4.49132 7.43924 5.02788 6.46081C5.57496 5.48238 6.36402 4.67228 7.32141 4.11468ZM10.0358 13.2572C10.1515 13.3729 10.3199 13.4466 10.4882 13.4466C10.6565 13.4466 10.8249 13.3835 10.9406 13.2572L13.8548 10.2272C14.2125 9.86952 14.4335 9.42765 14.5176 8.93318C14.5913 8.4387 14.5176 7.94422 14.2967 7.49183C14.1284 7.15516 13.8864 6.86058 13.5813 6.63965C13.2762 6.41871 12.929 6.27142 12.5608 6.20829C12.1926 6.14517 11.8138 6.17673 11.4666 6.29246C11.1089 6.40819 10.7828 6.60808 10.5198 6.8711L10.4777 6.90267L10.4461 6.8711C10.1831 6.60808 9.85694 6.40819 9.49924 6.29246C9.15205 6.17673 8.76278 6.14517 8.40508 6.20829C8.03685 6.2609 7.67914 6.40819 7.38456 6.62913C7.07946 6.85006 6.83748 7.14464 6.66915 7.48131C6.44821 7.9337 6.36405 8.42818 6.44821 8.92265C6.52186 9.40661 6.75331 9.859 7.11102 10.2062L10.0358 13.2572ZM8.59445 7.44975C8.65757 7.43922 8.71018 7.43922 8.7733 7.43922C8.88903 7.43922 9.00476 7.44975 9.12049 7.49183C9.2783 7.54443 9.43611 7.63912 9.56236 7.75485L10.0358 8.2388C10.2883 8.48078 10.6881 8.48078 10.9301 8.2388L11.4035 7.76537C11.5297 7.63912 11.677 7.54443 11.8454 7.49183C12.0137 7.43922 12.1926 7.41818 12.3609 7.43922C12.5292 7.47079 12.6976 7.53391 12.8343 7.63912C12.9816 7.74433 13.0973 7.8811 13.171 8.03891C13.2762 8.24932 13.3183 8.48078 13.2762 8.71224C13.2446 8.9437 13.1394 9.14359 12.9606 9.32244L10.4882 11.9L8.00529 9.31192C7.83695 9.15411 7.73175 8.9437 7.68966 8.72276C7.6581 8.4913 7.68966 8.25985 7.79487 8.04943C7.86852 7.89162 7.97372 7.75485 8.12102 7.64964C8.26831 7.54443 8.42612 7.48131 8.59445 7.44975Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Feedback.displayName = 'Feedback';
Feedback.propTypes = {
  size: PropTypes.string
}
export default Feedback;
/* tslint:enable */
/* eslint-enable */
