import React from "react";
import UserBar from "../components/UserBar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import UserProductsCard from "../components/UserProductsCard";

function UserHomePage() {
  return (
    <div>
      <UserBar />
      <div className="d-flex justify-content-center mt-4">
        <Stack spacing={3}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <UserProductsCard />
            <UserProductsCard />
            <UserProductsCard />
            <UserProductsCard />
          </Stack>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <UserProductsCard />
            <UserProductsCard />
            <UserProductsCard />
            <UserProductsCard />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default UserHomePage;
