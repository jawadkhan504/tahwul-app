import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export default function StatCard({ label, value, icon }: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h6">{value}</Typography>
            <Typography color="text.secondary">{label}</Typography>
          </Box>
          {icon}
        </Box>
      </CardContent>
    </Card>
  );
}
