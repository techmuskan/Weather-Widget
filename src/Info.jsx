import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InfoBox({ title, value, unit, icon }) {
  return (
    <Card sx={{ minWidth: 150, flex: 1, mx: 1, boxShadow: 3, borderRadius: 2 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
          {icon} {title}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
          {value} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
