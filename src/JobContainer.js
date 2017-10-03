import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import JobCard from "./JobCard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class JobContainer extends Component {
  render() {
    const { classes } = this.props;
    let { jobCards } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8} align="flex-start">
            {jobCards.map(i => {
              return (
                <Grid key={i.id} item>
                  <JobCard jobInfo={i} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

JobContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  jobCards: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(JobContainer);
