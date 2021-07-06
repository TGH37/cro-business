import React, { useEffect, useState } from 'react';
import styles from '../styles/css/process.module.css';
import { useBreakpoint } from '../contexts/MediaBreakpointCxt'
import { rootCertificates } from 'tls';
import { mediaBreakpoints } from '../interfaces'

interface Props {
  isLeftAligned: boolean
};

// interface mediaBreakpoints {
//   xs?: boolean
// }

function ProcessTransition(props: Props) {
  const {isLeftAligned} = props;
  const mediaBreakpoints: mediaBreakpoints = useBreakpoint();
  const [isMobileLayout, setIsMobileLayout] = useState(true);

  useEffect(() => {
    if(!mediaBreakpoints.md) setIsMobileLayout(true);
    else setIsMobileLayout(false);
    console.log(mediaBreakpoints)
  }, [mediaBreakpoints.md])

  return (
    <div className={`${styles.arrowSVG} ${isLeftAligned ? styles.pointingRHS : styles.pointingLHS}`} style={{transform: isMobileLayout ? "rotateZ(90deg)" : ""}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45.475" height="73.644" viewBox="0 0 45.475 73.644">
        <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,73.616,40.992,45.447,12.885,17.278l8.653-8.653L58.36,45.447,21.538,82.269Z" transform="translate(-12.885 -8.625)" fill="#5CBCB6"/>
      </svg>
      {
        isMobileLayout ?
        <></> :
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="45.475" height="73.644" viewBox="0 0 45.475 73.644">
            <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,73.616,40.992,45.447,12.885,17.278l8.653-8.653L58.36,45.447,21.538,82.269Z" transform="translate(-12.885 -8.625)" fill="#52ACA6"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="45.475" height="73.644" viewBox="0 0 45.475 73.644">
            <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,73.616,40.992,45.447,12.885,17.278l8.653-8.653L58.36,45.447,21.538,82.269Z" transform="translate(-12.885 -8.625)" fill="#4F9A95"/>
          </svg>
      </>
      }
    </div>
  );
};

export default ProcessTransition;
