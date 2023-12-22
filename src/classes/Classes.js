import React from "react";

import "./Classes.css";
import Link from "../utility/Link";

import { Grid, Stack } from "@mui/material";

const Classes = () => (
  <Grid
    container
    className="page-container"
    id="classes"
    direction={{ xs: "column", md: "row" }}
    rowSpacing={{ xs: 5, md: 0 }}
  >
    <Grid item xs={12} md={6} className="course">
      <Link href="https://www.eecs.mit.edu/" className="course-header c2">
        Computer Science
      </Link>
      <Stack direction="row" spacing={2} className="class-list">
        <Stack direction="column" className="classNumbers c2">
          6.08 <br />
          6.039 <br />
          6.172 <br />
          6.865 <br />
          6.824 <br />
        </Stack>
        <Stack direction="column" className="classNames">
          Embedded Systems <br />
          Operating Systems <br />
          Software Performance Engineering <br />
          Computational Photography (G) <br />
          Distributed Systems (G) <br />
        </Stack>
      </Stack>
    </Grid>

    <Grid item xs={12} md={6} className="course">
      <Link href="https://polisci.mit.edu/" className="course-header c3">
        Political Science
      </Link>
      <Stack direction="row" spacing={2} className="class-list">
        <Stack direction="column" className="classNumbers c3">
          17.407 <br />
          17.449 <br />
          17.483 <br />
          17.561 <br />
          GOV 1510 <br />
        </Stack>
        <Stack direction="column" className="classNames">
          Chinese Foreign Policy <br />
          Emerging Tech & Intl. Security <br />
          US Military Power <br />
          European Politics <br />
          American Constitutional Law (Harvard) <br />
        </Stack>
      </Stack>
    </Grid>
  </Grid>
);

export default Classes;
