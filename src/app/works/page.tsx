import { Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Works() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Works</Typography>
      <List>
        <ListItem><ListItemText primary="Flutterを使った習慣管理アプリ" /></ListItem>
      </List>
    </div>
  );
}