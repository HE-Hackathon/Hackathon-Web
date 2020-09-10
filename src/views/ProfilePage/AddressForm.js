import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";

export default function AddressForm() {
  const [startYear, handleStartDateChange] = useState(new Date());
  const [endYear, handleEndDateChange] = useState(new Date());

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Welcome Tanmay Nale!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12} style={{ marginTop: 10 }}>
          <TextField
            id="outlined-multiline-static"
            label="About Yourself"
            multiline
            rows={4}
            style={{ width: "100%" }}
            placeholder="Tell us something about yourself"
            variant="outlined"
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="github"
            name="github"
            label="GitHub Profile Link"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="linkedin"
            name="linkedin"
            label="LinkedIn Profile Link"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Institution Name"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="degree"
            name="degree"
            label="Degree"
            placeholder="For eg. BE or BTech"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="course"
            name="course"
            label="Course"
            placeholder="For eg. Comupter Engineering"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop : 15 }}>
          <DatePicker
            views={["year"]}
            label="Start Year"
            value={startYear}
            onChange={handleStartDateChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop : 15 }}>
          <DatePicker
            views={["year"]}
            label="End Year"
            value={endYear}
            onChange={handleEndDateChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
