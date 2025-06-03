'use client';

import { Typography, IconButton, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
     <Box>
      <Typography variant="h5">Contact</Typography>

      {/* Instagram PNGアイコン */}
      <Link href="https://www.instagram.com/y__ma3_/" passHref target="_blank">
        <IconButton>
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={32}
            height={32}
          />
        </IconButton>
      </Link>

      {/* メールアイコンとメールアドレス */}
      <Box display="flex" alignItems="center" mt={2}>
        <EmailIcon />
        <Typography variant="body1" ml={1}>yuma33t@gmail.com</Typography>
      </Box>
    </Box>
  );
}
