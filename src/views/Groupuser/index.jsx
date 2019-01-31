import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


// import { load } from "google-maps";
import axios from 'axios';

const getGroupUsers = async () => {
    try {
        // return await axios.get('http://localhost:4100/m_groupuser');
       var data = await axios.get('http://localhost:4100/m_groupuser');
       var datas = [data['data'].length];
       for(var i = 0; i < data['data'].length; i++) {
            var single = [7];
            single[0] = data['data'][i]['_id'];
            single[1] = data['data'][i]['Name'];
            single[2] = data['data'][i]['Description'];
            single[3] = data['data'][i]['Created'];
            single[4] = data['data'][i]['Modified'];
            single[5] = data['data'][i]['CreatedBy'];
            single[6] = data['data'][i]['ModifiedBy'];
            datas[i] = single;
       }
       
       console.log(datas);
       return datas;
    } catch (error) {
      console.error(error)
    }
  }

// var groupusers = getGroupUsers();
// console.log(groupusers[['PromiseValue']]);
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
    const { classes } = props;
    var groupuser = getGroupUsers();
    var test = [
            ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
            ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
            ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
            ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
            ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
            ["Mason Porter", "Chile", "Gloucester", "$78,615"]
          ];
    console.log(test);
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
                <Table
                    tableHeaderColor="primary"
                    tableHead={["Name", "Description"]}
                //   tableData={[
                //     ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                //     ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                //     ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                //     ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                //     ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                //     ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                //   ]}
                    tableData={groupuser}
                />
              </CardBody>
            </Card>
          </GridItem>
          
        </GridContainer>
      );
}

export default withStyles(styles)(TableList);
