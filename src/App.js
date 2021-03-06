import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    Button,
    AppBar,
    Container,
    Typography,
    Paper,
    TextField
} from '@material-ui/core';

import { useState } from 'react';

function App() {
    const [arjProfit, setArjProfit] = useState("");
    const [mnjProfit, setMnjProfit] = useState("");
    const [prvProfit, setPrvProfit] = useState("");

    const [arjShare, setArjShare] = useState("");
    const [mnjShare, setMnjShare] = useState("");
    const [prvShare, setPrvshare] = useState("");

    const [arjToMnj, setArjToMnj] = useState();
    const [arjToPrv, setAjrToPrv] = useState();
    const [mnjToArj, setMnjToArj] = useState();
    const [mnjToPrv, setMnjToPrv] = useState();
    const [prvToArj, setPrvToArj] = useState();
    const [prvToMnj, setPrvToMnj] = useState();

    const [showValidation, setShowValidation] = useState(false);
    const [showSettlement, setShowSettlement] = useState(false);

    const showSettlementDetails = () => {
        const totalShare = parseFloat(arjShare) + parseFloat(mnjShare) + parseFloat(prvShare);

        if (arjProfit && arjShare && mnjProfit && mnjShare && prvProfit && prvShare && totalShare <= 100) {
            setShowValidation(false);
            setArjToMnj((arjProfit * mnjShare) / 100);
            setAjrToPrv((arjProfit * prvShare) / 100);

            setMnjToArj((mnjProfit * arjShare) / 100);
            setMnjToPrv((mnjProfit * prvShare) / 100);

            setPrvToArj((prvProfit * arjShare) / 100);
            setPrvToMnj((prvProfit * mnjShare) / 100);

            setShowSettlement(true);
        }
        else {
            setShowValidation(true);
        }

    }

    const handleClose = () => {
        setShowSettlement(false);
    }

    const handleReset = () => {
        setArjProfit("");
        setArjShare("");
        setMnjProfit("");
        setMnjShare("");
        setPrvProfit("");
        setPrvshare("");
        setArjToMnj("");
        setAjrToPrv("");
        setMnjToArj("");
        setMnjToPrv("");
        setPrvToArj("");
        setPrvToMnj("");
        setShowValidation(false);
    }

    return (
        <div>
            <Container style={{ paddingTop: '5em' }}>
                <Paper square elevation={2} style={{ padding: '1em' }} >
                    <Grid container direction="column" spacing={8}>
                        <Grid item xs={12}>
                            <AppBar position="fixed" color="secondary">
                                <Typography variant="h5" style={{ textAlign: 'center' }}>
                                    Easy Split
                                </Typography>
                            </AppBar>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={5}>
                                <Grid item xs={4}>
                                    <Typography>
                                        Arjun
                                </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="profit (Rs)"
                                        type="number"
                                        value={arjProfit}
                                        onChange={(e) => setArjProfit(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="share (%)"
                                        type="number"
                                        value={arjShare}
                                        onChange={(e) => setArjShare(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>
                                        Manoj
                            </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="profit (Rs)"
                                        type="number"
                                        value={mnjProfit}
                                        onChange={(e) => setMnjProfit(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="share (%)"
                                        type="number"
                                        value={mnjShare}
                                        onChange={(e) => setMnjShare(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>
                                        Praveen
                            </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="profit (Rs)"
                                        type="number"
                                        value={prvProfit}
                                        onChange={(e) => setPrvProfit(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="share (%)"
                                        type="number"
                                        value={prvShare}
                                        onChange={(e) => setPrvshare(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            {
                                showValidation &&
                                <Grid item xs={12}>
                                    <Typography style={{color: 'red'}}>
                                        Fields missing value or total share is greater than 100
                                    </Typography>
                                </Grid>
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Grid item>
                                    <Button onClick={showSettlementDetails}>Get settelment</Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={handleReset}>Reset</Button>
                                </Grid>                                                                
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
                <Dialog
                    maxWidth="md"
                    open={showSettlement}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        Final Settlement
                    </DialogTitle>
                    <DialogContent>
                        {
                            arjToMnj > mnjToArj ?
                            <Typography>{`Arjun to pay Manoj Rs. ${Math.abs(arjToMnj - mnjToArj)}/-`}</Typography>
                            : <Typography>{`Manoj to pay Arjun Rs. ${Math.abs(arjToMnj - mnjToArj)}/-`}</Typography>
                        }
                        {
                            arjToPrv > prvToArj ?
                            <Typography>{`Arjun to pay Praveen Rs. ${Math.abs(arjToPrv - prvToArj)}/-`}</Typography>
                            : <Typography>{`Praveen to pay Arjun Rs. ${Math.abs(arjToPrv - prvToArj)}/-`}</Typography>
                        }
                        {
                            prvToMnj > mnjToPrv ?
                            <Typography>{`Praveen to pay Manoj Rs. ${Math.abs(prvToMnj - mnjToPrv)}/-`}</Typography>
                            : <Typography>{`Manoj to pay Praveen Rs. ${Math.abs(prvToMnj - mnjToPrv)}/-`}</Typography>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Grid container justify="space-between">
                            <Grid item style={{ paddingLeft: '1em' }}>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleClose} color="primary" variant="contained" autoFocus>
                                    Close
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
}

export default App;
