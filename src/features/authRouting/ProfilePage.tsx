import type { FC } from "react"
import { Box, Typography } from "@mui/material";
import { useGetUserInfoQuery } from "./api/authApi";

export const ProfilePage: FC = () => {
const {data} = useGetUserInfoQuery();

    return  <Box>
                <Typography variant="h2" align="center" sx={{ mb: 6 }}>
                    ProfilePage {data?.name}
                </Typography>
            </Box>
}