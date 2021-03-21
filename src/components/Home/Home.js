import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import { useHistory, useParams } from 'react-router';
import fakeData from '../../fakeData/MOCK_DATA.json'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        float:'left',
        padding:'3%,',
        margin:"3%",
        width:"30vh"


    },
    media: {
        height: 140,
    },
});

const Home = (props) => {
  const classes = useStyles();
    const history = useHistory();
    const showDetails = id => {
        const url = `/destination/${id}`;
        history.push(url);
    }
    console.log(props);
    return (
        <div className="container">        
            <Card className={classes.root} onClick={()=>showDetails('car')}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images2.imgbox.com/85/57/poFZ6pHM_o.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Car
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root} onClick={()=>showDetails('bike')}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images2.imgbox.com/ee/7e/94XhHhQj_o.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Bike
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root} onClick={()=>showDetails('train')}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images2.imgbox.com/1a/e7/AVFLQ0Pe_o.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Train
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root} onClick={()=>showDetails('airplane')}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://cdn5.vectorstock.com/i/1000x1000/61/19/aircraft-airplane-airline-logo-label-journey-air-vector-21476119.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Airplane
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>

    );
};

export default Home;