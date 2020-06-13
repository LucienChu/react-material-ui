import React from 'react';
import Grid from "@material-ui/core/Grid";
export const LucienGrid = () => {
    return (
        <>
            <Grid container style={{ backgroundColor: "red", padding: "0 1rem 0" }} justify="space-around">
                <Grid item xs={5} style={{ backgroundColor: "yellow" }}>
                    Hi
                </Grid>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid sm item style={{ backgroundColor: "green" }} >
                            Hi
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <Grid container style={{ backgroundColor: "red", padding: "0 1rem 0" }} justify="space-around">
                <Grid item sm={12} >
                    <Grid container justify="center" spacing={4} style={{ backgroundColor: "blue" }}>
                        <Grid item   >
                            <div style={{ backgroundColor: "pink" }}>hello</div>
                        </Grid>
                        <Grid item  >
                            <div style={{ backgroundColor: "pink" }}>hello</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <div style={{ backgroundColor: "green" }}>Hello</div>
                            </Grid>

                        ))}
                    </Grid>
                </Grid>
            </Grid> */}
        </>
    )
}