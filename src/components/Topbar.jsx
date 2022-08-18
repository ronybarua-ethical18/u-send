import styles from '../styles/globalStyles.module.css';
import HeaderLogo from '../assets/img/headericon.png';
import ProfilePic from '../assets/img/dummyImg/profile.png';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

export default function Topbar() {
  return (
    <Box>
      <div className={styles.header}>Connect Stores to U-SEND</div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={HeaderLogo} alt=''/>
        </div>
        <div className={styles.icons}>
          <Icon icon="clarity:world-line" color="#9d9d9d" width="20" />
          <Icon icon="akar-icons:bell" color="#9d9d9d" width="20" />
          <img src={ProfilePic} alt=''/>
          <Icon icon="carbon:logout" color="#9d9d9d" width="20" />
        </div>
      </div>
    </Box>
  )
}
