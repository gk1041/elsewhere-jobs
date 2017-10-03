import React from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import MenuIcon from "material-ui-icons/Menu";
// import AutoComplete from "./AutoComplete";
import IconButton from "material-ui/IconButton";
import TextField from "material-ui/TextField";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});
const tags = [
  "Java",
  "JavaScript",
  "SQL",
  "Angular",
  "AngularJS",
  "React",
  "C#",
  "Ruby"
];

function Header(props) {
  const classes = props.classes;
  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography type="title" color="inherit" className={classes.flex}>
            Elsewhere Jobs
          </Typography>

          {/* <AutoComplete /> */}
          <TextField
            id="skill"
            label="Search by skill"
            type="skill"
            className={classes.textField}
            margin="normal"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
