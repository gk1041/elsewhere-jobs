import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  expand: {
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class JobCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;
    let {
      id = "",
      date = "",
      company = "",
      position = "",
      tags = [],
      logo = "",
      description = ""
    } = this.props.jobInfo;

    return (
      <div>
        <Card className={classes.card} id={id}>
          <CardActions
            disableActionSpacing
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
          >
            <div className={classes.flexGrow} />
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {logo.length > 0 ? logo : company.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={position}
              subheader={date}
            />
          </CardActions>

          <Collapse
            in={this.state.expanded}
            transitionDuration="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography type="body2">{description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

JobCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobCard);

// {
//       "slug":"62034-remote-blockchain-engineer-brave-software",
//       "id":"62034",
//       "epoch":"1506910064",
//       "date":"2017-10-01T19:07:44-07:00",
//       "company":"brave-software",
//       "position":"Blockchain Engineer",
//       "tags":[ "dev", "engineer", "digital nomad"],
//       "logo":"",
//       "description":"The Blockchain Engineer will be responsible for the architecture and implementation of blockchain-based technologies for the [BAT roadmap](https:\/\/basicattentiontoken.org\/bat-roadmap-1-0\/). The primary task is the development of an open decentralized blockchain-based ads ecosystem, involving user contributions, attention rewards, and publisher contributions over several phases. The first phase will include transition of our existing Bitcoin based proof-of-concept, so familiarity with Bitcoin is a plus.\r\n\r\nThe ideal candidate will have previously worked with distributed applications, have extensive familiarity with Ethereum and related blockchain technologies including smart contracts (especially ERC-20 tokens), sidechains, and state channels. They must be well versed in the current best practices surrounding smart contract development and be able to rigorously test and verify contract code.\r\n\r\nThis position reports to the BAT Cloud Manager and will work in collaboration with ad-tech, cloud, privacy and security engineers.\r\n\r\n__Benefits__\r\n\r\n* Competitive salary\r\n* 4 weeks (20 days) of paid vacation per year\r\n* Excellent medical coverage\r\n* Generous 401k plan\r\n* Stock option grant\r\n* Travel and conference budgets\r\n* Commuters benefit (On\u00c2\u00adsite only)\r\n* Hip office in the SoMA neighborhood of SF\r\n \r\nCandidates must be legally authorized to work in the United States or Canada. ",
//       "url":"https:\/\/remoteok.io\/jobs\/62034-remote-blockchain-engineer-brave-software"
//    },
